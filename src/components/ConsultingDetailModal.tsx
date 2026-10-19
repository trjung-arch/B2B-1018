import React, { useState } from 'react';
import { ConsultingRequest, Quotation } from '../types';
import { 
  B2B_CORE_STEPS, 
  getPerspectiveStatusLabel, 
  getPerspectiveBadgeClass, 
  getProcessCurrentStep, 
  isStepActiveOrDone,
  canAdminCreateQuotation,
  canAdminEditQuotation
} from '../utils/statusHelper';
import { OriginalOrderSheetModal } from './OriginalOrderSheetModal';
import { QuotationViewModal } from './QuotationViewModal';
import { QuotationEditorModal } from './QuotationEditorModal';
import { 
  X, 
  FileText, 
  FileCheck, 
  FilePlus, 
  Edit3, 
  Truck, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Mail, 
  Calendar, 
  Palette, 
  Layers, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface Props {
  consulting: ConsultingRequest | null;
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  onCustomerApprove?: (requestId: string) => void;
  onSaveQuotation?: (requestId: string, quotation: Quotation, sendToCustomer: boolean) => void;
  onAdminStatusChange?: (requestId: string, newStatus: any) => void;
}

export const ConsultingDetailModal: React.FC<Props> = ({
  consulting,
  isOpen,
  onClose,
  isAdmin,
  onCustomerApprove,
  onSaveQuotation,
  onAdminStatusChange
}) => {
  const [showOriginalSheet, setShowOriginalSheet] = useState(false);
  const [showQuotationView, setShowQuotationView] = useState(false);
  const [showQuotationEditor, setShowQuotationEditor] = useState(false);

  if (!isOpen || !consulting) return null;

  const currentStep = getProcessCurrentStep(consulting.status);
  const hasQuotation = Boolean(consulting.quotation);
  const isFinished = consulting.status === '상담 완료';

  return (
    <>
      <div className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 flex flex-col">
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${getPerspectiveBadgeClass(consulting.status, !isAdmin)}`}>
                {getPerspectiveStatusLabel(consulting.status, !isAdmin)}
              </span>
              <div>
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>{consulting.companyName}</span>
                  <span className="text-slate-400 font-normal text-xs">({consulting.id})</span>
                </h2>
                <p className="text-xs text-slate-500">
                  신청일자: {consulting.createdAt} · 담당: {consulting.consultantName || '지정 대기'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper (4-Step Canonical Workflow) */}
          <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200">
            <div className="text-xs font-bold text-slate-500 mb-3 flex items-center justify-between">
              <span>B2B 4단계 진행 프로세스 현황</span>
              {isFinished && (
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ✓ 최종 출고 종료
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {B2B_CORE_STEPS.map((s) => {
                const { active, done } = isStepActiveOrDone(currentStep, s.step);
                return (
                  <div
                    key={s.id}
                    className={`p-2.5 rounded-xl border text-xs transition-all ${
                      active
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-950 font-bold shadow-2xs'
                        : done
                        ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900 font-semibold'
                        : 'bg-white border-slate-200/80 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          active
                            ? 'bg-amber-600 text-white'
                            : done
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {done ? '✓' : s.step}
                      </span>
                      <span className="truncate">
                        {isAdmin ? s.adminLabel.replace(/^\d+\.\s*/, '') : s.customerLabel.replace(/^\d+\.\s*/, '')}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-1">
                      {isAdmin ? s.adminDesc : s.customerDesc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 text-sm flex-1">
            {/* Courier Tracking if available */}
            {consulting.trackingNumber && (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-800">택배 배송 및 출고 정보</span>
                    <div className="text-sm font-bold text-emerald-950">
                      {consulting.courierName || 'CJ대한통운'} {consulting.trackingNumber}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200">
                  배송중 / 출고완료
                </span>
              </div>
            )}

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Client Info */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" /> 신청 고객 정보
                </h3>
                <div className="text-xs space-y-1">
                  <div>회사명: <strong className="text-slate-900">{consulting.companyName}</strong></div>
                  <div>담당자: <span className="text-slate-800 font-medium">{consulting.applicantName}</span></div>
                  <div>연락처: <span className="text-slate-800">{consulting.phone}</span></div>
                  <div>이메일: <span className="text-slate-800">{consulting.email}</span></div>
                  {consulting.businessNumber && <div>사업자번호: <span className="text-slate-600">{consulting.businessNumber}</span></div>}
                </div>
              </div>

              {/* Order Info */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> 제작 품목 및 수량
                </h3>
                <div className="text-xs space-y-1">
                  <div>품목: <strong className="text-slate-900">{consulting.category}</strong></div>
                  <div>발주 수량: <strong className="text-amber-800 text-sm">{consulting.quantity.toLocaleString()}벌</strong></div>
                  <div>희망 납기일: <span className="text-slate-800 font-medium">{consulting.expectedDeliveryDate}</span></div>
                  {consulting.budgetRange && <div>희망 예산: <span className="text-slate-600">{consulting.budgetRange}</span></div>}
                </div>
              </div>
            </div>

            {/* Embroidery Spec */}
            <div className="p-4 rounded-xl border border-amber-200/70 bg-amber-50/40 space-y-3">
              <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-amber-700" /> 컴퓨터 자수 맞춤 스펙
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500">자수 기법:</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.embroideryType}</p>
                </div>
                <div>
                  <span className="text-slate-500">부착 위치:</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.placement}</p>
                </div>
                <div>
                  <span className="text-slate-500">자수 크기:</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.sizeEstimate}</p>
                </div>
                <div>
                  <span className="text-slate-500">자수 내용/로고:</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.textOrContent}</p>
                </div>
              </div>

              {consulting.uploadedFileName && (
                <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-600">첨부 디자인 파일:</span>
                  <span className="font-semibold text-blue-700 bg-white px-2.5 py-0.5 rounded border border-blue-200">
                    📎 {consulting.uploadedFileName}
                  </span>
                </div>
              )}
            </div>

            {/* Detailed Request */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5 text-xs">
              <span className="font-bold text-slate-600">고객 상세 요청사항:</span>
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                {consulting.detailedRequest}
              </p>
            </div>

            {/* Quotation preview card if exists */}
            {hasQuotation && (
              <div className="p-4 rounded-xl border-2 border-amber-700/30 bg-amber-50/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      전자 견적서 발행됨
                    </span>
                    <span className="text-xs font-mono text-slate-500">{consulting.quotation?.quoteNumber}</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 mt-1">
                    총 견적액: ₩{consulting.quotation?.totalAmount.toLocaleString()}원
                    <span className="text-xs font-normal text-slate-500 ml-1.5">(VAT 포함)</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowQuotationView(true)}
                  className="px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <FileCheck className="w-4 h-4" /> 견적서 전문 열람
                </button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl">
            <button
              type="button"
              onClick={() => setShowOriginalSheet(true)}
              className="px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" /> 신청서 원본 전산 양식
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors"
              >
                닫기
              </button>

              {/* ADMIN ACTIONS:
                  QUESTION 1 GUARD:
                  If it's already finished ('상담 완료'), paid ('결제완료/작업진행'), or has quotation,
                  canAdminCreateQuotation returns FALSE, so "견적서 작성" button is NEVER shown! */}
              {isAdmin && canAdminCreateQuotation(consulting) && (
                <button
                  type="button"
                  onClick={() => setShowQuotationEditor(true)}
                  className="px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <FilePlus className="w-3.5 h-3.5" /> 견적서 작성하기
                </button>
              )}

              {/* Edit quotation only if draft/sent and not approved yet */}
              {isAdmin && canAdminEditQuotation(consulting) && (
                <button
                  type="button"
                  onClick={() => setShowQuotationEditor(true)}
                  className="px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 font-semibold hover:bg-amber-100 text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" /> 견적서 수정
                </button>
              )}

              {/* QUESTION 2 GUARD:
                  If isAdmin is TRUE, customer approval action is NOT rendered here or anywhere in admin view!
                  Only customer (!isAdmin) sees "견적서 확인 및 승인하기" */}
              {!isAdmin && consulting.status === '견적 발송' && hasQuotation && (
                <button
                  type="button"
                  onClick={() => setShowQuotationView(true)}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <CheckCircle2 className="w-4 h-4" /> 견적 확인 및 승인하기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Child Modals */}
      <OriginalOrderSheetModal
        consulting={consulting}
        isOpen={showOriginalSheet}
        onClose={() => setShowOriginalSheet(false)}
        isAdmin={isAdmin}
      />

      <QuotationViewModal
        consulting={consulting}
        isOpen={showQuotationView}
        onClose={() => setShowQuotationView(false)}
        isAdmin={isAdmin}
        onCustomerApprove={onCustomerApprove}
        onOpenEditor={() => setShowQuotationEditor(true)}
      />

      {onSaveQuotation && (
        <QuotationEditorModal
          consulting={consulting}
          isOpen={showQuotationEditor}
          onClose={() => setShowQuotationEditor(false)}
          onSaveQuotation={onSaveQuotation}
        />
      )}
    </>
  );
};
