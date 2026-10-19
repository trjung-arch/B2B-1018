import React, { useState } from 'react';
import { 
  B2B_CORE_STEPS 
} from '../utils/statusHelper';
import { 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  Shirt, 
  Award, 
  Truck, 
  Palette, 
  Layers, 
  ShieldCheck, 
  Percent, 
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Props {
  onStartRequest: () => void;
}

export const GuideSection: React.FC<Props> = ({ onStartRequest }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '최소 주문 수량(MOQ)과 대량 할인 혜택이 어떻게 되나요?',
      a: '라린느 B2B 맞춤 컴퓨터 자수는 기본 10벌 이상부터 접수 가능합니다. 30벌, 50벌, 100벌, 500벌 이상 단위로 구간별 수량 할인이 적용되며, 50벌 이상 주문 시 자수 프로그램 초기 세팅비(펀칭비)가 전액 면제됩니다.'
    },
    {
      q: '자수 로고 AI 파일(일러스트레이터)이 없는 경우에도 제작이 가능한가요?',
      a: '네, 가능합니다. 고해상도 PNG, JPG, PDF 이미지를 첨부해주시면 라린느 전문 그래픽 디자이너가 컴퓨터 자수 전산화(Punching) 벡터 데이터로 정밀 변환 및 보정해드립니다.'
    },
    {
      q: '견적서 발송 후 실제 제품을 받아보기까지 기간이 얼마나 걸리나요?',
      a: '상담 신청 후 1영업일 이내 견적서 및 1차 디지털 시안이 발행됩니다. 고객 승인 및 결제 확인 후 영업일 기준 평균 7~10일 이내에 최종 검품 완료 및 출고 배송됩니다.'
    },
    {
      q: '세금계산서 발행과 법인카드 결제는 어떻게 진행되나요?',
      a: '신청서 작성 시 사업자등록번호를 기재해주시면 입금 확인 즉시 홈택스 전자세금계산서가 자동 발행됩니다. 법인카드 무이자 결제 링크 발행도 지원합니다.'
    }
  ];

  const embroideryTechniques = [
    {
      title: '일반 자수 (평면 다다미)',
      desc: '고밀도 촘촘한 평면 스티치로 로고의 섬세한 선과 텍스트를 가장 선명하고 내구성 높게 구현합니다.',
      tag: '가장 대중적 · 높은 세탁 내구성'
    },
    {
      title: '3D 볼륨 입체 자수',
      desc: '자수용 고밀도 우레탄 폼을 심재로 넣어 로고나 심볼이 도톰하게 튀어나오는 고급스러운 입체감을 연출합니다.',
      tag: '프리미엄 엠블럼 · 호텔/명품'
    },
    {
      title: '체인 스티치 (빈티지 체인)',
      desc: '사슬 모양의 고리 스티치로 클래식하고 아날로그한 빈티지 감성을 자아내며 카페/베이커리 유니폼에 인기입니다.',
      tag: '헤리티지 · 아날로그 감성'
    },
    {
      title: '메탈릭 금사/은사 특수자수',
      desc: '프랑스 수입 메탈릭 메탈사를 사용하여 은은한 광택과 호텔/VIP 유니폼에 어울리는 최상의 격조를 부여합니다.',
      tag: '럭셔리 · 고급 금사/은사'
    }
  ];

  return (
    <div className="space-y-12 py-4">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-8 sm:p-12 shadow-xl border border-slate-800">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            라린느 B2B 아틀리에 프리미엄 서비스
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            브랜드의 격을 높이는<br />
            <span className="text-amber-300 font-serif-brand italic">B2B 맞춤 컴퓨터 자수</span> & 컨설팅
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            호텔, 프리미엄 F&B, 프랜차이즈, 바이오/연구소 등 500개 이상의 기업이 신뢰하는 
            고밀도 정밀 컴퓨터 자수 제작 솔루션을 1영업일 내 맞춤 견적으로 만나보세요.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onStartRequest}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.02]"
            >
              온라인 견적 및 자수 상담 신청하기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-15 pointer-events-none select-none text-9xl">
          🧵
        </div>
      </div>

      {/* 4-Step Canonical Workflow */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Standard Workflow
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            라린느 B2B 4단계 진행 프로세스
          </h2>
          <p className="text-xs text-slate-500">
            신청부터 전자 견적서 발행, 고객 승인, 제작 및 출고까지 투명하게 진행됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {B2B_CORE_STEPS.map((step) => (
            <div
              key={step.id}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400 transition-all space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 group-hover:bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base transition-colors border border-amber-200/60">
                0{step.step}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{step.customerLabel}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.customerDesc}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>관리자 프로세스:</span>
                <span className="font-medium text-slate-700">{step.adminLabel.replace(/^\d+\.\s*/, '')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Techniques Showcase */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Embroidery Artistry
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            최고급 컴퓨터 자수 기법
          </h2>
          <p className="text-xs text-slate-500">
            의류 원단과 브랜드 CI 특성에 최적화된 자수 기법을 제안합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {embroideryTechniques.map((tech, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base">{tech.title}</h3>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {tech.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* B2B Benefits */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          라린느 기업 고객을 위한 4대 특별 혜택
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">수량별 파격 볼륨 할인</h3>
            <p className="text-slate-400 leading-relaxed">
              30/50/100/500벌 발주 시 최대 25%의 대량 제작 단가 할인을 제공합니다.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">디지털 자수 시안 무료 감리</h3>
            <p className="text-slate-400 leading-relaxed">
              본 생산 전 1:1 전산 시뮬레이션 및 실제 자수 컬러 스와치를 사전 검토합니다.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">전담 디자이너 1:1 배정</h3>
            <p className="text-slate-400 leading-relaxed">
              의류 소재, 세탁 빈도, 최적 자수 위치까지 전담 수석 디자이너가 직접 설계합니다.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">전자세금계산서 100% 발행</h3>
            <p className="text-slate-400 leading-relaxed">
              국세청 홈택스 정규 세금계산서 발행 및 법인 지출 증빙을 완벽 지원합니다.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-4">
          자주 묻는 질문 (FAQ)
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-amber-800 font-mono">Q.</span> {faq.q}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-slate-600 border-t border-slate-100 pt-3 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
