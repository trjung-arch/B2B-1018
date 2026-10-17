import React from 'react';
import { Sparkles, Scissors, Clock, HelpCircle, FileText, Building2, PhoneCall, ClipboardList } from 'lucide-react';

interface HeaderProps {
  activeTab: 'guide' | 'consulting' | 'history';
  setActiveTab: (tab: 'guide' | 'consulting' | 'history') => void;
  consultingCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  consultingCount,
}) => {
  const totalCount = consultingCount;

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
      {/* Top micro announcement bar */}
      <div className="bg-neutral-950 text-neutral-300 text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2 font-light">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>메디린 B2B &middot; 병원·기업 프리미엄 유니폼 브랜드 수립 &middot; 30SET 이상 로고 제판비(55,000원) 전액 무료</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-neutral-300" /> B2B 전용: 02-540-8890
            </span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline">평일 09:30 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('guide')}
          className="cursor-pointer flex items-center gap-3 select-none"
        >
          <div className="w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center font-serif text-lg tracking-widest border border-neutral-800 shadow-sm">
            M
          </div>
          <div>
            <div className="font-serif tracking-[0.25em] text-xl font-bold text-neutral-900 leading-tight">
              MEDILYN
            </div>
            <div className="text-[10px] tracking-wider text-neutral-500 font-medium">
              병원 &middot; 기업 프리미엄 브랜드 유니폼 아틀리에
            </div>
          </div>
        </div>

        {/* Navigation Tabs - B2B 이용 가이드, B2B 컨설팅 신청, 신청 내역 조회 */}
        <nav className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-sm">
          <button
            id="tab-guide"
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>B2B 이용 가이드</span>
          </button>

          <button
            id="tab-consulting"
            onClick={() => setActiveTab('consulting')}
            className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'consulting'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>B2B 컨설팅 신청</span>
          </button>

          <button
            id="tab-history"
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'history'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>신청 내역 조회</span>
            {totalCount > 0 && (
              <span className={`text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-bold ${
                activeTab === 'history' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
              }`}>
                {totalCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
