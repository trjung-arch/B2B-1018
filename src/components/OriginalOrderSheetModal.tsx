import React from 'react';
import { ConsultingRequest } from '../types';
import { getPerspectiveStatusLabel } from '../utils/statusHelper';
import { X, FileText, CheckCircle2, Building, Phone, Mail, Calendar, Layers, Palette } from 'lucide-react';

interface Props {
  consulting: ConsultingRequest;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
}

export const OriginalOrderSheetModal: React.FC<Props> = ({ consulting, isOpen, onClose, isAdmin = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">신청서 원본 전산 양식 (Order Sheet)</h2>
              <p className="text-xs text-slate-500">신청번호 {consulting.id} · 접수일시 {consulting.createdAt}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm">
          {/* Status Header Badge */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs text-slate-400 font-medium">현재 진행 상태</span>
              <div className="text-base font-bold text-slate-800 mt-0.5">
                {getPerspectiveStatusLabel(consulting.status, !isAdmin)}
              </div>
            </div>
            <div className="text-xs text-slate-500 sm:text-right">
              {consulting.consultantName && (
                <div>담당 컨설턴트: <span className="font-semibold text-slate-800">{consulting.consultantName}</span></div>
              )}
              {consulting.trackingNumber && (
                <div className="text-emerald-700 font-medium mt-0.5">운송장: {consulting.courierName} {consulting.trackingNumber}</div>
              )}
            </div>
          </div>

          {/* Section 1: Customer & Business Info */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5" /> 신청 고객 및 사업자 정보
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-xs">
              <div>
                <span className="text-xs text-slate-400">기업/브랜드명</span>
                <p className="font-semibold text-slate-900 mt-0.5">{consulting.companyName}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400">담당자 성함/직함</span>
                <p className="font-semibold text-slate-900 mt-0.5">{consulting.applicantName}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 flex items-center gap-1"><Phone className="w-3 h-3" /> 연락처</span>
                <p className="font-medium text-slate-800 mt-0.5">{consulting.phone}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 flex items-center gap-1"><Mail className="w-3 h-3" /> 이메일</span>
                <p className="font-medium text-slate-800 mt-0.5">{consulting.email}</p>
              </div>
              {consulting.businessNumber && (
                <div className="sm:col-span-2 pt-2 border-t border-slate-50">
                  <span className="text-xs text-slate-400">사업자등록번호 (세금계산서용)</span>
                  <p className="font-medium text-slate-800 mt-0.5">{consulting.businessNumber}</p>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Product & Order Details */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> 제작 품목 및 대량 발주 수량
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-xs">
              <div>
                <span className="text-xs text-slate-400">품목 카테고리</span>
                <p className="font-bold text-slate-900 mt-0.5">{consulting.category}</p>
              </div>
              <div>
                <span className="text-xs text-slate-400">발주 예정 수량</span>
                <p className="font-bold text-amber-900 text-base mt-0.5">{consulting.quantity.toLocaleString()} 벌/개</p>
              </div>
              <div>
                <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> 희망 납기일</span>
                <p className="font-semibold text-slate-800 mt-0.5">{consulting.expectedDeliveryDate}</p>
              </div>
              {consulting.budgetRange && (
                <div className="sm:col-span-3 pt-2 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs text-slate-400">희망 예산 범위</span>
                  <span className="text-xs font-medium text-slate-700">{consulting.budgetRange}</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Custom Embroidery Specification */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" /> 맞춤 컴퓨터 자수 세부 스펙
            </h3>
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/60 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-xs text-amber-900/70 font-medium">자수 기법</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.embroideryType}</p>
                </div>
                <div>
                  <span className="text-xs text-amber-900/70 font-medium">자수 부착 위치</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.placement}</p>
                </div>
                <div>
                  <span className="text-xs text-amber-900/70 font-medium">자수 크기(실측 규격)</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.sizeEstimate}</p>
                </div>
                <div>
                  <span className="text-xs text-amber-900/70 font-medium">문구 또는 디자인 내용</span>
                  <p className="font-semibold text-slate-900 mt-0.5">{consulting.embroiderySpec.textOrContent}</p>
                </div>
              </div>

              {consulting.embroiderySpec.threadColors && consulting.embroiderySpec.threadColors.length > 0 && (
                <div className="pt-2 border-t border-amber-200/50">
                  <span className="text-xs text-amber-900/70 font-medium">지정 자수사 색상:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {consulting.embroiderySpec.threadColors.map((color, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-xs bg-white px-2.5 py-1 rounded-md border border-amber-200 shadow-2xs font-medium text-slate-800">
                        <span className="w-2.5 h-2.5 rounded-full border border-slate-300" style={{ backgroundColor: color.split(' ')[0] }}></span>
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {consulting.uploadedFileName && (
                <div className="pt-2 border-t border-amber-200/50 flex items-center justify-between">
                  <span className="text-xs text-amber-900/70 font-medium">첨부 디자인 파일:</span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    📎 {consulting.uploadedFileName}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Detailed Customer Request */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">상담 문의 상세 내용 및 특이사항</h3>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 leading-relaxed whitespace-pre-line text-xs">
              {consulting.detailedRequest}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors text-xs"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
