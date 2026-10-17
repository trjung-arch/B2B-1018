import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Upload, 
  FileText, 
  ChevronDown, 
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  AlertCircle,
  Edit3,
  Sparkles,
  Zap,
  Clock,
  MessageSquare,
  BookmarkCheck,
  CheckCircle2,
  Users,
  Plus,
  Minus,
  RotateCcw,
  Trash2,
  X,
  Info,
  Lock,
  Eye,
  EyeOff,
  PenLine
} from 'lucide-react';
import { IndustryType, CompanySizeType, ConsultingPointType, ConsultingRequest, ConsultingProductItem, RoleHeadcount } from '../types';
import {
  CONSULTING_INDUSTRIES,
  CONSULTING_GENDERS,
  getProductOptions,
  getDefaultProductItems,
  PRODUCT_CATALOG_BY_INDUSTRY_GENDER
} from '../data/consultingProducts';


interface ConsultingFormProps {
  onSubmitSuccess: (newRequest: ConsultingRequest) => void;
  onNavigateToHistory: (id?: string) => void;
  initialPreset?: string;
}

export const ConsultingForm: React.FC<ConsultingFormProps> = ({
  onSubmitSuccess,
  onNavigateToHistory,
  initialPreset,
}) => {
  // Current Form Step: 1 (Options) or 2 (Customer Info)
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  // Step 1 Options
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>('메디컬/의료');
  const [selectedSize, setSelectedSize] = useState<CompanySizeType>('중형 (30인 이상 60인 미만)');
  const [selectedPoints, setSelectedPoints] = useState<ConsultingPointType[]>(['디자인', '기능/원단']);

  // Product Items State (2번 이미지 양식: 견적 희망 제품군 및 수량 양식)
  const [productItems, setProductItems] = useState<ConsultingProductItem[]>(() =>
    getDefaultProductItems('메디컬/의료')
  );
  const [isAutoQuantityApplied, setIsAutoQuantityApplied] = useState(true);

  // Step 2 Customer & Contact Info (Required fields start empty so user must fill them)
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [emailId, setEmailId] = useState('');
  const [emailDomain, setEmailDomain] = useState('gmail.com');
  const [customDomain, setCustomDomain] = useState('');
  const [isCustomDomain, setIsCustomDomain] = useState(false);
  const [customerPassword, setCustomerPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [quantity, setQuantity] = useState('30벌');
  // Quick message templates (상담 제목용 드롭다운 템플릿)
  const quickTemplates = [
    '🏥 개원·리뉴얼 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.',
    '💎 우리병원만의 독보적인 시그니처 핏 및 최고급 자수 시안 문의합니다.',
    '👔 원장단·간호사·상담실장 직군별 조화로운 톤앤매너 디자인 컨설팅 요청합니다.',
    '💰 30SET 이상 대량주문에 따른 단체할인율과 로고 제판비 전액 지원 견적 요청합니다.',
    '🧵 원단 스와치북 및 사이즈별 실물 샘플 킷 대여 신청합니다.'
  ];

  // 상담 제목 (드롭다운 접이식 선택 또는 직접 입력)
  const [consultingTitle, setConsultingTitle] = useState('🏥 개원·리뉴얼 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.');
  const [selectedTemplateKey, setSelectedTemplateKey] = useState<string>('🏥 개원·리뉴얼 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.');
  const [isTemplateDropdownOpen, setIsTemplateDropdownOpen] = useState(false);
  // 상담 내용 (추가 상세 기입)
  const [message, setMessage] = useState('');

  // Quick industry & customer unmet needs presets
  const industryPresets = [
    {
      name: '🏥 새로운 병원 이미지 (개원/리뉴얼)',
      industry: '메디컬/의료' as IndustryType,
      size: '중형 (30인 이상 60인 미만)' as CompanySizeType,
      points: ['디자인', '기능/원단', '빠른 납기'] as ConsultingPointType[],
      qty: '30~50벌',
      defaultMessage: '🏥 개원/리뉴얼 오픈 일정에 맞춘 병원 이미지 쇄신 및 빠른 납기 견적을 신청합니다.'
    },
    {
      name: '💎 우리병원 유니크 프리미엄 (시그니처/자수)',
      industry: '메디컬/의료' as IndustryType,
      size: '중형 (30인 이상 60인 미만)' as CompanySizeType,
      points: ['디자인', '로고/자수 커스텀', '기능/원단'] as ConsultingPointType[],
      qty: '30~60벌',
      defaultMessage: '💎 흔하지 않은 우리 병원만의 독보적 시그니처 핏 및 최고급 독일사 자수 커스텀 컨설팅을 요청합니다.'
    },
    {
      name: '🏢 기업 브랜드 이미지 수립 (직군별 통일)',
      industry: '기업/오피스' as IndustryType,
      size: '대형 (60인 이상)' as CompanySizeType,
      points: ['디자인', '로고/자수 커스텀', '가격'] as ConsultingPointType[],
      qty: '50~100벌',
      defaultMessage: '🏢 임직원 소속감 강화 및 직군별(원무/간호/상담) 통일된 기업 브랜드 이미지 수립 컨설팅을 희망합니다.'
    },
    {
      name: '💰 대량주문 특별 견적 & 혜택 (30SET+)',
      industry: '메디컬/의료' as IndustryType,
      size: '대형 (60인 이상)' as CompanySizeType,
      points: ['가격', '기능/원단', '로고/자수 커스텀'] as ConsultingPointType[],
      qty: '50벌 이상',
      defaultMessage: '💰 30SET 이상 대량주문에 따른 단체할인율과 로고 자수 제판비(55,000원) 전액 면제 혜택 견적을 요청합니다.'
    }
  ];

  // Attachment state
  const [attachedFiles, setAttachedFiles] = useState<{ name: string; size: string }[]>([
    { name: 'medilyn_hospital_logo.ai', size: '1.4 MB' }
  ]);
  const [isDragging, setIsDragging] = useState(false);

  // Form submit state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createdRequestId, setCreatedRequestId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  const industries: IndustryType[] = ['메디컬/의료', '에스테틱/뷰티', '식음료/F&B', '호텔/스파', '기타/연구소'];

  const companySizes: { type: CompanySizeType; title: string; sub: string }[] = [
    { type: '소형 (30인 미만)', title: '소형', sub: '30인 미만' },
    { type: '중형 (30인 이상 60인 미만)', title: '중형', sub: '30인 이상 60인 미만' },
    { type: '대형 (60인 이상)', title: '대형', sub: '60인 이상' },
  ];

  const consultingPoints: ConsultingPointType[] = ['디자인', '기능/원단', '가격', '빠른 납기', '로고/자수 커스텀'];

  // Smart phone formatting
  const handlePhoneChange = (val: string) => {
    const raw = val.replace(/[^0-9]/g, '');
    let formatted = raw;
    if (raw.length <= 3) {
      formatted = raw;
    } else if (raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length <= 11) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    } else {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setPhone(formatted);
    if (errorMessage) setErrorMessage('');
  };

  // Product item calculations
  const totalProductQty = productItems.reduce(
    (sum, item) => sum + (Number(item.quantity) || 0),
    0
  );

  // Sync recommended quantity dynamically while auto reflection is active
  useEffect(() => {
    if (isAutoQuantityApplied && totalProductQty > 0) {
      setQuantity(`${totalProductQty}벌`);
    }
  }, [isAutoQuantityApplied, totalProductQty]);

  // Product item manipulation handlers
  const handleAddProductItem = () => {
    const currentInd = selectedIndustry.includes('메디컬') ? '메디컬'
      : selectedIndustry.includes('에스테틱') ? '에스테틱'
      : selectedIndustry.includes('호텔') ? '호텔/스파'
      : selectedIndustry.includes('기업') ? '기업'
      : selectedIndustry.includes('연구소') ? '기타연구소'
      : selectedIndustry.includes('식음료') || selectedIndustry.includes('F&B') ? '식음료/F&B'
      : '메디컬';

    const defaultGender = '여성';
    const opts = getProductOptions(currentInd, defaultGender);
    const newRow: ConsultingProductItem = {
      id: `item-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      industry: currentInd,
      gender: defaultGender,
      productGroup: opts[0] || '스크럽 상의',
      quantity: 10,
      requestDetails: '',
    };
    setProductItems(prev => [...prev, newRow]);
  };

  const handleRemoveProductItem = (idx: number) => {
    if (productItems.length <= 1) {
      setProductItems([{
        id: `item-${Date.now()}`,
        industry: '메디컬',
        gender: '여성',
        productGroup: '스크럽 상의',
        quantity: 10,
        requestDetails: '',
      }]);
      return;
    }
    setProductItems(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUpdateProductItem = (
    idx: number,
    field: keyof ConsultingProductItem,
    val: any
  ) => {
    setProductItems(prev => {
      const next = [...prev];
      const target = { ...next[idx], [field]: val };

      if (field === 'industry' || field === 'gender') {
        const available = getProductOptions(target.industry, target.gender);
        if (target.productGroup !== '직접 입력' && !available.includes(target.productGroup)) {
          target.productGroup = available[0] || '직접 입력';
        }
      }

      next[idx] = target;
      return next;
    });
  };

  const handleResetProductItems = () => {
    setProductItems(getDefaultProductItems(selectedIndustry));
    setIsAutoQuantityApplied(true);
  };

  const handleSelectIndustry = (newIndustry: IndustryType) => {
    setSelectedIndustry(newIndustry);
    setProductItems(getDefaultProductItems(newIndustry));
  };

  const applyPreset = (preset: typeof industryPresets[0]) => {
    setSelectedIndustry(preset.industry);
    setSelectedSize(preset.size);
    setSelectedPoints(preset.points);
    setQuantity(preset.qty);
    if (preset.defaultMessage) {
      setConsultingTitle(preset.defaultMessage);
      setSelectedTemplateKey(preset.defaultMessage);
    }
    setIsAutoQuantityApplied(false);
    setProductItems(getDefaultProductItems(preset.industry));
  };

  // If initialPreset was provided from GuideSection unmet needs card
  useEffect(() => {
    if (initialPreset) {
      const matched = industryPresets.find(p => p.name.includes(initialPreset) || initialPreset.includes(p.name.replace(/^[^\s]+\s*/, '')));
      if (matched) {
        applyPreset(matched);
      }
    }
  }, [initialPreset]);

  const togglePoint = (point: ConsultingPointType) => {
    if (selectedPoints.includes(point)) {
      if (selectedPoints.length > 1) {
        setSelectedPoints(selectedPoints.filter((p) => p !== point));
      }
    } else {
      setSelectedPoints([...selectedPoints, point]);
    }
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === 'custom') {
      setIsCustomDomain(true);
      setEmailDomain('');
    } else {
      setIsCustomDomain(false);
      setEmailDomain(val);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setAttachedFiles([...attachedFiles, { name: file.name, size: `${sizeMb} MB` }]);
    }
  };

  const goToStep2 = () => {
    setErrorMessage('');
    if (productItems.length === 0 || totalProductQty <= 0) {
      setErrorMessage('직군별 희망 유니폼 품목 및 수량을 최소 1벌 이상 설정해주세요.');
      return;
    }
    if (selectedPoints.length === 0) {
      setErrorMessage('맞춤 컨설팅 핵심 주안점을 1개 이상 선택해주세요.');
      return;
    }
    if (!consultingTitle || consultingTitle.trim() === '') {
      setConsultingTitle('🏥 개원·리뉴얼 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.');
      setSelectedTemplateKey('🏥 개원·리뉴얼 오픈 일정에 맞춘 긴급 납기 견적을 희망합니다.');
    }
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToStep1 = () => {
    setErrorMessage('');
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!companyName || !companyName.trim()) {
      setErrorMessage('기관/병원명을 입력해주세요.');
      document.getElementById('input-company-name')?.focus();
      return;
    }

    if (!contactPerson || !contactPerson.trim()) {
      setErrorMessage('담당자명을 입력해주세요.');
      document.getElementById('input-contact-person')?.focus();
      return;
    }

    const rawPhone = phone.replace(/[^0-9]/g, '');
    if (!rawPhone || rawPhone.length < 9) {
      setErrorMessage('연락처를 정확히 입력해주세요 (9~11자리 숫자)');
      document.getElementById('input-phone')?.focus();
      return;
    }

    if (!emailId || !emailId.trim()) {
      setErrorMessage('이메일 아이디를 입력해주세요.');
      document.getElementById('input-email-id')?.focus();
      return;
    }

    if (isCustomDomain && (!customDomain || !customDomain.trim())) {
      setErrorMessage('이메일 도메인을 입력해주세요.');
      document.getElementById('input-email-domain')?.focus();
      return;
    }

    if (!quantity || !quantity.trim()) {
      setErrorMessage('예상 수량을 선택해주세요.');
      return;
    }

    if (!consultingTitle || !consultingTitle.trim()) {
      setErrorMessage('상담 제목을 선택하거나 직접 입력해주세요.');
      document.getElementById('input-consulting-title')?.focus();
      return;
    }

    if (!customerPassword || customerPassword.trim().length < 4) {
      setErrorMessage('시안 제작 전 내용 수정 및 취소/삭제를 위한 비밀번호 4자리 이상을 설정해주세요.');
      document.getElementById('input-consulting-password')?.focus();
      return;
    }

    const fullEmail = isCustomDomain 
      ? `${emailId}@${customDomain || 'domain.com'}`
      : `${emailId}@${emailDomain}`;

    const newId = `LN-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newRequest: ConsultingRequest = {
      id: newId,
      createdAt: new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      title: consultingTitle.trim(),
      companyName: companyName || '미지정 기업',
      contactPerson: contactPerson || '담당자',
      phone: rawPhone,
      email: fullEmail,
      password: customerPassword.trim(),
      industry: selectedIndustry,
      companySize: selectedSize,
      productItems: productItems,
      totalStaffCount: totalProductQty,
      consultingPoints: selectedPoints,
      quantity,
      message: message.trim() ? message.trim() : (consultingTitle.trim() || '별도 추가 요청사항 없음'),
      attachments: attachedFiles,
      status: '접수완료',
      assignedConsultant: '이지원 수석 B2B 디자이너 (배정중)',
    };

    setCreatedRequestId(newId);
    try {
      const savedIds = JSON.parse(localStorage.getItem('medilyn_my_consulting_ids') || '[]');
      const updatedIds = [newId, ...(Array.isArray(savedIds) ? savedIds.filter((x: string) => x !== newId) : [])];
      localStorage.setItem('medilyn_my_consulting_ids', JSON.stringify(updatedIds));
    } catch (e) {
      console.error(e);
    }
    setIsSubmitted(true);
    onSubmitSuccess(newRequest);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Render Complete Screen ---
  if (isSubmitted) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div 
          id="consulting-success-card"
          className="border-2 border-blue-500 rounded-3xl bg-white p-8 md:p-12 shadow-sm relative overflow-hidden"
        >
          {/* Top aesthetic label */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs tracking-wider text-blue-600 font-bold">
                신청 접수 완료
              </span>
            </div>
            <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> 알림톡 접수증 발송완료
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-4">
            B2B / 대량주문 컨설팅<br />
            신청이 완료되었습니다.
          </h1>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal mb-8">
            전문 컨설턴트가 신청 내용을 확인한 후 <strong className="font-semibold text-blue-600">영업일 기준 1일 이내</strong> 고객님의 운영 환경과 예산에 맞는 맞춤 견적 및 최적의 솔루션을 제안해 드리겠습니다.
          </p>

          {/* Application Summary Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 text-sm">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <span className="text-slate-500 font-medium">접수 번호</span>
              <span className="font-mono font-bold text-blue-700 bg-white px-2.5 py-0.5 rounded-md border border-blue-200">{createdRequestId}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3 text-xs md:text-sm">
              <div>
                <span className="text-slate-500 block">선택 업종</span>
                <span className="font-semibold text-slate-800">{selectedIndustry}</span>
              </div>
              <div>
                <span className="text-slate-500 block">기업 규모</span>
                <span className="font-semibold text-slate-800">{selectedSize}</span>
              </div>
              <div>
                <span className="text-slate-500 block">기관/담당자</span>
                <span className="font-semibold text-slate-800">{companyName} ({contactPerson})</span>
              </div>
              <div>
                <span className="text-slate-500 block">예상 수량</span>
                <span className="font-semibold text-slate-800">{quantity}</span>
                {totalProductQty > 0 && (
                  <span className="text-[11px] text-blue-600 block mt-0.5">
                    * 설정 품목 {productItems.length}종 (총 {totalProductQty}벌 구성)
                  </span>
                )}
              </div>
              {productItems.length > 0 && (
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 block text-xs font-medium">
                      견적 희망 품목 및 수량 구성 ({productItems.length}종)
                    </span>
                    <span className="text-xs font-bold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                      총 {totalProductQty}벌
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {productItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-2xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-[11px]">
                            {item.industry} · {item.gender}
                          </span>
                          <span className="font-bold text-slate-800">
                            {item.customProductGroup || item.productGroup}
                          </span>
                          {item.requestDetails && (
                            <span className="text-slate-500 text-[11px] hidden md:inline truncate max-w-[200px]">
                              ({item.requestDetails})
                            </span>
                          )}
                        </div>
                        <span className="font-bold text-blue-700 font-mono text-right">
                          {item.quantity}벌
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="col-span-2 pt-1">
                <span className="text-slate-500 block">컨설팅 포인트</span>
                <span className="font-semibold text-blue-700">{selectedPoints.join(', ')}</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-200">
                <span className="text-slate-500 block text-xs">상담 제목</span>
                <span className="font-semibold text-blue-900 block mt-0.5 text-xs sm:text-sm">{consultingTitle}</span>
                {message && message.trim() && message !== '별도 추가 요청사항 없음' && (
                  <div className="mt-1.5 bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-slate-700 whitespace-pre-line">
                    <span className="text-[11px] text-slate-400 block mb-0.5">추가 상담 내용:</span>
                    {message}
                  </div>
                )}
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  수정/삭제용 비밀번호
                </span>
                <span className="font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {'•'.repeat(customerPassword.length || 4)} (시안 제작 전 변경 가능)
                </span>
              </div>
            </div>
          </div>

          {/* Next Consultation Timeline - 4단계 워크플로우 적용 */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 sm:p-5 mb-8 space-y-3">
            <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>향후 진행 안내 (정규 B2B 견적 &amp; 제작 프로세스)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {/* Step 1 */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1.5 relative shadow-2xs text-left">
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  STEP 01
                </span>
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm">컨설팅 신청서 작성</h3>
                <p className="text-slate-500 leading-relaxed text-[11px]">
                  병원명, 희망 제품군, 예상 수량 및 로고 자수 요청사항을 온라인으로 접수합니다.
                </p>
              </div>

              {/* Step 2 - 마킹 (다음 진행 단계) */}
              <div className="bg-blue-50/90 border-2 border-blue-600 rounded-xl p-3.5 space-y-1.5 relative shadow-sm text-left ring-2 ring-blue-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-white bg-blue-600 px-2.5 py-0.5 rounded shadow-2xs">
                    STEP 02
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full flex items-center gap-1 border border-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                    다음 진행 단계
                  </span>
                </div>
                <h3 className="font-bold text-blue-950 text-xs sm:text-sm">견적서 발송</h3>
                <p className="text-blue-900 leading-relaxed text-[11px]">
                  전담 디자이너가 세부 단가, 단체 할인율 및 납기를 반영한 정식 견적서를 고객에게 발송합니다.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1.5 relative shadow-2xs text-left">
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  STEP 03
                </span>
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm">고객승인 &amp; 발주신청</h3>
                <p className="text-slate-500 leading-relaxed text-[11px]">
                  고객이 견적서를 검토 후 [공식 승인]하면 승인 일시가 기록되고 승인 인주가 날인된 PDF 다운로드가 가능합니다.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1.5 relative shadow-2xs text-left">
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  STEP 04
                </span>
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm">결제(입금) &amp; 생산 착수</h3>
                <p className="text-slate-500 leading-relaxed text-[11px]">
                  승인 후 결제 확인 즉시 아틀리에 컴퓨터 자수 및 맞춤 봉제 작업에 착수하며 실시간 대시보드에 기록됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              id="btn-check-history"
              onClick={() => onNavigateToHistory(createdRequestId)}
              className="flex-1 bg-blue-600 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl sm:rounded-full hover:bg-blue-700 transition-all text-center cursor-pointer shadow-sm active:scale-[0.99]"
            >
              신청내역확인
            </button>
            <button
              id="btn-continue-shopping"
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="flex-1 bg-white text-slate-700 border border-slate-300 font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl sm:rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all text-center cursor-pointer shadow-2xs active:scale-[0.99]"
            >
              계속 둘러보기
            </button>
          </div>

          {/* Consultation Reassurance Callout */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between bg-blue-50/60 p-4 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                ★
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">병원 로고 자수 및 직군별 맞춤 디자인 무료 상담</div>
                <div className="text-[11px] text-slate-600">배정된 전담 B2B 디자이너가 유선 상담 시 로고 배치 및 컴퓨터 자수 실물 시안을 1:1로 함께 설계해 드립니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-8 space-y-4">
      {/* Step Progress Bar Indicator */}
      <div className="mb-4 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
            currentStep === 1 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'
          }`}>
            1
          </div>
          <span className={`text-xs font-bold ${currentStep === 1 ? 'text-blue-700' : 'text-slate-500'}`}>
            옵션 선택
          </span>
          <span className="text-slate-300">──</span>
          <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
            currentStep === 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
          }`}>
            2
          </div>
          <span className={`text-xs font-bold ${currentStep === 2 ? 'text-blue-700' : 'text-slate-400'}`}>
            고객 정보 입력
          </span>
        </div>

        <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
          <BookmarkCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>입력 내용 실시간 보관</span>
        </div>
      </div>

      <div className="w-full">
        {currentStep === 1 ? (
          /* =========================================================================
             STEP 1: OPTIONS SELECTION (Harmonized Lalune Blue & Slate Design)
             ========================================================================= */
          <div
            key="step-1"
            id="consulting-application-step1"
            className="border-2 border-blue-500 rounded-3xl bg-white p-6 sm:p-10 shadow-sm relative space-y-6 animate-in fade-in duration-200"
          >
            {/* Step 1 Title with Blue Circle Badge Number 1 */}
            <div className="relative mb-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-xs">
                  1
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-1.5">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    <span>병원 &middot; 에스테틱 &middot; 기업 B2B 전용 1:1 맞춤 견적</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    우리 병원·기업만의 독보적인 프리미엄 브랜드,<br />
                    맞춤 유니폼 견적 및 디자인 컨설팅 신청
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 font-normal leading-snug">
                    새로운 병원 이미지 구축 &middot; 독보적 시그니처 핏 &middot; 통일된 기업 브랜드 &middot; 대량주문 파격 혜택<br className="hidden sm:inline" />
                    귀사의 핵심 니즈와 규모에 맞춰 전담 디자이너가 24시간 내 최적의 견적서와 시안을 제안해 드립니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Smart UX Preset Pills */}
            <div className="mb-6 bg-blue-50/60 p-3 rounded-2xl border border-blue-200">
              <div className="text-[11px] font-bold text-blue-900 mb-2 flex items-center gap-1">
                <Zap className="w-3 h-3 text-blue-600" />
                빠른 추천 조합 (원클릭 자동선택)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {industryPresets.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => applyPreset(p)}
                    className="text-xs bg-white hover:bg-blue-600 hover:text-white transition-all text-slate-700 font-medium py-1 px-3 rounded-full border border-blue-200 shadow-2xs cursor-pointer active:scale-95"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* 1단계 : 업종선택 (택1) */}
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span>1단계 : 업종선택</span>
                    <span className="text-xs sm:text-sm text-slate-500 font-normal">(택1)</span>
                  </div>
                  <span className="text-xs text-blue-600 font-semibold">선택: {selectedIndustry}</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {industries.map((ind) => {
                    const isSelected = selectedIndustry === ind;
                    return (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => handleSelectIndustry(ind)}
                        className={`py-3.5 px-2 text-center rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 text-blue-700 border-2 border-blue-600 shadow-2xs font-bold'
                            : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                        }`}
                      >
                        {ind}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2단계 : 기업 규모 선택 (택1) */}
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span>2단계 : 기업 규모 선택</span>
                    <span className="text-xs sm:text-sm text-slate-500 font-normal">(택1)</span>
                  </div>
                  <span className="text-xs text-blue-600 font-semibold">선택: {selectedSize.split(' ')[0]}</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {companySizes.map((size) => {
                    const isSelected = selectedSize === size.type;
                    return (
                      <button
                        key={size.type}
                        type="button"
                        onClick={() => setSelectedSize(size.type)}
                        className={`py-2.5 px-1 sm:px-2 text-center rounded-full transition-all cursor-pointer flex flex-col items-center justify-center min-h-[58px] ${
                          isSelected
                            ? 'bg-blue-50 text-blue-700 border-2 border-blue-600 shadow-2xs font-bold'
                            : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-bold leading-tight">{size.title}</span>
                        <span className={`text-[11px] sm:text-xs leading-tight mt-0.5 ${isSelected ? 'text-blue-600 font-medium' : 'text-slate-500'}`}>
                          {size.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* B2B Dynamic Benefit Badge */}
                {selectedSize !== '소형 (30인 미만)' && (
                  <div className="mt-2.5 bg-blue-50/80 border border-blue-200 rounded-xl p-2.5 flex items-center gap-2 text-xs text-blue-900 animate-in fade-in">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      <strong>{selectedSize.split(' ')[0]} 고객 특별 혜택:</strong> 30SET 이상 주문 시 로고 제판비(55,000원) 전액 무료 + 무료 샘플킷 대여 및 전담 담당자 배정
                    </span>
                  </div>
                )}
              </div>

              {/* 3단계 : 견적 희망 제품군 및 수량 양식 (2번 이미지 양식 / 3번 업종·제품군 리스트 연동) */}
              <div className="bg-white border-2 border-blue-500 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
                {/* 양식 헤더 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        3단계 : 견적 희망 제품군 및 수량 양식
                      </span>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                        총 {productItems.length}종 / {totalProductQty}벌
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      원하시는 업종과 성별을 선택하시면 맞춤형 제품군이 제공됩니다. 수량과 세부 요청사항을 작성해주세요.
                    </p>
                  </div>

                  {/* 상단 툴바 버튼 */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={handleResetProductItems}
                      className="text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-2xs"
                      title="선택한 업종의 추천 기본 구성으로 초기화"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                      <span>추천 기본구성</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleAddProductItem}
                      className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs cursor-pointer transition-all active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>품목 추가</span>
                    </button>
                  </div>
                </div>

                {/* 2번 이미지 테이블 양식 */}
                <div className="overflow-x-auto -mx-1 sm:mx-0">
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/90 text-[12px] font-bold text-slate-700">
                        <th className="py-2.5 px-2.5 w-10 text-center">No.</th>
                        <th className="py-2.5 px-2 w-28">업종</th>
                        <th className="py-2.5 px-2 w-24">성별</th>
                        <th className="py-2.5 px-2 w-44">제품군</th>
                        <th className="py-2.5 px-2 w-28 text-center">수량</th>
                        <th className="py-2.5 px-2">상품 요청사항</th>
                        <th className="py-2.5 px-2 w-12 text-center">삭제</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {productItems.map((item, idx) => {
                        const availableProducts = getProductOptions(item.industry, item.gender);
                        const isCustom = item.productGroup === '직접 입력' || !availableProducts.includes(item.productGroup);

                        return (
                          <tr key={item.id || idx} className="hover:bg-blue-50/30 transition-colors">
                            {/* No. */}
                            <td className="py-3 px-2 text-center font-bold text-slate-400 font-mono">
                              {idx + 1}
                            </td>

                            {/* 업종 */}
                            <td className="py-3 px-1.5">
                              <div className="relative">
                                <select
                                  value={item.industry}
                                  onChange={(e) => handleUpdateProductItem(idx, 'industry', e.target.value)}
                                  className="w-full bg-white border border-slate-300 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-800 focus:border-blue-600 focus:ring-1 focus:ring-blue-100 outline-none appearance-none cursor-pointer pr-5"
                                >
                                  {CONSULTING_INDUSTRIES.map((ind) => (
                                    <option key={ind} value={ind}>{ind}</option>
                                  ))}
                                </select>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                              </div>
                            </td>

                            {/* 성별 */}
                            <td className="py-3 px-1.5">
                              <div className="relative">
                                <select
                                  value={item.gender}
                                  onChange={(e) => handleUpdateProductItem(idx, 'gender', e.target.value)}
                                  className="w-full bg-white border border-slate-300 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-800 focus:border-blue-600 focus:ring-1 focus:ring-blue-100 outline-none appearance-none cursor-pointer pr-5"
                                >
                                  {CONSULTING_GENDERS.map((g) => (
                                    <option key={g} value={g}>{g}</option>
                                  ))}
                                </select>
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                              </div>
                            </td>

                            {/* 제품군 (업종 및 성별에 따른 동적 리스트 + 직접입력 지원) */}
                            <td className="py-3 px-1.5">
                              <div className="space-y-1">
                                <div className="relative">
                                  <select
                                    value={isCustom ? '직접 입력' : item.productGroup}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      if (val === '직접 입력') {
                                        handleUpdateProductItem(idx, 'productGroup', '직접 입력');
                                      } else {
                                        handleUpdateProductItem(idx, 'productGroup', val);
                                        handleUpdateProductItem(idx, 'customProductGroup', '');
                                      }
                                    }}
                                    className="w-full bg-white border border-slate-300 rounded-lg px-2 py-1.5 text-xs font-bold text-blue-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-100 outline-none appearance-none cursor-pointer pr-5"
                                  >
                                    {availableProducts.map((p) => (
                                      <option key={p} value={p}>{p}</option>
                                    ))}
                                    <option value="직접 입력">+ 직접 입력</option>
                                  </select>
                                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                                {isCustom && (
                                  <input
                                    type="text"
                                    placeholder="제품명 직접 입력"
                                    value={item.customProductGroup || (item.productGroup === '직접 입력' ? '' : item.productGroup)}
                                    onChange={(e) => {
                                      handleUpdateProductItem(idx, 'customProductGroup', e.target.value);
                                      handleUpdateProductItem(idx, 'productGroup', e.target.value || '직접 입력');
                                    }}
                                    className="w-full bg-white border border-blue-300 focus:border-blue-600 rounded-md px-2 py-1 text-xs outline-none text-slate-800 placeholder:text-slate-400"
                                  />
                                )}
                              </div>
                            </td>

                            {/* 수량 */}
                            <td className="py-3 px-1.5">
                              <div className="flex items-center justify-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    const cur = Number(item.quantity) || 0;
                                    handleUpdateProductItem(idx, 'quantity', Math.max(1, cur - 1));
                                  }}
                                  className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  min={1}
                                  max={9999}
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const v = e.target.value === '' ? '' : Math.max(1, parseInt(e.target.value) || 1);
                                    handleUpdateProductItem(idx, 'quantity', v);
                                  }}
                                  className="w-12 text-center text-xs font-black text-slate-900 bg-white border border-slate-300 focus:border-blue-600 rounded-md py-1 outline-none font-mono"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const cur = Number(item.quantity) || 0;
                                    handleUpdateProductItem(idx, 'quantity', cur + 1);
                                  }}
                                  className="w-6 h-6 rounded bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                                >
                                  +
                                </button>
                                <span className="text-[11px] text-slate-500 font-medium">벌</span>
                              </div>
                            </td>

                            {/* 상품 요청사항 */}
                            <td className="py-3 px-1.5">
                              <input
                                type="text"
                                placeholder="예: 로고 자수, 색상톤, 주머니 추가 등"
                                value={item.requestDetails || ''}
                                onChange={(e) => handleUpdateProductItem(idx, 'requestDetails', e.target.value)}
                                className="w-full bg-white border border-slate-300 focus:border-blue-600 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none"
                              />
                            </td>

                            {/* 삭제 버튼 */}
                            <td className="py-3 px-1.5 text-center">
                              <button
                                type="button"
                                onClick={() => handleRemoveProductItem(idx)}
                                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                title="품목 삭제"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* 하단 툴바 및 합계 요약 */}
                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-blue-50/50 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3.5 rounded-b-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleAddProductItem}
                      className="text-xs bg-white hover:bg-blue-50 text-blue-700 font-bold px-3 py-1.5 rounded-lg border border-blue-200 flex items-center gap-1.5 shadow-2xs cursor-pointer transition-all active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>행 추가</span>
                    </button>

                    <div className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <span>선택 품목: <strong className="text-blue-700 font-bold">{productItems.length}종</strong></span>
                      <span className="text-slate-300">|</span>
                      <span>총 수량 합계: <strong className="text-blue-700 font-black text-sm">{totalProductQty}</strong>벌</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsAutoQuantityApplied(!isAutoQuantityApplied);
                        if (!isAutoQuantityApplied && totalProductQty > 0) {
                          setQuantity(`${totalProductQty}벌`);
                        }
                      }}
                      className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isAutoQuantityApplied
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {isAutoQuantityApplied && <Check className="w-3.5 h-3.5" />}
                      <span>총 수량({totalProductQty}벌) 견적에 자동 반영</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 4단계 : 컨설팅 포인트 (복수선택가능) */}
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span>4단계 : 컨설팅 포인트</span>
                    <span className="text-xs sm:text-sm text-slate-500 font-normal">(복수선택가능)</span>
                  </div>
                  <span className="text-xs text-blue-600 font-semibold">{selectedPoints.length}개 선택됨</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {consultingPoints.map((point) => {
                    const isSelected = selectedPoints.includes(point);
                    return (
                      <button
                        key={point}
                        type="button"
                        onClick={() => togglePoint(point)}
                        className={`py-3.5 px-2 text-center rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                          isSelected
                            ? 'bg-blue-50 text-blue-700 border-2 border-blue-600 shadow-2xs font-bold'
                            : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-blue-600" />}
                        <span>{point}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Soft Divider Line */}
              <div className="border-t border-slate-200 pt-4"></div>

              {errorMessage && currentStep === 1 && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Next Step Button (Step 1 -> Step 2) */}
              <div className="pt-2">
                <button
                  id="btn-go-to-step2"
                  type="button"
                  onClick={goToStep2}
                  className="w-full bg-blue-600 text-white font-bold text-base sm:text-lg py-4 px-6 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all text-center cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2.5 group"
                >
                  <span>다음 단계로 (고객 및 담당자 정보 입력)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Enterprise trust points */}
              <div className="pt-3 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-3 sm:gap-4 border-t border-slate-100">
                <span className="flex items-center gap-1 text-slate-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  1:1 전담 디자이너 매칭
                </span>
                <span className="text-slate-300">&middot;</span>
                <span className="text-slate-600">영업일 24시간 내 유선 피드백</span>
                <span className="text-slate-300">&middot;</span>
                <span className="text-slate-600">무료 원단 스와치북 발송 지원</span>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
             STEP 2: CUSTOMER INFO & CONSULTING CONTENT (Harmonized Lalune Blue & Slate Design)
             ========================================================================= */
          <div
            key="step-2"
            id="consulting-application-step2"
            className="border-2 border-blue-500 rounded-3xl bg-white p-6 sm:p-10 shadow-sm relative space-y-6 animate-in fade-in duration-200"
          >
            {/* Step 2 Title with Blue Circle Badge Number 2 */}
            <div className="relative mb-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-xs">
                  2
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-1.5">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>신속 견적 발송 &middot; 온라인 공식 승인 시스템</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    신속한 견적 발송을 위한 고객 및 담당자 정보 입력
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-normal leading-snug">
                    접수 즉시 전담 디자이너가 배정되어 24시간 이내 [공식 견적서]를 발송해 드립니다.<br className="hidden sm:inline" />
                    고객 검토 후 온라인에서 [공식 승인]하시면 즉시 결제 및 아틀리에 맞춤 제작이 착수됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1 Selection Summary Pill Bar */}
            <div className="mb-6 bg-blue-50/60 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-2 border border-blue-200">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-blue-900">선택한 옵션:</span>
                <span className="bg-white px-2.5 py-1 rounded-full border border-blue-200 font-semibold text-blue-800">
                  {selectedIndustry}
                </span>
                <span className="bg-white px-2.5 py-1 rounded-full border border-blue-200 font-semibold text-blue-800">
                  {selectedSize.split(' ')[0]}
                </span>
                {totalProductQty > 0 && (
                  <span className="bg-white px-2.5 py-1 rounded-full border border-blue-200 font-semibold text-blue-800 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    희망 품목 {productItems.length}종 (총 {totalProductQty}벌)
                  </span>
                )}
                <span className="bg-white px-2.5 py-1 rounded-full border border-blue-200 font-semibold text-blue-800">
                  {selectedPoints.join(', ')}
                </span>
              </div>
              <button
                type="button"
                onClick={goToStep1}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 underline cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                옵션 변경
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 기관/병원명 & 담당자 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <label className="w-20 text-sm font-bold text-slate-800 shrink-0 flex items-center gap-1">
                    <span>기관/병원명</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    id="input-company-name"
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="예: 메디린 메디컬 클리닉"
                    className="flex-1 bg-white text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="w-16 text-sm font-bold text-slate-800 shrink-0 flex items-center gap-1">
                    <span>담당자</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    id="input-contact-person"
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => {
                      setContactPerson(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="김민서 실장"
                    className="flex-1 bg-white text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* 연락처: Smart Auto-Hyphen Formatting */}
              <div className="flex items-center gap-4">
                <label className="w-20 text-sm sm:text-base font-bold text-slate-800 shrink-0 flex items-center gap-1">
                  <span>연락처</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="flex-1 max-w-sm relative">
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="010-5408-8890"
                    maxLength={13}
                    className="w-full bg-white text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg outline-none transition-all placeholder:text-slate-400 font-mono tracking-wider"
                  />
                  {phone.replace(/[^0-9]/g, '').length >= 10 && (
                    <Check className="w-4 h-4 text-blue-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  )}
                </div>
              </div>

              {/* 이메일 */}
              <div className="flex items-center gap-4">
                <label className="w-20 text-sm sm:text-base font-bold text-slate-800 shrink-0 flex items-center gap-1">
                  <span>이메일</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="flex-1 flex flex-wrap items-center gap-2">
                  <input
                    id="input-email-id"
                    type="text"
                    required
                    value={emailId}
                    onChange={(e) => {
                      setEmailId(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="medilyn"
                    className="w-28 sm:w-36 bg-white text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg outline-none transition-all placeholder:text-slate-400"
                  />
                  <span className="font-bold text-slate-400">@</span>
                  
                  {isCustomDomain ? (
                    <div className="flex items-center gap-1">
                      <input
                        id="input-email-domain"
                        type="text"
                        value={customDomain}
                        onChange={(e) => {
                          setCustomDomain(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="도메인 입력"
                        className="w-32 bg-white text-slate-800 text-xs sm:text-sm px-3 py-2 border border-slate-300 focus:border-blue-600 rounded-lg outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setIsCustomDomain(false)}
                        className="text-[11px] underline text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        선택
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <select
                        id="select-email-domain"
                        value={emailDomain}
                        onChange={handleDomainChange}
                        className="appearance-none bg-white text-slate-800 text-xs sm:text-sm pl-3 pr-8 py-2.5 border border-slate-300 focus:border-blue-600 rounded-lg outline-none transition-all font-medium cursor-pointer"
                      >
                        <option value="gmail.com">gmail.com</option>
                        <option value="naver.com">naver.com</option>
                        <option value="daum.net">daum.net</option>
                        <option value="kakao.com">kakao.com</option>
                        <option value="custom">직접입력</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  )}
                </div>
              </div>

              {/* 예상 수량 */}
              <div className="flex items-center gap-4">
                <label className="w-20 text-sm font-bold text-slate-800 shrink-0 flex items-center gap-1">
                  <span>예상 수량</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="flex-1 flex flex-wrap items-center gap-2">
                  {/* 품목 합계 추천 자동 반영 버튼 */}
                  {totalProductQty > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsAutoQuantityApplied(true);
                        setQuantity(`${totalProductQty}벌`);
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                        isAutoQuantityApplied
                          ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-2xs'
                          : 'border-blue-200 bg-white text-blue-700 hover:bg-blue-50'
                      }`}
                    >
                      {isAutoQuantityApplied && <Check className="w-3.5 h-3.5 text-blue-600" />}
                      <span>{totalProductQty}벌 (설정한 품목 {productItems.length}종 합계)</span>
                    </button>
                  )}
                  {['10~30벌', '30~50벌', '50~100벌', '100벌 이상'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => {
                        setQuantity(qty);
                        setIsAutoQuantityApplied(false);
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border cursor-pointer transition-all ${
                        !isAutoQuantityApplied && quantity === qty
                          ? 'bg-blue-50 text-blue-700 border-2 border-blue-600 font-bold shadow-2xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                  {isAutoQuantityApplied && totalProductQty > 0 && (
                    <p className="w-full text-[11px] text-blue-700 mt-1 flex items-center gap-1 font-medium">
                      <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>산출 근거: 3단계에서 입력하신 품목별 수량의 합계 <strong>{totalProductQty}벌</strong>이 반영되었습니다.</span>
                    </p>
                  )}
                </div>
              </div>

              {/* 상담제목 (드롭다운 접이식 선택 + 직접 입력) */}
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 pt-1">
                <label className="w-20 text-sm sm:text-base font-bold text-slate-800 shrink-0 sm:pt-2.5 flex items-center gap-1">
                  <span>상담제목</span>
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <div className="flex-1 w-full space-y-2">
                  {/* 드롭다운 형태의 상담 템플릿 선택기 */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsTemplateDropdownOpen(!isTemplateDropdownOpen)}
                      className={`w-full bg-white text-left px-3.5 py-2.5 border rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between shadow-2xs transition-all cursor-pointer ${
                        isTemplateDropdownOpen
                          ? 'border-blue-600 ring-2 ring-blue-100 text-blue-900'
                          : 'border-slate-300 hover:border-blue-400 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <MessageSquare className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="truncate">
                          {selectedTemplateKey === 'custom' ? (
                            <span className="text-blue-700 font-semibold flex items-center gap-1.5">
                              <PenLine className="w-3.5 h-3.5" />
                              직접 입력 (원하는 상담 제목 직접 작성)
                            </span>
                          ) : selectedTemplateKey ? (
                            <span>{selectedTemplateKey}</span>
                          ) : (
                            <span className="text-slate-400">상담 제목 템플릿을 선택해 주세요</span>
                          )}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isTemplateDropdownOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>

                    {/* 드롭다운 메뉴 (펼침 목록) */}
                    {isTemplateDropdownOpen && (
                      <>
                        {/* Backdrop to close dropdown on outer click */}
                        <div
                          className="fixed inset-0 z-20"
                          onClick={() => setIsTemplateDropdownOpen(false)}
                        />
                        <div className="absolute z-30 left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden divide-y divide-slate-100 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="p-1.5 space-y-0.5 max-h-64 overflow-y-auto">
                            <div className="px-2.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                              <span>자주 묻는 상담 템플릿</span>
                              <span className="text-[10px] text-blue-600 font-normal">선택 시 제목으로 자동 설정</span>
                            </div>
                            {quickTemplates.map((tpl, idx) => {
                              const isSelected = selectedTemplateKey === tpl;
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setSelectedTemplateKey(tpl);
                                    setConsultingTitle(tpl);
                                    setIsTemplateDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all flex items-start gap-2 cursor-pointer ${
                                    isSelected
                                      ? 'bg-blue-50 text-blue-900 font-bold border border-blue-200 shadow-2xs'
                                      : 'hover:bg-slate-50 text-slate-700'
                                  }`}
                                >
                                  <span className="shrink-0 mt-0.5">•</span>
                                  <span className="leading-relaxed flex-1">{tpl}</span>
                                  {isSelected && (
                                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* 제일 아래: 직접 입력 옵션 */}
                          <div className="p-1.5 bg-slate-50/80">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedTemplateKey('custom');
                                setIsTemplateDropdownOpen(false);
                                setTimeout(() => {
                                  document.getElementById('input-consulting-title')?.focus();
                                }, 50);
                              }}
                              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer font-bold ${
                                selectedTemplateKey === 'custom'
                                  ? 'bg-blue-600 text-white shadow-xs'
                                  : 'bg-white hover:bg-blue-50 text-blue-700 border border-blue-200'
                              }`}
                            >
                              <span className="flex items-center gap-1.5">
                                <PenLine className="w-3.5 h-3.5" />
                                ✏️ 직접 입력 (원하는 상담 제목 직접 작성)
                              </span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                                selectedTemplateKey === 'custom' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-700'
                              }`}>
                                선택
                              </span>
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* 상담 제목 직접 확인 및 편집 인풋 */}
                  <div>
                    <input
                      id="input-consulting-title"
                      type="text"
                      value={consultingTitle}
                      onChange={(e) => {
                        setConsultingTitle(e.target.value);
                        if (selectedTemplateKey !== 'custom' && e.target.value !== selectedTemplateKey) {
                          setSelectedTemplateKey('custom');
                        }
                      }}
                      placeholder="상담 제목을 직접 입력해 주세요 (예: 2호점 확장 개원에 따른 유니폼 패키지 견적 문의)"
                      className="w-full bg-white text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                    <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>드롭다운에서 템플릿을 선택하거나 필요한 상담 제목을 자유롭게 직접 입력/수정할 수 있습니다.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 상담내용 (추가 상세 기입) */}
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 pt-1">
                <label className="w-20 text-sm sm:text-base font-bold text-slate-800 shrink-0 sm:pt-2 flex flex-col">
                  <span>상담내용</span>
                  <span className="text-[10px] text-slate-400 font-normal">추가 기입</span>
                </label>
                <div className="flex-1 w-full space-y-1">
                  <textarea
                    id="textarea-consulting-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="상담 제목 외에 추가로 전달하실 상세 내용이나 요청사항을 자유롭게 기입해 주세요.&#10;(예: 직군별 선호 색상 및 실루엣, 매장 인테리어 톤앤매너, 오픈 예정일 및 샘플 대여 희망 여부 등)"
                    className="w-full bg-white text-slate-800 text-xs sm:text-sm p-3.5 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg outline-none transition-all leading-relaxed placeholder:text-slate-400"
                  ></textarea>
                </div>
              </div>

              {/* 첨부파일 / 로고 업로드 영역 */}
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 pt-1">
                <label className="w-20 text-xs font-bold text-slate-700 shrink-0 sm:pt-2">
                  첨부파일
                </label>
                <div className="flex-1 w-full">
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        const f = e.dataTransfer.files[0];
                        setAttachedFiles([...attachedFiles, { name: f.name, size: `${(f.size / (1024*1024)).toFixed(1)} MB` }]);
                      }
                    }}
                    className={`border border-dashed rounded-lg p-3 text-center transition-all ${
                      isDragging ? 'border-blue-500 bg-blue-50/50' : 'border-slate-300 bg-slate-50/70 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600">
                      <Upload className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>로고 AI 파일 또는 매장/도면 참고 이미지 첨부</span>
                      <label className="text-blue-600 font-semibold underline cursor-pointer hover:text-blue-800 ml-1">
                        파일선택
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={handleFileUpload} 
                          accept=".ai,.psd,.pdf,.jpg,.jpeg,.png,.svg,.zip"
                        />
                      </label>
                    </div>
                    {attachedFiles.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-slate-200">
                        {attachedFiles.map((file, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-blue-200 text-xs text-blue-900 font-mono">
                            <FileText className="w-3.5 h-3.5 text-blue-600" />
                            {file.name} ({file.size})
                            <button
                              type="button"
                              onClick={() => setAttachedFiles(attachedFiles.filter((_, i) => i !== idx))}
                              className="text-slate-400 hover:text-red-500 ml-1 font-bold cursor-pointer"
                            >
                              &times;
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-[10px] text-slate-500 mt-1">
                      💡 고화질 AI 파일이 없으셔도 실물 명함/간판 사진을 첨부해주시면 전문 디자이너가 무료로 벡터화 작업을 지원해 드립니다.
                    </div>
                  </div>
                </div>
              </div>

              {/* 수정/삭제용 비밀번호 설정 카드 (접수 직전) */}
              <div className="bg-blue-50/60 border-2 border-blue-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-blue-600" />
                    <span>신청 수정 / 취소용 비밀번호 설정</span>
                    <span className="text-red-500 font-bold">*</span>
                  </label>
                  <span className="text-[11px] text-blue-700 bg-white border border-blue-200 font-semibold px-2.5 py-0.5 rounded-full shadow-2xs">
                    고객 본인 확인용
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  🔒 디자이너가 <strong>시안 제작에 착수하기 전</strong>에 고객님께서 직접 신청 내용을 <strong>수정하거나 취소/삭제</strong>하실 때 본인 확인을 위해 사용됩니다.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                  <div className="relative w-full max-w-xs">
                    <input
                      id="input-consulting-password"
                      type={showPassword ? 'text' : 'password'}
                      value={customerPassword}
                      onChange={(e) => setCustomerPassword(e.target.value)}
                      placeholder="숫자 4자리 또는 비밀번호 (예: 1234)"
                      maxLength={20}
                      className="w-full bg-white text-slate-900 text-xs sm:text-sm px-3.5 py-2.5 pr-10 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg outline-none tracking-wider font-mono shadow-2xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                      title={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {customerPassword.length >= 4 ? (
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      비밀번호 설정 완료 ({customerPassword.length}자리)
                    </span>
                  ) : (
                    <span className="text-[11px] text-amber-600 font-medium">
                      * 4자리 이상 입력해주세요
                    </span>
                  )}
                </div>
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}



              {/* Bottom Submit Button */}
              <div className="pt-2">
                <button
                  id="btn-submit-consulting"
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold text-base sm:text-lg py-4 px-6 rounded-full hover:bg-blue-700 active:bg-blue-800 transition-all text-center cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <span>컨설팅 신청하기</span>
                </button>
              </div>

              {/* Navigation Back Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={goToStep1}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-200 transition-all cursor-pointer flex items-center gap-2 shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>이전 단계로 (옵션 다시 선택)</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
