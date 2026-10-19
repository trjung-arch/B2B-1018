import React, { useState } from 'react';
import { ConsultingRequest, ConsultingStatus, Quotation } from './types';
import { INITIAL_CONSULTING_REQUESTS } from './mockData';
import { Navbar } from './components/Navbar';
import { GuideSection } from './components/GuideSection';
import { ConsultingForm } from './components/ConsultingForm';
import { HistoryView } from './components/HistoryView';
import { Sparkles, Phone, Mail, MapPin, Building, ShieldCheck } from 'lucide-react';

export function App() {
  const [consultingRequests, setConsultingRequests] = useState<ConsultingRequest[]>(
    INITIAL_CONSULTING_REQUESTS
  );
  const [activeTab, setActiveTab] = useState<'form' | 'history' | 'guide'>('history');
  const [isAdmin, setIsAdmin] = useState<boolean>(true); // Default to admin for convenient inspection of the user's questions

  // 1. Customer submits a new request
  const handleSubmitSuccess = (newReq: ConsultingRequest) => {
    setConsultingRequests([newReq, ...consultingRequests]);
    setActiveTab('history');
  };

  // 2. Customer approves quotation (ONLY callable via customer mode)
  const handleCustomerApprove = (requestId: string) => {
    setConsultingRequests((prev) =>
      prev.map((req) => {
        if (req.id === requestId) {
          const nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
          return {
            ...req,
            status: '견적 승인완료',
            updatedAt: nowStr,
            quotation: req.quotation
              ? {
                  ...req.quotation,
                  status: '고객승인',
                  approvedAt: nowStr,
                }
              : undefined,
          };
        }
        return req;
      })
    );
  };

  // 3. Admin saves or sends quotation
  const handleSaveQuotation = (
    requestId: string,
    quotation: Quotation,
    sendToCustomer: boolean
  ) => {
    setConsultingRequests((prev) =>
      prev.map((req) => {
        if (req.id === requestId) {
          const nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
          return {
            ...req,
            quotation,
            status: sendToCustomer ? '견적 발송' : req.status,
            updatedAt: nowStr,
          };
        }
        return req;
      })
    );
  };

  // 4. Admin updates status (e.g. deposit confirmed, production, shipment)
  const handleUpdateStatus = (
    requestId: string,
    newStatus: ConsultingStatus,
    tracking?: { courier: string; number: string }
  ) => {
    setConsultingRequests((prev) =>
      prev.map((req) => {
        if (req.id === requestId) {
          const nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
          return {
            ...req,
            status: newStatus,
            updatedAt: nowStr,
            courierName: tracking?.courier || req.courierName,
            trackingNumber: tracking?.number || req.trackingNumber,
            depositConfirmed:
              newStatus === '결제완료/작업진행' || newStatus === '상담 완료'
                ? true
                : req.depositConfirmed,
          };
        }
        return req;
      })
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        consultingCount={consultingRequests.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'guide' && (
          <GuideSection onStartRequest={() => setActiveTab('form')} />
        )}

        {activeTab === 'form' && (
          <ConsultingForm onSubmitSuccess={handleSubmitSuccess} />
        )}

        {activeTab === 'history' && (
          <HistoryView
            consultingRequests={consultingRequests}
            isAdmin={isAdmin}
            onUpdateConsultingStatus={handleUpdateStatus}
            onSaveQuotation={handleSaveQuotation}
            onCustomerApprove={handleCustomerApprove}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2 md:col-span-2">
            <div className="font-serif-brand font-bold text-slate-900 text-base">
              LA LIGNE PARIS · B2B ATELIER
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-md">
              (주)라린느 코리아는 하이엔드 맞춤 컴퓨터 자수와 고품질 유니폼/패브릭을 제작하는 
              B2B 대량 주문 전문 디자인 아틀리에입니다.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 space-y-0.5">
              <p>사업자등록번호: 211-88-90412 | 통신판매업신고: 제2026-서울성동-0419호</p>
              <p>본사 및 아틀리에: 서울특별시 성동구 연무장길 45, 라린느 빌딩 3-4F</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-slate-900">B2B 전담 상담 센터</div>
            <div className="space-y-1 text-slate-600">
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-700" /> 02-540-1016 (직통)</p>
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-amber-700" /> b2b@laligne.co.kr</p>
              <p className="text-[11px] text-slate-400">평일 09:30 ~ 18:30 (점심 12:30~13:30)</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-bold text-slate-900">품질 및 보증 안내</div>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              라린느는 산업용 최고급 일본 다지마(Tajima) 전산 자수기를 도입하여 
              100% 균일한 땀수와 세탁 내구성을 보장합니다.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>© 2026 LA LIGNE KOREA CO., LTD. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('guide')} className="hover:underline">이용약관</button>
            <button onClick={() => setActiveTab('guide')} className="hover:underline">개인정보처리방침</button>
            <button onClick={() => setIsAdmin(!isAdmin)} className="text-amber-800 font-semibold hover:underline">
              {isAdmin ? '고객 모드로 전환' : '관리자 모드로 전환'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
