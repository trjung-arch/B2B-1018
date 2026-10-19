import React, { useState } from 'react';
import { ConsultingRequest } from '../types';
import { 
  X, 
  Printer, 
  CheckCircle, 
  CheckCircle2, 
  ShieldAlert, 
  Building, 
  CreditCard, 
  Copy, 
  Check, 
  FileEdit,
  Clock,
  Sparkles
} from 'lucide-react';

interface Props {
  consulting: ConsultingRequest;
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  onCustomerApprove?: (requestId: string) => void;
  onOpenEditor?: () => void;
}

export const QuotationViewModal: React.FC<Props> = ({
  consulting,
  isOpen,
  onClose,
  isAdmin,
  onCustomerApprove,
  onOpenEditor
}) => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [showConfirmApprove, setShowConfirmApprove] = useState(false);

  if (!isOpen || !consulting.quotation) return null;

  const q = consulting.quotation;
  const isApproved = consulting.status === '견적 승인완료' || consulting.status === '입금확인요청' || consulting.status === '결제완료/작업진행' || consulting.status === '상담 완료';

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(`${q.bankName} ${q.accountNumber} ${q.accountHolder}`);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleConfirmCustomerApprove = () => {
    if (onCustomerApprove) {
      onCustomerApprove(consulting.id);
    }
    setShowConfirmApprove(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[94vh] overflow-y-auto border border-slate-200 flex flex-col">
        {/* Top Control Bar (Non-printable) */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between print:hidden rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif-brand tracking-widest text-amber-300 font-bold">
              LA LIGNE PARIS
            </span>
            <span className="text-slate-400 text-xs">|</span>
            <span className="text-xs font-semibold text-slate-200">
              공식 전자 견적서 ({q.quoteNumber})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> 인쇄 / PDF 출력
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Admin Warning Banner if Admin Mode */}
        {isAdmin && (
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-2.5 flex items-center justify-between text-xs text-amber-900 print:hidden">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>관리자 열람 모드:</strong> 고객 전용 승인 버튼은 실수 클릭 방지를 위해 관리자 모드에서 숨김 처리되어 있습니다.
              </span>
            </div>
            {consulting.status === '견적 발송' && onOpenEditor && (
              <button
                onClick={() => {
                  onClose();
                  onOpenEditor();
                }}
                className="text-amber-900 font-bold underline hover:text-amber-950 text-xs flex items-center gap-1 shrink-0 ml-3"
              >
                <FileEdit className="w-3.5 h-3.5" /> 견적 내용 수정하기
              </button>
            )}
          </div>
        )}

        {/* Printable Document Sheet */}
        <div className="p-8 sm:p-10 space-y-8 flex-1 bg-white text-slate-900">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-amber-800 tracking-wider uppercase font-serif-brand mb-1">
                LA LIGNE ATELIER · B2B EMBROIDERY
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                견 적 서 (QUOTATION)
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                문서번호: <span className="font-mono font-semibold text-slate-700">{q.quoteNumber}</span>
              </p>
            </div>

            <div className="text-right text-xs text-slate-600 space-y-0.5">
              <div>발행일자: <strong className="text-slate-900">{q.createdAt}</strong></div>
              <div>유효기간: <strong className="text-slate-900">{q.validUntil}까지</strong></div>
              <div>담당 컨설턴트: <strong className="text-slate-900">{consulting.consultantName || '라린느 본사 B2B팀'}</strong></div>
            </div>
          </div>

          {/* Supplier & Client Two-column Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Client (Recipient) */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                수신 (고객사)
              </div>
              <div className="text-base font-bold text-slate-900">
                {consulting.companyName} <span className="text-xs font-normal text-slate-600">귀하</span>
              </div>
              <div className="space-y-1 text-slate-600 pt-1">
                <div>담당자: {consulting.applicantName} 님</div>
                <div>연락처: {consulting.phone}</div>
                <div>이메일: {consulting.email}</div>
                {consulting.businessNumber && <div>사업자번호: {consulting.businessNumber}</div>}
              </div>
            </div>

            {/* Supplier (La Ligne) */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                공급자 (공급처)
              </div>
              <div className="text-base font-bold text-amber-950 font-serif-brand">
                (주)라린느 코리아 (La Ligne)
              </div>
              <div className="space-y-1 text-slate-600 pt-1">
                <div>사업자등록번호: 211-88-90412</div>
                <div>대표이사: 강다인 | 업태/종목: 제조업, 의류맞춤자수</div>
                <div>소재지: 서울특별시 성동구 연무장길 45, 라린느 아틀리에</div>
                <div>대표전화: 02-540-1016 | 이메일: b2b@laligne.co.kr</div>
              </div>
            </div>
          </div>

          {/* Total Amount Big Banner */}
          <div className="bg-amber-50/70 border-y-2 border-amber-800/40 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold text-amber-900">
              견적 합계 금액 (공급가액 + 부가가치세 10% 포함)
            </span>
            <span className="text-2xl font-black text-amber-950 font-serif-brand tracking-tight">
              일금 {q.totalAmount.toLocaleString()}원 정 (₩{q.totalAmount.toLocaleString()})
            </span>
          </div>

          {/* Itemized Table */}
          <div>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-300 font-bold">
                  <th className="py-2.5 px-3">No.</th>
                  <th className="py-2.5 px-3">품명 및 규격</th>
                  <th className="py-2.5 px-2 text-center">수량</th>
                  <th className="py-2.5 px-3 text-right">단가</th>
                  <th className="py-2.5 px-3 text-right">자수공임</th>
                  <th className="py-2.5 px-3 text-right">공급가액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {q.items.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 text-slate-400 font-mono">{idx + 1}</td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{item.name}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">{item.spec}</div>
                    </td>
                    <td className="py-3 px-2 text-center font-semibold">{item.quantity.toLocaleString()}</td>
                    <td className="py-3 px-3 text-right">{item.unitPrice.toLocaleString()}원</td>
                    <td className="py-3 px-3 text-right text-amber-800 font-medium">+{item.embroideryFee.toLocaleString()}원</td>
                    <td className="py-3 px-3 text-right font-bold text-slate-900">{item.amount.toLocaleString()}원</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-slate-300 text-slate-700 bg-slate-50/80">
                <tr>
                  <td colSpan={5} className="py-2 px-3 text-right font-semibold">품목 소계:</td>
                  <td className="py-2 px-3 text-right font-bold">{q.subtotal.toLocaleString()}원</td>
                </tr>
                {q.embroiderySetupFee > 0 && (
                  <tr>
                    <td colSpan={5} className="py-1.5 px-3 text-right text-slate-600">자수 펀칭 데이터 프로그램 세팅비:</td>
                    <td className="py-1.5 px-3 text-right font-semibold">+{q.embroiderySetupFee.toLocaleString()}원</td>
                  </tr>
                )}
                {q.discountAmount > 0 && (
                  <tr>
                    <td colSpan={5} className="py-1.5 px-3 text-right text-rose-600 font-medium">대량 발주 특별 할인:</td>
                    <td className="py-1.5 px-3 text-right text-rose-600 font-bold">-{q.discountAmount.toLocaleString()}원</td>
                  </tr>
                )}
                <tr>
                  <td colSpan={5} className="py-1.5 px-3 text-right text-slate-600">부가가치세 (VAT 10%):</td>
                  <td className="py-1.5 px-3 text-right font-semibold">+{q.vatAmount.toLocaleString()}원</td>
                </tr>
                <tr className="border-t border-slate-300 bg-amber-50/50">
                  <td colSpan={5} className="py-3 px-3 text-right font-bold text-slate-900 text-sm">최종 견적 총액:</td>
                  <td className="py-3 px-3 text-right font-extrabold text-amber-950 text-base font-serif-brand">
                    ₩{q.totalAmount.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Bank & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
              <div className="font-bold text-slate-700 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-amber-700" /> 결제 및 입금 계좌 안내
                </span>
                <button
                  type="button"
                  onClick={handleCopyAccount}
                  className="text-[11px] text-amber-800 hover:text-amber-900 font-semibold flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-amber-200"
                >
                  {copiedBank ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  {copiedBank ? '복사됨' : '계좌 복사'}
                </button>
              </div>
              <div className="text-slate-800 space-y-0.5">
                <div>입금은행: <strong>{q.bankName}</strong></div>
                <div>계좌번호: <strong className="font-mono">{q.accountNumber}</strong></div>
                <div>예금주: <strong>{q.accountHolder}</strong></div>
                <div className="text-[11px] text-slate-500 pt-1">
                  ※ 세금계산서는 결제 확인 즉시 입력해주신 사업자등록번호로 전자 발행됩니다.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5">
              <div className="font-bold text-slate-700">견적 유의사항 및 특약사항</div>
              <ul className="space-y-1 text-slate-600 text-[11px] list-disc list-inside">
                {q.notes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">{note}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stamp signature simulation */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <div>
              위와 같이 견적서를 제출합니다.<br />
              <strong className="text-slate-800 mt-1 block">주식회사 라린느 코리아 대표이사 강다인</strong>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-rose-600/70 text-rose-700 font-bold flex items-center justify-center text-[10px] transform -rotate-12 select-none shadow-2xs">
              라린느<br />직인생략
            </div>
          </div>
        </div>

        {/* Footer Actions (Non-printable) */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-b-2xl print:hidden">
          {/* Left state info */}
          <div className="text-xs">
            {isApproved ? (
              <span className="inline-flex items-center gap-1.5 font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                고객 승인 완료 ({q.approvedAt || '승인됨'})
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                <Clock className="w-4 h-4 text-amber-600" />
                고객 승인 대기중 (유효기간: {q.validUntil})
              </span>
            )}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors"
            >
              닫기
            </button>

            {/* QUESTION 2 IMPLEMENTATION:
                If user is ADMIN -> NEVER SHOW CUSTOMER APPROVAL BUTTON!
                Only show customer approval button when !isAdmin and status is '견적 발송'! */}
            {!isAdmin && consulting.status === '견적 발송' && (
              <button
                type="button"
                onClick={() => setShowConfirmApprove(true)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <CheckCircle className="w-4 h-4" /> 견적 승인하기 (주문 확정)
              </button>
            )}

            {!isAdmin && isApproved && (
              <button
                type="button"
                onClick={handleCopyAccount}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <CreditCard className="w-3.5 h-3.5" /> 입금 계좌 확인 및 복사
              </button>
            )}
          </div>
        </div>

        {/* Customer Approval Confirmation Modal */}
        {showConfirmApprove && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/70">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-slate-900">
                  견적 내용을 최종 승인하시겠습니까?
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  견적 총액 <strong>₩{q.totalAmount.toLocaleString()}</strong> 승인 후 맞춤 컴퓨터 자수 프로그램 세팅 및 원단 배치가 준비됩니다.
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-600">
                <div className="flex justify-between">
                  <span>품목 및 수량</span>
                  <span className="font-semibold text-slate-900">{consulting.category} {consulting.quantity}벌</span>
                </div>
                <div className="flex justify-between">
                  <span>납기 희망일</span>
                  <span className="font-semibold text-slate-900">{consulting.expectedDeliveryDate}</span>
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowConfirmApprove(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={handleConfirmCustomerApprove}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                >
                  승인 및 주문 확정
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
