import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ConsultingForm } from './components/ConsultingForm';
import { HistoryView } from './components/HistoryView';
import { GuideSection } from './components/GuideSection';
import { ConsultingRequest } from './types';
import { INITIAL_CONSULTING_REQUESTS } from './data/constants';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'guide' | 'consulting' | 'history'>('guide');
  const [highlightId, setHighlightId] = useState<string | undefined>(undefined);
  const [consultingPreset, setConsultingPreset] = useState<string | undefined>(undefined);

  // Persistent storage for consulting requests
  const [consultingRequests, setConsultingRequests] = useState<ConsultingRequest[]>(() => {
    try {
      const saved = localStorage.getItem('medilyn_consulting_requests') || localStorage.getItem('lalune_consulting_requests');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const hasQuote = parsed.some((p: ConsultingRequest) => Boolean(p.quotation));
          if (hasQuote) return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_CONSULTING_REQUESTS;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [myConsultingCount, setMyConsultingCount] = useState<number>(() => {
    try {
      let saved = JSON.parse(localStorage.getItem('medilyn_my_consulting_ids') || '[]');
      if (!Array.isArray(saved) || saved.length === 0) {
        saved = ['LN-20261005-7721'];
        localStorage.setItem('medilyn_my_consulting_ids', JSON.stringify(saved));
      }
      return Array.isArray(saved) ? saved.length : 1;
    } catch {
      return 1;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('medilyn_consulting_requests', JSON.stringify(consultingRequests));
    } catch (e) {
      console.error(e);
    }
  }, [consultingRequests]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleConsultingSubmit = (newReq: ConsultingRequest) => {
    setConsultingRequests([newReq, ...consultingRequests]);
    setMyConsultingCount(prev => prev + 1);
    showToast(`B2B 컨설팅 신청이 접수되었습니다. (접수번호: ${newReq.id})`);
  };

  const handleUpdateConsulting = (updated: ConsultingRequest) => {
    setConsultingRequests(prev => prev.map(item => item.id === updated.id ? updated : item));
    showToast(`B2B 컨설팅(${updated.id}) 상태가 업데이트되었습니다.`);
  };

  const handleDeleteConsulting = (id: string) => {
    setConsultingRequests(prev => prev.filter(item => item.id !== id));
    setMyConsultingCount(prev => Math.max(0, prev - 1));
    showToast(`신청 내역(${id})이 삭제되었습니다.`);
  };

  const navigateToHistoryWithId = (id?: string) => {
    setHighlightId(id);
    setActiveTab('history');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-neutral-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setHighlightId(undefined);
          setActiveTab(tab);
        }}
        consultingCount={myConsultingCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'guide' && (
          <GuideSection
            onNavigateToConsulting={(preset) => {
              setConsultingPreset(preset);
              setActiveTab('consulting');
            }}
          />
        )}

        {activeTab === 'consulting' && (
          <ConsultingForm
            onSubmitSuccess={handleConsultingSubmit}
            onNavigateToHistory={navigateToHistoryWithId}
            initialPreset={consultingPreset}
          />
        )}

        {activeTab === 'history' && (
          <HistoryView
            consultingRequests={consultingRequests}
            highlightId={highlightId}
            onNavigateToConsulting={() => setActiveTab('consulting')}
            onUpdateConsulting={handleUpdateConsulting}
            onDeleteConsulting={handleDeleteConsulting}
          />
        )}
      </main>

      {/* Luxury Minimalist Footer */}
      <footer className="bg-white border-t border-neutral-200 py-10 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-neutral-500">
          <div className="space-y-1.5">
            <div className="font-serif tracking-widest text-sm font-bold text-neutral-900">
              STUDIO MEDILYN
            </div>
            <div>메디린 아틀리에 주식회사 &middot; 사업자등록번호: 211-88-92410 &middot; 통신판매업신고: 제2024-서울강남-0412호</div>
            <div>서울특별시 강남구 압구정로 420 메디린 디자인 아틀리에 B2B 센터</div>
            <div>고객센터: 02-540-8890 | 이메일: b2b@medilyn.co.kr | 운영시간: 평일 09:30 ~ 18:00</div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-700">
            <button onClick={() => setActiveTab('guide')} className="hover:underline cursor-pointer">
              B2B 이용 가이드
            </button>
            <span>&middot;</span>
            <button onClick={() => setActiveTab('consulting')} className="hover:underline cursor-pointer">
              B2B 컨설팅 신청
            </button>
            <span>&middot;</span>
            <button onClick={() => setActiveTab('history')} className="hover:underline cursor-pointer">
              신청 내역 조회
            </button>
            <span>&middot;</span>
            <span className="text-neutral-400">&copy; {new Date().getFullYear()} MEDILYN. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
