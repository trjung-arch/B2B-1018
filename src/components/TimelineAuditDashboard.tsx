import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  FileText, 
  Send, 
  Truck, 
  DollarSign, 
  TrendingUp, 
  Filter, 
  Building2, 
  ChevronRight, 
  Calendar, 
  UserCheck,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { ConsultingRequest, ConsultingStatus } from '../types';

interface TimelineAuditDashboardProps {
  requests: ConsultingRequest[];
  onSelectRequest: (req: ConsultingRequest) => void;
  onOpenQuotationView: (req: ConsultingRequest) => void;
  onOpenQuotationEditor: (req: ConsultingRequest) => void;
  isAdmin: boolean;
}

export const TimelineAuditDashboard: React.FC<TimelineAuditDashboardProps> = ({
  requests,
  onSelectRequest,
  onOpenQuotationView,
  onOpenQuotationEditor,
  isAdmin,
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | '견적대기' | '승인대기' | '승인완료' | '제작중' | '출고완료'>('all');

  // Metrics
  const stats = useMemo(() => {
    let awaitingQuote = 0;
    let awaitingApproval = 0;
    let approvedAwaitingPayment = 0;
    let inProduction = 0;
    let completed = 0;
    let totalQuotationAmount = 0;

    requests.forEach(r => {
      if (r.quotation?.totalAmount) {
        totalQuotationAmount += r.quotation.totalAmount;
      }
      if (r.status === '접수완료' || r.status === '컨설턴트 배정' || r.status === '시안 제작중') {
        awaitingQuote++;
      } else if (r.status === '견적 발송') {
        awaitingApproval++;
      } else if (r.status === '견적 승인완료' || r.status === '입금확인요청') {
        approvedAwaitingPayment++;
      } else if (r.status === '결제완료/작업진행') {
        inProduction++;
      } else if (r.status === '제작/출고완료' || r.status === '상담 완료') {
        completed++;
      }
    });

    return {
      total: requests.length,
      awaitingQuote,
      awaitingApproval,
      approvedAwaitingPayment,
      inProduction,
      completed,
      totalQuotationAmount,
    };
  }, [requests]);

  // Filtered requests
  const filteredRequests = useMemo(() => {
    return requests.filter(r => {
      if (statusFilter === 'all') return true;
      if (statusFilter === '견적대기') {
        return r.status === '접수완료' || r.status === '컨설턴트 배정' || r.status === '시안 제작중';
      }
      if (statusFilter === '승인대기') {
        return r.status === '견적 발송';
      }
      if (statusFilter === '승인완료') {
        return r.status === '견적 승인완료' || r.status === '입금확인요청';
      }
      if (statusFilter === '제작중') {
        return r.status === '결제완료/작업진행';
      }
      if (statusFilter === '출고완료') {
        return r.status === '제작/출고완료' || r.status === '상담 완료';
      }
      return true;
    });
  }, [requests, statusFilter]);

  // Aggregate all timeline logs across requests into a master timeline
  const masterTimelineLogs = useMemo(() => {
    const logs: { request: ConsultingRequest; log: any }[] = [];
    requests.forEach(r => {
      if (r.timelineLogs && r.timelineLogs.length > 0) {
        r.timelineLogs.forEach(l => {
          logs.push({ request: r, log: l });
        });
      }
    });
    // Sort descending by timestamp
    return logs.sort((a, b) => b.log.timestamp.localeCompare(a.log.timestamp));
  }, [requests]);

  return (
    <div className="space-y-6">
      {/* Metrics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Total Requests */}
        <div 
          onClick={() => setStatusFilter('all')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === 'all' ? 'bg-slate-900 text-white border-slate-900 shadow-sm' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={statusFilter === 'all' ? 'text-slate-400' : 'text-slate-500'}>전체 신청</span>
            <FileText className="w-4 h-4 opacity-70" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono">
            {stats.total}<span className="text-xs font-normal ml-0.5">건</span>
          </div>
        </div>

        {/* 1. Awaiting Quote */}
        <div 
          onClick={() => setStatusFilter('견적대기')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === '견적대기' ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={statusFilter === '견적대기' ? 'text-slate-300' : 'text-slate-500'}>견적 작성대기</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-blue-600">
            {stats.awaitingQuote}<span className="text-xs font-normal ml-0.5 text-slate-500">건</span>
          </div>
        </div>

        {/* 2. Quotation Sent (Awaiting Approval) */}
        <div 
          onClick={() => setStatusFilter('승인대기')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === '승인대기' ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={statusFilter === '승인대기' ? 'text-slate-950 font-bold' : 'text-slate-500'}>고객 승인대기</span>
            <Send className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-amber-600">
            {stats.awaitingApproval}<span className="text-xs font-normal ml-0.5 text-slate-500">건</span>
          </div>
        </div>

        {/* 3. Customer Approved (Awaiting Payment) */}
        <div 
          onClick={() => setStatusFilter('승인완료')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === '승인완료' ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={statusFilter === '승인완료' ? 'text-emerald-100' : 'text-slate-500'}>승인완료(결제대기)</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-emerald-600">
            {stats.approvedAwaitingPayment}<span className="text-xs font-normal ml-0.5 text-slate-500">건</span>
          </div>
        </div>

        {/* 4. Payment Confirmed & In Production */}
        <div 
          onClick={() => setStatusFilter('제작중')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === '제작중' ? 'bg-purple-600 text-white border-purple-600 shadow-sm' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={statusFilter === '제작중' ? 'text-purple-100' : 'text-slate-500'}>결제완료(제작진행)</span>
            <CreditCard className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-purple-600">
            {stats.inProduction}<span className="text-xs font-normal ml-0.5 text-slate-500">건</span>
          </div>
        </div>

        {/* 5. Production Completed / Shipped */}
        <div 
          onClick={() => setStatusFilter('출고완료')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === '출고완료' ? 'bg-blue-700 text-white border-blue-700 shadow-sm' : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={statusFilter === '출고완료' ? 'text-blue-100' : 'text-slate-500'}>제작/출고완료</span>
            <Truck className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-xl sm:text-2xl font-black font-mono text-blue-700">
            {stats.completed}<span className="text-xs font-normal ml-0.5 text-slate-500">건</span>
          </div>
        </div>
      </div>

      {/* Main Content: Filtered Orders Table & Live Audit Trail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Orders by Stage */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-blue-600" />
                <span>견적 발송 &amp; 고객 승인 &amp; 결제 작업 진행 현황</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                신청서를 기준으로 발행된 견적서의 승인 날짜, 시간, 결제 및 제작 작업 상태를 관리합니다.
              </p>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {(['all', '승인대기', '승인완료', '제작중'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setStatusFilter(filter)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    statusFilter === filter
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter === 'all' ? '전체' : filter}
                </button>
              ))}
            </div>
          </div>

          {/* List of Orders */}
          <div className="divide-y divide-slate-100 space-y-2">
            {filteredRequests.map((req) => {
              const hasQuote = Boolean(req.quotation);
              const isApproved = Boolean(req.quotation?.approval?.isApproved);
              const isPaid = req.quotation?.payment?.paymentStatus === '결제완료';

              return (
                <div 
                  key={req.id}
                  className="p-3.5 sm:p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {req.id}
                      </span>
                      <strong className="text-sm font-extrabold text-slate-900">
                        {req.companyName}
                      </strong>
                      <span className="text-xs text-slate-400">&middot;</span>
                      <span className="text-xs text-slate-600">{req.contactPerson} ({req.phone})</span>

                      {/* Status Tag */}
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        req.status === '견적 승인완료'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : req.status === '견적 발송'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : req.status === '결제완료/작업진행'
                          ? 'bg-purple-100 text-purple-800 border border-purple-300'
                          : req.status === '제작/출고완료'
                          ? 'bg-blue-100 text-blue-800 border border-blue-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {req.status}
                      </span>
                    </div>

                    {/* Quotation & Approval Detail snippet */}
                    <div className="text-xs text-slate-500 flex flex-wrap items-center gap-3">
                      {hasQuote ? (
                        <>
                          <span className="text-slate-700 font-medium">
                            견적번호: <strong className="font-mono text-blue-700">{req.quotation?.quotationNumber}</strong>
                          </span>
                          <span>
                            견적금액: <strong className="font-mono text-slate-900 font-bold">{req.quotation?.totalAmount.toLocaleString()}원</strong>
                          </span>
                          {isApproved && (
                            <span className="text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>승인일시: {req.quotation?.approval?.approvedAt} (승인자: {req.quotation?.approval?.approverName})</span>
                            </span>
                          )}
                          {isPaid && (
                            <span className="text-purple-700 font-bold flex items-center gap-1 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                              <CreditCard className="w-3 h-3 text-purple-600" />
                              <span>결제확인완료 ({req.quotation?.payment?.confirmedAt || req.quotation?.payment?.paidAt})</span>
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-slate-400">
                          수량 {req.quantity} &middot; 견적서 미발행 상태
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons for this row */}
                  <div className="flex items-center gap-2 shrink-0">
                    {hasQuote ? (
                      <button
                        type="button"
                        onClick={() => onOpenQuotationView(req)}
                        className="px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-95"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>견적서 열람 / {isApproved ? '승인확인' : '승인하기'}</span>
                      </button>
                    ) : (
                      isAdmin && (
                        <button
                          type="button"
                          onClick={() => onOpenQuotationEditor(req)}
                          className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>견적서 작성 및 발송</span>
                        </button>
                      )
                    )}

                    <button
                      type="button"
                      onClick={() => onSelectRequest(req)}
                      className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                      title="상세 내역 보기"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredRequests.length === 0 && (
              <div className="text-center py-12 text-slate-400 text-xs">
                해당 상태 조건의 신청 내역이 없습니다.
              </div>
            )}
          </div>
        </div>

        {/* Right 1 Col: Real-time Timeline Audit Stream */}
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4 flex flex-col">
          <div className="pb-3 border-b border-slate-200">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>실시간 승인/결제 대시보드 로그</span>
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              고객 승인 일시 및 작업 진행 로그가 지속적으로 누적됩니다.
            </p>
          </div>

          <div className="space-y-3.5 overflow-y-auto max-h-[540px] pr-1">
            {masterTimelineLogs.slice(0, 15).map(({ request, log }, idx) => (
              <div 
                key={idx}
                onClick={() => onOpenQuotationView(request)}
                className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition-all cursor-pointer space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <strong className="text-slate-900 truncate max-w-[140px]">{request.companyName}</strong>
                  <span className="font-mono text-slate-400 text-[10px]">{log.timestamp}</span>
                </div>
                <div className="text-xs font-bold text-blue-900 flex items-center gap-1">
                  {log.stage === '견적승인' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                  {log.stage === '결제완료' && <CreditCard className="w-3.5 h-3.5 text-purple-600 shrink-0" />}
                  {log.stage === '견적발송' && <Send className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                  {log.stage === '출고완료' && <Truck className="w-3.5 h-3.5 text-blue-700 shrink-0" />}
                  <span className="truncate">{log.title}</span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                  {log.description}
                </p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-0.5">
                  <span>기록: {log.actor}</span>
                  <span className="text-blue-600 font-semibold flex items-center gap-0.5">
                    견적서 확인 <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}

            {masterTimelineLogs.length === 0 && (
              <div className="text-center py-8 text-slate-400 text-xs">
                기록된 타임라인 로그가 없습니다.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
