import React, { useState, useMemo } from 'react';
import { ConsultingRequest, ConsultingStatus, Quotation } from '../types';
import { 
  B2B_CORE_STEPS, 
  getPerspectiveStatusLabel, 
  getPerspectiveBadgeClass, 
  getProcessCurrentStep, 
  isStepActiveOrDone,
  canAdminCreateQuotation,
  canAdminEditQuotation,
  canCustomerApproveQuotation
} from '../utils/statusHelper';
import { ConsultingDetailModal } from './ConsultingDetailModal';
import { QuotationViewModal } from './QuotationViewModal';
import { QuotationEditorModal } from './QuotationEditorModal';
import { OriginalOrderSheetModal } from './OriginalOrderSheetModal';
import { 
  Search, 
  Filter, 
  FileText, 
  FilePlus, 
  FileCheck, 
  Edit3, 
  Truck, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Building2, 
  ChevronRight, 
  ShieldAlert, 
  Layers, 
  Copy, 
  Check, 
  LayoutList, 
  Columns,
  RefreshCw,
  Sparkles
} from 'lucide-react';

interface Props {
  consultingRequests: ConsultingRequest[];
  isAdmin: boolean;
  onUpdateConsultingStatus: (id: string, status: ConsultingStatus, tracking?: { courier: string; number: string }) => void;
  onSaveQuotation: (requestId: string, quotation: Quotation, sendToCustomer: boolean) => void;
  onCustomerApprove: (requestId: string) => void;
}

