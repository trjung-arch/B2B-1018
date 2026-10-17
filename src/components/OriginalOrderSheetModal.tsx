import React from 'react';
import { 
  X, 
  Printer, 
  FileText, 
  Building2, 
  Calendar, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Stamp,
  ShieldCheck,
  Download
} from 'lucide-react';
import { ConsultingRequest } from '../types';

interface OriginalOrderSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  consulting: ConsultingRequest | null;
}

export const OriginalOrderSheetModal: React.FC<OriginalOrderSheetModalProps> = ({
  isOpen,
  onClose,
  consulting,
}) => {
  if (!isOpen || !consulting) return null;

  const totalQty = consulting.productItems && consulting.productItems.length > 0
    ? consulting.productItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0)
    : (consulting.totalStaffCount ? consulting.totalStaffCount * 2 : 0);

  const displayDate = consulting.createdAt.slice(0, 10);
  const formattedDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs overflow-y-auto p-2 sm:p-4 md:p-6 flex items-start justify-center animate-in fade-in duration-200 print:p-0 print:bg-white"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full my-2 sm:my-6 shadow-2xl border border-slate-200 overflow-hidden flex flex-col print:border-none print:shadow-none print:my-0 print:max-w-none">
        
        {/* Sticky Top Action Bar (인쇄 시 숨김) */}
        <div className="sticky top-0 z-30 bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 shadow-md print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">B2B 정규 주문서 원본</span>
                <span className="font-mono text-[11px] bg-slate-800 text-blue-300 px-2 py-0.5 rounded border border-slate-700">
                  {consulting.id}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                메디린 아틀리에 공식 규격 주문서 서식
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>주문서 인쇄 / PDF 저장</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Order Sheet Document Area */}
        <div className="p-6 sm:p-10 md:p-12 space-y-8 bg-white text-slate-900 font-sans print:p-6">
          
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <div className="font-serif tracking-[0.25em] text-sm font-bold text-neutral-500 mb-1">
                STUDIO MEDILYN ATELIER
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-2">
                <span>B2B 정규 주문서</span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full font-sans tracking-normal align-middle">
                  주문서 원본
                </span>
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                메디컬 & 뷰티 프리미엄 유니폼 디자인 컨설팅 및 제작 주문서
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1 sm:text-right shrink-0">
              <div className="flex sm:justify-end gap-2">
                <span className="text-slate-500">주문접수번호:</span>
                <span className="font-mono font-bold text-blue-700">{consulting.id}</span>
              </div>
              <div className="flex sm:justify-end gap-2">
                <span className="text-slate-500">접수일시:</span>
                <span className="font-semibold text-slate-800">{consulting.createdAt}</span>
              </div>
              <div className="flex sm:justify-end gap-2">
                <span className="text-slate-500">진행단계:</span>
                <span className="font-bold text-emerald-700">{consulting.status}</span>
              </div>
            </div>
          </div>

          {/* Supplier & Customer Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* 공급자 정보 */}
            <div className="border border-slate-300 rounded-2xl p-4 bg-slate-50/50 space-y-2.5">
              <div className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                <span>[공급자 정보] 수주처</span>
                <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  메디린 아틀리에
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 leading-relaxed">
                <span className="text-slate-500 font-medium">상호(법인명)</span>
                <span className="col-span-2 font-bold text-slate-800">메디린 아틀리에 주식회사</span>
                
                <span className="text-slate-500 font-medium">사업자등록번호</span>
                <span className="col-span-2 font-mono text-slate-800">211-88-92410</span>
                
                <span className="text-slate-500 font-medium">사업장 소재지</span>
                <span className="col-span-2 text-slate-800">서울특별시 강남구 압구정로 420 메디린 센터</span>
                
                <span className="text-slate-500 font-medium">고객지원 / 직통</span>
                <span className="col-span-2 text-slate-800">02-540-8890 (b2b@medilyn.co.kr)</span>
              </div>
            </div>

            {/* 발주처 (고객사) 정보 */}
            <div className="border border-blue-300 rounded-2xl p-4 bg-blue-50/30 space-y-2.5">
              <div className="font-bold text-blue-950 border-b border-blue-200 pb-1.5 flex items-center justify-between">
                <span>[발주처 정보] 주문 고객사</span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {consulting.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 leading-relaxed">
                <span className="text-slate-500 font-medium">병원/기업명</span>
                <span className="col-span-2 font-bold text-blue-900 text-sm">{consulting.companyName}</span>
                
                <span className="text-slate-500 font-medium">신청 담당자</span>
                <span className="col-span-2 font-bold text-slate-800">{consulting.contactPerson}</span>
                
                <span className="text-slate-500 font-medium">담당자 연락처</span>
                <span className="col-span-2 font-mono font-bold text-slate-800">{consulting.phone}</span>
                
                <span className="text-slate-500 font-medium">전자세금/이메일</span>
                <span className="col-span-2 font-medium text-slate-800">{consulting.email}</span>

                <span className="text-slate-500 font-medium">업종 / 기업규모</span>
                <span className="col-span-2 text-slate-800">{consulting.industry} &middot; {consulting.companySize}</span>
              </div>
            </div>
          </div>

          {/* 견적 희망 주문 제품군 및 수량 양식 (2번 이미지 양식 완벽 구현) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                  견적 희망 제품군 및 수량 명세서 (주문 내역)
                </h2>
              </div>
              {totalQty > 0 && (
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-mono">
                  총 {totalQty}벌 구성
                </span>
              )}
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-300">
              <table className="w-full text-left text-xs bg-white">
                <thead className="bg-slate-100 text-slate-800 font-extrabold border-b border-slate-300">
                  <tr>
                    <th className="py-3 px-3 text-center w-12 border-r border-slate-200">No.</th>
                    <th className="py-3 px-3 w-28 border-r border-slate-200">업종</th>
                    <th className="py-3 px-3 w-24 text-center border-r border-slate-200">성별</th>
                    <th className="py-3 px-4 w-44 border-r border-slate-200">제품군</th>
                    <th className="py-3 px-3 text-center w-28 border-r border-slate-200">수량</th>
                    <th className="py-3 px-4">상품 요청사항</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {consulting.productItems && consulting.productItems.length > 0 ? (
                    consulting.productItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80">
                        <td className="py-3 px-3 text-center font-mono font-bold text-slate-500 border-r border-slate-200">
                          {idx + 1}
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-700 border-r border-slate-200">
                          {item.industry}
                        </td>
                        <td className="py-3 px-3 text-center font-medium text-slate-700 border-r border-slate-200">
                          <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${
                            item.gender === '여성' ? 'bg-rose-50 text-rose-700' :
                            item.gender === '남성' ? 'bg-sky-50 text-sky-700' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {item.gender}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold text-blue-900 border-r border-slate-200">
                          {item.customProductGroup || item.productGroup}
                        </td>
                        <td className="py-3 px-3 text-center font-extrabold font-mono text-blue-700 text-sm border-r border-slate-200">
                          {item.quantity ? `${item.quantity}벌` : '-'}
                        </td>
                        <td className="py-3 px-4 text-slate-700 leading-relaxed">
                          {item.requestDetails || '-'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-6 text-center text-slate-400">
                        기재된 세부 품목 데이터가 없습니다. (예상 총 수량: {consulting.quantity})
                      </td>
                    </tr>
                  )}
                </tbody>
                <tfoot className="bg-slate-50 font-bold border-t-2 border-slate-300">
                  <tr>
                    <td colSpan={4} className="py-3 px-4 text-right text-slate-700 border-r border-slate-200">
                      총 주문 수량 합계:
                    </td>
                    <td className="py-3 px-3 text-center font-mono text-base font-black text-blue-700 border-r border-slate-200">
                      {totalQty > 0 ? `${totalQty}벌` : consulting.quantity}
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-500">
                      {consulting.productItems ? `총 ${consulting.productItems.length}개 품목 구성` : '-'}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Consultation Points & Special Requests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                중점 컨설팅 요청 포인트
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {consulting.consultingPoints.map((point, idx) => (
                  <span key={idx} className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-bold text-blue-800 shadow-2xs">
                    {point}
                  </span>
                ))}
              </div>
              <div className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                * 전담 디자이너가 귀원의 직군 구성과 요청 포인트에 맞춰 1:1 맞춤 원단 스와치 및 자수 시안을 제안합니다.
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-blue-600" />
                고객 추가 전달사항 및 비고
              </span>
              {consulting.title && (
                <div className="bg-blue-50/80 p-2.5 rounded-xl border border-blue-200 text-xs text-blue-950 font-bold">
                  <span className="text-blue-600 mr-1.5">[상담 제목]</span>
                  {consulting.title}
                </div>
              )}
              <div className="text-slate-700 leading-relaxed whitespace-pre-line bg-white p-2.5 rounded-xl border border-slate-200 min-h-[50px] text-xs">
                {consulting.message && 
                 consulting.message !== '별도 추가 요청사항 없음' &&
                 consulting.message !== consulting.title ? (
                  consulting.message
                ) : consulting.title ? (
                  <span className="text-slate-600">위 상담 제목으로 접수되었습니다.</span>
                ) : (
                  consulting.message || '별도 전달사항 없음'
                )}
              </div>
            </div>
          </div>

          {/* Attached CI/Logo Files if any */}
          {consulting.attachments && consulting.attachments.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <span className="font-bold text-slate-900 block mb-2">
                첨부된 병원/기업 CI 및 자수 로고 파일 ({consulting.attachments.length}건)
              </span>
              <div className="flex flex-wrap gap-2">
                {consulting.attachments.map((file, idx) => (
                  <div key={idx} className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 font-medium text-slate-700 flex items-center gap-1.5 shadow-2xs">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>{file.name}</span>
                    <span className="text-slate-400 text-[11px]">({file.size})</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Notice & Terms */}
          <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/70 text-xs text-slate-600 space-y-1.5 leading-relaxed">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>B2B 정규 주문 및 디자인 컨설팅 안내사항</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-500 pt-1">
              <li>본 주문서는 고객님의 B2B 상담 및 제작 의뢰를 확인하는 공식 접수 서식입니다.</li>
              <li>30SET 이상 대량 구매 시 로고 자수 제판비(55,000원) 100% 면제 혜택이 적용됩니다.</li>
              <li>접수 후 24시간 이내 배정된 전담 디자이너가 세부 시안 검토 및 공식 견적서를 회신해 드립니다.</li>
              <li>전자세금계산서는 기재해주신 사업자 정보로 발행되며 100% 매입 세액공제가 가능합니다.</li>
            </ul>
          </div>

          {/* Official Signature & Date */}
          <div className="pt-6 border-t-2 border-slate-900 text-center space-y-4">
            <div className="text-xs text-slate-600">
              상기와 같이 B2B 유니폼 제작 및 디자인 컨설팅을 정규 발주/신청합니다.
            </div>
            <div className="text-sm font-bold text-slate-900">
              {formattedDate}
            </div>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-800 px-4 sm:px-12">
              <div className="flex items-center gap-2">
                <span>발주처 (주문고객사) :</span>
                <span className="font-extrabold text-blue-900 text-sm">{consulting.companyName}</span>
                <span className="text-slate-400 font-normal">(서명 / 날인)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>수주처 (공급자) :</span>
                <span className="font-extrabold text-slate-900">메디린 아틀리에 주식회사</span>
                <span className="text-red-600 font-serif text-sm border border-red-300 px-1.5 py-0.5 rounded bg-red-50">
                  (직인생략)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer (인쇄 시 숨김) */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-slate-500">
            * 상단 [주문서 인쇄 / PDF 저장] 버튼을 눌러 공식 서식을 인쇄하거나 보관하실 수 있습니다.
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>인쇄</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs cursor-pointer shadow-xs transition-colors"
            >
              닫기
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
