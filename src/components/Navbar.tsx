import React from 'react';
import { Sparkles, Shield, User, FileText, Compass, ListOrdered, PhoneCall } from 'lucide-react';

interface Props {
  activeTab: 'form' | 'history' | 'guide';
  setActiveTab: (tab: 'form' | 'history' | 'guide') => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
  consultingCount: number;
}

export const Navbar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  isAdmin,
  setIsAdmin,
  consultingCount,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div
            onClick={() => setActiveTab('guide')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-amber-900 to-amber-700 text-amber-200 flex items-center justify-center font-serif-brand font-bold text-xl shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-brand font-bold text-lg sm:text-xl tracking-wider text-slate-950">
                  LA LIGNE
                </span>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  B2B 아틀리에
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                대량주문 디자인컨설팅 & 맞춤 컴퓨터 자수 솔루션
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'form'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-700" />
              상담/견적 신청
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'history'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListOrdered className="w-4 h-4 text-amber-700" />
              진행 현황 조회
              {consultingCount > 0 && (
                <span className="bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded-full text-[10px]">
                  {consultingCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'guide'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-700" />
              B2B 이용 안내
            </button>
          </nav>

          {/* Right Mode Switcher & Hotline */}
          <div className="flex items-center gap-2.5">
            {/* Mode Switcher Toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setIsAdmin(false)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  !isAdmin
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>고객 모드</span>
              </button>
              <button
                type="button"
                onClick={() => setIsAdmin(true)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isAdmin
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>관리자 모드</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex md:hidden items-center justify-between py-2 border-t border-slate-100 text-xs">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-1.5 text-center font-bold ${
              activeTab === 'form' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-slate-500'
            }`}
          >
            상담 신청
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-1.5 text-center font-bold ${
              activeTab === 'history' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-slate-500'
            }`}
          >
            진행 조회 ({consultingCount})
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 py-1.5 text-center font-bold ${
              activeTab === 'guide' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-slate-500'
            }`}
          >
            이용 안내
          </button>
        </div>
      </div>
    </header>
  );
};