export const HistoryView: React.FC<Props> = ({
  consultingRequests,
  isAdmin,
  onUpdateConsultingStatus,
  onSaveQuotation,
  onCustomerApprove
}) => {
  // State for search & filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [adminStatusFilter, setAdminStatusFilter] = useState<string>('전체');
  const [adminViewMode, setAdminViewMode] = useState<'split' | 'table'>('split');
  const [selectedConsultingId, setSelectedConsultingId] = useState<string>(
    consultingRequests[0]?.id || ''
  );

  // Modal states
  const [activeDetailItem, setActiveDetailItem] = useState<ConsultingRequest | null>(null);
  const [activeQuotationItem, setActiveQuotationItem] = useState<ConsultingRequest | null>(null);
  const [activeEditorItem, setActiveEditorItem] = useState<ConsultingRequest | null>(null);
  const [activeOriginalSheetItem, setActiveOriginalSheetItem] = useState<ConsultingRequest | null>(null);

  // Quick feedback messages
  const [copiedLink, setCopiedLink] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Admin status update select
  const selectedConsulting = useMemo(() => {
    return consultingRequests.find((r) => r.id === selectedConsultingId) || consultingRequests[0];
  }, [consultingRequests, selectedConsultingId]);

  const [adminPendingStatus, setAdminPendingStatus] = useState<ConsultingStatus>(
    selectedConsulting?.status || '접수완료'
  );

  // Sync adminPendingStatus when selected item changes
  React.useEffect(() => {
    if (selectedConsulting) {
      setAdminPendingStatus(selectedConsulting.status);
      setStatusMessage(null);
    }
  }, [selectedConsulting?.id, selectedConsulting?.status]);

  // Customer Filter: by phone, company, or request ID
  const customerFilteredRequests = useMemo(() => {
    return consultingRequests.filter((item) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        item.companyName.toLowerCase().includes(q) ||
        item.applicantName.toLowerCase().includes(q) ||
        item.phone.replace(/[^0-9]/g, '').includes(q.replace(/[^0-9]/g, '')) ||
        item.id.toLowerCase().includes(q)
      );
    });
  }, [consultingRequests, searchQuery]);

  // Admin Filter: search + status dropdown
  const adminFilteredRequests = useMemo(() => {
    return consultingRequests.filter((item) => {
      // 1. Status Filter
      if (adminStatusFilter !== '전체') {
        if (adminStatusFilter === '1단계_접수완료') {
          if (!['접수완료', '컨설턴트 배정', '시안 제작중'].includes(item.status)) return false;
        } else if (adminStatusFilter === '2단계_견적발송') {
          if (item.status !== '견적 발송') return false;
        } else if (adminStatusFilter === '3단계_고객승인') {
          if (!['견적 승인완료', '입금확인요청'].includes(item.status)) return false;
        } else if (adminStatusFilter === '4단계_제작출고') {
          if (!['결제완료/작업진행', '상담 완료'].includes(item.status)) return false;
        } else if (adminStatusFilter === '취소보류') {
          if (item.status !== '취소/보류') return false;
        } else if (item.status !== adminStatusFilter) {
          return false;
        }
      }

      // 2. Text Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          item.companyName.toLowerCase().includes(q) ||
          item.applicantName.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q) ||
          item.phone.includes(q)
        );
      }

      return true;
    });
  }, [consultingRequests, adminStatusFilter, searchQuery]);

  // KPI Metrics for Admin
  const metrics = useMemo(() => {
    const total = consultingRequests.length;
    const step1WaitingQuote = consultingRequests.filter((r) =>
      ['접수완료', '컨설턴트 배정', '시안 제작중'].includes(r.status) && !r.quotation
    ).length;
    const step2CustomerApprovalWait = consultingRequests.filter(
      (r) => r.status === '견적 발송'
    ).length;
    const step3PaymentWait = consultingRequests.filter((r) =>
      ['견적 승인완료', '입금확인요청'].includes(r.status)
    ).length;
    const step4Shipped = consultingRequests.filter((r) => r.status === '상담 완료').length;

    return { total, step1WaitingQuote, step2CustomerApprovalWait, step3PaymentWait, step4Shipped };
  }, [consultingRequests]);

  const handleCopyCustomerLink = (req: ConsultingRequest) => {
    const fakeUrl = `${window.location.origin}?track=${req.id}&phone=${encodeURIComponent(req.phone)}`;
    navigator.clipboard.writeText(fakeUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAdminApplyStatusChange = () => {
    if (!selectedConsulting) return;
    onUpdateConsultingStatus(selectedConsulting.id, adminPendingStatus);
    setStatusMessage(`상태가 [${adminPendingStatus}]로 성공적으로 변경되었습니다.`);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  return (
    <div className="py-2 space-y-6">
      {/* Search & Mode Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                isAdmin ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-blue-100 text-blue-900 border border-blue-300'
              }`}>
                {isAdmin ? '관리자 통합 데스크' : '고객 주문/견적 조회'}
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {isAdmin ? 'B2B 디자인컨설팅 신청 및 견적 전산 관리' : '내 신청서 및 전자 견적서 진행 현황'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {isAdmin 
                ? '신청서 접수 확인, 견적서 발행, 입금확인 및 컴퓨터 자수 제작/출고 파이프라인 관리' 
                : '신청하신 맞춤 자수 컨설팅의 진행 상황을 실시간 확인하고 견적서를 승인하실 수 있습니다.'}
            </p>
          </div>

          {/* Admin View Mode Switcher */}
          {isAdmin && (
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setAdminViewMode('split')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  adminViewMode === 'split' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Columns className="w-3.5 h-3.5" /> 스플릿 데스크
              </button>
              <button
                type="button"
                onClick={() => setAdminViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  adminViewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" /> 테이블 뷰
              </button>
            </div>
          )}
        </div>

        {/* Admin KPI Metric Cards */}
        {isAdmin && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
            <div 
              onClick={() => setAdminStatusFilter('전체')}
              className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 cursor-pointer transition-colors"
            >
              <span className="text-[11px] font-semibold text-slate-500">전체 신청 접수</span>
              <div className="text-xl font-extrabold text-slate-900 mt-0.5">{metrics.total}건</div>
            </div>
            <div 
              onClick={() => setAdminStatusFilter('1단계_접수완료')}
              className="p-3 bg-blue-50/60 hover:bg-blue-100/60 rounded-xl border border-blue-200 cursor-pointer transition-colors"
            >
              <span className="text-[11px] font-semibold text-blue-700">1단계 견적작성 필요</span>
              <div className="text-xl font-extrabold text-blue-900 mt-0.5">{metrics.step1WaitingQuote}건</div>
            </div>
            <div 
              onClick={() => setAdminStatusFilter('2단계_견적발송')}
              className="p-3 bg-amber-50/60 hover:bg-amber-100/60 rounded-xl border border-amber-200 cursor-pointer transition-colors"
            >
              <span className="text-[11px] font-semibold text-amber-800">2단계 고객승인 대기</span>
              <div className="text-xl font-extrabold text-amber-950 mt-0.5">{metrics.step2CustomerApprovalWait}건</div>
            </div>
            <div 
              onClick={() => setAdminStatusFilter('4단계_제작출고')}
              className="p-3 bg-emerald-50/60 hover:bg-emerald-100/60 rounded-xl border border-emerald-200 cursor-pointer transition-colors"
            >
              <span className="text-[11px] font-semibold text-emerald-800">4단계 출고완료 건</span>
              <div className="text-xl font-extrabold text-emerald-950 mt-0.5">{metrics.step4Shipped}건</div>
            </div>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAdmin ? '신청번호, 회사명, 담당자명, 전화번호로 빠른 검색...' : '신청자 성함, 기업명, 또는 연락처 뒷자리 검색...'}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500 font-medium"
            />
          </div>

          {isAdmin && (
            <div className="w-full sm:w-auto flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 shrink-0 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> 상태 필터:
              </span>
              <select
                value={adminStatusFilter}
                onChange={(e) => setAdminStatusFilter(e.target.value)}
                className="w-full sm:w-48 px-3 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500 font-medium"
              >
                <option value="전체">전체 보기 ({consultingRequests.length}건)</option>
                <option value="1단계_접수완료">1단계. 신규 접수 / 견적작성 필요</option>
                <option value="2단계_견적발송">2단계. 견적 발송 (고객승인 대기)</option>
                <option value="3단계_고객승인">3단계. 고객 승인완료 (입금 대기)</option>
                <option value="4단계_제작출고">4단계. 제작 진행 및 출고 완료</option>
                <option value="취소보류">상담 취소 / 보류 건</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CUSTOMER VIEW: Clean Cards with Steppers and Actionable Approval Buttons */}
      {/* ========================================================================= */}
      {!isAdmin && (
        <div className="space-y-4">
          {customerFilteredRequests.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 space-y-2">
              <p className="font-semibold text-slate-600">조회된 신청서가 없습니다.</p>
              <p className="text-xs">신청하신 회사명 또는 연락처를 다시 확인해 주세요.</p>
            </div>
          ) : (
            customerFilteredRequests.map((req) => {
              const currentStep = getProcessCurrentStep(req.status);
              const hasQuotation = Boolean(req.quotation);
              const isFinished = req.status === '상담 완료';

              return (
                <div
                  key={req.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-amber-300 transition-all space-y-5"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${getPerspectiveBadgeClass(req.status, true)}`}>
                        {getPerspectiveStatusLabel(req.status, true)}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        {req.companyName}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">({req.id})</span>
                    </div>

                    <div className="text-xs text-slate-500 flex items-center gap-3">
                      <span>접수일: {req.createdAt}</span>
                      {req.consultantName && (
                        <span>전담 디자이너: <strong className="text-slate-800">{req.consultantName}</strong></span>
                      )}
                    </div>
                  </div>

                  {/* 4-Step Stepper */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {B2B_CORE_STEPS.map((s) => {
                        const { active, done } = isStepActiveOrDone(currentStep, s.step);
                        return (
                          <div
                            key={s.id}
                            className={`p-2 rounded-lg text-xs transition-colors ${
                              active
                                ? 'bg-amber-100/70 border border-amber-300 font-bold text-amber-950'
                                : done
                                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium'
                                : 'text-slate-400'
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                                done ? 'bg-emerald-600 text-white' : active ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-500'
                              }`}>
                                {done ? '✓' : s.step}
                              </span>
                              <span className="truncate">{s.customerLabel.replace(/^\d+\.\s*/, '')}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400">발주 품목 & 수량</span>
                      <p className="font-bold text-slate-900 mt-0.5">{req.category} · {req.quantity}벌</p>
                    </div>
                    <div>
                      <span className="text-slate-400">자수 위치 & 규격</span>
                      <p className="font-medium text-slate-800 mt-0.5">{req.embroiderySpec.placement} ({req.embroiderySpec.sizeEstimate})</p>
                    </div>
                    <div>
                      <span className="text-slate-400">납기 희망일</span>
                      <p className="font-medium text-slate-800 mt-0.5">{req.expectedDeliveryDate}</p>
                    </div>
                  </div>

                  {/* Action Bar for Customer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      {req.trackingNumber ? (
                        <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                          <Truck className="w-4 h-4" /> 배송 운송장: {req.courierName} {req.trackingNumber}
                        </span>
                      ) : hasQuotation ? (
                        <span className="text-amber-900 font-semibold">
                          발행된 전자 견적 총액: ₩{req.quotation?.totalAmount.toLocaleString()}원 (VAT 포함)
                        </span>
                      ) : (
                        <span>전담 디자이너가 견적서 및 자수 시뮬레이션을 작성 중입니다.</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveDetailItem(req)}
                        className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors"
                      >
                        상세 내역 보기
                      </button>

                      {hasQuotation && (
                        <button
                          type="button"
                          onClick={() => setActiveQuotationItem(req)}
                          className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-semibold hover:bg-amber-100 text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <FileCheck className="w-3.5 h-3.5 text-amber-700" /> 전자 견적서 열람
                        </button>
                      )}

                      {/* Customer APPROVAL BUTTON:
                          Only visible to CUSTOMER when status is '견적 발송' and quotation is present! */}
                      {req.status === '견적 발송' && hasQuotation && (
                        <button
                          type="button"
                          onClick={() => setActiveQuotationItem(req)}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                        >
                          <CheckCircle className="w-4 h-4" /> 견적 확인 및 승인하기
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADMIN VIEW: Split Desk View or Table View with Strict Role Guards */}
      {/* ========================================================================= */}
      {isAdmin && adminViewMode === 'split' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Requests List */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
            {adminFilteredRequests.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
                필터 조건에 맞는 신청서가 없습니다.
              </div>
            ) : (
              adminFilteredRequests.map((item) => {
                const isSelected = selectedConsulting?.id === item.id;
                const hasQuotation = Boolean(item.quotation);
                const isFinished = item.status === '상담 완료';

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedConsultingId(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer text-xs space-y-2.5 ${
                      isSelected
                        ? 'bg-amber-50/50 border-amber-400 ring-2 ring-amber-400/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${getPerspectiveBadgeClass(item.status, false)}`}>
                        {getPerspectiveStatusLabel(item.status, false)}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{item.id}</span>
                    </div>

                    <div>
                      <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                        <span>{item.companyName}</span>
                        <span className="text-amber-900 font-semibold text-xs">{item.quantity}벌</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-0.5 flex items-center justify-between">
                        <span>{item.category}</span>
                        <span>납기: {item.expectedDeliveryDate}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">신청자: {item.applicantName}</span>
                      {hasQuotation ? (
                        <span className="text-amber-800 font-semibold">
                          견적: ₩{item.quotation?.totalAmount.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-blue-600 font-medium">견적서 미발행</span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Detailed Workbench */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            {selectedConsulting ? (
              <>
                {/* Desk Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${getPerspectiveBadgeClass(selectedConsulting.status, false)}`}>
                        {getPerspectiveStatusLabel(selectedConsulting.status, false)}
                      </span>
                      <span className="font-mono text-xs text-slate-400">{selectedConsulting.id}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {selectedConsulting.companyName}
                    </h3>
                  </div>

                  {/* Header Quick Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveOriginalSheetItem(selectedConsulting)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" /> 신청서 원본
                    </button>

                    {/* QUESTION 1 GUARD:
                        If the order is already finished ('상담 완료'), paid ('결제완료/작업진행'), or has a quotation:
                        DO NOT show "견적서 작성" button!
                        canAdminCreateQuotation strictly returns false for finished/processed requests! */}
                    {canAdminCreateQuotation(selectedConsulting) && (
                      <button
                        type="button"
                        onClick={() => setActiveEditorItem(selectedConsulting)}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <FilePlus className="w-3.5 h-3.5" /> 견적서 작성하기
                      </button>
                    )}

                    {/* If quotation exists, show "견적서 열람" */}
                    {selectedConsulting.quotation && (
                      <button
                        type="button"
                        onClick={() => setActiveQuotationItem(selectedConsulting)}
                        className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-semibold hover:bg-amber-100 text-xs flex items-center gap-1.5 transition-colors"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-amber-700" /> 견적서 열람
                      </button>
                    )}

                    {/* If draft/sent, admin can edit */}
                    {canAdminEditQuotation(selectedConsulting) && (
                      <button
                        type="button"
                        onClick={() => setActiveEditorItem(selectedConsulting)}
                        className="px-3 py-1.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs flex items-center gap-1 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-slate-500" /> 견적 수정
                      </button>
                    )}
                  </div>
                </div>

                {/* Status Notice for Admin - QUESTION 2 SAFEGUARD */}
                {selectedConsulting.status === '견적 발송' && (
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start justify-between gap-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-amber-900">
                          고객 승인 대기 단계 (고객 포털 권한)
                        </div>
                        <p className="text-amber-800 text-[11px] mt-0.5 leading-relaxed">
                          견적서가 정상 발송되었습니다. 고객 승인은 고객사 전용 기능으로, 관리자가 실수로 승인하는 사고를 방지하기 위해 
                          관리자 화면에는 승인 버튼이 존재하지 않습니다.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyCustomerLink(selectedConsulting)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-amber-300 text-amber-900 font-semibold hover:bg-amber-100 shrink-0 flex items-center gap-1 text-[11px]"
                    >
                      {copiedLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      {copiedLink ? '링크 복사됨' : '고객 안내링크 복사'}
                    </button>
                  </div>
                )}

                {/* If Finished Order - QUESTION 1 NOTICE */}
                {selectedConsulting.status === '상담 완료' && (
                  <div className="bg-slate-100 border border-slate-300 p-3.5 rounded-xl flex items-center justify-between text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>
                        <strong>출고 및 상담 완료 건:</strong> 제작과 배송이 모두 종료되어 신규 견적 작성이 마감된 상태입니다.
                      </span>
                    </div>
                    {selectedConsulting.trackingNumber && (
                      <span className="font-semibold text-slate-800">
                        송장: {selectedConsulting.courierName} {selectedConsulting.trackingNumber}
                      </span>
                    )}
                  </div>
                )}

                {/* 4-Step Visual Stepper */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-500">진행 프로세스 단계</div>
                  <div className="grid grid-cols-4 gap-2">
                    {B2B_CORE_STEPS.map((s) => {
                      const { active, done } = isStepActiveOrDone(
                        getProcessCurrentStep(selectedConsulting.status),
                        s.step
                      );
                      return (
                        <div
                          key={s.id}
                          className={`p-2 rounded-xl border text-xs ${
                            active
                              ? 'bg-amber-500/10 border-amber-500/40 text-amber-950 font-bold'
                              : done
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-800 font-medium'
                              : 'bg-slate-50 border-slate-200 text-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                              done ? 'bg-emerald-600 text-white' : active ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-500'
                            }`}>
                              {done ? '✓' : s.step}
                            </span>
                            <span className="truncate">{s.adminLabel.replace(/^\d+\.\s*/, '')}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Detailed Information Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                    <span className="text-slate-400 font-medium">고객 및 연락처</span>
                    <p className="font-bold text-slate-900">{selectedConsulting.applicantName} ({selectedConsulting.companyName})</p>
                    <p className="text-slate-600">{selectedConsulting.phone} · {selectedConsulting.email}</p>
                    {selectedConsulting.businessNumber && (
                      <p className="text-slate-500 text-[11px]">사업자: {selectedConsulting.businessNumber}</p>
                    )}
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                    <span className="text-slate-400 font-medium">발주 품목 & 수량</span>
                    <p className="font-bold text-slate-900">{selectedConsulting.category}</p>
                    <p className="text-amber-800 font-semibold">{selectedConsulting.quantity}벌 발주 (희망일: {selectedConsulting.expectedDeliveryDate})</p>
                    {selectedConsulting.budgetRange && (
                      <p className="text-slate-500 text-[11px]">예산: {selectedConsulting.budgetRange}</p>
                    )}
                  </div>
                </div>

                {/* Embroidery Spec */}
                <div className="p-4 rounded-xl border border-amber-200/60 bg-amber-50/30 text-xs space-y-2">
                  <div className="font-bold text-amber-950 flex items-center justify-between">
                    <span>컴퓨터 자수 세부 사양</span>
                    <span className="text-slate-500 font-normal">위치: {selectedConsulting.embroiderySpec.placement}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-700">
                    <div>기법: <strong>{selectedConsulting.embroiderySpec.embroideryType}</strong></div>
                    <div>크기: <strong>{selectedConsulting.embroiderySpec.sizeEstimate}</strong></div>
                    <div className="col-span-2">문구/내용: <strong>{selectedConsulting.embroiderySpec.textOrContent}</strong></div>
                  </div>
                </div>

                {/* Admin Status Management Action Box */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-amber-700" /> 관리자 단계 강제 전환 및 관리
                    </span>
                    {statusMessage && (
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 animate-fade-in">
                        {statusMessage}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <select
                      value={adminPendingStatus}
                      onChange={(e) => setAdminPendingStatus(e.target.value as ConsultingStatus)}
                      className="w-full sm:flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs bg-white focus:ring-1 focus:ring-amber-500 font-medium"
                    >
                      <option value="접수완료">1. 접수완료 (신규 접수)</option>
                      <option value="견적 발송">2. 견적 발송 (고객승인 대기)</option>
                      <option value="견적 승인완료">3. 고객 승인완료 (입금 대기)</option>
                      <option value="결제완료/작업진행">4. 결제완료 & 자수 제작진행</option>
                      <option value="상담 완료">4. 제작/출고 배송 완료 (종료)</option>
                      <option value="취소/보류">상담 취소 / 보류</option>
                    </select>

                    <button
                      type="button"
                      onClick={handleAdminApplyStatusChange}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shrink-0"
                    >
                      상태 저장 적용
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-12 text-center text-slate-400 text-xs">
                목록에서 신청서를 선택해 주세요.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADMIN TABLE VIEW */}
      {/* ========================================================================= */}
      {isAdmin && adminViewMode === 'table' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">신청번호</th>
                  <th className="py-3 px-4">고객사 / 담당자</th>
                  <th className="py-3 px-3">품목 / 수량</th>
                  <th className="py-3 px-3">진행 상태</th>
                  <th className="py-3 px-3">견적 금액</th>
                  <th className="py-3 px-4 text-right">관리 액션</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {adminFilteredRequests.map((item) => {
                  const hasQuotation = Boolean(item.quotation);
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 font-mono font-medium text-slate-500">{item.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{item.companyName}</div>
                        <div className="text-slate-400 text-[11px]">{item.applicantName} ({item.phone})</div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-slate-800">{item.category}</div>
                        <div className="text-amber-800 font-semibold">{item.quantity}벌</div>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${getPerspectiveBadgeClass(item.status, false)}`}>
                          {getPerspectiveStatusLabel(item.status, false)}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {hasQuotation ? (
                          <span className="font-bold text-slate-800">
                            ₩{item.quotation?.totalAmount.toLocaleString()}원
                          </span>
                        ) : (
                          <span className="text-slate-400">미발행</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right space-x-1.5">
                        <button
                          type="button"
                          onClick={() => setActiveDetailItem(item)}
                          className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] font-medium"
                        >
                          상세
                        </button>

                        {/* QUESTION 1 GUARD in table: If finished or paid or has quotation -> no create quote button */}
                        {canAdminCreateQuotation(item) && (
                          <button
                            type="button"
                            onClick={() => setActiveEditorItem(item)}
                            className="px-2.5 py-1 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-[11px]"
                          >
                            견적 작성
                          </button>
                        )}

                        {hasQuotation && (
                          <button
                            type="button"
                            onClick={() => setActiveQuotationItem(item)}
                            className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100 font-medium text-[11px]"
                          >
                            견적 열람
                          </button>
                        )}

                        {/* QUESTION 2 GUARD in table: Never show customer approval button in Admin table! */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {activeDetailItem && (
        <ConsultingDetailModal
          consulting={activeDetailItem}
          isOpen={Boolean(activeDetailItem)}
          onClose={() => setActiveDetailItem(null)}
          isAdmin={isAdmin}
          onCustomerApprove={onCustomerApprove}
          onSaveQuotation={onSaveQuotation}
          onAdminStatusChange={onUpdateConsultingStatus}
        />
      )}

      {/* Quotation View Modal */}
      {activeQuotationItem && (
        <QuotationViewModal
          consulting={activeQuotationItem}
          isOpen={Boolean(activeQuotationItem)}
          onClose={() => setActiveQuotationItem(null)}
          isAdmin={isAdmin}
          onCustomerApprove={onCustomerApprove}
          onOpenEditor={() => {
            const item = activeQuotationItem;
            setActiveQuotationItem(null);
            setActiveEditorItem(item);
          }}
        />
      )}

      {/* Quotation Editor Modal */}
      {activeEditorItem && (
        <QuotationEditorModal
          consulting={activeEditorItem}
          isOpen={Boolean(activeEditorItem)}
          onClose={() => setActiveEditorItem(null)}
          onSaveQuotation={onSaveQuotation}
        />
      )}

      {/* Original Order Sheet Modal */}
      {activeOriginalSheetItem && (
        <OriginalOrderSheetModal
          consulting={activeOriginalSheetItem}
          isOpen={Boolean(activeOriginalSheetItem)}
          onClose={() => setActiveOriginalSheetItem(null)}
          isAdmin={isAdmin}
        />
      )}
    </div>
  );
};
