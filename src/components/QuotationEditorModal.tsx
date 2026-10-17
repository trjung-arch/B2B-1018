import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Send, 
  FileText, 
  Building2, 
  Sparkles, 
  AlertCircle, 
  DollarSign, 
  Calendar, 
  Check, 
  RotateCcw,
  Percent,
  CheckCircle2,
  Clock,
  HelpCircle,
  Printer
} from 'lucide-react';
import { 
  ConsultingRequest, 
  QuotationData, 
  QuotationItem, 
  QuotationBuyerInfo, 
  TimelineLogEntry,
  QuotationItemSizeBreakdown 
} from '../types';

interface QuotationEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  consulting: ConsultingRequest | null;
  onSaveQuotation: (updated: ConsultingRequest) => void;
}

export const QuotationEditorModal: React.FC<QuotationEditorModalProps> = ({
  isOpen,
  onClose,
  consulting,
  onSaveQuotation,
}) => {
  if (!isOpen || !consulting) return null;

  const todayIso = new Date().toISOString().slice(0, 10);

  // 1. Buyer & Invoice Information (Image 2 Top Grid)
  const [orderDate, setOrderDate] = useState<string>(() => {
    return consulting.quotation?.orderDate || '2026-10-17';
  });

  const [companyName, setCompanyName] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.companyName || consulting.companyName || 'tr 클리닉';
  });

  const [contactPerson, setContactPerson] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.contactPerson || consulting.contactPerson || '정태락';
  });

  const [phone, setPhone] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.phone || '02-540-8890';
  });

  const [mobilePhone, setMobilePhone] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.mobilePhone || consulting.phone || '01054088890';
  });

  const [fax, setFax] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.fax || '02-542-6262';
  });

  const [shippingAddress, setShippingAddress] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.shippingAddress || '서울특별시 강남구 도산대로 1';
  });

  const [zipCode, setZipCode] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.zipCode || '06038';
  });

  // Invoice specifics
  const [taxInvoiceType, setTaxInvoiceType] = useState<'세금계산서' | '현금영수증' | '미신청'>(() => {
    return consulting.quotation?.buyerInfo?.taxInvoiceType || '세금계산서';
  });

  const [taxInvoiceEmail, setTaxInvoiceEmail] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.taxInvoiceEmail || consulting.email || 'medilyn@gmail.com';
  });

  const [businessNumber, setBusinessNumber] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.businessNumber || '120-81-45678';
  });

  const [businessType, setBusinessType] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.businessType || '보건업 / 병의';
  });

  const [businessItem, setBusinessItem] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.businessItem || '의료서비스';
  });

  const [registeredCompanyName, setRegisteredCompanyName] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.registeredCompanyName || consulting.companyName || 'tr 클리닉';
  });

  const [ceoName, setCeoName] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.ceoName || '한바른';
  });

  const [depositorName, setDepositorName] = useState<string>(() => {
    return consulting.quotation?.buyerInfo?.depositorName || consulting.companyName || 'tr 클리닉';
  });

  // 2. Main Items State (Image 2: [구성정보 및 사이즈])
  const [items, setItems] = useState<QuotationItem[]>(() => {
    if (consulting.quotation?.items && consulting.quotation.items.length > 0) {
      return consulting.quotation.items.map(item => {
        const sizes: QuotationItemSizeBreakdown = item.sizes || {
          xs: 0,
          s: Math.floor(item.quantity * 0.3),
          m: Math.floor(item.quantity * 0.4),
          l: Math.floor(item.quantity * 0.2),
          xl: Math.floor(item.quantity * 0.1),
          xxl: Math.max(0, item.quantity - (Math.floor(item.quantity * 0.3) + Math.floor(item.quantity * 0.4) + Math.floor(item.quantity * 0.2) + Math.floor(item.quantity * 0.1)))
        };
        const calcQty = sizes.xs + sizes.s + sizes.m + sizes.l + sizes.xl + sizes.xxl;
        const totalQty = calcQty > 0 ? calcQty : (item.quantity || 10);
        return {
          ...item,
          productCategory: item.productCategory || "자켓",
          productName: item.productName || "쎄라젬 자켓",
          color: item.color || "블랙",
          unitPrice: item.unitPrice || 65000,
          sizes,
          quantity: totalQty,
          totalPrice: totalQty * (item.unitPrice || 65000)
        };
      });
    }

    // Prefill from customer's consulting request productItems
    if (consulting.productItems && consulting.productItems.length > 0) {
      return consulting.productItems.map((pi, idx) => {
        const q = Number(pi.quantity) || 10;
        let defaultPrice = 65000;
        let cat = '스크럽';
        if (pi.productGroup.includes('가운') || pi.productGroup.includes('코트')) {
          defaultPrice = 78000;
          cat = '가운';
        } else if (pi.productGroup.includes('자켓')) {
          defaultPrice = 85000;
          cat = '자켓';
        } else if (pi.productGroup.includes('팬츠') || pi.productGroup.includes('슬랙스')) {
          defaultPrice = 52000;
          cat = '슬랙스';
        } else if (pi.productGroup.includes('에이프런')) {
          defaultPrice = 38000;
          cat = '에이프런';
        }

        const sQty = Math.floor(q * 0.25);
        const mQty = Math.floor(q * 0.35);
        const lQty = Math.floor(q * 0.25);
        const xlQty = Math.max(0, q - (sQty + mQty + lQty));

        const sizes: QuotationItemSizeBreakdown = {
          xs: 0,
          s: sQty,
          m: mQty,
          l: lQty,
          xl: xlQty,
          xxl: 0
        };

        const totalQty = sizes.xs + sizes.s + sizes.m + sizes.l + sizes.xl + sizes.xxl;

        return {
          id: `item-${idx + 1}`,
          productCategory: cat,
          productName: pi.customProductGroup || pi.productGroup,
          color: '블랙',
          unitPrice: defaultPrice,
          sizes,
          quantity: totalQty,
          totalPrice: totalQty * defaultPrice,
          note: pi.requestDetails || ''
        };
      });
    }

    // Default items matching official sample format (Total 30벌, ₩ 2,015,000)
    return [
      {
        id: 'item-1',
        productCategory: '스크럽',
        productName: '스크럽 상의',
        color: '블랙',
        unitPrice: 65000,
        sizes: {
          xs: 0,
          s: 3,
          m: 5,
          l: 3,
          xl: 4,
          xxl: 0
        },
        quantity: 15,
        totalPrice: 975000,
        note: ''
      },
      {
        id: 'item-2',
        productCategory: '가운',
        productName: '닥터가운 / 코트',
        color: '블랙',
        unitPrice: 78000,
        sizes: {
          xs: 0,
          s: 1,
          m: 1,
          l: 1,
          xl: 2,
          xxl: 0
        },
        quantity: 5,
        totalPrice: 390000,
        note: ''
      },
      {
        id: 'item-3',
        productCategory: '스크럽',
        productName: '스크럽 상/하의 세트',
        color: '블랙',
        unitPrice: 65000,
        sizes: {
          xs: 0,
          s: 2,
          m: 3,
          l: 2,
          xl: 3,
          xxl: 0
        },
        quantity: 10,
        totalPrice: 650000,
        note: ''
      }
    ];
  });

  // 3. Discount & Additional Settings
  const [discountRate, setDiscountRate] = useState<number>(() => {
    return consulting.quotation?.discountRate ?? 5;
  });

  const [setupFee, setSetupFee] = useState<number>(() => {
    return consulting.quotation?.setupFee ?? 0;
  });

  const [quotedBy, setQuotedBy] = useState<string>(() => {
    return consulting.quotation?.quotedBy || consulting.assignedConsultant || '이지원 수석 디자이너 (직통 02-540-8891)';
  });

  const [estimatedLeadTime, setEstimatedLeadTime] = useState<string>(() => {
    return consulting.quotation?.estimatedLeadTime || '고객 승인 및 결제 확인 후 2주 이내 발송';
  });

  const [validDays, setValidDays] = useState<number>(14);
  const [managerNote, setManagerNote] = useState<string>(() => {
    return consulting.quotation?.managerNote || '30벌 이상 단체 발주 특별 할인 및 로고 컴퓨터 자수 제판비(55,000원) 전액 무료 지원 프로모션이 적용되었습니다.';
  });

  // Real-time Calculation
  const totalQuantity = items.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const supplyPrice = items.reduce((sum, item) => sum + (Number(item.totalPrice) || 0), 0);
  const discountAmount = Math.round(supplyPrice * (discountRate / 100));
  const discountedSupply = supplyPrice - discountAmount + setupFee;
  const vat = Math.round(discountedSupply * 0.1);
  const totalAmount = discountedSupply + vat;

  // Add Item Row
  const handleAddItem = () => {
    const newItem: QuotationItem = {
      id: `item-${Date.now()}`,
      productCategory: "자켓",
      productName: "신규 맞춤 유니폼",
      color: "블랙",
      unitPrice: 65000,
      sizes: {
        xs: 0,
        s: 5,
        m: 5,
        l: 0,
        xl: 0,
        xxl: 0
      },
      quantity: 10,
      totalPrice: 650000,
      note: ""
    };
    setItems([...items, newItem]);
  };

  // Remove Item Row
  const handleRemoveItem = (idx: number) => {
    if (items.length <= 1) {
      alert('최소 1개 이상의 품목이 필요합니다.');
      return;
    }
    setItems(items.filter((_, i) => i !== idx));
  };

  // Update Size Breakdown field
  const handleUpdateSize = (itemIdx: number, sizeKey: keyof QuotationItemSizeBreakdown, val: string) => {
    const num = Math.max(0, parseInt(val) || 0);
    setItems(prev => {
      const copy = [...prev];
      const target = { ...copy[itemIdx] };
      const newSizes = { ...(target.sizes || { xs: 0, s: 0, m: 0, l: 0, xl: 0, xxl: 0 }), [sizeKey]: num };
      target.sizes = newSizes;
      const newTotalQty = newSizes.xs + newSizes.s + newSizes.m + newSizes.l + newSizes.xl + newSizes.xxl;
      target.quantity = newTotalQty;
      target.totalPrice = newTotalQty * (Number(target.unitPrice) || 0);
      copy[itemIdx] = target;
      return copy;
    });
  };

  // Update Item Text/Number field
  const handleUpdateItemField = (itemIdx: number, field: keyof QuotationItem, val: any) => {
    setItems(prev => {
      const copy = [...prev];
      const target = { ...copy[itemIdx] };
      if (field === 'unitPrice') {
        const p = Math.max(0, parseInt(val) || 0);
        target.unitPrice = p;
        target.totalPrice = (Number(target.quantity) || 0) * p;
      } else {
        (target as any)[field] = val;
      }
      copy[itemIdx] = target;
      return copy;
    });
  };

  // Submit and Dispatch to Customer
  const handleSubmitQuotation = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert('품목을 1개 이상 등록해 주세요.');
      return;
    }

    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const todayStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;

    const validUntilDate = new Date();
    validUntilDate.setDate(validUntilDate.getDate() + validDays);
    const validUntilStr = `${validUntilDate.getFullYear()}-${pad(validUntilDate.getMonth() + 1)}-${pad(validUntilDate.getDate())}`;

    const quotationNumber = consulting.quotation?.quotationNumber || `QT-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${consulting.id.split('-').pop() || '001'}`;

    const buyerInfo: QuotationBuyerInfo = {
      companyName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      phone: phone.trim(),
      mobilePhone: mobilePhone.trim(),
      fax: fax.trim(),
      shippingAddress: shippingAddress.trim(),
      zipCode: zipCode.trim(),
      taxInvoiceType,
      taxInvoiceEmail: taxInvoiceEmail.trim(),
      businessNumber: businessNumber.trim(),
      businessType: businessType.trim(),
      businessItem: businessItem.trim(),
      registeredCompanyName: registeredCompanyName.trim(),
      ceoName: ceoName.trim(),
      depositorName: depositorName.trim(),
    };

    const updatedQuotation: QuotationData = {
      quotationNumber,
      orderDate,
      quotedAt: todayStr,
      quotedBy: quotedBy.trim(),
      buyerInfo,
      items,
      supplyPrice,
      discountRate,
      discountAmount,
      setupFee,
      vat,
      totalAmount,
      estimatedLeadTime: estimatedLeadTime.trim(),
      validUntil: validUntilStr,
      managerNote: managerNote.trim(),
      approval: {
        isApproved: false,
      },
      payment: {
        paymentStatus: '결제대기',
      },
    };

    const newLog: TimelineLogEntry = {
      id: `log-${Date.now()}`,
      timestamp: todayStr,
      stage: '견적발송',
      title: `메디린 공식 견적서 발송 (${quotationNumber})`,
      description: `${quotedBy.trim()} 디자이너가 2번 정규 규격 서식으로 총 ${items.length}개 품목(총 ${totalQuantity}벌 / 최종 ${totalAmount.toLocaleString()}원) 견적서를 발행하여 고객에게 전송하였습니다. 고객 승인 대기 상태입니다.`,
      actor: quotedBy.split(' ')[0] || '메디린 수석 디자이너',
    };

    const updatedConsulting: ConsultingRequest = {
      ...consulting,
      companyName: companyName.trim() || consulting.companyName,
      contactPerson: contactPerson.trim() || consulting.contactPerson,
      phone: mobilePhone.trim() || consulting.phone,
      email: taxInvoiceEmail.trim() || consulting.email,
      status: '견적 발송',
      assignedConsultant: consulting.assignedConsultant || quotedBy.split(' (')[0],
      quotation: updatedQuotation,
      timelineLogs: [...(consulting.timelineLogs || []), newLog],
    };

    onSaveQuotation(updatedConsulting);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs overflow-y-auto p-2 sm:p-4 md:p-6 flex items-start justify-center animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-5xl w-full my-2 sm:my-4 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[96vh]">
        
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 z-30 bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 shadow-md shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base font-extrabold text-white">메디린 공식 견적서 작성 및 발송</h2>
                <span className="font-mono text-xs bg-slate-800 text-blue-300 px-2.5 py-0.5 rounded border border-slate-700">
                  {companyName || consulting.companyName}
                </span>
                <span className="text-[11px] bg-blue-600/30 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40 font-bold">
                  2번 이미지 정규 규격 서식 적용
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                고객 컨설팅 신청서를 기준으로 정규 견적서를 작성하여 고객에게 발송하고 승인을 요청합니다.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            title="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmitQuotation} className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1 font-sans text-xs">
          
          {/* Top Quick Status Pill */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-slate-900 text-sm">{consulting.companyName}</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold text-[11px]">{consulting.industry}</span>
              <span className="text-slate-400 font-mono text-[11px]">ID: {consulting.id}</span>
              <span className="text-slate-500 text-[11px]">희망수량: <strong className="text-blue-700 font-bold">{consulting.quantity}</strong></span>
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <div>
                <span className="text-slate-500">진행상황: </span>
                <span className="text-slate-800 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">{consulting.status}</span>
              </div>
            </div>
          </div>

          {/* Quotation Metadata Settings (Manager & Lead time) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 block text-[11px]">견적 작성자 / 담당자</label>
              <input
                type="text"
                value={quotedBy}
                onChange={(e) => setQuotedBy(e.target.value)}
                placeholder="이지원 수석 디자이너"
                required
                className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:border-blue-600 outline-none font-semibold text-xs text-slate-800"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block text-[11px]">납기 예정 안내</label>
              <input
                type="text"
                value={estimatedLeadTime}
                onChange={(e) => setEstimatedLeadTime(e.target.value)}
                placeholder="고객 승인 및 결제 확인 후 2주 이내 발송"
                required
                className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:border-blue-600 outline-none text-xs text-slate-800"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block text-[11px]">견적 유효기간</label>
              <select
                value={validDays}
                onChange={(e) => setValidDays(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg focus:border-blue-600 outline-none text-xs font-semibold text-slate-800"
              >
                <option value={7}>발행일로부터 7일간</option>
                <option value={14}>발행일로부터 14일간 (권장)</option>
                <option value={30}>발행일로부터 30일간</option>
              </select>
            </div>
          </div>

          {/* =========================================================================
              OFFICIAL B2B QUOTATION FORM CONTAINER (Refined Mediline Brand Aesthetics)
              ========================================================================= */}
          <div className="border border-slate-300 rounded-2xl bg-white p-3.5 sm:p-5 shadow-xs space-y-4">
            
            {/* Top Notice Banner (Mediline Clean Design Concept) */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl px-3.5 py-2.5 text-xs text-blue-950 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                <strong>세금계산서 / 현금영수증</strong> 발행을 원하실 경우, 오른쪽의 계산서 발행 정보란을 기입해 주세요.
              </span>
            </div>

            {/* Top Customer & Invoice Grid (Refined Slate / Blue B2B Aesthetic) */}
            <div className="overflow-x-auto rounded-xl border border-slate-300">
              <table className="w-full border-collapse text-xs">
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b border-slate-300">
                    <th className="border-r border-slate-300 bg-slate-100 py-2 px-2.5 text-center font-bold w-24 text-slate-800">
                      업체명
                    </th>
                    <td className="border-r border-slate-300 p-1.5 w-48 bg-white">
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="업체명"
                        className="w-full px-2 py-1 text-slate-900 font-bold bg-white border border-transparent rounded hover:border-slate-200 outline-none focus:bg-blue-50/50 focus:border-blue-500"
                      />
                    </td>
                    <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2 px-2.5 text-center font-bold w-24">
                      주문일
                    </th>
                    <td colSpan={5} className="p-1.5 bg-white">
                      <input
                        type="date"
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                        className="w-44 px-2 py-1 text-slate-900 font-mono bg-white border border-transparent rounded hover:border-slate-200 outline-none focus:bg-blue-50/50 focus:border-blue-500"
                      />
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-slate-300">
                    <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                      담당자명
                    </th>
                    <td className="border-r border-slate-300 p-2 bg-white">
                      <input
                        type="text"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="담당자명"
                        className="w-full px-2 py-1 text-slate-900 font-semibold bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                      />
                    </td>
                    <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px] leading-tight">
                      계산서발행<br />신청 선택
                    </th>
                    <td colSpan={5} className="p-2.5 bg-white">
                      {/* 2줄 배열: 1줄 발행구분, 2줄 이메일 */}
                      <div className="flex flex-col gap-2">
                        {/* 1줄: 세금계산서 / 현금영수증 라디오버튼 선택 */}
                        <div className="flex items-center gap-4">
                          <label className="inline-flex items-center gap-2 cursor-pointer font-bold text-slate-900 text-xs hover:text-blue-700 select-none">
                            <input
                              type="radio"
                              name="taxInvoiceType"
                              checked={taxInvoiceType === '세금계산서'}
                              onChange={() => setTaxInvoiceType('세금계산서')}
                              className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer"
                            />
                            <span>세금계산서</span>
                          </label>
                          <span className="text-slate-300">/</span>
                          <label className="inline-flex items-center gap-2 cursor-pointer font-bold text-slate-900 text-xs hover:text-blue-700 select-none">
                            <input
                              type="radio"
                              name="taxInvoiceType"
                              checked={taxInvoiceType === '현금영수증'}
                              onChange={() => setTaxInvoiceType('현금영수증')}
                              className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer"
                            />
                            <span>현금영수증</span>
                          </label>
                        </div>

                        {/* 2줄: 전자세금계산서 E-mail 입력 */}
                        <div className="flex items-center gap-2 text-[11px] pt-1.5 border-t border-slate-100">
                          <span className="text-slate-600 font-semibold shrink-0">E-mail (전자세금계산서 발급용):</span>
                          <input
                            type="email"
                            value={taxInvoiceEmail}
                            onChange={(e) => setTaxInvoiceEmail(e.target.value)}
                            placeholder="tax@company.co.kr"
                            className="flex-1 max-w-md px-2 py-1 text-slate-900 font-mono bg-white border border-slate-300 rounded outline-none focus:border-blue-600 focus:bg-blue-50/30 text-xs"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-slate-300">
                    <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                      전화번호
                    </th>
                    <td className="border-r border-slate-300 p-2 bg-white">
                      {/* 2줄 배열: 1줄 일반전화, 2줄 핸드폰 */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-500 text-[11px] w-12 shrink-0">일반전화</span>
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="02-540-8890"
                            className="flex-1 px-2 py-0.5 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                          />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-blue-700 font-bold text-[11px] w-12 shrink-0">핸드폰*</span>
                          <input
                            type="text"
                            value={mobilePhone}
                            onChange={(e) => setMobilePhone(e.target.value)}
                            placeholder="010-0000-0000"
                            className="flex-1 px-2 py-0.5 text-slate-900 font-mono font-bold bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                          />
                        </div>
                      </div>
                    </td>
                    <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                      사업자등록번호
                    </th>
                    <td className="border-r border-slate-300 p-2 w-36 bg-white">
                      <input
                        type="text"
                        value={businessNumber}
                        onChange={(e) => setBusinessNumber(e.target.value)}
                        placeholder="120-81-45678"
                        className="w-full px-2 py-1 text-slate-900 font-mono font-semibold bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                      />
                    </td>
                    <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2 text-center font-bold text-[11px] w-14">
                      업종
                    </th>
                    <td className="border-r border-slate-300 p-2 w-24 bg-white">
                      <input
                        type="text"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        placeholder="보건업"
                        className="w-full px-2 py-1 text-slate-900 bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                      />
                    </td>
                    <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2 text-center font-bold text-[11px] w-14">
                      업태
                    </th>
                    <td className="p-2 w-24 bg-white">
                      <input
                        type="text"
                        value={businessItem}
                        onChange={(e) => setBusinessItem(e.target.value)}
                        placeholder="서비스"
                        className="w-full px-2 py-1 text-slate-900 bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                      />
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-slate-300">
                    <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                      팩스번호
                    </th>
                    <td className="border-r border-slate-300 p-2 bg-white">
                      <input
                        type="text"
                        value={fax}
                        onChange={(e) => setFax(e.target.value)}
                        placeholder="02-542-6262"
                        className="w-full px-2 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                      />
                    </td>
                    <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                      사업자명
                    </th>
                    <td className="border-r border-slate-300 p-2 bg-white">
                      <input
                        type="text"
                        value={registeredCompanyName}
                        onChange={(e) => setRegisteredCompanyName(e.target.value)}
                        placeholder="사업자명"
                        className="w-full px-2 py-1 text-slate-900 font-semibold bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                      />
                    </td>
                    <th colSpan={2} className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                      대표자명
                    </th>
                    <td colSpan={2} className="p-2 bg-white">
                      <input
                        type="text"
                        value={ceoName}
                        onChange={(e) => setCeoName(e.target.value)}
                        placeholder="대표자명"
                        className="w-full px-2 py-1 text-slate-900 font-semibold bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                      />
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr>
                    <th className="border-r border-slate-300 bg-slate-100 py-2.5 px-2.5 text-center font-bold text-slate-800">
                      배송주소
                    </th>
                    <td className="border-r border-slate-300 p-2 bg-white">
                      {/* 2줄 배열: 1줄 도로명/상세주소, 2줄 우편번호 */}
                      <div className="flex flex-col gap-1.5">
                        <input
                          type="text"
                          value={shippingAddress}
                          onChange={(e) => setShippingAddress(e.target.value)}
                          placeholder="배송지 도로명 및 상세 주소"
                          className="w-full px-2 py-0.5 text-slate-900 bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                        />
                        <div className="flex items-center gap-1.5">
                          <span className="text-blue-700 font-bold text-[11px] shrink-0">우편번호*</span>
                          <input
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="06038"
                            className="w-28 px-2 py-0.5 text-slate-900 font-mono font-bold bg-white border border-slate-200 rounded outline-none focus:border-blue-500 focus:bg-blue-50/30"
                          />
                        </div>
                      </div>
                    </td>
                    <th className="border-r border-slate-300 bg-slate-100 text-slate-800 py-2.5 px-2.5 text-center font-bold text-[11px]">
                      입금자명
                    </th>
                    <td colSpan={5} className="p-1.5 bg-white">
                      <input
                        type="text"
                        value={depositorName}
                        onChange={(e) => setDepositorName(e.target.value)}
                        placeholder="입금자명 (주문자명과 동일해야 확인 가능)"
                        className="w-72 px-2 py-1 text-blue-900 font-bold bg-white border border-transparent rounded hover:border-slate-200 outline-none focus:bg-blue-50/50"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Main Items Table Title (Image 2: [구성정보 및 사이즈]) */}
            <div className="flex items-center justify-between pt-2">
              <div className="font-bold text-sm text-slate-900 tracking-tight flex items-center gap-2">
                <span>[구성정보 및 사이즈]</span>
                <span className="text-[11px] font-normal text-slate-500">
                  (품목별 XS, S, M, L, XL, 2XL 수량을 입력하면 토탈수량과 금액이 자동 계산됩니다)
                </span>
              </div>
              <button
                type="button"
                onClick={handleAddItem}
                className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>품목 행 추가</span>
              </button>
            </div>

            {/* Main Items Table (Image 2 Exact Columns with Refined Slate Border) */}
            <div className="overflow-x-auto rounded-xl border border-slate-300">
              <table className="w-full border-collapse text-xs text-center">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                  <tr>
                    <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-20">제품군</th>
                    <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 min-w-[150px]">제품명</th>
                    <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-16">색상</th>
                    <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-20">가격</th>
                    <th colSpan={6} className="border-r border-slate-300 py-1 px-1 bg-slate-200/80 border-b border-slate-300">사이즈</th>
                    <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-16 bg-blue-50/50">토탈수량</th>
                    <th rowSpan={2} className="border-r border-slate-300 py-2 px-2 w-24 bg-blue-50/50">토탈가격</th>
                    <th rowSpan={2} className="py-2 px-1 w-10">삭제</th>
                  </tr>
                  <tr className="bg-slate-100 text-[11px]">
                    <th className="border-r border-slate-300 py-1 w-10">XS</th>
                    <th className="border-r border-slate-300 py-1 w-10">S</th>
                    <th className="border-r border-slate-300 py-1 w-10">M</th>
                    <th className="border-r border-slate-300 py-1 w-10">L</th>
                    <th className="border-r border-slate-300 py-1 w-10">XL</th>
                    <th className="border-r border-slate-300 py-1 w-10">2XL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {items.map((item, idx) => {
                    const sizes = item.sizes || { xs: 0, s: 0, m: 0, l: 0, xl: 0, xxl: 0 };
                    return (
                      <tr key={idx} className="hover:bg-blue-50/20">
                        {/* 제품군 */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="text"
                            value={item.productCategory || ''}
                            onChange={(e) => handleUpdateItemField(idx, 'productCategory', e.target.value)}
                            placeholder="자켓"
                            className="w-full text-center px-1 py-1 text-slate-800 bg-white border border-slate-200 rounded outline-none focus:border-blue-600 font-medium"
                          />
                        </td>
                        {/* 제품명 */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="text"
                            value={item.productName}
                            onChange={(e) => handleUpdateItemField(idx, 'productName', e.target.value)}
                            placeholder="제품명"
                            className="w-full text-left px-2 py-1 text-slate-900 font-semibold bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* 색상 */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="text"
                            value={item.color || ''}
                            onChange={(e) => handleUpdateItemField(idx, 'color', e.target.value)}
                            placeholder="블랙"
                            className="w-full text-center px-1 py-1 text-slate-800 bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* 가격 (단가) */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) => handleUpdateItemField(idx, 'unitPrice', e.target.value)}
                            className="w-full text-right px-1.5 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* XS */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="number"
                            min={0}
                            value={sizes.xs}
                            onChange={(e) => handleUpdateSize(idx, 'xs', e.target.value)}
                            className="w-full text-center px-0.5 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* S */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="number"
                            min={0}
                            value={sizes.s}
                            onChange={(e) => handleUpdateSize(idx, 's', e.target.value)}
                            className="w-full text-center px-0.5 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* M */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="number"
                            min={0}
                            value={sizes.m}
                            onChange={(e) => handleUpdateSize(idx, 'm', e.target.value)}
                            className="w-full text-center px-0.5 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* L */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="number"
                            min={0}
                            value={sizes.l}
                            onChange={(e) => handleUpdateSize(idx, 'l', e.target.value)}
                            className="w-full text-center px-0.5 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* XL */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="number"
                            min={0}
                            value={sizes.xl}
                            onChange={(e) => handleUpdateSize(idx, 'xl', e.target.value)}
                            className="w-full text-center px-0.5 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* 2XL */}
                        <td className="border-r border-slate-300 p-1">
                          <input
                            type="number"
                            min={0}
                            value={sizes.xxl}
                            onChange={(e) => handleUpdateSize(idx, 'xxl', e.target.value)}
                            className="w-full text-center px-0.5 py-1 text-slate-900 font-mono bg-white border border-slate-200 rounded outline-none focus:border-blue-600"
                          />
                        </td>
                        {/* 토탈수량 */}
                        <td className="border-r border-slate-300 py-1.5 px-2 font-mono font-bold text-blue-700 bg-blue-50/50">
                          {item.quantity}
                        </td>
                        {/* 토탈가격 */}
                        <td className="border-r border-slate-300 py-1.5 px-2 text-right font-mono font-bold text-slate-900 bg-blue-50/50">
                          {item.totalPrice.toLocaleString()}
                        </td>
                        {/* 삭제 */}
                        <td className="p-1 text-center">
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(idx)}
                            className="p-1 text-slate-400 hover:text-red-600 cursor-pointer"
                            title="행 삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  {/* Empty filler rows for authentic Excel sheet look */}
                  {[...Array(Math.max(1, 4 - items.length))].map((_, i) => (
                    <tr key={`filler-${i}`} className="h-7 text-slate-200">
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td className="border-r border-slate-300">&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Direct subtotal under the items table (Image Exact Placement) */}
            <div className="flex justify-end items-baseline pt-4 pb-1">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg mr-2">합산 금액</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-blue-600">
                ₩ {supplyPrice.toLocaleString()}
              </span>
              <span className="text-xs text-slate-700 font-bold ml-1.5">(VAT별도)</span>
            </div>
          </div>

          {/* Two Side-by-Side Cards (Image Exact Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Discount & Setup Fee Options */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-2xs">
              <div className="font-bold text-slate-800 flex items-center gap-1.5 text-xs">
                <Percent className="w-3.5 h-3.5 text-blue-600" />
                <span>할인율 &amp; 제판비 옵션</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-slate-600 font-medium block text-[11px]">B2B 대량 발주 할인율 (%)</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min={0}
                      max={30}
                      value={discountRate}
                      onChange={(e) => setDiscountRate(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-16 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-center font-bold text-xs outline-none focus:border-blue-500"
                    />
                    <span className="font-bold text-slate-700">%</span>
                    {discountAmount > 0 && (
                      <span className="text-[11px] text-blue-600 font-mono font-bold">
                        (-{discountAmount.toLocaleString()}원)
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-slate-600 font-medium block text-[11px]">로고 자수 제판비 (원)</label>
                    <button
                      type="button"
                      onClick={() => setSetupFee(0)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-all ${
                        setupFee === 0 ? 'bg-emerald-600 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      전액 지원 (0원)
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        min={0}
                        step={1000}
                        value={setupFee}
                        onChange={(e) => setSetupFee(Math.max(0, parseInt(e.target.value) || 0))}
                        placeholder="0"
                        className="w-full pl-2.5 pr-6 py-1.5 bg-white border border-slate-300 rounded-lg font-mono font-bold text-xs outline-none focus:border-blue-600 text-slate-900"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 font-medium pointer-events-none">원</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSetupFee(55000)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                        setupFee === 55000 ? 'bg-blue-50 border-blue-400 text-blue-700 font-bold' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                      title="기본 제판비 55,000원 적용"
                    >
                      55,000원
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-600 font-medium block text-[11px]">고객 전달 안내 메시지</label>
                <textarea
                  value={managerNote}
                  onChange={(e) => setManagerNote(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:border-blue-600 leading-relaxed text-slate-800 resize-none"
                  placeholder="30벌 이상 단체 발주 특별 할인 및 로고 컴퓨터 자수 제판비(55,000원) 전액 무료 지원 프로모션이 적용되었습니다."
                />
              </div>
            </div>

            {/* Right: Dark Navy Summary Card */}
            <div className="bg-[#0b1329] text-white p-5 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs text-slate-300 font-medium mb-3 pb-2 flex justify-between border-b border-slate-800">
                  <span className="text-slate-300 font-semibold">견적 금액 정산 내역</span>
                  <span className="font-mono text-blue-400 font-bold">총 {totalQuantity}벌</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>합산 금액 (할인 전 정가)</span>
                    <span className="font-mono font-bold text-white">₩ {supplyPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-blue-400">
                    <span>B2B 특별 할인 ({discountRate}%)</span>
                    <span className="font-mono font-bold">{discountAmount > 0 ? `- ₩ ${discountAmount.toLocaleString()}` : '0원'}</span>
                  </div>
                  {setupFee > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>로고 제판비</span>
                      <span className="font-mono font-bold text-white">+ ₩ {setupFee.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-amber-300 font-bold pt-1.5 border-t border-slate-800/80">
                    <span>최종 견적 금액 (공급가)</span>
                    <span className="font-mono text-sm text-amber-300 font-extrabold">₩ {discountedSupply.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>부가가치세 (VAT 10%)</span>
                    <span className="font-mono font-bold text-white">₩ {vat.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3 flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-200">최종가 (VAT 포함 총액)</span>
                <span className="text-2xl sm:text-3xl font-black font-mono text-blue-400">
                  ₩ {totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Below Table Note */}
          <div className="text-xs text-slate-700 pt-1 font-medium">
            모든 주문은 [기본정보]와 [구성정보 및 사이즈]에 의거하여 제작됩니다.
          </div>

          {/* [확인해주세요] Box */}
          <div className="border border-slate-200 rounded-2xl bg-white p-5 sm:p-6 text-xs leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xs">
            <div className="md:col-span-2 space-y-1.5">
              <div className="font-bold text-slate-900 text-xs">[확인해주세요]</div>
              <ol className="list-decimal list-inside space-y-1 text-slate-700 text-[11px]">
                <li>사이즈는 정확히 확인하여 작성해주세요.</li>
                <li>주문 제작 상품의 경우 디자인 및 수량에 따라 소요기간이 달라집니다.</li>
                <li className="font-bold text-slate-900"><span className="text-blue-600 font-extrabold mr-1">※</span>승인 진행 이후 디자인 / 색상 / 수량의 수정은 불가능합니다.</li>
                <li>승인 및 입금확인 후 제작이 시작됩니다. (입금자명이 주문자명과 동일해야하며 다를 경우 미리 안내 부탁드립니다.)</li>
                <li>승인서는 계약서와 동일한 효력이 발생합니다.</li>
                <li>위 모든 사항은 라린느 / 메디린 유니폼으로 주문하신 내용임을 확인 합니다.</li>
              </ol>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-slate-200 md:pl-6 space-y-1.5 text-slate-600 text-[11px] flex flex-col justify-center">
              <div className="font-bold text-slate-900 text-xs">TEL. 1577.6923</div>
              <div>FAX. 02.542.6262</div>
              <div>서울특별시 강남구 논현로 154길 18, 린빌딩 2층</div>
              <div className="font-mono text-blue-600 font-semibold">www.lalunestyle.com / www.medilyn.co.kr</div>
            </div>
          </div>

          {/* *입금계좌 Box */}
          <div className="border border-slate-200 rounded-2xl bg-white p-4 text-xs space-y-1 shadow-2xs">
            <div className="font-bold text-slate-900 text-xs">*입금계좌</div>
            <div className="text-slate-800">
              세금계산서 발행 : <strong className="font-bold text-blue-900">국민은행 469301-01-202005 주식회사 라린느</strong>
            </div>
          </div>

          {/* Action Footer */}
          <div className="sticky bottom-0 bg-white/95 backdrop-blur-xs pt-3 pb-1 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500">
              * [고객에게 공식 견적서 발송] 클릭 시 상태가 <strong>'견적 발송'</strong>으로 즉시 전환되며 고객에게 승인 요청이 전송됩니다.
            </p>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>고객에게 공식 견적서 발송하기</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
