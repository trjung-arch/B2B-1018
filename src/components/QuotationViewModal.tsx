import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  CheckCircle2, 
  Clock, 
  Building2, 
  ShieldCheck, 
  Download, 
  AlertCircle, 
  FileCheck, 
  CreditCard, 
  DollarSign, 
  Send, 
  UserCheck, 
  Check, 
  Calendar, 
  FileText, 
  ArrowRight,
  Truck,
  Sparkles,
  HelpCircle,
  Eye
} from 'lucide-react';
import { ConsultingRequest, QuotationData, TimelineLogEntry } from '../types';

interface QuotationViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  consulting: ConsultingRequest | null;
  isMyReq: boolean;
  isAdmin: boolean;
  onUpdateConsulting: (updated: ConsultingRequest) => void;
  onOpenQuotationEditor?: (consulting: ConsultingRequest) => void;
}

export const QuotationViewModal: React.FC<QuotationViewModalProps> = ({
  isOpen,
  onClose,
  consulting,
  isMyReq,
  isAdmin,
  onUpdateConsulting,
  onOpenQuotationEditor,
}) => {
  if (!isOpen || !consulting || !consulting.quotation) return null;

  const quotation = consulting.quotation;
  const approval = quotation.approval;
  const payment = quotation.payment;

  // Approval Form State
  const [showApprovalForm, setShowApprovalForm] = useState<boolean>(false);
  const [approverName, setApproverName] = useState<string>(consulting.contactPerson || '');
  const [approverPhone, setApproverPhone] = useState<string>(consulting.phone || '');
  const [approvalMemo, setApprovalMemo] = useState<string>('견적서 사양 및 금액 확인하였으며 최종 제작 승인합니다.');
  const [isAgreeTerms, setIsAgreeTerms] = useState<boolean>(false);
  const [approvalError, setApprovalError] = useState<string>('');

  // Payment Form State (Customer)
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);
  const [depositorName, setDepositorName] = useState<string>(consulting.companyName || '');
  const [paymentMethod, setPaymentMethod] = useState<'계좌이체' | '법인카드' | '가상계좌'>('계좌이체');
  const [requestTaxInvoice, setRequestTaxInvoice] = useState<boolean>(true);
  const [taxInvoiceEmail, setTaxInvoiceEmail] = useState<string>(consulting.email || '');

  // Admin Work Actions State
  const [showAdminPaymentConfirm, setShowAdminPaymentConfirm] = useState<boolean>(false);
  const [confirmedBy, setConfirmedBy] = useState<string>(consulting.assignedConsultant || '메디린 재무팀 정다은');
  const [showShippingModal, setShowShippingModal] = useState<boolean>(false);
  const [trackingCourier, setTrackingCourier] = useState<string>('CJ대한통운');
  const [trackingNumber, setTrackingNumber] = useState<string>('6820-1920-3341');

  // Active view tab in modal: 'quote' | 'timeline' | 'payment'
  const [activeTab, setActiveTab] = useState<'quote' | 'timeline' | 'payment'>('quote');

  const nowFormatted = () => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  // 1. Customer Approves Quotation
  const handleCustomerApprove = (e: React.FormEvent) => {
    e.preventDefault();
    if (!approverName.trim()) {
      setApprovalError('승인 담당자명을 입력해 주세요.');
      return;
    }
    if (!isAgreeTerms) {
      setApprovalError('견적서 확인 및 승인 약관에 동의해 주세요.');
      return;
    }

    const timestamp = nowFormatted();
    const updatedApproval = {
      isApproved: true,
      approvedAt: timestamp,
      approverName: approverName.trim(),
      approverPhone: approverPhone.trim(),
      approvalMemo: approvalMemo.trim(),
      digitalSignature: `${approverName.trim()} (${consulting.companyName})`,
    };

    const newLog: TimelineLogEntry = {
      id: `log-${Date.now()}`,
      timestamp,
      stage: '견적승인',
      title: '고객 견적서 공식 승인 완료',
      description: `${approverName.trim()} 담당자께서 견적서 사양 및 금액(총 ${quotation.totalAmount.toLocaleString()}원)을 공식 승인하였습니다. 승인 이후 결제(입금) 대기 상태로 전환되었습니다.`,
      actor: `고객 (${approverName.trim()})`,
    };

    const updatedRequest: ConsultingRequest = {
      ...consulting,
      status: '견적 승인완료',
      quotation: {
        ...quotation,
        approval: updatedApproval,
        payment: {
          paymentStatus: '결제대기',
          bankInfo: {
            bankName: '신한은행',
            accountNumber: '110-420-998811',
            accountHolder: '(주)메디린아틀리에',
          },
        },
      },
      timelineLogs: [...(consulting.timelineLogs || []), newLog],
    };

    onUpdateConsulting(updatedRequest);
    setShowApprovalForm(false);
    setActiveTab('payment');
  };

  // 2. Customer Submits Payment Notification
  const handlePaymentNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!depositorName.trim()) {
      alert('입금자명을 입력해 주세요.');
      return;
    }

    const timestamp = nowFormatted();
    const newLog: TimelineLogEntry = {
      id: `log-${Date.now()}`,
      timestamp,
      stage: '입금요청',
      title: '고객 입금/결제 완료 통보 접수',
      description: `입금자명 [${depositorName.trim()}]으로 ${quotation.totalAmount.toLocaleString()}원 입금 완료 통보가 접수되었습니다. (결제수단: ${paymentMethod}${requestTaxInvoice ? `, 세금계산서: ${taxInvoiceEmail}` : ''})`,
      actor: `고객 (${consulting.contactPerson})`,
    };

    const updatedRequest: ConsultingRequest = {
      ...consulting,
      status: '입금확인요청',
      quotation: {
        ...quotation,
        payment: {
          ...quotation.payment,
          paymentStatus: '입금확인요청',
          paymentMethod,
          depositorName: depositorName.trim(),
          paidAmount: quotation.totalAmount,
          paidAt: timestamp,
          taxInvoiceRequested: requestTaxInvoice,
          taxInvoiceEmail: requestTaxInvoice ? taxInvoiceEmail.trim() : undefined,
          bankInfo: {
            bankName: '신한은행',
            accountNumber: '110-420-998811',
            accountHolder: '(주)메디린아틀리에',
          },
        },
      },
      timelineLogs: [...(consulting.timelineLogs || []), newLog],
    };

    onUpdateConsulting(updatedRequest);
    setShowPaymentForm(false);
    alert('입금 확인 요청이 전송되었습니다. 메디린 재무팀 확인 후 즉시 작업이 착수됩니다.');
  };

  // 3. Admin Confirms Payment & Starts Production
  const handleAdminConfirmPayment = () => {
    const timestamp = nowFormatted();
    const newLog: TimelineLogEntry = {
      id: `log-${Date.now()}`,
      timestamp,
      stage: '결제완료',
      title: '법인 결제(입금) 확인 완료 및 컴퓨터 자수/제작 작업 착수',
      description: `${confirmedBy} 담당자가 ${quotation.totalAmount.toLocaleString()}원 결제 확인을 완료하였습니다. 아틀리에 생산라인에 작업 오더가 전달되어 제작이 진행됩니다.`,
      actor: confirmedBy,
    };

    const updatedRequest: ConsultingRequest = {
      ...consulting,
      status: '결제완료/작업진행',
      quotation: {
        ...quotation,
        payment: {
          ...quotation.payment,
          paymentStatus: '결제완료',
          paidAmount: quotation.totalAmount,
          paidAt: quotation.payment?.paidAt || timestamp,
          confirmedBy,
          confirmedAt: timestamp,
        },
      },
      timelineLogs: [...(consulting.timelineLogs || []), newLog],
    };

    onUpdateConsulting(updatedRequest);
    setShowAdminPaymentConfirm(false);
  };

  // 4. Admin Completes Production & Ships
  const handleAdminShipment = () => {
    const timestamp = nowFormatted();
    const newLog: TimelineLogEntry = {
      id: `log-${Date.now()}`,
      timestamp,
      stage: '출고완료',
      title: '유니폼 제작 검품 완료 및 출고 배송 시작',
      description: `모든 맞춤 유니폼 및 컴퓨터 자수 검품이 완료되어 출고되었습니다. (${trackingCourier} 송장번호: ${trackingNumber})`,
      actor: '메디린 물류배송팀',
    };

    const updatedRequest: ConsultingRequest = {
      ...consulting,
      status: '제작/출고완료',
      quotation: {
        ...quotation,
        payment: {
          ...quotation.payment,
          paymentStatus: '결제완료',
          trackingCourier,
          trackingNumber,
        },
      },
      timelineLogs: [...(consulting.timelineLogs || []), newLog],
    };

    onUpdateConsulting(updatedRequest);
    setShowShippingModal(false);
  };

  const isApproved = Boolean(approval?.isApproved);
  const isPaid = payment?.paymentStatus === '결제완료';

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs overflow-y-auto p-2 sm:p-4 md:p-6 flex items-start justify-center animate-in fade-in duration-200 print:p-0 print:bg-white"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full my-2 sm:my-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col print:border-none print:shadow-none print:my-0 print:max-w-none">
        
        {/* Sticky Top Action Bar (인쇄 시 숨김) */}
        <div className="sticky top-0 z-30 bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-md print:hidden">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
              <FileCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-sm">MEDILYN B2B 공식 견적서</span>
                <span className="font-mono text-[11px] bg-slate-800 text-blue-300 px-2 py-0.5 rounded border border-slate-700">
                  {quotation.quotationNumber}
                </span>
                {isApproved ? (
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>고객 승인 완료 ({approval?.approvedAt?.slice(0, 10)})</span>
                  </span>
                ) : (
                  <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>고객 승인 대기중</span>
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 truncate">
                {consulting.companyName} &middot; 담당: {quotation.quotedBy}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Separate PDF Download Button */}
            <button
              type="button"
              onClick={() => {
                const prevTitle = document.title;
                document.title = `${consulting.companyName || '메디린'}_공식견적서_${quotation.quotationNumber || 'QT'}`;
                window.print();
                setTimeout(() => { document.title = prevTitle; }, 1000);
              }}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700 shadow-xs"
              title="견적서 PDF 다운로드"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>PDF 다운로드</span>
            </button>

            {/* Separate Print Button */}
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700 shadow-xs"
              title="견적서 인쇄"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span>인쇄</span>
            </button>

            {/* 견적 수정/재발행: 고객 화면에서는 비노출, 메디린 관리자(isAdmin)에게만 노출 */}
            {isAdmin && onOpenQuotationEditor && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuotationEditor(consulting);
                }}
                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                title="[관리자 전용] 견적서 품목 및 금액 재발행 수정"
              >
                <span>견적 수정/재발행</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer ml-1"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Workflow Alert Banner */}
        <div className="print:hidden border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-3">
          {!isApproved ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50 border border-amber-200 p-3.5 rounded-2xl">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-amber-950">
                    메디린에서 발행한 공식 견적서가 도착했습니다. 내용을 검토하시고 승인을 완료해 주세요.
                  </h4>
                  <p className="text-xs text-amber-700 mt-0.5">
                    견적서 구성과 금액을 확인하신 후, <strong className="text-red-600 font-bold">하단에서 승인 확인 동의 및 공식 승인</strong>을 진행해 주시기 바랍니다.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('quotation-approval-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-colors border border-amber-300"
              >
                <span>하단 승인 영역으로 이동</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-90" />
              </button>
            </div>
          ) : !isPaid ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-blue-50 border border-blue-200 p-3.5 rounded-2xl">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-extrabold text-blue-950">
                      고객 공식 승인 완료 ({approval?.approvedAt})
                    </span>
                    <span className="text-[11px] font-bold bg-white text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                      승인자: {approval?.approverName}
                    </span>
                  </div>
                  <p className="text-xs text-blue-700 mt-0.5">
                    견적이 승인되었습니다. 아래 계좌로 입금하시고 [입금 확인 통보]를 진행해 주시면 제작 작업이 착수됩니다.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('payment');
                    setShowPaymentForm(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>입금/결제 완료 통보</span>
                </button>
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => setShowAdminPaymentConfirm(true)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>관리자: 입금확인 및 작업착수</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-950">
                      결제 확인 완료 &middot; 맞춤 컴퓨터 자수 및 봉제 작업 진행중
                    </span>
                    <span className="text-[11px] font-bold bg-white text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                      결제확인일: {payment?.confirmedAt || payment?.paidAt}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    작업 오더가 아틀리에 생산라인에 투입되어 정상 진행 중입니다. 출고 시 송장번호가 업데이트됩니다.
                  </p>
                </div>
              </div>
              {isAdmin && consulting.status !== '제작/출고완료' && (
                <button
                  type="button"
                  onClick={() => setShowShippingModal(true)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm shrink-0"
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>제작완료 및 출고 배송</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 space-y-6 bg-slate-50/50">

          {/* 3번 이미지: 5단계 B2B 발주 및 제작 진행 타임라인 (1번 배너와 2번 견적서 카드 사이 배치) */}
          <div className="print:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5 text-center">
              {/* STEP 1: 신청 접수 */}
              <div className="p-2.5 sm:p-3.5 rounded-2xl border bg-blue-50/80 border-blue-200 text-blue-950 font-bold shadow-2xs">
                <span className="block text-[10px] sm:text-[11px] font-bold text-blue-600">STEP 1</span>
                <span className="text-xs sm:text-sm font-extrabold mt-0.5 block">신청 접수</span>
              </div>

              {/* STEP 2: 견적서 발송 */}
              <div className="p-2.5 sm:p-3.5 rounded-2xl border bg-blue-50/80 border-blue-200 text-blue-950 font-bold shadow-2xs">
                <span className="block text-[10px] sm:text-[11px] font-bold text-blue-600">STEP 2</span>
                <span className="text-xs sm:text-sm font-extrabold mt-0.5 block">견적서 발송</span>
              </div>

              {/* STEP 3: 고객 승인 완료 */}
              <div className={`p-2.5 sm:p-3.5 rounded-2xl border transition-all ${
                isApproved
                  ? 'bg-blue-50/80 border-blue-300 text-blue-950 font-bold shadow-2xs'
                  : 'bg-white border-slate-200 text-slate-400'
              }`}>
                <span className={`block text-[10px] sm:text-[11px] font-bold ${isApproved ? 'text-blue-600' : 'text-slate-400'}`}>
                  STEP 3
                </span>
                <span className="text-xs sm:text-sm font-extrabold mt-0.5 block">고객 승인 완료</span>
              </div>

              {/* STEP 4: 결제확인 & 제작착수 */}
              <div className={`p-2.5 sm:p-3.5 rounded-2xl border transition-all ${
                isPaid
                  ? 'bg-blue-50/80 border-blue-300 text-blue-950 font-bold shadow-2xs'
                  : 'bg-white border-slate-200 text-slate-400'
              }`}>
                <span className={`block text-[10px] sm:text-[11px] font-bold ${isPaid ? 'text-blue-600' : 'text-slate-400'}`}>
                  STEP 4
                </span>
                <span className="text-xs sm:text-sm font-extrabold mt-0.5 block">결제확인 &amp; 제작착수</span>
              </div>

              {/* STEP 5: 출고 배송완료 */}
              <div className={`p-2.5 sm:p-3.5 rounded-2xl border col-span-2 sm:col-span-1 transition-all ${
                consulting.status === '제작/출고완료'
                  ? 'bg-emerald-600 border-emerald-600 text-white font-bold shadow-2xs'
                  : 'bg-white border-slate-200 text-slate-400'
              }`}>
                <span className={`block text-[10px] sm:text-[11px] font-bold ${consulting.status === '제작/출고완료' ? 'text-emerald-100' : 'text-slate-400'}`}>
                  STEP 5
                </span>
                <span className="text-xs sm:text-sm font-extrabold mt-0.5 block">출고 배송완료</span>
              </div>
            </div>
          </div>

          {/* 2번 이미지: OFFICIAL B2B QUOTATION SHEET CARD */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-300 p-4 sm:p-8 shadow-sm space-y-4 relative print:border-none print:shadow-none print:p-0">
              
              {/* Official Red Stamp / Watermark on Quotation Sheet when Approved */}
              {isApproved && (
                <div className="absolute top-12 right-12 select-none z-10 border-4 border-red-600 rounded-2xl px-5 py-3 text-center rotate-[-8deg] bg-white/80 shadow-lg backdrop-blur-2xs print:border-red-600 print:bg-transparent">
                  <div className="text-red-600 font-extrabold text-base sm:text-lg tracking-wider">
                    【 고객 공식 승인 완료 】
                  </div>
                  <div className="text-[11px] text-red-700 font-bold font-mono mt-0.5">
                    승인일시: {approval?.approvedAt}
                  </div>
                  <div className="text-[11px] text-red-600 font-bold">
                    승인자: {approval?.approverName} ({consulting.companyName})
                  </div>
                  <div className="text-[9px] text-red-500 font-mono mt-0.5">
                    MEDILYN / LALUNESTYLE OFFICIAL APPROVAL
                  </div>
                </div>
              )}

              {/* Sheet Title Bar (Screen view helper) */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">B2B 정규 규격 발주 및 견적 승인서</span>
                  <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {quotation.quotationNumber}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  발행일자: <span className="font-mono">{quotation.quotedAt}</span>
                </div>
              </div>

              {/* Top Notice Banner (Mediline Clean Design Concept) */}
              <div className="bg-blue-50/80 border border-blue-200 rounded-xl px-3.5 py-2.5 text-xs text-blue-950 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>세금계산서 / 현금영수증</strong> 발행을 원하실 경우, 오른쪽의 계산서 발행 정보란을 확인해 주세요.
                </span>
              </div>

              {/* Top Customer & Invoice Grid (Refined Slate / Blue B2B Aesthetic) */}
              <div className="overflow-x-auto rounded-xl border border-slate-300">
                <table className="w-full border-collapse text-xs">
                  <tbody>
                    {/* Row 1 */}
                    <tr className="border-b border-slate-300">
                      <th className="border-r border-slate-300 bg-slate-100 py-2 px-2.5 text-center font-bold w-24 text-slate-800">
                        업체명
                      </th>
                      <td className="border-r border-slate-300 py-2 px-2.5 font-bold text-slate-900 w-48 bg-white">
                        {quotation.buyerInfo?.companyName || consulting.companyName}
                      </td>
                      <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2 px-2.5 text-center font-bold w-24">
                        주문일
                      </th>
                      <td colSpan={5} className="py-2 px-2.5 font-mono text-slate-900 bg-white">
                        {quotation.orderDate || quotation.quotedAt?.slice(0, 10)}
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-b border-slate-300">
                      <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                        담당자명
                      </th>
                      <td className="border-r border-slate-300 py-2.5 px-2.5 font-semibold text-slate-900 bg-white">
                        {quotation.buyerInfo?.contactPerson || consulting.contactPerson}
                      </td>
                      <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px] leading-tight">
                        계산서발행<br />신청 선택
                      </th>
                      <td colSpan={5} className="py-2.5 px-3 bg-white">
                        {/* 2줄 배열: 1줄 발행구분(라디오버튼), 2줄 이메일 */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-4">
                            <label className="inline-flex items-center gap-2 cursor-default select-none">
                              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                                (!quotation.buyerInfo?.taxInvoiceType || quotation.buyerInfo.taxInvoiceType === '세금계산서')
                                  ? 'border-blue-600 bg-white ring-2 ring-blue-100'
                                  : 'border-slate-300 bg-slate-50'
                              }`}>
                                {(!quotation.buyerInfo?.taxInvoiceType || quotation.buyerInfo.taxInvoiceType === '세금계산서') && (
                                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                                )}
                              </span>
                              <span className={`text-xs ${
                                (!quotation.buyerInfo?.taxInvoiceType || quotation.buyerInfo.taxInvoiceType === '세금계산서')
                                  ? 'font-bold text-slate-900'
                                  : 'font-medium text-slate-600'
                              }`}>
                                세금계산서
                              </span>
                            </label>

                            <span className="text-slate-300">/</span>

                            <label className="inline-flex items-center gap-2 cursor-default select-none">
                              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                                quotation.buyerInfo?.taxInvoiceType === '현금영수증'
                                  ? 'border-blue-600 bg-white ring-2 ring-blue-100'
                                  : 'border-slate-300 bg-slate-50'
                              }`}>
                                {quotation.buyerInfo?.taxInvoiceType === '현금영수증' && (
                                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                                )}
                              </span>
                              <span className={`text-xs ${
                                quotation.buyerInfo?.taxInvoiceType === '현금영수증'
                                  ? 'font-bold text-slate-900'
                                  : 'font-medium text-slate-600'
                              }`}>
                                현금영수증
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] pt-1.5 border-t border-slate-100">
                            <span className="text-slate-600 font-semibold">E-mail (전자세금계산서 발급용):</span>
                            <span className="font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              {quotation.buyerInfo?.taxInvoiceEmail || consulting.email}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-b border-slate-300">
                      <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                        전화번호
                      </th>
                      <td className="border-r border-slate-300 py-2.5 px-2.5 font-mono text-slate-800 bg-white">
                        {/* 2줄 배열: 1줄 일반전화, 2줄 핸드폰 */}
                        <div className="flex flex-col gap-1.5 text-xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500 text-[11px] w-12 shrink-0">일반전화</span>
                            <span className="text-slate-800">{quotation.buyerInfo?.phone || '02-540-8890'}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-blue-700 font-bold text-[11px] w-12 shrink-0">핸드폰*</span>
                            <span className="font-bold text-slate-900">{quotation.buyerInfo?.mobilePhone || consulting.phone}</span>
                          </div>
                        </div>
                      </td>
                      <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                        사업자등록번호
                      </th>
                      <td className="border-r border-slate-300 py-2.5 px-2.5 font-mono font-semibold text-slate-900 w-36 bg-white">
                        {quotation.buyerInfo?.businessNumber || '120-81-45678'}
                      </td>
                      <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2 text-center font-bold text-[11px] w-14">
                        업종
                      </th>
                      <td className="border-r border-slate-300 py-2.5 px-2 text-slate-800 w-24 bg-white">
                        {quotation.buyerInfo?.businessType || '보건업 / 병의원'}
                      </td>
                      <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2 text-center font-bold text-[11px] w-14">
                        업태
                      </th>
                      <td className="py-2.5 px-2 text-slate-800 w-24 bg-white">
                        {quotation.buyerInfo?.businessItem || '의료서비스'}
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="border-b border-slate-300">
                      <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                        팩스번호
                      </th>
                      <td className="border-r border-slate-300 py-2.5 px-2.5 font-mono text-slate-800 bg-white">
                        {quotation.buyerInfo?.fax || '02-542-6262'}
                      </td>
                      <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                        사업자명
                      </th>
                      <td className="border-r border-slate-300 py-2.5 px-2.5 font-bold text-slate-900 bg-white">
                        {quotation.buyerInfo?.registeredCompanyName || consulting.companyName}
                      </td>
                      <th colSpan={2} className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                        대표자명
                      </th>
                      <td colSpan={2} className="py-2.5 px-2.5 font-bold text-slate-900 bg-white">
                        {quotation.buyerInfo?.ceoName || '한바른'}
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr>
                      <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                        배송주소
                      </th>
                      <td className="border-r border-slate-300 py-2.5 px-2.5 bg-white">
                        {/* 2줄 배열: 1줄 도로명/상세주소, 2줄 우편번호 */}
                        <div className="flex flex-col gap-1.5 text-xs">
                          <span className="text-slate-800 font-medium">{quotation.buyerInfo?.shippingAddress || '서울특별시 강남구 도산대로 128 메디린빌딩 4층'}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-blue-700 font-bold text-[11px] shrink-0">우편번호*</span>
                            <span className="font-mono font-bold text-slate-900">{quotation.buyerInfo?.zipCode || '06038'}</span>
                          </div>
                        </div>
                      </td>
                      <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                        입금자명
                      </th>
                      <td colSpan={5} className="py-2.5 px-2.5 font-bold text-blue-900 bg-white">
                        {quotation.buyerInfo?.depositorName || consulting.companyName}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Main Items Table Title (Image 2: [구성정보 및 사이즈]) */}
              <div className="pt-2 font-bold text-sm text-slate-900 tracking-tight">
                [구성정보 및 사이즈]
              </div>

              {/* Main Items Table (Image 2 Exact Columns with Refined Slate Borders) */}
              <div className="overflow-x-auto rounded-xl border border-slate-300">
                <table className="w-full border-collapse text-xs text-center">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                    <tr>
                      <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-20">제품군</th>
                      <th rowSpan={2} className="border-r border-slate-300 py-2 px-3 min-w-[160px] text-left">제품명</th>
                      <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-16">색상</th>
                      <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-24">가격</th>
                      <th colSpan={6} className="border-r border-slate-300 py-1 px-1 bg-slate-200/80 border-b border-slate-300">사이즈</th>
                      <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-20 bg-blue-50/50">토탈수량</th>
                      <th rowSpan={2} className="py-2 px-2 w-28 bg-blue-50/50">토탈가격</th>
                    </tr>
                    <tr className="bg-slate-100 text-[11px]">
                      <th className="border-r border-slate-300 py-1 w-10">XS</th>
                      <th className="border-r border-slate-300 py-1 w-10">S</th>
                      <th className="border-r border-slate-300 py-1 w-10">M</th>
                      <th className="border-r border-slate-300 py-1 w-10">L</th>
                      <th className="border-r border-slate-300 py-1 w-10">XL</th>
                      <th className="border-r border-slate-300 py-1 w-10">2XL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {quotation.items.map((item, idx) => {
                      const sizes = item.sizes || {
                        xs: 0,
                        s: Math.floor(item.quantity * 0.3),
                        m: Math.floor(item.quantity * 0.4),
                        l: Math.floor(item.quantity * 0.2),
                        xl: Math.floor(item.quantity * 0.1),
                        xxl: Math.max(0, item.quantity - (Math.floor(item.quantity * 0.3) + Math.floor(item.quantity * 0.4) + Math.floor(item.quantity * 0.2) + Math.floor(item.quantity * 0.1)))
                      };
                      return (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          {/* 제품군 */}
                          <td className="border-r border-slate-300 py-2 px-2 font-medium text-slate-800">
                            {item.productCategory || "자켓"}
                          </td>
                          {/* 제품명 */}
                          <td className="border-r border-slate-300 py-2 px-3 text-left font-bold text-slate-900">
                            {item.productName}
                          </td>
                          {/* 색상 */}
                          <td className="border-r border-slate-300 py-2 px-2 text-slate-800">
                            {item.color || "블랙"}
                          </td>
                          {/* 가격 (단가) */}
                          <td className="border-r border-slate-300 py-2 px-2 text-right font-mono font-medium text-slate-900">
                            {item.unitPrice.toLocaleString()}
                          </td>
                          {/* XS */}
                          <td className="border-r border-slate-300 py-2 px-1 font-mono text-slate-700">
                            {sizes.xs || '-'}
                          </td>
                          {/* S */}
                          <td className="border-r border-slate-300 py-2 px-1 font-mono text-slate-700">
                            {sizes.s || '-'}
                          </td>
                          {/* M */}
                          <td className="border-r border-slate-300 py-2 px-1 font-mono text-slate-700">
                            {sizes.m || '-'}
                          </td>
                          {/* L */}
                          <td className="border-r border-slate-300 py-2 px-1 font-mono text-slate-700">
                            {sizes.l || '-'}
                          </td>
                          {/* XL */}
                          <td className="border-r border-slate-300 py-2 px-1 font-mono text-slate-700">
                            {sizes.xl || '-'}
                          </td>
                          {/* 2XL */}
                          <td className="border-r border-slate-300 py-2 px-1 font-mono text-slate-700">
                            {sizes.xxl || '-'}
                          </td>
                          {/* 토탈수량 */}
                          <td className="border-r border-slate-300 py-2 px-2 font-mono font-bold text-blue-700 bg-blue-50/40">
                            {item.quantity}
                          </td>
                          {/* 토탈가격 */}
                          <td className="py-2 px-2 text-right font-mono font-bold text-slate-900 bg-blue-50/40">
                            {item.totalPrice.toLocaleString()}
                          </td>
                        </tr>
                      );
                    })}

                    {/* Empty filler rows for authentic Excel sheet look */}
                    {[...Array(Math.max(1, 4 - quotation.items.length))].map((_, i) => (
                      <tr key={`filler-view-${i}`} className="h-7 text-slate-200">
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td className="border-r border-slate-300">&nbsp;</td>
                        <td>&nbsp;</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            {/* Direct subtotal under the items table (Image Exact Placement) */}
            <div className="flex justify-end items-baseline pt-4 pb-1">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg mr-2">합산 금액 :</span>
              <span className="font-mono font-black text-slate-900 text-xl sm:text-2xl">
                ₩ {quotation.supplyPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* =========================================================================
              SIDE-BY-SIDE SUMMARY CARDS:
              Left: B2B 특별 할인 혜택 (합산 금액, 할인율, 최종 견적 금액 - 공급가)
              Right: 최종 정산 및 부가가치세 (공급가, VAT 10%, 최종가 - VAT포함)
              ========================================================================= */}
          {(() => {
            const rawSupply = quotation.supplyPrice;
            const discount = quotation.discountAmount || Math.round(rawSupply * ((quotation.discountRate || 0) / 100));
            const finalSupply = rawSupply - discount + (quotation.setupFee || 0);
            const vatAmount = quotation.vat || Math.round(finalSupply * 0.1);
            const finalPrice = quotation.totalAmount || (finalSupply + vatAmount);

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Card: B2B Discount Benefits */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-slate-900">B2B 특별 단체 주문 할인 혜택</span>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                      할인적용: {quotation.discountRate || 0}%
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>합산 금액 (할인 전 정가)</span>
                      <span className="font-mono font-bold text-slate-900">₩ {rawSupply.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>B2B 특별 할인율 ({quotation.discountRate || 0}%)</span>
                      <span className="font-mono font-bold text-blue-700">
                        {discount > 0 ? `- ₩ ${discount.toLocaleString()}` : '0원'}
                      </span>
                    </div>
                    {quotation.setupFee !== undefined && quotation.setupFee > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>자수 / 인쇄 초기 세팅비</span>
                        <span className="font-mono font-bold text-slate-900">+ ₩ {quotation.setupFee.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t border-slate-100 pt-2 flex justify-between items-baseline">
                      <span className="font-extrabold text-blue-950 text-xs sm:text-sm">최종 견적 금액 (공급가)</span>
                      <span className="font-mono font-black text-blue-700 text-base sm:text-lg">
                        ₩ {finalSupply.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Card: Final Settlement & VAT */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-slate-900">최종 정산 및 부가가치세 (VAT)</span>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      VAT 10%
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>공급가액 소계</span>
                      <span className="font-mono font-bold text-slate-900">₩ {finalSupply.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>부가가치세 (VAT 10%)</span>
                      <span className="font-mono font-bold text-slate-900">₩ {vatAmount.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-slate-100 pt-2 flex justify-between items-baseline">
                      <span className="font-extrabold text-slate-900 text-xs sm:text-sm">최종 결제 청구 금액</span>
                      <span className="font-mono font-black text-slate-900 text-base sm:text-lg">
                        ₩ {finalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Bottom Guidelines & Notice Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
            {/* Below Table Note */}
            <div className="text-xs text-slate-700 font-medium">
              모든 주문은 [기본정보]와 [구성정보 및 사이즈]에 의거하여 제작됩니다.
            </div>

              {/* [확인해주세요] Box (Mediline Refined Typography) */}
              <div className="border border-slate-300 rounded-xl p-3 sm:p-4 text-xs leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50/40">
                <div className="md:col-span-2 space-y-1">
                  <div className="font-bold text-slate-900 text-xs">[확인해주세요]</div>
                  <ol className="list-decimal list-inside space-y-0.5 text-slate-700 text-[11px]">
                    <li>사이즈는 정확히 확인하여 작성해주세요.</li>
                    <li>주문 제작 상품의 경우 디자인 및 수량에 따라 소요기간이 달라집니다.</li>
                    <li className="text-slate-900 font-bold"><span className="text-red-600 font-extrabold mr-1">※</span><span className="text-red-600 font-bold">승인 진행 이후 디자인 / 색상 / 수량의 수정은 불가능합니다.</span></li>
                    <li><span className="text-red-600 font-bold">승인 및 입금확인 후 제작이 시작됩니다.</span> (입금자명이 주문자명과 동일해야하며 다를 경우 미리 안내 부탁드립니다.)</li>
                    <li><span className="text-red-600 font-bold">승인서는 계약서와 동일한 효력이 발생합니다.</span></li>
                    <li>위 모든 사항은 라린느 / 메디린 유니폼으로 주문하신 내용임을 확인 합니다.</li>
                  </ol>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-slate-200 md:pl-4 space-y-1 text-slate-600 text-[11px] flex flex-col justify-center">
                  <div className="font-bold text-slate-900">TEL. 1577.6923</div>
                  <div>FAX. 02.542.6262</div>
                  <div>서울특별시 강남구 논현로 154길 18, 린빌딩 2층</div>
                  <div className="font-mono text-blue-700 font-semibold">www.lalunestyle.com / www.medilyn.co.kr</div>
                </div>
              </div>

              {/* *입금계좌 Box */}
              <div className="border border-slate-300 rounded-xl bg-slate-50 p-2.5 sm:p-3 text-xs space-y-0.5">
                <div className="font-bold text-slate-900 text-xs">*입금계좌</div>
                <div className="text-slate-800 font-semibold">
                  세금계산서 발행 : <strong className="font-bold text-blue-900">국민은행 469301-01-202005 주식회사 라린느</strong>
                </div>
              </div>

              {/* Document Signoff Footer */}
              <div className="border-t border-slate-300 pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-slate-600">
                <div>
                  담당 디자이너: <strong className="text-slate-900">{quotation.quotedBy}</strong> &middot; 납기 예정: <strong className="text-blue-700">{quotation.estimatedLeadTime}</strong>
                </div>
                <div className="text-right text-[11px]">
                  메디린 디자인 아틀리에 (주식회사 라린느) 공식 인증 서식
                </div>
              </div>

            </div>
          </div>

          {/* =========================================================================
              CUSTOMER APPROVAL & PRODUCTION AGREEMENT SECTION (User Request)
              - 견적승인확인 메세지의 중요부분 빨강 표기
              - 해당내용에 동의하며 견적승인 이후 결제확인 이후 제작진행에 동의 버튼 추가
              - 견적서공식승인하기 버튼 하단 중앙 배치
              ========================================================================= */}
          {/* =========================================================================
              CUSTOMER APPROVAL & PRODUCTION AGREEMENT (Image 2 Clean Layout)
              - 1번 섹션(중복 유의사항 안내 박스) 삭제
              - 2번 이미지 내용(동의 체크 버튼 + 하단 중앙 공식승인하기 버튼)만 배치
              ========================================================================= */}
          {!isApproved && (
            <div 
              id="quotation-approval-section" 
              className="py-4 sm:py-6 flex flex-col items-center justify-center space-y-4 print:hidden"
            >
              {/* 2번 이미지: 해당 내용에 동의하며 견적승인 이후 결제확인 이후 제작진행에 동의 버튼 */}
              <button
                type="button"
                onClick={() => setIsAgreeTerms(!isAgreeTerms)}
                className={`w-full max-w-3xl p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-center gap-3.5 transition-all cursor-pointer font-bold text-xs sm:text-base select-none shadow-xs ${
                  isAgreeTerms
                    ? 'bg-blue-50 border-blue-600 text-blue-950 ring-2 ring-blue-500/20'
                    : 'bg-white border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center shrink-0 border-2 transition-colors ${
                  isAgreeTerms ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'
                }`}>
                  {isAgreeTerms && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />}
                </div>
                <span className="text-center font-bold tracking-tight">
                  해당 내용에 동의하며 견적승인 이후 결제확인 이후 제작진행에 동의
                </span>
              </button>

              {/* 2번 이미지: 견적서공식승인하기 버튼 (하단 중앙 배치) */}
              <div className="flex flex-col items-center justify-center pt-1 gap-2 text-center">
                <button
                  type="button"
                  onClick={() => {
                    if (!isAgreeTerms) {
                      setApprovalError('먼저 [해당 내용에 동의하며 견적승인 이후 결제확인 이후 제작진행에 동의] 버튼을 눌러 동의해 주세요.');
                      setShowApprovalForm(true);
                      return;
                    }
                    setShowApprovalForm(true);
                  }}
                  className={`px-10 sm:px-16 py-3.5 sm:py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer ${
                    isAgreeTerms
                      ? 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-500/25 ring-4 ring-blue-500/10'
                      : 'bg-slate-200 text-slate-400 border border-slate-300 hover:bg-slate-300 hover:text-slate-600'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-current" />
                  <span>견적서공식승인하기</span>
                </button>

                {!isAgreeTerms ? (
                  <p className="text-xs sm:text-sm text-red-600 font-bold pt-1">
                    * 위 동의 버튼을 클릭하신 후 [견적서공식승인하기]를 진행하실 수 있습니다.
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 font-medium pt-1">
                    클릭 시 승인 담당자 확인 팝업이 표시되며 최종 승인 처리됩니다.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Integrated B2B Activity & Timeline Log Card (Print Hidden) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4 print:hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-slate-900 text-xs sm:text-sm">B2B 견적 승인 &amp; 제작 진행 이력</span>
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {consulting.timelineLogs?.length || 0}건 기록
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                실시간 타임라인 로그
              </span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-4 pt-1">
              {consulting.timelineLogs && consulting.timelineLogs.length > 0 ? (
                consulting.timelineLogs.map((log, idx) => (
                  <div key={log.id || idx} className="relative group">
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-2xs ${
                      log.stage === '견적승인' ? 'bg-emerald-500 ring-3 ring-emerald-100' :
                      log.stage === '결제완료' ? 'bg-purple-500 ring-3 ring-purple-100' :
                      'bg-blue-600 ring-3 ring-blue-100'
                    }`} />
                    <div className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs space-y-1 transition-colors">
                      <div className="flex justify-between items-center text-slate-500 text-[11px] flex-wrap gap-1">
                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                          <span>{log.title}</span>
                          <span className="text-[10px] font-mono bg-white px-1.5 py-0.2 rounded border border-slate-200 text-slate-600">
                            {log.stage}
                          </span>
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">{log.timestamp}</span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed whitespace-pre-line">{log.description}</p>
                      <div className="text-[10px] text-slate-400 pt-0.5">기록 주체: {log.actor}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-400 py-3 text-center">
                  아직 기록된 타임라인 이력이 없습니다.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SUB-MODAL 1: Customer Approval Modal */}
        {/* ========================================================================= */}
        {showApprovalForm && (
          <div 
            className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowApprovalForm(false);
            }}
          >
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">B2B 견적서 공식 승인</h3>
                    <p className="text-[11px] text-slate-500">견적번호: {quotation.quotationNumber}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowApprovalForm(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">고객사(병원명):</span>
                  <strong className="text-slate-900">{consulting.companyName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">총 견적 금액:</span>
                  <strong className="text-blue-700 font-bold font-mono text-sm">{quotation.totalAmount.toLocaleString()}원 (VAT포함)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">납기 예정:</span>
                  <span className="text-slate-800">{quotation.estimatedLeadTime}</span>
                </div>
              </div>

              {/* 견적승인확인 메시지 (중요부분 빨강 표기) */}
              <div className="bg-red-50/60 border border-red-200 rounded-2xl p-3.5 sm:p-4 text-xs space-y-2">
                <div className="font-bold text-red-700 flex items-center gap-1.5 text-xs">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>견적 승인 확인 필수 유의사항</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-700 leading-relaxed pl-1">
                  <div>
                    • 주문 제작 유니폼 특성상, <strong className="text-red-600 font-bold underline decoration-red-300 underline-offset-2">승인 진행 이후 디자인 / 색상 / 수량의 수정 및 취소는 절대 불가</strong>합니다.
                  </div>
                  <div>
                    • <strong className="text-red-600 font-bold underline decoration-red-300 underline-offset-2">견적 승인 이후 결제(입금) 확인이 완료된 시점에 아틀리에 제작 작업이 정식 착수</strong>됩니다.
                  </div>
                  <div>
                    • 본 온라인 승인서는 <strong className="text-red-600 font-bold underline decoration-red-300 underline-offset-2">정식 주문 공급 계약서와 동일한 법적 효력</strong>이 발생합니다.
                  </div>
                </div>
              </div>

              {approvalError && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-xl flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{approvalError}</span>
                </div>
              )}

              <form onSubmit={handleCustomerApprove} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">
                    승인 담당자명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={approverName}
                    onChange={(e) => setApproverName(e.target.value)}
                    placeholder="예: 김민서 총괄실장"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none text-xs font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">
                    승인 담당자 연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={approverPhone}
                    onChange={(e) => setApproverPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none text-xs font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">
                    승인 의견 및 요청 메모
                  </label>
                  <textarea
                    rows={2}
                    value={approvalMemo}
                    onChange={(e) => setApprovalMemo(e.target.value)}
                    placeholder="특이사항이나 세금계산서 발행 관련 메모"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none text-xs leading-relaxed"
                  />
                </div>

                {/* 해당내용에 동의하며 견적승인 이후 결제확인 이후 제작진행에 동의 버튼 */}
                <button
                  type="button"
                  onClick={() => setIsAgreeTerms(!isAgreeTerms)}
                  className={`w-full p-3.5 rounded-xl border-2 flex items-center gap-3 transition-all cursor-pointer font-bold text-xs select-none ${
                    isAgreeTerms
                      ? 'bg-blue-50 border-blue-600 text-blue-950 ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                    isAgreeTerms ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400 bg-white'
                  }`}>
                    {isAgreeTerms && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-left font-bold leading-snug">
                    해당 내용에 동의하며 견적승인 이후 결제확인 이후 제작진행에 동의
                  </span>
                </button>

                <div className="pt-2 flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowApprovalForm(false)}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    disabled={!isAgreeTerms}
                    className={`flex-2 py-3 rounded-xl text-xs font-black shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isAgreeTerms
                        ? 'bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-500/25 ring-2 ring-blue-500/20'
                        : 'bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>견적서공식승인하기</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-MODAL 2: Customer Payment Notification Modal */}
        {/* ========================================================================= */}
        {showPaymentForm && (
          <div 
            className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowPaymentForm(false);
            }}
          >
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">입금/결제 완료 통보</h3>
                    <p className="text-[11px] text-slate-500">결제 금액: {quotation.totalAmount.toLocaleString()}원</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPaymentForm(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handlePaymentNotify} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">결제 수단</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['계좌이체', '법인카드', '가상계좌'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentMethod(method)}
                        className={`py-2 rounded-xl font-bold border transition-all cursor-pointer text-xs ${
                          paymentMethod === method
                            ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">
                    입금자명 (송금인명) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={depositorName}
                    onChange={(e) => setDepositorName(e.target.value)}
                    placeholder="실제 송금하신 입금자명 입력"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none text-xs font-semibold"
                  />
                </div>

                <div className="border border-slate-200 rounded-xl p-3.5 space-y-2 bg-slate-50/70">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={requestTaxInvoice}
                      onChange={(e) => setRequestTaxInvoice(e.target.checked)}
                      className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="font-bold text-slate-800 text-xs">전자세금계산서 발행 신청</span>
                  </label>

                  {requestTaxInvoice && (
                    <div className="pt-1 space-y-1">
                      <span className="text-[11px] text-slate-500 block">수신 이메일 주소</span>
                      <input
                        type="email"
                        value={taxInvoiceEmail}
                        onChange={(e) => setTaxInvoiceEmail(e.target.value)}
                        placeholder="tax@company.com"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-mono outline-none focus:border-blue-600"
                      />
                    </div>
                  )}
                </div>

                <div className="pt-2 flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => setShowPaymentForm(false)}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="flex-2 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>입금 확인 요청 통보</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-MODAL 3: Admin Confirm Payment Modal */}
        {/* ========================================================================= */}
        {showAdminPaymentConfirm && (
          <div 
            className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowAdminPaymentConfirm(false);
            }}
          >
            <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-base font-extrabold text-slate-900">결제 입금 확인 및 작업 착수</h3>
                <p className="text-xs text-slate-500">
                  {consulting.companyName}의 결제 금액 {quotation.totalAmount.toLocaleString()}원 입금을 확인하고 아틀리에 제작 작업에 착수합니다.
                </p>
              </div>

              <div className="space-y-1 text-xs">
                <label className="font-bold text-slate-700 block">확인자 (관리자)</label>
                <input
                  type="text"
                  value={confirmedBy}
                  onChange={(e) => setConfirmedBy(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-semibold"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAdminPaymentConfirm(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs"
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={handleAdminConfirmPayment}
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm cursor-pointer"
                >
                  입금확인 &amp; 착수
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-MODAL 4: Admin Shipping Modal */}
        {/* ========================================================================= */}
        {showShippingModal && (
          <div 
            className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowShippingModal(false);
            }}
          >
            <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto border border-purple-100">
                <Truck className="w-6 h-6" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-base font-extrabold text-slate-900">제작 완료 및 출고 배송</h3>
                <p className="text-xs text-slate-500">
                  유니폼 검품이 완료되어 고객사로 발송합니다.
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">택배사</label>
                  <select
                    value={trackingCourier}
                    onChange={(e) => setTrackingCourier(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-semibold"
                  >
                    <option value="CJ대한통운">CJ대한통운</option>
                    <option value="우체국택배">우체국택배</option>
                    <option value="한진택배">한진택배</option>
                    <option value="로젠택배">로젠택배</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">운송장 번호</label>
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg font-mono font-semibold"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowShippingModal(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs"
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={handleAdminShipment}
                  className="flex-1 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-sm cursor-pointer"
                >
                  출고 배송 완료
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
