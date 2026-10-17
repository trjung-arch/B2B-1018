import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft,
  Printer, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Edit3, 
  Trash2, 
  Lock, 
  Sparkles, 
  ChevronRight, 
  FileText, 
  FileCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  Send,
  Truck
} from 'lucide-react';
import { ConsultingRequest } from '../types';
import { OriginalOrderSheetModal } from './OriginalOrderSheetModal';
import { QuotationViewModal } from './QuotationViewModal';
import { QuotationEditorModal } from './QuotationEditorModal';

interface ConsultingDetailModalProps {
  consulting: ConsultingRequest | null;
  isOpen: boolean;
  onClose: () => void;
  isMyReq: boolean;
  isAdmin?: boolean;
  canCustomerEditOrDelete: boolean;
  onOpenCustomerAuth: (action: 'edit' | 'delete') => void;
  onNavigateToConsulting: () => void;
  onUpdateConsulting?: (updated: ConsultingRequest) => void;
  maskId: (id: string) => string;
  maskCompanyName: (name: string) => string;
  maskPhone: (phone: string) => string;
  maskContactPerson: (person: string) => string;
  maskEmail: (email: string) => string;
}

export const ConsultingDetailModal: React.FC<ConsultingDetailModalProps> = ({
  consulting,
  isOpen,
  onClose,
  isMyReq,
  isAdmin = false,
  canCustomerEditOrDelete,
  onOpenCustomerAuth,
  onNavigateToConsulting,
  onUpdateConsulting,
  maskId,
  maskCompanyName,
  maskPhone,
  maskContactPerson,
  maskEmail,
}) => {
  if (!isOpen || !consulting) return null;

  const [isOrderSheetOpen, setIsOrderSheetOpen] = useState<boolean>(false);
  const [isQuotationViewOpen, setIsQuotationViewOpen] = useState<boolean>(false);
  const [isQuotationEditorOpen, setIsQuotationEditorOpen] = useState<boolean>(false);

  const displayName = isMyReq ? consulting.companyName : maskCompanyName(consulting.companyName);
  const displayId = isMyReq ? consulting.id : maskId(consulting.id);
  const displayDate = consulting.createdAt.slice(0, 10);

  const staffTotal = consulting.totalStaffCount || (consulting.roleHeadcounts ? consulting.roleHeadcounts.reduce((sum, r) => sum + r.count, 0) : 0);
  const accurateQty = staffTotal > 0 ? `${staffTotal * 2}~${staffTotal * 3}벌` : consulting.quantity;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs overflow-y-auto p-2 sm:p-4 md:p-6 flex items-start justify-center animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full my-2 sm:my-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1 sm:gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl transition-all cursor-pointer shrink-0 active:scale-95"
              title="목록으로 돌아가기"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">접수 목록으로</span>
              <span className="sm:hidden">목록</span>
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                  {displayId}
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">&middot; {displayDate} 접수</span>
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 truncate mt-0.5">
                {displayName} <span className="font-normal text-slate-500 text-xs">상세 내역</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* 공식 견적서 확인 및 승인 / PDF 버튼 */}
            {consulting.quotation ? (
              <button
                type="button"
                onClick={() => setIsQuotationViewOpen(true)}
                className={`px-2.5 sm:px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-95 ${
                  consulting.quotation.approval?.isApproved
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                title="공식 B2B 견적서 열람, 승인 및 PDF 다운로드"
              >
                <FileCheck className="w-4 h-4" />
                <span>
                  {consulting.quotation.approval?.isApproved
                    ? '승인 견적서 열람 (PDF)'
                    : '공식 견적서 확인/승인'}
                </span>
              </button>
            ) : (
              isAdmin && (
                <button
                  type="button"
                  onClick={() => setIsQuotationEditorOpen(true)}
                  className="px-2.5 sm:px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-95"
                  title="관리자: 고객에게 견적서 작성 및 발송"
                >
                  <Send className="w-4 h-4" />
                  <span>견적서 작성 및 발송</span>
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => window.print()}
              className="p-2 sm:px-3 sm:py-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="신청서 인쇄"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">인쇄</span>
            </button>

            {/* 인쇄 버튼 옆에 주문서 원본보기 버튼 */}
            <button
              type="button"
              onClick={() => setIsOrderSheetOpen(true)}
              className="px-2.5 sm:px-3.5 py-2 text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-95"
              title="정규 B2B 주문서 원본 서식 보기"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>주문서 원본보기</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
          {/* Top Title & Status Banner */}
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  {displayId}
                </span>
                <span className="text-xs text-slate-400">&middot;</span>
                <span className="text-xs text-slate-500">{displayDate} 접수</span>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                  {displayName}
                </h1>
                {isMyReq ? (
                  <span className="text-xs font-extrabold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-200">
                    내 신청건
                  </span>
                ) : (
                  <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-blue-600" />
                    <span>정보보호(**) 적용</span>
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {isMyReq ? (
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  consulting.status === '견적 승인완료'
                    ? 'bg-emerald-600 text-white'
                    : consulting.status === '견적 발송'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : consulting.status === '결제완료/작업진행'
                    ? 'bg-purple-600 text-white'
                    : consulting.status === '제작/출고완료'
                    ? 'bg-blue-700 text-white'
                    : 'bg-blue-600 text-white'
                }`}>
                  {consulting.status}
                </span>
              ) : (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>진행상태 비공개</span>
                </span>
              )}

              {isMyReq && (
                canCustomerEditOrDelete ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => onOpenCustomerAuth('edit')}
                      className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs active:scale-95"
                      title="시안 제작 전 내용 수정"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>수정</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenCustomerAuth('delete')}
                      className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs active:scale-95"
                      title="신청 취소 및 삭제"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>삭제</span>
                    </button>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>진행 중 (수정제한)</span>
                  </span>
                )
              )}
            </div>
          </div>

          {/* Consultation Stepper Progress (6단계 정밀 라이프사이클) */}
          {isMyReq ? (
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>B2B 디자인 컨설팅 &amp; 견적/작업 진행 단계</span>
                <span className="text-blue-700 font-bold">{consulting.status}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5 text-center text-[10px] sm:text-[11px]">
                <div className={`py-2 rounded-xl font-bold transition-all ${
                  ['접수완료', '컨설턴트 배정', '시안 제작중', '견적 발송', '견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(consulting.status)
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  1. 접수완료
                </div>
                <div className={`py-2 rounded-xl font-bold transition-all ${
                  ['컨설턴트 배정', '시안 제작중', '견적 발송', '견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(consulting.status)
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  2. 컨설턴트 배정
                </div>
                <div className={`py-2 rounded-xl font-bold transition-all ${
                  ['견적 발송', '견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(consulting.status)
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  3. 견적서 발송
                </div>
                <div className={`py-2 rounded-xl font-bold transition-all ${
                  ['견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(consulting.status)
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  4. 고객 승인완료
                </div>
                <div className={`py-2 rounded-xl font-bold transition-all ${
                  ['결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(consulting.status)
                    ? 'bg-purple-600 text-white shadow-2xs'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  5. 결제/작업착수
                </div>
                <div className={`py-2 rounded-xl font-bold transition-all ${
                  ['제작/출고완료', '상담 완료'].includes(consulting.status)
                    ? 'bg-blue-700 text-white shadow-2xs'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  6. 출고 및 배송
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 text-center space-y-2.5">
              <div className="w-12 h-12 rounded-full bg-slate-200/80 text-slate-500 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6 text-slate-500" />
              </div>
              <div className="text-sm font-extrabold text-slate-800">
                타 고객사 진행상태 및 세부정보 비공개
              </div>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                B2B 비즈니스 보안 정책에 따라, 타 고객사의 진행 상태, 품목 수량, 상세 상담 내역은 일체 열람하실 수 없습니다.
              </p>
            </div>
          )}

          {/* QUOTATION & APPROVAL SPOTLIGHT CARD (본인 신청건) */}
          {isMyReq && consulting.quotation && (
            <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
              consulting.quotation.approval?.isApproved
                ? 'bg-emerald-50/70 border-emerald-300'
                : 'bg-blue-50/80 border-blue-300'
            }`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-300">
                      {consulting.quotation.quotationNumber}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      MEDILYN B2B 공식 견적서
                    </h3>
                    {consulting.quotation.approval?.isApproved ? (
                      <span className="text-[11px] font-bold bg-emerald-600 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>고객 공식 승인 완료</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>고객 승인 대기중</span>
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-slate-600 flex flex-wrap items-center gap-2">
                    <span>최종 견적 금액 (공급가): <strong className="font-mono text-blue-700 font-bold text-sm">₩ {(consulting.quotation.supplyPrice - (consulting.quotation.discountAmount || 0) + (consulting.quotation.setupFee || 0)).toLocaleString()}</strong></span>
                    <span>&middot;</span>
                    <span>최종가 (VAT포함): <strong className="font-mono text-slate-900 font-bold">₩ {consulting.quotation.totalAmount.toLocaleString()}</strong></span>
                    <span>&middot;</span>
                    <span>품목: <strong>{consulting.quotation.items.length}종</strong></span>
                    <span>&middot;</span>
                    <span>담당: {consulting.quotation.quotedBy}</span>
                  </div>

                  {consulting.quotation.approval?.isApproved && (
                    <div className="text-[11px] text-emerald-800 font-medium pt-1 flex items-center gap-1.5 flex-wrap">
                      <span>✓ <strong>승인일시:</strong> {consulting.quotation.approval.approvedAt}</span>
                      <span>&middot;</span>
                      <span><strong>승인자:</strong> {consulting.quotation.approval.approverName}</span>
                      {consulting.quotation.approval.approvalMemo && (
                        <span>({consulting.quotation.approval.approvalMemo})</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setIsQuotationViewOpen(true)}
                    className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 ${
                      consulting.quotation.approval?.isApproved
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>
                      {consulting.quotation.approval?.isApproved
                        ? '공식 승인 견적서 열람 / PDF 다운로드'
                        : '견적서 열람 및 승인하기'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 타 고객사인 경우에만 보안 안내 노출 */}
          {!isMyReq && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-3 text-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <div className="font-bold text-slate-800">
                  B2B 고객사 정보 보호 적용 (주요정보 비공개)
                </div>
                <p className="text-slate-500 leading-relaxed text-[11px]">
                  타 고객사의 신청 내역은 개인정보 및 기업 비즈니스 보안 정책에 따라 업체명 마스킹, 진행상태, 신청 품목/수량 등이 철저히 비공개됩니다.
                </p>
              </div>
            </div>
          )}

          {/* Assigned Consultant & Specifications Matrix (본인 신청건만 열람) */}
          {isMyReq && (
            <>

              {/* Specifications Matrix */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900">
                  컨설팅 신청 상세 사양
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">업종 형태</span>
                    <span className="font-bold text-slate-900">{consulting.industry}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">기업 규모</span>
                    <span className="font-bold text-slate-900">{consulting.companySize}</span>
                  </div>

                  {/* 견적 희망 품목 상세 (2번 이미지 양식) */}
                  {consulting.productItems && consulting.productItems.length > 0 && (
                    <div className="sm:col-span-2 bg-blue-50/60 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-blue-900 font-bold text-xs flex items-center gap-1.5">
                          <span>견적 희망 품목 구성 ({consulting.productItems.length}종)</span>
                        </span>
                        <span className="text-xs font-bold text-blue-700 bg-white px-2.5 py-0.5 rounded-full border border-blue-200 shadow-2xs">
                          총 {consulting.productItems.reduce((s, p) => s + (Number(p.quantity) || 0), 0)}벌
                        </span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs bg-white rounded-lg border border-blue-200 overflow-hidden">
                          <thead className="bg-blue-100/70 text-slate-700 font-bold border-b border-blue-200">
                            <tr>
                              <th className="py-2 px-2.5 w-10 text-center">No.</th>
                              <th className="py-2 px-2.5">업종</th>
                              <th className="py-2 px-2.5">성별</th>
                              <th className="py-2 px-2.5">제품군</th>
                              <th className="py-2 px-2.5 text-center">수량</th>
                              <th className="py-2 px-2.5">상품 요청사항</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {consulting.productItems.map((item, idx) => (
                              <tr key={idx} className="hover:bg-slate-50">
                                <td className="py-2 px-2.5 text-center font-mono text-slate-400 font-bold">{idx + 1}</td>
                                <td className="py-2 px-2.5 font-semibold text-slate-700">{item.industry}</td>
                                <td className="py-2 px-2.5 font-semibold text-slate-700">{item.gender}</td>
                                <td className="py-2 px-2.5 font-bold text-blue-900">{item.customProductGroup || item.productGroup}</td>
                                <td className="py-2 px-2.5 text-center font-bold font-mono text-blue-700">{item.quantity}벌</td>
                                <td className="py-2 px-2.5 text-slate-600">{item.requestDetails || '-'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 직군별 인원 구성 (기존 데이터 호환) */}
                  {consulting.roleHeadcounts && consulting.roleHeadcounts.length > 0 && !consulting.productItems && (
                    <div className="sm:col-span-2 bg-blue-50/60 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-blue-900 font-bold text-xs flex items-center gap-1.5">
                          <span>직군별 인원 구성</span>
                        </span>
                        <span className="text-xs font-bold text-blue-700 bg-white px-2.5 py-0.5 rounded-full border border-blue-200 shadow-2xs">
                          총 {staffTotal}명
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {consulting.roleHeadcounts
                          .filter((rh) => rh.count > 0)
                          .map((rh, idx) => (
                            <span
                              key={idx}
                              className="bg-white px-3 py-1.5 rounded-xl border border-blue-200 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-1.5"
                            >
                              <span className="text-slate-600">{rh.role}</span>
                              <strong className="text-blue-600 font-bold">{rh.count}명</strong>
                            </span>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* 예상 주문 수량 */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">예상 주문 수량</span>
                    <span className="font-bold text-slate-900 text-sm">{accurateQty}</span>
                  </div>

                  {/* 중점 컨설팅 포인트 */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">중점 컨설팅 포인트</span>
                    <span className="font-bold text-blue-700">
                      {consulting.consultingPoints.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Attached Logo/CI Files if any */}
          {consulting.attachments && consulting.attachments.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-800 block mb-2">
                첨부 로고 / CI 파일
              </span>
              {isMyReq ? (
                <div className="flex flex-wrap gap-2">
                  {consulting.attachments.map((file, idx) => (
                    <div key={idx} className="bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 flex items-center gap-2 shadow-2xs">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>{file.name}</span>
                      <span className="text-slate-400 text-[11px]">({file.size})</span>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-xs text-slate-500">
                  🔒 첨부 파일은 고객사 보안을 위해 비공개(**) 처리되어 있습니다.
                </span>
              )}
            </div>
          )}

          {/* Customer Message (본인 신청건만 열람) */}
          {isMyReq && (
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 text-xs space-y-2.5">
              {consulting.title && (
                <div>
                  <span className="font-bold text-slate-700 block mb-1">상담 제목:</span>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-blue-900 font-bold">
                    {consulting.title}
                  </div>
                </div>
              )}
              <div>
                <span className="font-bold text-slate-700 block mb-1">상담 내용 (상세 요청사항):</span>
                <p className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-700 leading-relaxed whitespace-pre-line">
                  {consulting.message && 
                   consulting.message !== '별도 추가 요청사항 없음' &&
                   consulting.message !== consulting.title ? (
                    consulting.message
                  ) : consulting.title ? (
                    <span className="text-slate-500">상담 제목(위 선택 내용)으로 접수되었으며, 별도 추가 작성된 본문 내용은 없습니다.</span>
                  ) : (
                    consulting.message || '별도 요청사항 없음'
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Contact Info (본인 신청건만 열람) */}
          {isMyReq && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-100 p-4 sm:p-5 rounded-2xl border border-slate-200">
              <div>
                <span className="text-slate-500 block mb-0.5">신청 담당자</span>
                <span className="font-bold text-slate-900">{consulting.contactPerson}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">연락처</span>
                <span className="font-bold text-slate-900 font-mono">{consulting.phone}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500 block mb-0.5">이메일</span>
                <span className="font-medium text-slate-900">{consulting.email}</span>
              </div>
            </div>
          )}

          {/* CTA recommendation (Only for other companies' masked requests) */}
          {!isMyReq && (
            <div className="border border-blue-100 rounded-2xl p-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-slate-50 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  우리 병원도 B2B 맞춤 디자인 컨설팅을 무료로 받아보세요!
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                메디린(MEDILYN) 전담 디자이너가 귀원의 직군 구성과 선호 컬러에 맞춘 톤온톤 시그니처 랩가운/스크럽 시안 및 원단 스와치를 무료로 제안해 드립니다.
              </p>
              <div className="pt-1 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigateToConsulting();
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer transition-all active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>무료 B2B 디자인 컨설팅 신청하기</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Back Button Footer */}
        <div className="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>접수 목록으로 돌아가기</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
            <span>B2B 디자인 컨설팅 &middot; 메디린 아틀리에</span>
          </div>
        </div>
      </div>

      {/* Official B2B Original Order Sheet Modal */}
      <OriginalOrderSheetModal
        isOpen={isOrderSheetOpen}
        onClose={() => setIsOrderSheetOpen(false)}
        consulting={consulting}
      />

      {/* Official Quotation Viewer & Approval Modal */}
      <QuotationViewModal
        isOpen={isQuotationViewOpen}
        onClose={() => setIsQuotationViewOpen(false)}
        consulting={consulting}
        isMyReq={isMyReq}
        isAdmin={isAdmin}
        onUpdateConsulting={(updated) => {
          if (onUpdateConsulting) onUpdateConsulting(updated);
        }}
        onOpenQuotationEditor={(target) => {
          setIsQuotationEditorOpen(true);
        }}
      />

      {/* Admin Quotation Editor Modal */}
      <QuotationEditorModal
        isOpen={isQuotationEditorOpen}
        onClose={() => setIsQuotationEditorOpen(false)}
        consulting={consulting}
        onSaveQuotation={(updated) => {
          if (onUpdateConsulting) onUpdateConsulting(updated);
        }}
      />
    </div>
  );
};
