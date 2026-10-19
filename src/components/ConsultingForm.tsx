import React, { useState } from 'react';
import { 
  ConsultingRequest, 
  ProductType, 
  EmbroideryPlacement, 
  EmbroideryType 
} from '../types';
import { 
  Send, 
  Upload, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  Palette, 
  Building, 
  Calendar,
  AlertCircle
} from 'lucide-react';

interface Props {
  onSubmitSuccess: (newRequest: ConsultingRequest) => void;
}

export const ConsultingForm: React.FC<Props> = ({ onSubmitSuccess }) => {
  const [companyName, setCompanyName] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');

  const [category, setCategory] = useState<ProductType>('프리미엄 린넨 앞치마');
  const [quantity, setQuantity] = useState<number>(30);
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState(
    new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
  );
  const [budgetRange, setBudgetRange] = useState('100만원 ~ 200만원');

  const [embroideryType, setEmbroideryType] = useState<EmbroideryType>('일반 자수 (평면 다다미)');
  const [placement, setPlacement] = useState<EmbroideryPlacement>('좌측 가슴 (기본 로고)');
  const [sizeEstimate, setSizeEstimate] = useState('가로 8cm x 세로 3cm');
  const [textOrContent, setTextOrContent] = useState('');
  const [threadColorInput, setThreadColorInput] = useState('#1E293B (다크 네이비), #D4AF37 (골드)');
  const [detailedRequest, setDetailedRequest] = useState('');
  const [fileName, setFileName] = useState('');

  // Sample quick fill for fast testing
  const handleQuickFill = (type: 'cafe' | 'hotel' | 'chef') => {
    if (type === 'cafe') {
      setCompanyName('블루문 커피랩 성수');
      setApplicantName('이도현 매니저');
      setPhone('010-4829-1029');
      setEmail('blue.moon@coffeelab.kr');
      setBusinessNumber('214-88-01928');
      setCategory('캔버스 바리스타 에이프런');
      setQuantity(40);
      setEmbroideryType('체인 스티치 (빈티지 감성)');
      setPlacement('좌측 가슴 (기본 로고)');
      setSizeEstimate('가로 7cm x 세로 3cm');
      setTextOrContent('BLUE MOON COFFEE LAB 영문 필기체');
      setDetailedRequest('성수 매장 바리스타용 캔버스 앞치마 40벌 맞춤 자수 의뢰합니다. 세탁에 강한 내열 자수사 사용 부탁드립니다.');
      setFileName('bluemoon_logo_vector.ai');
    } else if (type === 'chef') {
      setCompanyName('파인다이닝 라메르');
      setApplicantName('최현우 총괄셰프');
      setPhone('010-9912-3847');
      setEmail('chef.choi@lamer.co.kr');
      setBusinessNumber('109-81-22940');
      setCategory('셰프 자켓 / 조리복');
      setQuantity(60);
      setEmbroideryType('3D 볼륨 입체 자수');
      setPlacement('카라 / 넥라인');
      setSizeEstimate('가로 9cm x 세로 4cm');
      setTextOrContent('La Mer 골드 프렌치 엠블럼');
      setDetailedRequest('주방 조리복 및 홀 매니저 셔츠 자수 견적 요청드립니다. 1차 샘플 감리 원합니다.');
      setFileName('lamer_emblem.pdf');
    } else {
      setCompanyName('(주)글로벌 파트너스');
      setApplicantName('김혜원 인사총무팀장');
      setPhone('010-5511-9204');
      setEmail('hw.kim@globalpartners.com');
      setBusinessNumber('110-82-99014');
      setCategory('프리미엄 코튼 유니폼 셔츠');
      setQuantity(100);
      setEmbroideryType('일반 자수 (평면 다다미)');
      setPlacement('좌측 가슴 (기본 로고)');
      setSizeEstimate('가로 8cm x 세로 2.5cm');
      setTextOrContent('GLOBAL PARTNERS 영문 CI');
      setDetailedRequest('전사 직원 유니폼 100벌 대량 견적 요청. 세금계산서 발행 필요.');
      setFileName('global_ci_guideline.ai');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!companyName.trim() || !applicantName.trim() || !phone.trim()) {
      alert('회사명, 담당자 성함, 연락처를 모두 입력해 주세요.');
      return;
    }

    const newReqId = `REQ-2026-${Math.floor(100 + Math.random() * 900)}`;
    const colors = threadColorInput
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);

    const newRequest: ConsultingRequest = {
      id: newReqId,
      companyName,
      applicantName,
      phone,
      email: email || `${phone.replace(/[^0-9]/g, '')}@b2b.client.com`,
      businessNumber,
      category,
      quantity: Number(quantity) || 10,
      expectedDeliveryDate,
      budgetRange,
      embroiderySpec: {
        embroideryType,
        placement,
        sizeEstimate,
        textOrContent: textOrContent || `${companyName} 로고 자수`,
        threadColors: colors.length > 0 ? colors : ['#1E293B (다크 네이비)'],
      },
      uploadedFileName: fileName || 'logo_draft.ai',
      detailedRequest: detailedRequest || '신규 B2B 맞춤 컴퓨터 자수 제작 및 견적서 발행 요청 건입니다.',
      status: '접수완료',
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
    };

    onSubmitSuccess(newRequest);
  };

  return (
    <div className="max-w-3xl mx-auto py-4 space-y-6">
      {/* Title & Fast Testing Preset Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> B2B 기업 전용 온라인 창구
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              맞춤 컴퓨터 자수 & 대량제작 디자인컨설팅 신청
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              신청서 접수 즉시 전담 디자이너가 배정되며, 1영업일 이내에 세부 견적서가 발행됩니다.
            </p>
          </div>

          {/* Quick preset buttons for convenience */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-slate-400">예시 자동입력:</span>
            <button
              type="button"
              onClick={() => handleQuickFill('cafe')}
              className="text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-amber-100 hover:text-amber-900 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
            >
              성수 카페
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill('chef')}
              className="text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-amber-100 hover:text-amber-900 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
            >
              셰프웨어
            </button>
            <button
              type="button"
              onClick={() => handleQuickFill('hotel')}
              className="text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-amber-100 hover:text-amber-900 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
            >
              기업 유니폼
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-xs">
        {/* Section 1: Business & Contact Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Building className="w-4 h-4 text-amber-800" /> 1. 신청 기업 및 담당자 정보
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                회사명 / 브랜드명 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="예: 카페 루미에르 / (주)라린느"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500 font-medium"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                담당자 성함 및 직함 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                placeholder="예: 김민준 실장 / 이서연 팀장"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                휴대전화 / 유선번호 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000 (견적 문자 알림용)"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                이메일 주소 <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@company.com (전자견적서 수신)"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-semibold text-slate-700 block mb-1">
                사업자등록번호 (세금계산서 발행 시 필수)
              </label>
              <input
                type="text"
                value={businessNumber}
                onChange={(e) => setBusinessNumber(e.target.value)}
                placeholder="000-00-00000"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Product & Order Scale */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-800" /> 2. 제작 희망 품목 및 발주 규모
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">제작 품목 카테고리</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProductType)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500 font-medium"
              >
                <option value="프리미엄 린넨 앞치마">프리미엄 린넨 앞치마</option>
                <option value="캔버스 바리스타 에이프런">캔버스 바리스타 에이프런</option>
                <option value="셰프 자켓 / 조리복">셰프 자켓 / 조리복</option>
                <option value="호텔 컬렉션 린넨 셔츠">호텔 컬렉션 린넨 셔츠</option>
                <option value="프리미엄 코튼 유니폼 셔츠">프리미엄 코튼 유니폼 셔츠</option>
                <option value="호텔 페이스/배스 타월">호텔 페이스/배스 타월</option>
                <option value="헤비 캔버스 에코백">헤비 캔버스 에코백</option>
                <option value="기타 맞춤 제작 의류">기타 맞춤 제작 의류</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                예상 제작 수량 (벌/개) <span className="text-amber-800 font-bold">(최소 10벌)</span>
              </label>
              <input
                type="number"
                min="10"
                step="5"
                required
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 10)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500 font-bold text-amber-950"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">희망 납기일</label>
              <input
                type="date"
                required
                value={expectedDeliveryDate}
                onChange={(e) => setExpectedDeliveryDate(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="font-semibold text-slate-700 block mb-1">희망 예산 범위</label>
              <input
                type="text"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                placeholder="예: 200만원 ~ 300만원 / 벌당 4만원대 희망"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Custom Computer Embroidery Specs */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Palette className="w-4 h-4 text-amber-800" /> 3. 맞춤 컴퓨터 자수 세부 스펙
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">자수 기법 선택</label>
              <select
                value={embroideryType}
                onChange={(e) => setEmbroideryType(e.target.value as EmbroideryType)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              >
                <option value="일반 자수 (평면 다다미)">일반 자수 (평면 다다미 - 기본)</option>
                <option value="3D 볼륨 입체 자수">3D 볼륨 입체 자수 (볼록한 엠보)</option>
                <option value="체인 스티치 (빈티지 감성)">체인 스티치 (빈티지 사슬형)</option>
                <option value="패치/와펜 오바로크 부착">패치/와펜 오바로크 부착</option>
                <option value="메탈릭 금사/은사 특수자수">메탈릭 금사/은사 특수자수</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">자수 부착 위치</label>
              <select
                value={placement}
                onChange={(e) => setPlacement(e.target.value as EmbroideryPlacement)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              >
                <option value="좌측 가슴 (기본 로고)">좌측 가슴 (기본 로고 - 가슴 포켓 상단)</option>
                <option value="우측 가슴">우측 가슴</option>
                <option value="등판 중앙 (빅 로고/텍스트)">등판 중앙 (빅 로고/텍스트)</option>
                <option value="소매 끝단 (미니 심볼)">소매 끝단 (미니 심볼/이니셜)</option>
                <option value="앞치마 중앙 포켓">앞치마 중앙 포켓</option>
                <option value="카라 / 넥라인">카라 / 넥라인</option>
                <option value="기타 위치 상담">기타 위치 상담</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">예상 자수 크기(가로x세로)</label>
              <input
                type="text"
                value={sizeEstimate}
                onChange={(e) => setSizeEstimate(e.target.value)}
                placeholder="예: 가로 8cm x 세로 3cm"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">자수 문구 또는 로고 내용</label>
              <input
                type="text"
                value={textOrContent}
                onChange={(e) => setTextOrContent(e.target.value)}
                placeholder="예: 카페 브랜드 영문명 / 심볼마크"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-semibold text-slate-700 block mb-1">희망 자수사 색상</label>
              <input
                type="text"
                value={threadColorInput}
                onChange={(e) => setThreadColorInput(e.target.value)}
                placeholder="예: 다크 네이비, 샴페인 골드, 화이트"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-semibold text-slate-700 block mb-1">
                디자인 로고 파일 첨부 (AI, PDF, PNG, JPG)
              </label>
              <div className="p-4 border-2 border-dashed border-slate-200 hover:border-amber-400 rounded-xl bg-slate-50/50 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors">
                <Upload className="w-6 h-6 text-slate-400" />
                <div className="text-center">
                  <span className="font-semibold text-amber-800">파일 찾아보기</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {fileName ? `선택됨: ${fileName}` : '벡터 AI 파일 권장 (일반 이미지도 가능)'}
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  id="logo-upload"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFileName(e.target.files[0].name);
                    }
                  }}
                />
                <label
                  htmlFor="logo-upload"
                  className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 text-[11px] font-medium hover:bg-slate-100 cursor-pointer"
                >
                  파일 선택
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Detailed Request */}
        <div className="space-y-2">
          <label className="font-semibold text-slate-700 block">
            상세 문의 사항 및 원단/사이즈 요청
          </label>
          <textarea
            rows={4}
            value={detailedRequest}
            onChange={(e) => setDetailedRequest(e.target.value)}
            placeholder="원하시는 원단 종류, 컬러 배색, 세탁 내구성 요구사항, 납기 일정 등 자유롭게 기재해 주세요."
            className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Notice box */}
        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-[11px]">
            <p className="font-bold">신청서 제출 후 안내:</p>
            <p>
              신청 완료 즉시 시스템에 [1. 신청 접수완료] 상태로 등록되며, 담당 디자이너가 영업일 24시간 이내에 
              맞춤 단가 및 디지털 자수 감리가 포함된 [2. 전자 견적서]를 발행하여 [진행 현황 조회]에서 바로 확인하실 수 있습니다.
            </p>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 transition-all hover:scale-[1.01]"
        >
          <Send className="w-4 h-4" /> B2B 자수 디자인컨설팅 신청서 제출하기
        </button>
      </form>
    </div>
  );
};
