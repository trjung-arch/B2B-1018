import React, { useState } from 'react';
import { ConsultingRequest, Quotation, QuotationItem } from '../types';
import { X, Plus, Trash2, Send, Save, Calculator, AlertCircle } from 'lucide-react';

interface Props {
  consulting: ConsultingRequest;
  isOpen: boolean;
  onClose: () => void;
  onSaveQuotation: (requestId: string, quotation: Quotation, sendToCustomer: boolean) => void;
}

export const QuotationEditorModal: React.FC<Props> = ({
  consulting,
  isOpen,
  onClose,
  onSaveQuotation,
}) => {
  if (!isOpen) return null;

  // Initialize with existing quotation or auto-generate reasonable defaults from consulting request
  const initialItems: QuotationItem[] = consulting.quotation?.items || [
    {
      id: 'item-1',
      name: `${consulting.category}`,
      spec: `컴퓨터 자수 맞춤 제작 (${consulting.embroiderySpec.placement}, ${consulting.embroiderySpec.sizeEstimate})`,
      quantity: consulting.quantity,
      unitPrice: 38000,
      embroideryFee: 4000,
      amount: (38000 + 4000) * consulting.quantity,
    },
  ];

  const [items, setItems] = useState<QuotationItem[]>(initialItems);
  const [embroiderySetupFee, setEmbroiderySetupFee] = useState<number>(
    consulting.quotation?.embroiderySetupFee ?? 50000
  );
  const [discountAmount, setDiscountAmount] = useState<number>(
    consulting.quotation?.discountAmount ?? (consulting.quantity >= 50 ? 100000 : 0)
  );
  const [bankName, setBankName] = useState(consulting.quotation?.bankName || '기업은행');
  const [accountNumber, setAccountNumber] = useState(
    consulting.quotation?.accountNumber || '028-192830-01-018'
  );
  const [accountHolder, setAccountHolder] = useState(
    consulting.quotation?.accountHolder || '(주)라린느코리아'
  );
  const [notes, setNotes] = useState<string>(
    consulting.quotation?.notes.join('\n') ||
      '• 본 견적서는 발행일로부터 14일간 유효합니다.\n• 견적서 승인 및 입금 확인 후 영업일 기준 7~10일 이내에 제작 및 출고가 진행됩니다.\n• 100벌 이상 대량 주문 시 사전 1:1 디지털 자수 감리 시안 무료 제공.'
  );

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const taxableBase = Math.max(0, subtotal + embroiderySetupFee - discountAmount);
  const vatAmount = Math.round(taxableBase * 0.1);
  const totalAmount = taxableBase + vatAmount;

  const handleItemChange = (index: number, field: keyof QuotationItem, value: any) => {
    const updated = [...items];
    const current = { ...updated[index], [field]: value };

    if (field === 'quantity' || field === 'unitPrice' || field === 'embroideryFee') {
      const qty = Number(field === 'quantity' ? value : current.quantity) || 0;
      const unit = Number(field === 'unitPrice' ? value : current.unitPrice) || 0;
      const emb = Number(field === 'embroideryFee' ? value : current.embroideryFee) || 0;
      current.amount = (unit + emb) * qty;
    }

    updated[index] = current;
    setItems(updated);
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: `item-${Date.now()}`,
        name: '추가 옵션 / 개별 이니셜 맞춤 자수',
        spec: '상세 스펙 입력',
        quantity: consulting.quantity,
        unitPrice: 0,
        embroideryFee: 2000,
        amount: 2000 * consulting.quantity,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length <= 1) return;
    setItems(items.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (sendNow: boolean) => {
    const quoteNumber =
      consulting.quotation?.quoteNumber ||
      `QT-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(
        10 + Math.random() * 90
      )}`;

    const newQuotation: Quotation = {
      quoteNumber,
      createdAt: consulting.quotation?.createdAt || new Date().toISOString().slice(0, 10),
      validUntil:
        consulting.quotation?.validUntil ||
        new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      items,
      subtotal,
      embroiderySetupFee,
      discountAmount,
      vatAmount,
      totalAmount,
      bankName,
      accountNumber,
      accountHolder,
      notes: notes.split('\n').filter((n) => n.trim().length > 0),
      status: sendNow ? '발송됨' : consulting.quotation?.status || '발송됨',
    };

    onSaveQuotation(consulting.id, newQuotation, sendNow);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                관리자 전용
              </span>
              <h2 className="text-base font-bold text-slate-900">
                {consulting.quotation ? '견적서 수정 및 재발송' : '신규 B2B 맞춤 견적서 작성'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              고객사: <span className="font-semibold text-slate-800">{consulting.companyName}</span> ({consulting.applicantName} 님) · 수량 {consulting.quantity}벌
            </p>
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
          {/* Quick Info Bar */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-slate-400">품목 / 자수 규격: </span>
              <span className="font-bold text-slate-800">{consulting.category}</span> · {consulting.embroiderySpec.placement} ({consulting.embroiderySpec.sizeEstimate})
            </div>
            <div className="text-slate-500">
              희망 납기일: <span className="font-semibold text-slate-800">{consulting.expectedDeliveryDate}</span>
            </div>
          </div>

          {/* Itemized Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-amber-700" /> 세부 견적 내역 및 단가 산출
              </h3>
              <button
                type="button"
                onClick={handleAddItem}
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> 품목 추가
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 font-semibold">
                  <tr>
                    <th className="py-2.5 px-3">품목명 / 스펙</th>
                    <th className="py-2.5 px-2 w-20 text-center">수량</th>
                    <th className="py-2.5 px-2 w-28 text-right">기본단가(원)</th>
                    <th className="py-2.5 px-2 w-28 text-right">자수공임(원)</th>
                    <th className="py-2.5 px-3 w-32 text-right">공급가액(원)</th>
                    <th className="py-2.5 px-2 w-10 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/70">
                      <td className="p-2.5 space-y-1">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleItemChange(idx, 'name', e.target.value)}
                          className="w-full px-2 py-1 border border-slate-200 rounded text-xs font-medium focus:ring-1 focus:ring-amber-500"
                          placeholder="품목명"
                        />
                        <input
                          type="text"
                          value={item.spec}
                          onChange={(e) => handleItemChange(idx, 'spec', e.target.value)}
                          className="w-full px-2 py-1 border border-slate-200 rounded text-xs text-slate-500 focus:ring-1 focus:ring-amber-500"
                          placeholder="세부 스펙 / 원단 정보"
                        />
                      </td>
                      <td className="p-2.5">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(idx, 'quantity', parseInt(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-slate-200 rounded text-center text-xs focus:ring-1 focus:ring-amber-500"
                        />
                      </td>
                      <td className="p-2.5">
                        <input
                          type="number"
                          step="500"
                          value={item.unitPrice}
                          onChange={(e) => handleItemChange(idx, 'unitPrice', parseInt(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-slate-200 rounded text-right text-xs focus:ring-1 focus:ring-amber-500"
                        />
                      </td>
                      <td className="p-2.5">
                        <input
                          type="number"
                          step="500"
                          value={item.embroideryFee}
                          onChange={(e) => handleItemChange(idx, 'embroideryFee', parseInt(e.target.value) || 0)}
                          className="w-full px-2 py-1 border border-slate-200 rounded text-right text-xs focus:ring-1 focus:ring-amber-500"
                        />
                      </td>
                      <td className="p-2.5 text-right font-bold text-slate-800">
                        {item.amount.toLocaleString()}원
                      </td>
                      <td className="p-2.5 text-center">
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(idx)}
                          disabled={items.length <= 1}
                          className="text-slate-400 hover:text-rose-600 disabled:opacity-30 disabled:cursor-not-allowed p-1 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Adjustments & Totals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-600">자수 펀칭 프로그램 초기 세팅비(원)</label>
                <input
                  type="number"
                  step="5000"
                  value={embroiderySetupFee}
                  onChange={(e) => setEmbroiderySetupFee(parseInt(e.target.value) || 0)}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white focus:ring-1 focus:ring-amber-500"
                />
                <p className="text-[11px] text-slate-400 mt-0.5">※ 로고 펀칭 데이터 1회 세팅비 (대량 주문 시 할인/면제 가능)</p>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-600">B2B 대량 발주 특별 할인액(원)</label>
                <input
                  type="number"
                  step="10000"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(parseInt(e.target.value) || 0)}
                  className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white text-rose-600 font-semibold focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-xs">
                <div>
                  <label className="text-slate-500">입금은행</label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full mt-1 px-2 py-1 border border-slate-200 rounded text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="text-slate-500">계좌번호</label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full mt-1 px-2 py-1 border border-slate-200 rounded text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="text-slate-500">예금주</label>
                  <input
                    type="text"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                    className="w-full mt-1 px-2 py-1 border border-slate-200 rounded text-xs bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Total summary column */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>품목 소계</span>
                  <span className="font-semibold">{subtotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>자수 프로그램 세팅비</span>
                  <span className="font-semibold">+{embroiderySetupFee.toLocaleString()}원</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-600 font-medium">
                    <span>B2B 수량 할인</span>
                    <span>-{discountAmount.toLocaleString()}원</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-100">
                  <span>공급가액</span>
                  <span className="font-semibold">{taxableBase.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>부가가치세 (VAT 10%)</span>
                  <span className="font-semibold">{vatAmount.toLocaleString()}원</span>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-slate-900 flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-800">최종 견적 총액 (VAT포함)</span>
                <span className="text-xl font-extrabold text-amber-900 font-serif-brand">
                  {totalAmount.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
              견적 특약 사항 및 유의사항 안내문
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-xl text-xs text-slate-700 bg-slate-50 focus:bg-white focus:ring-1 focus:ring-amber-500 font-mono"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-3 rounded-b-2xl">
          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            견적서를 발송하면 고객 포털 상태가 [2. 견적 발송 (고객승인 대기)]로 전환됩니다.
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-xs transition-colors"
            >
              취소
            </button>
            <button
              type="button"
              onClick={() => handleSubmit(true)}
              className="px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" /> 고객에게 견적서 발송하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
