import React from 'react';
import { 
  Building2, 
  Scissors, 
  Gift, 
  Layers, 
  Award, 
  Check,
  Truck,
  Receipt
} from 'lucide-react';

interface GuideSectionProps {
  onNavigateToConsulting: (preset?: string) => void;
}

export const GuideSection: React.FC<GuideSectionProps> = ({
  onNavigateToConsulting,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Hero Intro: Customer Unmet Needs & Sales Conversion Hooking */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-snug">
          개원·리뉴얼로 새로운 <span className="text-blue-600">컨설팅과 견적</span>이 필요하신가요?
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          남들과 다른 유니크한 프리미엄 브랜드와 직군별 통일된 기업 이미지,<br className="hidden sm:inline" />
          대량주문 파격 할인 및 제판비 전액 무료 혜택까지!<br className="hidden sm:inline" />
          지금 바로 확인하세요.
        </p>
      </div>

      {/* 통합 B2B 이용 가이드 단일 라운드박스 */}
      <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 md:p-9 shadow-xs space-y-8">
        
        {/* 1. 상단 섹션: B2B 디자인컨설팅 & 대량 주문 특별 혜택 (Image 1) */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <Gift className="w-5 h-5 text-neutral-950" />
            <h2 className="text-lg font-bold text-neutral-950">B2B 디자인컨설팅 & 대량 주문 특별 혜택</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-50 rounded-2xl p-5 border border-blue-600 space-y-2">
              <div className="text-xs font-bold text-neutral-500">10벌 이상 주문</div>
              <div className="text-xl font-extrabold text-neutral-950">5% 기본 할인</div>
              <ul className="text-xs text-neutral-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600" /> 전담 디자이너 자수 시안 검토</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600" /> 세금계산서 발행</li>
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5 border border-blue-600 space-y-2 relative overflow-hidden">
              <span className="absolute top-3 right-3 text-[10px] font-bold bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                추천 혜택
              </span>
              <div className="text-xs font-bold text-blue-600">30SET 이상 주문</div>
              <div className="text-xl font-extrabold text-neutral-950">10% 할인 + 제판비 전액 무료</div>
              <ul className="text-xs text-neutral-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600" /> <strong className="text-neutral-950">로고 제판비 55,000원 100% 면제</strong></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600" /> 무료 샘플킷 대여</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600" /> 전담 담당자 배정</li>
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5 border border-blue-600 space-y-2">
              <div className="text-xs font-bold text-neutral-500">50SET 이상 대량주문</div>
              <div className="text-xl font-extrabold text-neutral-950">15% 최고 할인</div>
              <ul className="text-xs text-neutral-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600" /> 커스텀 디자인/원단칼라 변경 제작 가능</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-600" /> 개별 포장 및 분할 배송 서비스</li>
              </ul>
            </div>
          </div>

          {/* 2. 중단 섹션: 3개 안내 박스 유지 (중간 라인 삭제 및 간격 축소) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="bg-neutral-50 rounded-2xl p-5 sm:p-6 border border-blue-600 space-y-1.5">
              <div className="text-xs font-bold text-neutral-500">원클릭 간편 입력</div>
              <div className="text-xl font-extrabold text-neutral-950">쉬운 견적 신청</div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5 sm:p-6 border border-blue-600 space-y-1.5">
              <div className="text-xs font-bold text-blue-600">익일 견적서 발송</div>
              <div className="text-xl font-extrabold text-neutral-950">신속한 견적 처리</div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-5 sm:p-6 border border-blue-600 space-y-1.5">
              <div className="text-xs font-bold text-neutral-500">100% 매입 세액공제</div>
              <div className="text-xl font-extrabold text-neutral-950">세금계산서 발행</div>
            </div>
          </div>
        </div>

        {/* 미세 구분선 */}
        <div className="border-t border-neutral-100" />

        {/* 2-1. 정규 B2B 견적 승인 & 제작 프로세스 안내 (핵심 시스템 안내) */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-lg font-bold text-neutral-950 text-center">
              메디린 B2B 견적 발송 &middot; 고객 승인 &middot; 결제 및 제작 프로세스
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5 relative">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                STEP 01
              </span>
              <h3 className="font-bold text-slate-900 text-sm">컨설팅 신청서 작성</h3>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                병원명, 희망 제품군, 예상 수량 및 로고 자수 요청사항을 온라인으로 접수합니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5 relative">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                STEP 02
              </span>
              <h3 className="font-bold text-slate-900 text-sm">견적서 발송</h3>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                전담 디자이너가 세부 단가, 단체 할인율 및 납기를 반영한 정식 견적서를 고객에게 발송합니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-blue-50/70 border border-blue-300 rounded-2xl p-4 space-y-1.5 relative">
              <span className="text-[10px] font-bold text-white bg-blue-600 px-2 py-0.5 rounded shadow-2xs">
                STEP 03
              </span>
              <h3 className="font-bold text-blue-950 text-sm">고객승인 &amp; 발주신청</h3>
              <p className="text-blue-900 leading-relaxed text-[11px]">
                고객이 견적서를 검토 후 <strong>[공식 승인]</strong>하면 승인 일시가 기록되고 승인 인주가 날인된 <strong>PDF 다운로드</strong>가 가능합니다.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-emerald-50/70 border border-emerald-300 rounded-2xl p-4 space-y-1.5 relative">
              <span className="text-[10px] font-bold text-white bg-emerald-600 px-2 py-0.5 rounded shadow-2xs">
                STEP 04
              </span>
              <h3 className="font-bold text-emerald-950 text-sm">결제(입금) &amp; 생산 착수</h3>
              <p className="text-emerald-900 leading-relaxed text-[11px]">
                승인 후 결제 확인 즉시 아틀리에 컴퓨터 자수 및 맞춤 봉제 작업에 착수하며 실시간 대시보드에 기록됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 3. 하단 섹션: 컴퓨터 고정밀 자수 & 신청/발송 절차 상세 안내 */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-center">
            <Scissors className="w-5 h-5 text-neutral-950" />
            <h2 className="text-lg font-bold text-neutral-950">컴퓨터 고정밀 자수 & 서비스 안내</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-700">
            <div className="space-y-2.5 bg-neutral-50/70 p-4 rounded-2xl border border-neutral-200/70">
              <h3 className="font-bold text-neutral-950 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                최고급 고광택 자수사 사용
              </h3>
              <p className="leading-relaxed text-neutral-600">
                잦은 고온 세탁과 오토클레이브(멸균) 환경에서도 광택과 형태가 변하지 않는 최고 등급 폴리에스터실을 사용합니다.
              </p>
            </div>

            <div className="space-y-2.5 bg-neutral-50/70 p-4 rounded-2xl border border-neutral-200/70">
              <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                정밀 펀칭(Digitizing) 프로세스
              </h3>
              <p className="leading-relaxed text-neutral-600">
                복잡한 병원 엠블럼과 얇은 한글 서체도 왜곡 없이 원단에 일체감 있게 각인되도록 전문 디지타이저가 수작업으로 스티치 경로를 설계합니다.
              </p>
            </div>

            <div className="space-y-2.5 bg-neutral-50/70 p-4 rounded-2xl border border-neutral-200/70">
              <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                <Receipt className="w-4 h-4 text-blue-600" />
                서류 없는 1분 온라인 접수 & 세금계산서 즉시 처리
              </h3>
              <p className="leading-relaxed text-neutral-600">
                별도의 팩스나 복잡한 서류 제출 없이 온라인에서 1분 만에 신청서 작성이 완료되며, 기재해주신 사업자등록번호로 100% 매입 세액공제가 가능한 국세청 전자세금계산서를 지체 없이 당일 발행해 드립니다.
              </p>
            </div>

            <div className="space-y-2.5 bg-neutral-50/70 p-4 rounded-2xl border border-neutral-200/70">
              <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-600" />
                24시간 내 견적 회신 & 자수시안 제공
              </h3>
              <p className="leading-relaxed text-neutral-600">
                신청 접수 즉시 메디린 전담 디자이너가 배정되어 24시간 이내 1:1 맞춤 자수 시안 및 견적서를 회신해 드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* 미세 구분선 */}
        <div className="border-t border-neutral-100" />

        {/* 4. B2B 디자인 컨설팅 바로가기 CTA 버튼 */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onNavigateToConsulting}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98]"
          >
            <Building2 className="w-5 h-5 text-white" />
            <span>B2B 견적 및 디자인 컨설팅 신청 바로가기</span>
          </button>
        </div>

      </div>

    </div>
  );
};
