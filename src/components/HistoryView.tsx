import React, { useState, useMemo, useEffect } from 'react';
import { 
  Building2, 
  FileText, 
  Clock, 
  CheckCircle2, 
  UserCheck, 
  Printer, 
  ChevronRight, 
  MessageSquare, 
  ShieldCheck, 
  Send, 
  Lock, 
  Unlock, 
  KeyRound, 
  Search, 
  Download, 
  Filter, 
  RefreshCw, 
  Trash2, 
  Eye, 
  Phone, 
  Mail, 
  Calendar, 
  Check, 
  X,
  ExternalLink,
  ClipboardList,
  Info,
  Edit3,
  Plus,
  Minus,
  AlertCircle,
  EyeOff,
  Users,
  Sparkles,
  ChevronDown,
  LogIn,
  LogOut,
  UserPlus,
  BookmarkCheck,
  FileCheck,
  CreditCard,
  TrendingUp
} from 'lucide-react';
import { ConsultingRequest, RoleHeadcount } from '../types';
import { INITIAL_CONSULTING_REQUESTS } from '../data/constants';
import { ConsultingDetailModal } from './ConsultingDetailModal';
import { OriginalOrderSheetModal } from './OriginalOrderSheetModal';
import { QuotationViewModal } from './QuotationViewModal';
import { QuotationEditorModal } from './QuotationEditorModal';
import { TimelineAuditDashboard } from './TimelineAuditDashboard';

interface HistoryViewProps {
  consultingRequests: ConsultingRequest[];
  highlightId?: string;
  onNavigateToConsulting: () => void;
  onUpdateConsulting?: (req: ConsultingRequest) => void;
  onDeleteConsulting?: (id: string) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  consultingRequests,
  highlightId,
  onNavigateToConsulting,
  onUpdateConsulting,
  onDeleteConsulting,
}) => {
  // Mode: 'user' (Customer Lookup) vs 'admin' (Admin Center)
  const [viewMode, setViewMode] = useState<'user' | 'admin'>('user');

  // Admin authentication state
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('medilyn_admin_auth') === 'true' || sessionStorage.getItem('lalune_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [showPinModal, setShowPinModal] = useState<boolean>(false);

  // Cafe24 Member Authentication State (고객 조회 보안용)
  const [isCafe24LoggedIn, setIsCafe24LoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cafe24_member_logged_in') === 'true';
    } catch {
      return false;
    }
  });
  const [cafe24Toast, setCafe24Toast] = useState<string | null>(null);

  const handleCafe24Login = () => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('cafe24.com')) {
      window.location.href = '/member/login.html?returnUrl=' + encodeURIComponent(window.location.href);
      return;
    }
    localStorage.setItem('cafe24_member_logged_in', 'true');
    try {
      const savedConsulting = JSON.parse(localStorage.getItem('medilyn_my_consulting_ids') || '[]');
      if (!Array.isArray(savedConsulting) || savedConsulting.length === 0) {
        localStorage.setItem('medilyn_my_consulting_ids', JSON.stringify(['LN-20261005-7721']));
      }
    } catch (e) {
      console.error(e);
    }
    setIsCafe24LoggedIn(true);
    setCafe24Toast('메디린 회원으로 정상 로그인되었습니다. 접수하신 내역을 조회합니다.');
    setTimeout(() => setCafe24Toast(null), 3500);
  };

  const handleCafe24Logout = () => {
    localStorage.setItem('cafe24_member_logged_in', 'false');
    setIsCafe24LoggedIn(false);
    setCafe24Toast('로그아웃되었습니다.');
    setTimeout(() => setCafe24Toast(null), 3000);
  };

  // User Mode Search States
  const [searchNameOrHospital, setSearchNameOrHospital] = useState<string>('');
  const [searchPhoneOrId, setSearchPhoneOrId] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [statusFilter, setStatusFilter] = useState<'all' | '접수대기' | '진행중' | '완료'>('all');
  const [showConsultingLookupModal, setShowConsultingLookupModal] = useState<boolean>(false);
  const [consultingLookupError, setConsultingLookupError] = useState<string>('');

  // Admin Filters & Views
  const [adminStatusFilter, setAdminStatusFilter] = useState<string>('all');
  const [adminSearchQuery, setAdminSearchQuery] = useState<string>('');
  const [adminModalItem, setAdminModalItem] = useState<ConsultingRequest | null>(null);
  const [adminModalToast, setAdminModalToast] = useState<string>('');
  const [adminSubView, setAdminSubView] = useState<'split' | 'table'>('split');
  const [adminSelectedConsulting, setAdminSelectedConsulting] = useState<ConsultingRequest | null>(() => {
    return consultingRequests[0] || null;
  });
  const [deleteConfirmTarget, setDeleteConfirmTarget] = useState<ConsultingRequest | null>(null);
  const [orderSheetConsulting, setOrderSheetConsulting] = useState<ConsultingRequest | null>(null);

  // Quotation Modals state
  const [quotationModalConsulting, setQuotationModalConsulting] = useState<ConsultingRequest | null>(null);
  const [isQuotationModalOpen, setIsQuotationModalOpen] = useState<boolean>(false);
  const [quotationEditorConsulting, setQuotationEditorConsulting] = useState<ConsultingRequest | null>(null);
  const [isQuotationEditorOpen, setIsQuotationEditorOpen] = useState<boolean>(false);

  // Selected consulting item for customer view (only customer's own request)
  const [selectedConsulting, setSelectedConsulting] = useState<ConsultingRequest | null>(() => {
    if (highlightId && !highlightId.startsWith('ORD-')) {
      return consultingRequests.find((c) => c.id === highlightId) || null;
    }
    try {
      const myIds: string[] = JSON.parse(localStorage.getItem('medilyn_my_consulting_ids') || '[]');
      if (Array.isArray(myIds) && myIds.length > 0) {
        const found = consultingRequests.find((c) => c.id === myIds[0]);
        if (found) return found;
      }
    } catch {}
    return null;
  });

  // Modal open state for Customer Consultation Detail page
  const [isCustomerDetailModalOpen, setIsCustomerDetailModalOpen] = useState<boolean>(() => {
    return Boolean(highlightId);
  });

  useEffect(() => {
    if (highlightId) {
      setViewMode('user');
      const found = consultingRequests.find((c) => c.id === highlightId);
      if (found) {
        setSelectedConsulting(found);
        setIsCustomerDetailModalOpen(true);
      }
    }
  }, [highlightId, consultingRequests]);

  useEffect(() => {
    if (selectedConsulting) {
      const refreshed = consultingRequests.find((c) => c.id === selectedConsulting.id);
      if (refreshed) {
        setSelectedConsulting(refreshed);
      } else {
        setSelectedConsulting(null);
      }
    }
  }, [consultingRequests]);

  useEffect(() => {
    if (adminSelectedConsulting) {
      const refreshed = consultingRequests.find((c) => c.id === adminSelectedConsulting.id);
      if (refreshed) {
        setAdminSelectedConsulting(refreshed);
      } else if (consultingRequests.length > 0) {
        setAdminSelectedConsulting(consultingRequests[0]);
      } else {
        setAdminSelectedConsulting(null);
      }
    } else if (consultingRequests.length > 0) {
      setAdminSelectedConsulting(consultingRequests[0]);
    }
  }, [consultingRequests]);

  // Customer Edit/Delete Authentication State (시안 제작 전)
  const [customerAuthModal, setCustomerAuthModal] = useState<{
    isOpen: boolean;
    action: 'edit' | 'delete' | null;
  }>({ isOpen: false, action: null });
  const [customerAuthPassword, setCustomerAuthPassword] = useState('');
  const [customerAuthError, setCustomerAuthError] = useState('');
  const [showCustomerAuthPassword, setShowCustomerAuthPassword] = useState(false);

  // Customer Edit Modal State
  const [customerEditModalOpen, setCustomerEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<{
    companyName: string;
    contactPerson: string;
    phone: string;
    email: string;
    industry: ConsultingRequest['industry'];
    companySize: ConsultingRequest['companySize'];
    roleHeadcounts: RoleHeadcount[];
    consultingPoints: ConsultingRequest['consultingPoints'];
    message: string;
  } | null>(null);
  const [newRoleInput, setNewRoleInput] = useState('');

  // Admin Note Editing State
  const [editingAdminNoteId, setEditingAdminNoteId] = useState<string | null>(null);
  const [adminNoteText, setAdminNoteText] = useState<string>('');

  // Admin Status Update with Confirmation Button State
  const [adminPendingStatus, setAdminPendingStatus] = useState<ConsultingRequest['status']>('접수완료');
  const [statusUpdateMessage, setStatusUpdateMessage] = useState<string>('');

  // Sync adminPendingStatus whenever adminSelectedConsulting changes
  useEffect(() => {
    if (adminSelectedConsulting) {
      setAdminPendingStatus(adminSelectedConsulting.status);
      setStatusUpdateMessage('');
    }
  }, [adminSelectedConsulting?.id, adminSelectedConsulting?.status]);

  const handleAdminConfirmStatus = () => {
    if (!adminSelectedConsulting) return;
    const updated: ConsultingRequest = {
      ...adminSelectedConsulting,
      status: adminPendingStatus,
    };
    if (onUpdateConsulting) {
      onUpdateConsulting(updated);
    }
    setAdminSelectedConsulting(updated);
    setStatusUpdateMessage(`진행상태가 '${adminPendingStatus}'(으)로 업데이트되었습니다.`);
    setTimeout(() => {
      setStatusUpdateMessage('');
    }, 3500);
  };


  // Handle Admin Login with PIN
  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput === '0000') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('medilyn_admin_auth', 'true');
      setShowPinModal(false);
      setPinError('');
      setPinInput('');
      setViewMode('admin');
    } else {
      setPinError('PIN 번호가 일치하지 않습니다. (기본 테스트 PIN: 1234)');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('medilyn_admin_auth');
    sessionStorage.removeItem('lalune_admin_auth');
    setViewMode('user');
  };

  // Customer ownership & privacy verification
  const myConsultingIds = useMemo<string[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('medilyn_my_consulting_ids') || '[]');
      const list = Array.isArray(saved) ? saved : [];
      if (highlightId && !highlightId.startsWith('ORD-') && !list.includes(highlightId)) {
        list.unshift(highlightId);
      }
      return list;
    } catch {
      return (highlightId && !highlightId.startsWith('ORD-')) ? [highlightId] : [];
    }
  }, [highlightId, isCafe24LoggedIn]);

  const isMyConsultingRequest = (item?: ConsultingRequest | null): boolean => {
    if (!item) return false;
    // 1. Explicitly recorded in customer's applied list
    if (myConsultingIds.includes(item.id)) return true;
    // 2. Currently focused via highlightId
    if (highlightId === item.id) return true;
    // 3. User-created application in this browser (not one of the initial static mock templates)
    if (!INITIAL_CONSULTING_REQUESTS.some(init => init.id === item.id)) return true;
    // 4. User requirement: 제일 왼쪽(목록 첫 번째) 리스트가 내 것이라고 가정
    if (consultingRequests.length > 0 && consultingRequests[0].id === item.id) return true;
    return false;
  };

  // Masking functions for public customer view
  const maskCompanyName = (name: string): string => {
    if (!name) return '의료기관 (비공개)';
    if (name.includes('**')) return name;
    const tokens = name.trim().split(/\s+/);
    if (tokens.length >= 3) {
      // E.g. "청담 더뷰티 피부과의원" -> "청담 더** 피부과의원"
      const mid = tokens[1];
      tokens[1] = mid.length <= 2 ? mid[0] + '*' : mid[0] + '**';
      return tokens.join(' ');
    } else if (tokens.length === 2) {
      // E.g. "루나 피부과의원" -> "루* 피부과의원"
      const first = tokens[0];
      const maskedFirst = first.length <= 2 ? first[0] + '*' : first[0] + '**' + (first.length > 3 ? first.slice(-1) : '');
      return `${maskedFirst} ${tokens[1]}`;
    } else {
      if (name.length <= 2) return name[0] + '*';
      if (name.length <= 4) return name[0] + '**' + name.slice(-1);
      return name.slice(0, 2) + '**' + name.slice(4);
    }
  };

  const maskPhone = (phone: string): string => {
    if (!phone) return '010-****-****';
    if (phone.includes('**')) return phone;
    const digits = phone.replace(/[^0-9]/g, '');
    if (digits.length >= 10) {
      return `${digits.slice(0, 3)}-****-${digits.slice(-4)}`;
    }
    return '010-****-****';
  };

  const maskContactPerson = (person: string): string => {
    if (!person) return '담당자';
    if (person.includes('**')) return person;
    const parts = person.trim().split(/\s+/);
    const name = parts[0];
    const role = parts.slice(1).join(' ');
    const maskedName = name.length <= 2 ? name[0] + '*' : name[0] + '**' + (name.length > 3 ? name.slice(-1) : '');
    return role ? `${maskedName} ${role}` : maskedName;
  };

  const maskEmail = (email: string): string => {
    if (!email) return '***@****.kr';
    if (email.includes('**')) return email;
    const [local, domain] = email.split('@');
    if (!domain) return '***@****.kr';
    const maskedLocal = local.length <= 3 ? local[0] + '**' : local.slice(0, 2) + '***';
    return `${maskedLocal}@${domain}`;
  };

  const maskId = (id: string): string => {
    if (!id) return '';
    const parts = id.split('-');
    if (parts.length >= 3) {
      return `${parts[0]}-${parts[1]}-****`;
    }
    return id.slice(0, -4) + '****';
  };

  // Check if customer is allowed to edit/delete (시안제작 전 단계 && 본인 신청건)
  const canCustomerEditOrDelete = useMemo(() => {
    if (!selectedConsulting) return false;
    if (!isMyConsultingRequest(selectedConsulting)) return false;
    return selectedConsulting.status === '접수완료' || selectedConsulting.status === '컨설턴트 배정';
  }, [selectedConsulting, myConsultingIds, hasSearched, searchPhoneOrId, highlightId]);

  const handleOpenCustomerAuth = (action: 'edit' | 'delete') => {
    setCustomerAuthModal({ isOpen: true, action });
    setCustomerAuthPassword('');
    setCustomerAuthError('');
    setShowCustomerAuthPassword(false);
  };

  const handleVerifyCustomerAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedConsulting) return;

    const inputPwd = customerAuthPassword.trim();
    const correctPwd = selectedConsulting.password;

    // Password verification: matches stored password, or fallback for legacy mock records (1234 / 0000 / last 4 digits)
    const isMatched = correctPwd 
      ? inputPwd === correctPwd
      : (inputPwd === '1234' || inputPwd === '0000' || inputPwd === selectedConsulting.phone.slice(-4));

    if (!isMatched) {
      setCustomerAuthError('비밀번호가 일치하지 않습니다. 접수 시 설정한 비밀번호를 다시 확인해주세요.');
      return;
    }

    const action = customerAuthModal.action;
    setCustomerAuthModal({ isOpen: false, action: null });

    if (action === 'delete') {
      if (onDeleteConsulting) {
        onDeleteConsulting(selectedConsulting.id);
        const remaining = consultingRequests.filter(c => c.id !== selectedConsulting.id);
        setSelectedConsulting(remaining[0] || null);
        setIsCustomerDetailModalOpen(false);
      }
    } else if (action === 'edit') {
      setEditFormData({
        companyName: selectedConsulting.companyName,
        contactPerson: selectedConsulting.contactPerson,
        phone: selectedConsulting.phone,
        email: selectedConsulting.email,
        industry: selectedConsulting.industry,
        companySize: selectedConsulting.companySize,
        roleHeadcounts: selectedConsulting.roleHeadcounts ? selectedConsulting.roleHeadcounts.map(r => ({ ...r })) : [],
        consultingPoints: [...selectedConsulting.consultingPoints],
        message: selectedConsulting.message || '',
      });
      setNewRoleInput('');
      setCustomerEditModalOpen(true);
    }
  };

  const handleSaveCustomerEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedConsulting || !editFormData) return;

    const totalStaff = editFormData.roleHeadcounts.reduce((sum, r) => sum + (Number(r.count) || 0), 0);
    const newQty = totalStaff > 0 ? `${totalStaff * 2}~${totalStaff * 3}벌` : selectedConsulting.quantity;

    const updated: ConsultingRequest = {
      ...selectedConsulting,
      companyName: editFormData.companyName.trim() || selectedConsulting.companyName,
      contactPerson: editFormData.contactPerson.trim() || selectedConsulting.contactPerson,
      phone: editFormData.phone.trim() || selectedConsulting.phone,
      email: editFormData.email.trim() || selectedConsulting.email,
      industry: editFormData.industry,
      companySize: editFormData.companySize,
      roleHeadcounts: editFormData.roleHeadcounts.filter(r => r.count > 0),
      totalStaffCount: totalStaff,
      quantity: newQty,
      consultingPoints: editFormData.consultingPoints,
      message: editFormData.message.trim(),
    };

    if (onUpdateConsulting) {
      onUpdateConsulting(updated);
    }
    setSelectedConsulting(updated);
    setCustomerEditModalOpen(false);
  };


  // User Mode Filtered List:
  // Shows customer's own requests only (타 고객사 정보 완전 차단)
  const userConsultingList = useMemo(() => {
    let list = consultingRequests.filter((req) => isMyConsultingRequest(req)).filter((req) => {
      // 1. Status filter (if not 'all')
      if (statusFilter === '접수대기' && req.status !== '접수완료') return false;
      if (statusFilter === '진행중' && !['컨설턴트 배정', '시안 제작중'].includes(req.status)) return false;
      if (statusFilter === '완료' && !['견적 발송', '상담 완료'].includes(req.status)) return false;

      // 2. Search filter if applied
      if (hasSearched && (searchNameOrHospital || searchPhoneOrId)) {
        const nameMatch = !searchNameOrHospital.trim() || 
          req.companyName.toLowerCase().includes(searchNameOrHospital.trim().toLowerCase()) ||
          req.contactPerson.toLowerCase().includes(searchNameOrHospital.trim().toLowerCase());
        const phoneMatch = !searchPhoneOrId.trim() ||
          req.phone.includes(searchPhoneOrId.trim()) ||
          req.id.toLowerCase().includes(searchPhoneOrId.trim().toLowerCase());
        if (!nameMatch || !phoneMatch) return false;
      }

      return true;
    });

    return list;
  }, [consultingRequests, highlightId, statusFilter, myConsultingIds, hasSearched, searchNameOrHospital, searchPhoneOrId]);

  // Sync selectedConsulting with customer's list
  useEffect(() => {
    if (viewMode === 'user') {
      if (!selectedConsulting && userConsultingList.length > 0) {
        setSelectedConsulting(userConsultingList[0]);
      }
    }
  }, [userConsultingList, viewMode]);

  // Customer's own consulting count
  const myConsultingCount = useMemo(() => {
    return userConsultingList.filter(req => isMyConsultingRequest(req)).length;
  }, [userConsultingList, myConsultingIds]);

  // Admin Mode Filtered List
  const adminConsultingList = useMemo(() => {
    return consultingRequests.filter((req) => {
      if (adminStatusFilter !== 'all' && req.status !== adminStatusFilter) return false;
      if (!adminSearchQuery.trim()) return true;
      const q = adminSearchQuery.toLowerCase();
      return (
        req.id.toLowerCase().includes(q) ||
        req.companyName.toLowerCase().includes(q) ||
        req.contactPerson.toLowerCase().includes(q) ||
        req.phone.includes(q) ||
        req.email.toLowerCase().includes(q) ||
        req.industry.toLowerCase().includes(q)
      );
    });
  }, [consultingRequests, adminStatusFilter, adminSearchQuery]);

  // Quick Demo Auto-fill for customer mode
  const handleQuickDemoSearch = (name: string, phone: string) => {
    setSearchNameOrHospital(name);
    setSearchPhoneOrId(phone);
    setHasSearched(true);
  };

  // CSV Export for Admin
  const exportAllToCSV = () => {
    const headers = ['접수번호', '신청일시', '고객/병원명', '담당자', '연락처', '이메일', '업종', '기업규모', '직군인원구성', '예상수량', '진행상태', '관리자메모'];
    
    const rows = consultingRequests.map(c => [
      c.id,
      c.createdAt,
      `"${c.companyName.replace(/"/g, '""')}"`,
      `"${c.contactPerson}"`,
      c.phone,
      c.email,
      c.industry,
      c.companySize,
      `"${(c.roleHeadcounts || []).map(r => `${r.role}:${r.count}명`).join(' / ')}"`,
      c.quantity,
      c.status,
      `"${(c.adminNote || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `medilyn_b2b_consulting_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header Bar & Mode Switcher */}
      <div className="relative pb-6 border-b border-slate-200">
        {/* Mode Switcher Button: 로그인 전에는 노출하지 않고 로그인 후 또는 관리자 모드일 때만 노출 */}
        {(viewMode === 'admin' || isCafe24LoggedIn) && (
          <div className="flex justify-end sm:absolute sm:right-0 sm:top-0 mb-3 sm:mb-0">
            {viewMode === 'user' ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCafe24Logout}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-3 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  로그아웃
                </button>
                <button
                  onClick={() => {
                    if (isAdminAuthenticated) {
                      setViewMode('admin');
                    } else {
                      setShowPinModal(true);
                    }
                  }}
                  className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>관리자 모드</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setViewMode('user')}
                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>고객 화면으로 전환</span>
              </button>
            )}
          </div>
        )}

        {/* Center-aligned Title & Description */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center gap-2.5 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {viewMode === 'user' ? 'B2B 컨설팅 신청 내역 조회' : '메디린(MEDILYN) B2B 컨설팅 관리자 센터'}
            </h1>
            {viewMode === 'admin' && (
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                관리자 전용
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            {viewMode === 'user'
              ? '접수하신 디자인 컨설팅 진행 상황과 전담 디자이너 매칭 현황을 실시간으로 확인하실 수 있습니다.'
              : '전체 고객사의 B2B 컨설팅 접수 현황 모니터링, 직군별 세부 인원 검토 및 시안/견적 상태를 관리합니다.'}
          </p>
        </div>
      </div>

      {/* Admin PIN Authentication Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
              <KeyRound className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-slate-900">관리자 인증</h2>
              <p className="text-xs text-slate-500 mt-1">
                관리자 센터 접속을 위해 PIN 번호를 입력해주세요.<br />
                <span className="font-mono text-purple-600 font-bold">(테스트 PIN: 1234 또는 0000)</span>
              </p>
            </div>

            <form onSubmit={handleAdminAuth} className="space-y-4">
              <div>
                <input
                  type="password"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="PIN 번호 입력"
                  className="w-full text-center text-xl tracking-widest font-mono py-2.5 border-2 border-slate-300 rounded-xl focus:border-purple-600 outline-none"
                  autoFocus
                />
                {pinError && (
                  <p className="text-xs text-red-500 mt-1.5 text-center font-medium">{pinError}</p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPinModal(false);
                    setPinInput('');
                    setPinError('');
                  }}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs cursor-pointer shadow-sm"
                >
                  인증하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal (Admin & Manager) */}
      {deleteConfirmTarget && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDeleteConfirmTarget(null);
          }}
        >
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto border border-red-100 shadow-inner">
              <Trash2 className="w-7 h-7" />
            </div>

            <div className="text-center space-y-1.5">
              <h2 className="text-lg font-extrabold text-slate-900">신청 내역 삭제</h2>
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900 block text-sm">{deleteConfirmTarget.companyName}</span>
                <span className="font-mono text-slate-500 block text-[11px] mb-2">{deleteConfirmTarget.id}</span>
                해당 B2B 컨설팅 신청 건을 영구 삭제하시겠습니까?<br />
                <span className="text-red-600 font-medium">삭제된 신청 데이터는 복구할 수 없습니다.</span>
              </div>
            </div>

            <div className="flex gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setDeleteConfirmTarget(null)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs sm:text-sm cursor-pointer transition-colors"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  const targetId = deleteConfirmTarget.id;
                  if (onDeleteConsulting) {
                    onDeleteConsulting(targetId);
                  }
                  const remaining = consultingRequests.filter(c => c.id !== targetId);
                  if (adminSelectedConsulting?.id === targetId) {
                    setAdminSelectedConsulting(remaining[0] || null);
                  }
                  if (selectedConsulting?.id === targetId) {
                    setSelectedConsulting(remaining[0] || null);
                    setIsCustomerDetailModalOpen(false);
                  }
                  setDeleteConfirmTarget(null);
                }}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-xl text-xs sm:text-sm cursor-pointer shadow-md shadow-red-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}



      {/* Toast Notification for Cafe24 Login */}
      {cafe24Toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{cafe24Toast}</span>
        </div>
      )}

      {/* 1. Cafe24 Not Logged In State (Center-aligned Notice Screen) */}
      {viewMode === 'user' && !isCafe24LoggedIn ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-7 animate-in fade-in duration-300">
          {/* Lock Icon */}
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner border border-blue-100">
            <Lock className="w-10 h-10" />
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>B2B 회원 보안 인증 서비스</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              로그인 후 신청 및 내역 조회가 가능합니다
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
              B2B 고객사의 소중한 맞춤 견적 및 컨설팅 정보를 안전하게 보호하기 위해<br className="hidden sm:inline" />
              <strong>메디린 회원 로그인</strong> 후 신청 및 내역 조회가 가능합니다.
            </p>
          </div>

          {/* Security & Benefits Box */}
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 text-left text-xs sm:text-sm text-slate-700 space-y-2.5 max-w-md mx-auto shadow-2xs">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>접수하신 <strong>B2B 컨설팅 및 1:1 디자이너 시안 매칭</strong> 확인</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span><strong>B2B 공식 견적서 및 실시간 주문 제작 단계</strong> 조회</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>병원/기업 발주 정보 및 단가에 대한 <strong>1:1 전용 보안 열람</strong></span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleCafe24Login}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <LogIn className="w-4 h-4" />
              <span>메디린 회원 로그인하기</span>
            </button>
            <a
              href="/member/join.html"
              onClick={(e) => {
                if (!window.location.hostname.includes('cafe24.com')) {
                  e.preventDefault();
                  alert('메디린 쇼핑몰 연동 시 /member/join.html 회원가입 페이지로 이동합니다.');
                }
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-slate-500" />
              <span>메디린 회원가입</span>
            </a>
          </div>

          {/* Bottom Link */}
          <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-end">
            <button
              type="button"
              onClick={() => {
                if (isAdminAuthenticated) {
                  setViewMode('admin');
                } else {
                  setShowPinModal(true);
                }
              }}
              className="text-slate-400 hover:text-slate-600 text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
              title="관리자 전용 인증 접속"
            >
              <Lock className="w-3 h-3 text-slate-400" />
              <span>관리자 전용</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* ========================================================================= */}
          {/* 1. CUSTOMER LOOKUP MODE */}
          {/* ========================================================================= */}
      {viewMode === 'user' && (
        <div className="space-y-8">
          {/* Section Header & Toolbar (Image 2 style: buttons on the right) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-extrabold text-slate-900">
                내 접수 B2B 컨설팅 목록
              </span>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                내 신청 {myConsultingCount}건
              </span>
              {hasSearched && (searchNameOrHospital || searchPhoneOrId) && (
                <div className="flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium border border-blue-200">
                  <span>검색 필터 적용중</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchNameOrHospital('');
                      setSearchPhoneOrId('');
                      setHasSearched(false);
                    }}
                    className="hover:text-red-600 cursor-pointer ml-0.5"
                    title="검색 조건 초기화"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {onNavigateToConsulting && (
                <button
                  type="button"
                  onClick={onNavigateToConsulting}
                  className="text-xs font-bold bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-3.5 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>새 컨설팅 신청</span>
                </button>
              )}
            </div>
          </div>



          {/* Additional Consulting Lookup Modal */}
          {showConsultingLookupModal && (
            <div 
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
              onClick={(e) => {
                if (e.target === e.currentTarget) setShowConsultingLookupModal(false);
              }}
            >
              <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <span>B2B 컨설팅 신청 내역 추가 조회</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConsultingLookupModal(false)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-slate-500">
                  신청 시 등록하신 병원명(또는 담당자명)과 연락처 뒤 4자리(또는 접수번호)를 입력하시면 일치하는 신청 내역을 조회합니다.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultingLookupError('');
                    const nameQ = searchNameOrHospital.trim();
                    const phoneQ = searchPhoneOrId.trim();
                    if (!nameQ && !phoneQ) {
                      setConsultingLookupError('병원명/담당자명 또는 연락처를 최소 1개 이상 입력해 주세요.');
                      return;
                    }
                    const targetId = phoneQ.toUpperCase();
                    const cleanDigits = phoneQ.replace(/[^0-9]/g, '');
                    const cleanName = nameQ.toLowerCase();

                    const matched = consultingRequests.find(c => {
                      if (targetId && c.id.toUpperCase() === targetId) return true;
                      const orderDigits = c.phone.replace(/[^0-9]/g, '');
                      const phoneMatch = cleanDigits.length >= 4 && (orderDigits.endsWith(cleanDigits) || orderDigits === cleanDigits);
                      const nameMatch = cleanName.length >= 2 && (c.companyName.toLowerCase().includes(cleanName) || c.contactPerson.toLowerCase().includes(cleanName));
                      return (phoneMatch && nameMatch) || (cleanDigits.length >= 4 && phoneMatch);
                    });

                    if (!matched) {
                      setConsultingLookupError('일치하는 신청 내역을 찾을 수 없습니다. 병원명과 연락처를 다시 확인해 주세요.');
                      return;
                    }

                    try {
                      const current = JSON.parse(localStorage.getItem('medilyn_my_consulting_ids') || '[]');
                      const next = Array.from(new Set([matched.id, ...current]));
                      localStorage.setItem('medilyn_my_consulting_ids', JSON.stringify(next));
                    } catch (err) {
                      console.error(err);
                    }
                    setSelectedConsulting(matched);
                    setIsCustomerDetailModalOpen(true);
                    setHasSearched(true);
                    setShowConsultingLookupModal(false);
                  }}
                  className="space-y-3.5"
                >
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      병원명 또는 담당자명
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchNameOrHospital}
                        onChange={(e) => {
                          setSearchNameOrHospital(e.target.value);
                          if (consultingLookupError) setConsultingLookupError('');
                        }}
                        placeholder="예: 강남 샤인 피부과 / 루나의원"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-blue-600 outline-none"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      연락처 뒤 4자리 또는 접수번호
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchPhoneOrId}
                        onChange={(e) => {
                          setSearchPhoneOrId(e.target.value);
                          if (consultingLookupError) setConsultingLookupError('');
                        }}
                        placeholder="예: 5678 또는 LN-20261008-01"
                        className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  {consultingLookupError && (
                    <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{consultingLookupError}</span>
                    </div>
                  )}

                  <div className="pt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowConsultingLookupModal(false)}
                      className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs cursor-pointer"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>조회하기</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Customer Active Quotation Notification Banner if any request has quotation */}
          {(() => {
            const pendingApprovalReq = userConsultingList.find(r => isMyConsultingRequest(r) && r.quotation && !r.quotation.approval?.isApproved);
            const approvedReq = userConsultingList.find(r => isMyConsultingRequest(r) && r.quotation && r.quotation.approval?.isApproved);

            if (pendingApprovalReq) {
              return (
                <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-white border border-amber-300 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-in fade-in">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                          메디린 B2B 공식 견적서 도착 (승인 대기)
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {pendingApprovalReq.quotation?.quotationNumber}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1.5">
                        {pendingApprovalReq.companyName} 맞춤 견적서가 도착했습니다!
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        견적 총액: <strong className="font-mono text-blue-700 font-extrabold text-sm">{pendingApprovalReq.quotation?.totalAmount.toLocaleString()}원</strong> (VAT포함) &middot; 견적서를 확인하시고 공식 승인을 완료해 주세요.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setQuotationModalConsulting(pendingApprovalReq);
                      setIsQuotationModalOpen(true);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 cursor-pointer shrink-0 transition-all hover:scale-[1.01]"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>견적서 열람 및 승인하기</span>
                  </button>
                </div>
              );
            }

            if (approvedReq) {
              return (
                <div className="bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-white border border-emerald-300 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-in fade-in">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                          고객 공식 승인 완료
                        </span>
                        <span className="text-xs font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                          승인일시: {approvedReq.quotation?.approval?.approvedAt}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1.5">
                        {approvedReq.companyName} 견적이 공식 승인되었습니다. (승인자: {approvedReq.quotation?.approval?.approverName})
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        공식 승인 인주가 날인된 견적서 PDF 다운로드 및 계좌 입금/결제 안내를 확인하실 수 있습니다.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setQuotationModalConsulting(approvedReq);
                      setIsQuotationModalOpen(true);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-emerald-500/25 cursor-pointer shrink-0 transition-all hover:scale-[1.01]"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>승인 견적서(PDF) / 결제 확인</span>
                  </button>
                </div>
              );
            }

            return null;
          })()}

          {/* Main User Reception Cards Grid */}
          <div className="space-y-4">
            {/* Empty state */}
            {userConsultingList.length === 0 && (
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-2xs max-w-lg mx-auto">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="text-base font-bold text-slate-800">접수하신 B2B 컨설팅 신청 내역이 없습니다.</div>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  메디린 전담 디자이너 1:1 매칭 및 맞춤 유니폼 시안/무료 원단 스와치를 받아보시려면 새 B2B 컨설팅을 신청해보세요.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onNavigateToConsulting}
                    className="text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 py-3 rounded-2xl cursor-pointer shadow-sm transition-all"
                  >
                    B2B 컨설팅 새로 신청하기
                  </button>
                </div>
              </div>
            )}

            {/* Consulting Requests Responsive Card Grid */}
            {userConsultingList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userConsultingList.map((item) => {
                  const isSelected = selectedConsulting?.id === item.id;
                  const isMyReq = isMyConsultingRequest(item);
                  const displayDate = item.createdAt.slice(0, 10);
                  const staffTotal = item.totalStaffCount || (item.roleHeadcounts ? item.roleHeadcounts.reduce((sum, r) => sum + r.count, 0) : 0);
                  const accurateQty = staffTotal > 0 ? `${staffTotal * 2}~${staffTotal * 3}벌` : item.quantity;
                  
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedConsulting(item);
                        setIsCustomerDetailModalOpen(true);
                      }}
                      className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer relative flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 group ${
                        isMyReq
                          ? 'border-blue-400/90 ring-2 ring-blue-500/20 bg-blue-50/15 shadow-2xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      } ${
                        isSelected && isCustomerDetailModalOpen
                          ? 'border-blue-600 ring-2 ring-blue-500 shadow-md'
                          : ''
                      }`}
                    >
                      <div className="space-y-3">
                        {/* Top: Badges and Status */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                            <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded text-blue-700 bg-blue-100/80">
                              {isMyReq ? item.id : maskId(item.id)}
                            </span>
                            {isMyReq ? (
                              <span className="text-[10px] font-black bg-blue-600 text-white px-2 py-0.5 rounded-md shadow-2xs shrink-0 flex items-center gap-1">
                                <BookmarkCheck className="w-3 h-3 inline" />
                                <span>내 신청</span>
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md border border-slate-200 shrink-0 flex items-center gap-1">
                                <Lock className="w-2.5 h-2.5 text-slate-400" />
                                <span>타 고객사</span>
                              </span>
                            )}
                          </div>
                          {isMyReq ? (
                            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                              item.status === '접수완료'
                                ? 'bg-blue-600 text-white'
                                : ['컨설턴트 배정', '시안 제작중'].includes(item.status)
                                ? 'bg-amber-500 text-slate-950 font-bold'
                                : 'bg-emerald-600 text-white'
                            }`}>
                              {item.status}
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 shrink-0 flex items-center gap-1">
                              <Lock className="w-3 h-3 text-slate-400" />
                              <span>진행상태 비공개</span>
                            </span>
                          )}
                        </div>

                        {/* Title & Industry */}
                        <div>
                          <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                            {isMyReq ? item.companyName : maskCompanyName(item.companyName)}
                          </h3>
                          {isMyReq && item.title && (
                            <p className="text-xs text-blue-800 font-semibold truncate mt-0.5">
                              {item.title}
                            </p>
                          )}
                          {isMyReq ? (
                            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                              <span>{item.industry}</span>
                              <span className="text-slate-300">&middot;</span>
                              <span>{item.companySize}</span>
                              {staffTotal > 0 && (
                                <>
                                  <span className="text-slate-300">&middot;</span>
                                  <span className="text-blue-600 font-semibold">{staffTotal}명</span>
                                </>
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                              <span>{item.industry}</span>
                              <span className="text-slate-300">&middot;</span>
                              <span className="flex items-center gap-1 text-slate-400">
                                <Lock className="w-2.5 h-2.5 text-slate-400" />
                                <span>기업규모 및 인원 비공개</span>
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Consulting Points or Qty Preview */}
                        <div className="pt-1 flex flex-wrap gap-1 text-[11px]">
                          {isMyReq ? (
                            <>
                              <span className="bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/60 font-medium">
                                예상: {accurateQty}
                              </span>
                              {item.consultingPoints.slice(0, 2).map((pt, idx) => (
                                <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200/50 font-medium truncate max-w-[140px]">
                                  {pt}
                                </span>
                              ))}
                            </>
                          ) : (
                            <span className="bg-slate-50 text-slate-400 px-2 py-0.5 rounded-md border border-slate-200/60 font-medium text-[10px] flex items-center gap-1">
                              <Lock className="w-2.5 h-2.5 text-slate-400" />
                              <span>수량 및 세부사양 비공개</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quotation direct action button if quote exists */}
                      {item.quotation && isMyReq && (
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                          <span className="text-[11px] font-mono text-blue-700 font-bold truncate">
                            견적: ₩ {item.quotation.totalAmount.toLocaleString()}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuotationModalConsulting(item);
                              setIsQuotationModalOpen(true);
                            }}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs ${
                              item.quotation.approval?.isApproved
                                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                          >
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>{item.quotation.approval?.isApproved ? '승인견적서(PDF)' : '견적 확인/승인'}</span>
                          </button>
                        </div>
                      )}

                      {/* Footer Info & Action */}
                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-[11px]">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{displayDate} 접수</span>
                        </div>

                        <div className="flex items-center gap-1 text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform bg-blue-50 px-2.5 py-1 rounded-lg">
                          <span>상세조회</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Customer Consulting Detail Modal Page */}
          <ConsultingDetailModal
            consulting={selectedConsulting}
            isOpen={isCustomerDetailModalOpen}
            onClose={() => setIsCustomerDetailModalOpen(false)}
            isMyReq={isMyConsultingRequest(selectedConsulting)}
            isAdmin={isAdminAuthenticated}
            canCustomerEditOrDelete={canCustomerEditOrDelete}
            onOpenCustomerAuth={handleOpenCustomerAuth}
            onNavigateToConsulting={onNavigateToConsulting}
            onUpdateConsulting={(updated) => {
              if (onUpdateConsulting) onUpdateConsulting(updated);
              if (selectedConsulting?.id === updated.id) {
                setSelectedConsulting(updated);
              }
            }}
            maskId={maskId}
            maskCompanyName={maskCompanyName}
            maskPhone={maskPhone}
            maskContactPerson={maskContactPerson}
            maskEmail={maskEmail}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ADMIN MODE (관리자 총괄 대시보드) */}
      {/* ========================================================================= */}
      {viewMode === 'admin' && (
        <div className="space-y-6">
          {/* Admin KPI Header Tiles - 핵심 3대 지표로 간소화 */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-[11px] font-bold text-slate-500 block mb-1">총 상담 신청</span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                {consultingRequests.length}
                <span className="text-xs font-normal text-slate-400 ml-1">건</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-blue-200 bg-blue-50/20 shadow-2xs">
              <span className="text-[11px] font-bold text-blue-700 block mb-1">진행중 (접수/시안)</span>
              <div className="text-xl sm:text-2xl font-black text-blue-600 font-mono">
                {consultingRequests.filter(r => ['접수완료', '컨설턴트 배정', '시안 제작중'].includes(r.status)).length}
                <span className="text-xs font-normal text-blue-400 ml-1">건</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-200 bg-emerald-50/20 shadow-2xs">
              <span className="text-[11px] font-bold text-emerald-700 block mb-1">상담/견적 완료</span>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">
                {consultingRequests.filter(r => ['견적 발송', '상담 완료'].includes(r.status)).length}
                <span className="text-xs font-normal text-emerald-400 ml-1">건</span>
              </div>
            </div>
          </div>

          {/* Admin Sub-View Switcher Tabs (2번 이미지 스타일: 2개 모드만 유지) */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setAdminSubView('split')}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
                  adminSubView === 'split'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>상담 상세 분할 관리</span>
              </button>
              <button
                type="button"
                onClick={() => setAdminSubView('table')}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
                  adminSubView === 'table'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <ClipboardList className="w-4 h-4" />
                <span>전체 테이블 목록</span>
              </button>
            </div>
          </div>

          {/* Admin Action & Filter Toolbar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 shrink-0">상태 필터:</span>
              <select
                value={adminStatusFilter}
                onChange={(e) => setAdminStatusFilter(e.target.value)}
                className="bg-slate-50 text-xs border border-slate-300 rounded-xl px-3 py-2 outline-none font-bold focus:border-blue-600 text-slate-700 cursor-pointer shadow-2xs"
              >
                <option value="all">전체 ({consultingRequests.length})</option>
                <option value="접수완료">접수완료</option>
                <option value="컨설턴트 배정">컨설턴트 배정</option>
                <option value="시안 제작중">시안 제작중</option>
                <option value="견적 발송">견적 발송 (고객승인대기)</option>
                <option value="견적 승인완료">견적 승인완료 (결제대기)</option>
                <option value="입금확인요청">입금확인요청</option>
                <option value="결제완료/작업진행">결제완료/작업진행</option>
                <option value="제작/출고완료">제작/출고완료</option>
                <option value="상담 완료">상담 완료</option>
                <option value="취소/보류">취소/보류</option>
              </select>
            </div>

            {/* Search & Action */}
            <div className="flex items-center gap-2 flex-1 sm:flex-initial justify-end">
              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={adminSearchQuery}
                  onChange={(e) => setAdminSearchQuery(e.target.value)}
                  placeholder="병원명, 담당자, 연락처 검색"
                  className="w-full pl-8 pr-7 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-blue-600 focus:bg-white"
                />
                {adminSearchQuery && (
                  <button 
                    onClick={() => setAdminSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={exportAllToCSV}
                className="p-2 sm:px-3 sm:py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer shrink-0"
                title="엑셀(CSV) 다운로드"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">엑셀 다운로드</span>
              </button>

              <button
                type="button"
                onClick={handleAdminLogout}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-medium cursor-pointer shrink-0"
              >
                로그아웃
              </button>
            </div>
          </div>

          {/* VIEW A: Admin List & Detailed Reading View (Master-Detail) */}
          {adminSubView === 'split' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Admin Selectable Request List (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <ClipboardList className="w-4 h-4 text-purple-600" />
                    <span>상담 신청 리스트 ({adminConsultingList.length}건)</span>
                  </span>
                  <span className="text-[11px] text-slate-400">클릭 시 우측에서 상세 열람</span>
                </div>

                {adminConsultingList.length === 0 ? (
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center text-slate-400 text-xs">
                    조건에 해당하는 B2B 상담 신청 내역이 없습니다.
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-[820px] overflow-y-auto pr-1">
                    {adminConsultingList.map((item) => {
                      const isSelected = adminSelectedConsulting?.id === item.id;
                      const staffCount = item.totalStaffCount || (item.roleHeadcounts ? item.roleHeadcounts.reduce((sum, r) => sum + r.count, 0) : 0);
                      const displayQty = staffCount > 0 ? `${staffCount * 2}~${staffCount * 3}벌` : item.quantity;

                      return (
                        <div
                          key={item.id}
                          onClick={() => setAdminSelectedConsulting(item)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative ${
                            isSelected
                              ? 'bg-blue-50/70 border-2 border-blue-600 shadow-md ring-2 ring-blue-500/10'
                              : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                item.status === '접수완료'
                                  ? 'bg-blue-100 text-blue-800'
                                  : ['컨설턴트 배정', '시안 제작중'].includes(item.status)
                                  ? 'bg-amber-100 text-amber-900 font-bold'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}>
                                {item.status}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setAdminSelectedConsulting(item);
                                  setQuotationEditorConsulting(item);
                                  setIsQuotationEditorOpen(true);
                                }}
                                className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-md text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs shrink-0"
                                title="견적서 작성"
                              >
                                <Send className="w-2.5 h-2.5" />
                                <span>견적서작성</span>
                              </button>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400">{item.createdAt.slice(0, 10)}</span>
                          </div>

                          <div className="flex items-baseline justify-between gap-2 mb-1">
                            <h4 className="font-extrabold text-slate-900 text-sm truncate">{item.companyName}</h4>
                            <span className="text-[11px] text-blue-700 font-bold shrink-0">{displayQty}</span>
                          </div>

                          {/* Customer Request / Consulting Title */}
                          {(item.title || (item.message && item.message !== '별도 추가 요청사항 없음')) && (
                            <div className="text-[11px] text-blue-900 font-semibold bg-blue-50/80 border border-blue-200/80 px-2 py-1 rounded-lg truncate mb-1.5 flex items-center gap-1.5" title={item.title || item.message}>
                              <span className="text-blue-600 font-bold shrink-0">요청:</span>
                              <span className="truncate">{item.title || item.message}</span>
                            </div>
                          )}

                          <div className="text-xs text-slate-500 flex items-center justify-between gap-2">
                            <span>{item.contactPerson} ({item.phone})</span>
                            <span className="text-slate-400 text-[10px] font-mono">{item.id}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Full Admin Detailed Reading & Management Desk (7 cols) */}
              <div className="lg:col-span-7">
                {adminSelectedConsulting ? (
                  <div className="bg-white rounded-3xl border-2 border-blue-600 p-6 md:p-8 shadow-xl space-y-6">
                    {/* Header with Title and Quick Status Changer */}
                    <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                            {adminSelectedConsulting.id}
                          </span>
                          <span className="text-xs text-slate-400">&middot;</span>
                          <span className="text-xs text-slate-500">{adminSelectedConsulting.createdAt} 접수</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          {adminSelectedConsulting.companyName}
                        </h2>
                        {(adminSelectedConsulting.title || (adminSelectedConsulting.message && adminSelectedConsulting.message !== '별도 추가 요청사항 없음')) && (
                          <div className="mt-2 bg-blue-50/90 border border-blue-200 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-blue-950 flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-blue-600 shrink-0" />
                            <span className="text-blue-600 font-extrabold shrink-0">[고객 상담 요청]</span>
                            <span className="truncate">{adminSelectedConsulting.title || adminSelectedConsulting.message}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Current Status Badge */}
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          adminSelectedConsulting.status === '접수완료'
                            ? 'bg-blue-100 text-blue-800'
                            : ['컨설턴트 배정', '시안 제작중'].includes(adminSelectedConsulting.status)
                            ? 'bg-amber-100 text-amber-900 font-bold'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {adminSelectedConsulting.status}
                        </span>

                        {/* 견적서 관련 관리자 버튼 */}
                        {adminSelectedConsulting.quotation ? (
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => {
                                setQuotationModalConsulting(adminSelectedConsulting);
                                setIsQuotationModalOpen(true);
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                                adminSelectedConsulting.quotation.approval?.isApproved
                                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                              }`}
                              title="공식 B2B 견적서 및 고객 승인 내역 열람"
                            >
                              <FileCheck className="w-3.5 h-3.5" />
                              <span>
                                {adminSelectedConsulting.quotation.approval?.isApproved
                                  ? '승인 견적서 열람'
                                  : '발송 견적서 열람'}
                              </span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setQuotationEditorConsulting(adminSelectedConsulting);
                                setIsQuotationEditorOpen(true);
                              }}
                              className="px-2.5 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 rounded-xl text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                              title="견적서 품목 및 단가 수정 / 재발행"
                            >
                              <Edit3 className="w-3.5 h-3.5 text-purple-600" />
                              <span>견적 수정</span>
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setQuotationEditorConsulting(adminSelectedConsulting);
                              setIsQuotationEditorOpen(true);
                            }}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                            title="고객 신청서 기반 신규 견적서 작성 및 발송"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>견적서 작성 및 발송</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => window.print()}
                          className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                          title="신청서 인쇄"
                        >
                          <Printer className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setOrderSheetConsulting(adminSelectedConsulting)}
                          className="px-2.5 py-1.5 text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                          title="정규 B2B 주문서 원본 서식 보기"
                        >
                          <FileText className="w-3.5 h-3.5 text-blue-600" />
                          <span>주문서 원본보기</span>
                        </button>

                        {onDeleteConsulting && (
                          <button
                            type="button"
                            onClick={() => {
                              setDeleteConfirmTarget(adminSelectedConsulting);
                            }}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                            title="신청 내역 삭제"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Progress Stepper Visualizer (6단계) */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <div className="text-xs font-bold text-slate-700 mb-3 flex items-center justify-between">
                        <span>B2B 견적 발송 및 승인 &amp; 제작 진행 단계</span>
                        <span className="text-blue-700 font-bold">{adminSelectedConsulting.status}</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5 text-center text-[10px] sm:text-[11px]">
                        <div className={`py-2 rounded-xl font-bold transition-all ${
                          ['접수완료', '컨설턴트 배정', '시안 제작중', '견적 발송', '견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(adminSelectedConsulting.status)
                            ? 'bg-blue-600 text-white shadow-2xs'
                            : 'bg-slate-200 text-slate-500'
                        }`}>
                          1. 접수완료
                        </div>
                        <div className={`py-2 rounded-xl font-bold transition-all ${
                          ['컨설턴트 배정', '시안 제작중', '견적 발송', '견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(adminSelectedConsulting.status)
                            ? 'bg-blue-600 text-white shadow-2xs'
                            : 'bg-slate-200 text-slate-500'
                        }`}>
                          2. 컨설턴트 배정
                        </div>
                        <div className={`py-2 rounded-xl font-bold transition-all ${
                          ['견적 발송', '견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(adminSelectedConsulting.status)
                            ? 'bg-blue-600 text-white shadow-2xs'
                            : 'bg-slate-200 text-slate-500'
                        }`}>
                          3. 견적서 발송
                        </div>
                        <div className={`py-2 rounded-xl font-bold transition-all ${
                          ['견적 승인완료', '입금확인요청', '결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(adminSelectedConsulting.status)
                            ? 'bg-emerald-600 text-white shadow-2xs'
                            : 'bg-slate-200 text-slate-500'
                        }`}>
                          4. 고객 승인완료
                        </div>
                        <div className={`py-2 rounded-xl font-bold transition-all ${
                          ['결제완료/작업진행', '제작/출고완료', '상담 완료'].includes(adminSelectedConsulting.status)
                            ? 'bg-purple-600 text-white shadow-2xs'
                            : 'bg-slate-200 text-slate-500'
                        }`}>
                          5. 결제/작업착수
                        </div>
                        <div className={`py-2 rounded-xl font-bold transition-all ${
                          ['제작/출고완료', '상담 완료'].includes(adminSelectedConsulting.status)
                            ? 'bg-blue-700 text-white shadow-2xs'
                            : 'bg-slate-200 text-slate-500'
                        }`}>
                          6. 출고 및 배송
                        </div>
                      </div>
                    </div>

                    {/* Quotation & Approval Information Card for Admin */}
                    {adminSelectedConsulting.quotation && (
                      <div className="bg-gradient-to-r from-blue-50/70 to-slate-50 border border-blue-200 rounded-2xl p-4 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                              {adminSelectedConsulting.quotation.quotationNumber}
                            </span>
                            <span className="text-xs font-extrabold text-slate-900">B2B 정규 견적서</span>
                            {adminSelectedConsulting.quotation.approval?.isApproved ? (
                              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-300">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>고객 공식 승인 완료</span>
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-300">
                                <Clock className="w-3 h-3 text-amber-600" />
                                <span>고객 승인 대기중</span>
                              </span>
                            )}
                          </div>

                          <span className="text-xs font-mono font-bold text-blue-700">
                            총 {adminSelectedConsulting.quotation.totalAmount.toLocaleString()}원 (VAT포함)
                          </span>
                        </div>

                        {/* Approval & Payment Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-white p-3 rounded-xl border border-slate-200">
                          <div>
                            <span className="text-slate-500 block">고객 견적 승인 상태</span>
                            {adminSelectedConsulting.quotation.approval?.isApproved ? (
                              <span className="text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>{adminSelectedConsulting.quotation.approval.approvedAt} ({adminSelectedConsulting.quotation.approval.approverName})</span>
                              </span>
                            ) : (
                              <span className="text-amber-700 font-medium">아직 고객 승인 전입니다.</span>
                            )}
                          </div>
                          <div>
                            <span className="text-slate-500 block">결제 및 제작 진행 상태</span>
                            <span className={`font-bold mt-0.5 inline-block ${
                              adminSelectedConsulting.quotation.payment?.paymentStatus === '결제완료'
                                ? 'text-purple-700'
                                : 'text-slate-700'
                            }`}>
                              {adminSelectedConsulting.quotation.payment?.paymentStatus || '결제대기'}
                              {adminSelectedConsulting.quotation.payment?.depositorName && ` (입금자: ${adminSelectedConsulting.quotation.payment.depositorName})`}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              setQuotationModalConsulting(adminSelectedConsulting);
                              setIsQuotationModalOpen(true);
                            }}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer shadow-2xs"
                          >
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>견적서 서식 및 승인/타임라인 열람</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Consultant Assignment & Password - 간소화된 2열 요약 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {/* Contact Info */}
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-slate-500 block font-medium">담당자 & 연락처</span>
                        <div className="font-bold text-slate-900 text-sm">{adminSelectedConsulting.contactPerson}</div>
                        <div className="font-mono text-slate-700">{adminSelectedConsulting.phone}</div>
                        <div className="text-slate-500 font-mono text-[11px]">{adminSelectedConsulting.email}</div>
                      </div>

                      {/* Scale & Qty */}
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-slate-500 block font-medium">업종 / 예상 수량</span>
                        <div className="font-bold text-slate-900 text-sm">{adminSelectedConsulting.companyName} ({adminSelectedConsulting.industry})</div>
                        <div className="text-blue-700 font-bold">{adminSelectedConsulting.quantity} (인원: {adminSelectedConsulting.companySize})</div>
                        <div className="text-purple-700 font-mono text-[11px]">암호: {adminSelectedConsulting.password || '1234'}</div>
                      </div>
                    </div>

                    {/* Product Items Table (희망 품목 상세 구성) */}
                    {adminSelectedConsulting.productItems && adminSelectedConsulting.productItems.length > 0 && (
                      <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-blue-950">
                            견적 희망 품목 구성 ({adminSelectedConsulting.productItems.length}종)
                          </span>
                          <span className="text-xs font-bold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200 shadow-2xs">
                            총 {adminSelectedConsulting.productItems.reduce((s, p) => s + (Number(p.quantity) || 0), 0)}벌
                          </span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs bg-white rounded-lg border border-blue-200 overflow-hidden">
                            <thead className="bg-blue-100/60 text-slate-700 font-bold border-b border-blue-200">
                              <tr>
                                <th className="py-1.5 px-2 w-8 text-center">No.</th>
                                <th className="py-1.5 px-2">업종</th>
                                <th className="py-1.5 px-2">성별</th>
                                <th className="py-1.5 px-2">제품군</th>
                                <th className="py-1.5 px-2 text-center">수량</th>
                                <th className="py-1.5 px-2">요청사항</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {adminSelectedConsulting.productItems.map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50">
                                  <td className="py-1.5 px-2 text-center font-mono text-slate-400 font-bold">{idx + 1}</td>
                                  <td className="py-1.5 px-2 font-semibold text-slate-700">{item.industry}</td>
                                  <td className="py-1.5 px-2 font-semibold text-slate-700">{item.gender}</td>
                                  <td className="py-1.5 px-2 font-bold text-blue-900">{item.customProductGroup || item.productGroup}</td>
                                  <td className="py-1.5 px-2 text-center font-bold font-mono text-blue-700">{item.quantity}벌</td>
                                  <td className="py-1.5 px-2 text-slate-600">{item.requestDetails || '-'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Role Headcounts (있는 경우 깔끔한 뱃지 - 기존 데이터 호환) */}
                    {adminSelectedConsulting.roleHeadcounts && adminSelectedConsulting.roleHeadcounts.length > 0 && !adminSelectedConsulting.productItems && (
                      <div className="bg-blue-50/40 p-3.5 rounded-xl border border-blue-200/80">
                        <span className="text-xs font-bold text-blue-950 block mb-1.5">
                          직군별 구성:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {adminSelectedConsulting.roleHeadcounts
                            .filter((r) => r.count > 0)
                            .map((r, i) => (
                              <span
                                key={i}
                                className="bg-white px-2.5 py-1 rounded-lg border border-blue-200 text-xs font-medium text-slate-800 shadow-2xs"
                              >
                                {r.role}: <strong className="text-blue-700">{r.count}명</strong>
                              </span>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Consulting Points */}
                    {adminSelectedConsulting.consultingPoints && adminSelectedConsulting.consultingPoints.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-600 mr-1">요청 포인트:</span>
                        {adminSelectedConsulting.consultingPoints.map((pt, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-md text-xs font-medium">
                            {pt}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Client Message & Consulting Title */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                          고객 상담 요청 및 접수 내용
                        </span>
                        {adminSelectedConsulting.title && (
                          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                            상담 템플릿/제목 연동
                          </span>
                        )}
                      </div>

                      {/* 1. 상담 제목 (고객 선택 템플릿 / 직접 입력) */}
                      {adminSelectedConsulting.title && (
                        <div className="bg-blue-50/90 border border-blue-200 rounded-xl p-3">
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-0.5">
                            📌 상담 제목 (고객 선택 템플릿)
                          </span>
                          <div className="text-xs sm:text-sm font-bold text-blue-950 leading-snug">
                            {adminSelectedConsulting.title}
                          </div>
                        </div>
                      )}

                      {/* 2. 상세 상담 내용 / 추가 요청사항 */}
                      <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 block">
                          📝 상세 상담 내용 / 추가 요청사항
                        </span>
                        <div className="text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                          {adminSelectedConsulting.message && 
                           adminSelectedConsulting.message !== '별도 추가 요청사항 없음' &&
                           adminSelectedConsulting.message !== adminSelectedConsulting.title ? (
                            adminSelectedConsulting.message
                          ) : adminSelectedConsulting.title ? (
                            <span className="text-slate-600 font-medium">
                              위의 <strong className="text-blue-700 font-bold">[{adminSelectedConsulting.title}]</strong> 상담 제목으로 접수되었으며, 추가 작성된 별도 요청사항은 없습니다.
                            </span>
                          ) : (
                            adminSelectedConsulting.message || '작성된 추가 메시지가 없습니다.'
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Internal Admin Memo Editor */}
                    <div className="bg-purple-50/50 border border-purple-200 p-3.5 rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-purple-950 flex items-center gap-1.5">
                          <Edit3 className="w-3.5 h-3.5 text-purple-600" />
                          관리자 내부 메모
                        </span>
                        <span className="text-[10px] text-purple-600 font-medium">고객 미노출</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={editingAdminNoteId === adminSelectedConsulting.id ? adminNoteText : (adminSelectedConsulting.adminNote || '')}
                          onFocus={() => {
                            setEditingAdminNoteId(adminSelectedConsulting.id);
                            setAdminNoteText(adminSelectedConsulting.adminNote || '');
                          }}
                          onChange={(e) => {
                            setEditingAdminNoteId(adminSelectedConsulting.id);
                            setAdminNoteText(e.target.value);
                          }}
                          placeholder="특이사항, 통화 메모 입력"
                          className="flex-1 bg-white text-xs px-3 py-1.5 border border-purple-300 focus:border-purple-600 rounded-lg outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = { ...adminSelectedConsulting, adminNote: adminNoteText };
                            if (onUpdateConsulting) onUpdateConsulting(updated);
                            setAdminSelectedConsulting(updated);
                            setEditingAdminNoteId(null);
                          }}
                          className="px-3.5 py-1.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg text-xs shadow-xs cursor-pointer"
                        >
                          저장
                        </button>
                      </div>
                    </div>

                    {/* Status Update Section Grouping (Image 2 Section Grouping Style, Centered at Bottom) */}
                    <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-2xl space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          진행상황
                        </span>
                        <span className="text-[10px] text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200 font-bold">
                          고객 화면 실시간 반영
                        </span>
                      </div>

                      {/* Bottom-Center Layout with Progress Selector & Confirm Button */}
                      <div className="flex flex-col items-center justify-center py-2 space-y-3">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                          {/* Pill Style Status Selector */}
                          <div className={`relative inline-flex items-center bg-white border rounded-full px-5 py-2.5 shadow-2xs transition-all ${
                            adminPendingStatus !== adminSelectedConsulting.status
                              ? 'border-blue-500 ring-2 ring-blue-100'
                              : 'border-slate-300 hover:border-slate-400'
                          }`}>
                            <span className="text-xs sm:text-sm font-bold text-slate-700 mr-2.5 shrink-0">
                              진행상황:
                            </span>
                            <select
                              value={adminPendingStatus}
                              onChange={(e) => {
                                setAdminPendingStatus(e.target.value as any);
                                setStatusUpdateMessage('');
                              }}
                              className="appearance-none bg-transparent pr-7 text-xs sm:text-sm font-black text-blue-700 outline-none cursor-pointer"
                            >
                              <option value="접수완료">1. 접수완료</option>
                              <option value="컨설턴트 배정">2. 컨설턴트 배정</option>
                              <option value="시안 제작중">3. 시안 제작중</option>
                              <option value="견적 발송">4. 견적 발송 (고객승인대기)</option>
                              <option value="견적 승인완료">5. 견적 승인완료 (결제대기)</option>
                              <option value="입금확인요청">6. 입금확인요청</option>
                              <option value="결제완료/작업진행">7. 결제완료/작업진행</option>
                              <option value="제작/출고완료">8. 제작/출고완료</option>
                              <option value="상담 완료">9. 상담 완료</option>
                              <option value="취소/보류">취소/보류</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-blue-600 absolute right-4 pointer-events-none" />
                          </div>

                          {/* Confirmation Button */}
                          <button
                            type="button"
                            onClick={handleAdminConfirmStatus}
                            className={`px-5 py-2.5 text-white font-bold rounded-full text-xs sm:text-sm shadow-xs hover:shadow transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shrink-0 ${
                              adminPendingStatus !== adminSelectedConsulting.status
                                ? 'bg-blue-600 hover:bg-blue-700 animate-pulse ring-2 ring-blue-300'
                                : 'bg-slate-700 hover:bg-slate-800'
                            }`}
                          >
                            <Check className="w-4 h-4" />
                            <span>상태확인</span>
                          </button>

                          {/* Bottom Quotation Editor Button */}
                          <button
                            type="button"
                            onClick={() => {
                              setQuotationEditorConsulting(adminSelectedConsulting);
                              setIsQuotationEditorOpen(true);
                            }}
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-full text-xs sm:text-sm shadow-xs hover:shadow transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                            title="고객 신청서 기반 견적서 작성"
                          >
                            <Send className="w-4 h-4" />
                            <span>견적서 작성</span>
                          </button>
                        </div>

                        {/* Guide note when status changed but not yet confirmed */}
                        {adminPendingStatus !== adminSelectedConsulting.status && !statusUpdateMessage && (
                          <p className="text-[11px] text-blue-600 font-medium animate-in fade-in flex items-center gap-1">
                            <span>* 변경할 진행상황을 선택하셨습니다. 우측 <strong>[확인]</strong> 버튼을 누르면 즉시 업데이트됩니다.</span>
                          </p>
                        )}

                        {/* Confirmation Toast / Success feedback */}
                        {statusUpdateMessage && (
                          <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs animate-in fade-in">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{statusUpdateMessage}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-slate-400">
                    좌측 리스트에서 열람할 컨설팅 상담 신청건을 선택해주세요.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW B: Admin Master Table */}
          {adminSubView === 'table' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="px-5 py-3.5 min-w-[180px] whitespace-nowrap">병원 / 고객사</th>
                      <th className="px-5 py-3.5 min-w-[140px] whitespace-nowrap">담당자 & 연락처</th>
                      <th className="px-5 py-3.5 min-w-[140px] whitespace-nowrap">업종 / 규모</th>
                      <th className="px-5 py-3.5 min-w-[160px] whitespace-nowrap">직군 구성 및 수량</th>
                      <th className="px-5 py-3.5 min-w-[140px] whitespace-nowrap">진행상태 변경</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {adminConsultingList.map((req) => (
                      <tr 
                        key={req.id} 
                        onClick={() => {
                          setAdminSelectedConsulting(req);
                          setAdminModalItem(req);
                        }}
                        className="hover:bg-blue-50/60 transition-colors cursor-pointer group"
                      >
                        <td className="px-5 py-4 min-w-[200px] whitespace-nowrap">
                          <div className="font-bold text-slate-900 text-sm whitespace-nowrap group-hover:text-blue-700 transition-colors">
                            {req.companyName}
                          </div>
                          {(req.title || (req.message && req.message !== '별도 추가 요청사항 없음')) && (
                            <div className="text-[11px] text-blue-700 font-medium truncate max-w-[240px] mt-0.5" title={req.title || req.message}>
                              📌 {req.title || req.message}
                            </div>
                          )}
                          <div className="text-[11px] text-slate-500 whitespace-nowrap mt-0.5">{req.industry}</div>
                        </td>
                        <td className="px-5 py-4 min-w-[140px] whitespace-nowrap">
                          <div className="font-semibold text-slate-900">{req.contactPerson}</div>
                          <div className="text-[11px] text-slate-500 font-mono mt-0.5">{req.phone}</div>
                        </td>
                        <td className="px-5 py-4 min-w-[140px]">
                          <div className="text-slate-800 font-medium whitespace-nowrap">{req.companySize}</div>
                          <div className="text-[11px] text-blue-600 truncate max-w-[150px]" title={req.consultingPoints.join(', ')}>
                            {req.consultingPoints.join(', ')}
                          </div>
                        </td>
                        <td className="px-5 py-4 min-w-[160px]">
                          {(() => {
                            const staffCount = req.totalStaffCount || (req.roleHeadcounts ? req.roleHeadcounts.reduce((sum, r) => sum + r.count, 0) : 0);
                            const accurateTableQty = staffCount > 0 ? `${staffCount * 2}~${staffCount * 3}벌` : req.quantity;
                            return (
                              <>
                                <div className="font-bold text-slate-900 whitespace-nowrap">{accurateTableQty}</div>
                                {req.roleHeadcounts && req.roleHeadcounts.length > 0 && (
                                  <div className="text-[11px] text-slate-500 truncate max-w-[160px]" title={req.roleHeadcounts.filter(r => r.count > 0).map(r => `${r.role}: ${r.count}명`).join(', ')}>
                                    {req.roleHeadcounts.filter(r => r.count > 0).map(r => `${r.role}:${r.count}`).join(', ')}
                                  </div>
                                )}
                              </>
                            );
                          })()}
                        </td>
                        <td className="px-5 py-4 min-w-[180px] whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-2">
                            <select
                              value={req.status}
                              onChange={(e) => {
                                if (onUpdateConsulting) {
                                  onUpdateConsulting({
                                    ...req,
                                    status: e.target.value as any
                                  });
                                }
                              }}
                              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-bold text-blue-700 outline-none focus:border-blue-600 cursor-pointer shadow-2xs hover:border-slate-400"
                            >
                              <option value="접수완료">접수완료</option>
                              <option value="컨설턴트 배정">컨설턴트 배정</option>
                              <option value="시안 제작중">시안 제작중</option>
                              <option value="견적 발송">견적 발송</option>
                              <option value="상담 완료">상담 완료</option>
                              <option value="취소/보류">취소/보류</option>
                            </select>
                            <button
                              type="button"
                              onClick={() => {
                                setQuotationEditorConsulting(req);
                                setIsQuotationEditorOpen(true);
                              }}
                              className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs shrink-0"
                              title="견적서 작성"
                            >
                              <Send className="w-3 h-3" />
                              <span>견적서작성</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {adminConsultingList.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-4 py-12 text-center text-slate-400 text-xs">
                          검색 조건에 해당하는 B2B 컨설팅 신청건이 없습니다.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Customer Password Verification Modal */}
      {customerAuthModal.isOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  customerAuthModal.action === 'delete' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {customerAuthModal.action === 'delete' ? '신청 취소 및 삭제' : '신청 내용 수정'}
                  </h3>
                  <p className="text-[11px] text-slate-500">본인 확인 비밀번호 입력</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCustomerAuthModal({ isOpen: false, action: null })}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleVerifyCustomerAuth} className="pt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  접수 시 설정한 비밀번호
                </label>
                <div className="relative">
                  <input
                    type={showCustomerAuthPassword ? 'text' : 'password'}
                    value={customerAuthPassword}
                    onChange={(e) => {
                      setCustomerAuthPassword(e.target.value);
                      setCustomerAuthError('');
                    }}
                    placeholder="비밀번호 입력"
                    autoFocus
                    className="w-full bg-slate-50 text-slate-900 text-sm px-3.5 py-2.5 pr-10 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl outline-none font-mono tracking-wider shadow-2xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCustomerAuthPassword(!showCustomerAuthPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    {showCustomerAuthPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {customerAuthError && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{customerAuthError}</span>
                  </p>
                )}
                <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                  🔒 시안 제작 전 안전한 고객 정보 관리를 위해 접수 시 등록하신 비밀번호로 확인합니다.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCustomerAuthModal({ isOpen: false, action: null })}
                  className="flex-1 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className={`flex-1 py-2.5 text-xs font-bold text-white rounded-xl shadow-xs transition-all cursor-pointer ${
                    customerAuthModal.action === 'delete'
                      ? 'bg-red-600 hover:bg-red-700 active:bg-red-800'
                      : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                  }`}
                >
                  인증 및 {customerAuthModal.action === 'delete' ? '삭제' : '수정'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Customer Edit Modal (시안 제작 전 내용 수정) */}
      {customerEditModalOpen && editFormData && selectedConsulting && (
        <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-2xs">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span>컨설팅 신청 내용 수정</span>
                    <span className="text-xs font-mono font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                      {selectedConsulting.id}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    시안 제작 착수 전 단계로 모든 정보를 자유롭게 수정하실 수 있습니다.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCustomerEditModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveCustomerEdit} className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
              {/* 기관/병원명 & 담당자 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">기관 / 병원명 *</label>
                  <input
                    type="text"
                    required
                    value={editFormData.companyName}
                    onChange={(e) => setEditFormData({ ...editFormData, companyName: e.target.value })}
                    className="w-full bg-white text-slate-900 text-xs sm:text-sm px-3.5 py-2 border border-slate-300 focus:border-blue-600 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">담당자 성함/직함 *</label>
                  <input
                    type="text"
                    required
                    value={editFormData.contactPerson}
                    onChange={(e) => setEditFormData({ ...editFormData, contactPerson: e.target.value })}
                    className="w-full bg-white text-slate-900 text-xs sm:text-sm px-3.5 py-2 border border-slate-300 focus:border-blue-600 rounded-lg outline-none"
                  />
                </div>
              </div>

              {/* 연락처 & 이메일 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">연락처 *</label>
                  <input
                    type="tel"
                    required
                    value={editFormData.phone}
                    onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                    className="w-full bg-white text-slate-900 text-xs sm:text-sm px-3.5 py-2 border border-slate-300 focus:border-blue-600 rounded-lg outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">이메일 *</label>
                  <input
                    type="email"
                    required
                    value={editFormData.email}
                    onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                    className="w-full bg-white text-slate-900 text-xs sm:text-sm px-3.5 py-2 border border-slate-300 focus:border-blue-600 rounded-lg outline-none"
                  />
                </div>
              </div>

              {/* 업종 & 규모 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">업종</label>
                  <select
                    value={editFormData.industry}
                    onChange={(e) => setEditFormData({ ...editFormData, industry: e.target.value as any })}
                    className="w-full bg-white text-slate-800 text-xs sm:text-sm px-3 py-2 border border-slate-300 focus:border-blue-600 rounded-lg outline-none"
                  >
                    {['메디컬/의료', '에스테틱/뷰티', '식음료/F&B', '호텔/스파', '기타/연구소'].map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">기업/팀 규모</label>
                  <select
                    value={editFormData.companySize}
                    onChange={(e) => setEditFormData({ ...editFormData, companySize: e.target.value as any })}
                    className="w-full bg-white text-slate-800 text-xs sm:text-sm px-3 py-2 border border-slate-300 focus:border-blue-600 rounded-lg outline-none"
                  >
                    {[
                      '소형 (30인 미만)',
                      '중형 (30인 이상 60인 미만)',
                      '대형 (60인 이상)',
                      '개인 / SOHO (10인 이하)',
                      '중형 (11~50인 이하)',
                      '대형 (50인 이상)'
                    ].map((sz) => (
                      <option key={sz} value={sz}>{sz}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 직군별 인원 구성 (실시간 수량 자동 계산) */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    직군별 인원 구성 및 수량 산출
                  </span>
                  {(() => {
                    const total = editFormData.roleHeadcounts.reduce((sum, r) => sum + (Number(r.count) || 0), 0);
                    return (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-700 bg-white px-2.5 py-0.5 rounded-full border border-blue-200">
                          총 {total}명
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          권장 {total * 2}~{total * 3}벌
                        </span>
                      </div>
                    );
                  })()}
                </div>

                {/* Role List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {editFormData.roleHeadcounts.map((r, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
                      <span className="text-xs font-medium text-slate-800 truncate mr-2">{r.role}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            const updated = editFormData.roleHeadcounts.map((item, i) =>
                              i === idx ? { ...item, count: Math.max(0, item.count - 1) } : item
                            );
                            setEditFormData({ ...editFormData, roleHeadcounts: updated });
                          }}
                          className="w-6 h-6 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-slate-900 font-mono">
                          {r.count}명
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = editFormData.roleHeadcounts.map((item, i) =>
                              i === idx ? { ...item, count: item.count + 1 } : item
                            );
                            setEditFormData({ ...editFormData, roleHeadcounts: updated });
                          }}
                          className="w-6 h-6 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = editFormData.roleHeadcounts.filter((_, i) => i !== idx);
                            setEditFormData({ ...editFormData, roleHeadcounts: updated });
                          }}
                          className="text-slate-300 hover:text-red-500 p-1 cursor-pointer ml-1"
                          title="직군 삭제"
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add new role */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    value={newRoleInput}
                    onChange={(e) => setNewRoleInput(e.target.value)}
                    placeholder="새 직군 입력 (예: 코디네이터)"
                    className="flex-1 bg-white text-xs px-3 py-1.5 border border-slate-300 rounded-lg outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newRoleInput.trim()) return;
                      setEditFormData({
                        ...editFormData,
                        roleHeadcounts: [...editFormData.roleHeadcounts, { role: newRoleInput.trim(), count: 1 }]
                      });
                      setNewRoleInput('');
                    }}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold cursor-pointer"
                  >
                    + 추가
                  </button>
                </div>
              </div>

              {/* 중점 컨설팅 포인트 */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">중점 컨설팅 포인트</label>
                <div className="flex flex-wrap gap-2">
                  {['디자인', '기능/원단', '가격', '빠른 납기', '로고/자수 커스텀'].map((pt) => {
                    const isSelected = editFormData.consultingPoints.includes(pt as any);
                    return (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => {
                          const updated = isSelected
                            ? editFormData.consultingPoints.filter(p => p !== pt)
                            : [...editFormData.consultingPoints, pt as any];
                          if (updated.length > 0) {
                            setEditFormData({ ...editFormData, consultingPoints: updated });
                          }
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-50 text-blue-700 border-blue-500 font-bold'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {isSelected && '✓ '} {pt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 추가 요청사항 / 상담내용 */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">추가 요청사항 / 상담내용</label>
                <textarea
                  rows={3}
                  value={editFormData.message}
                  onChange={(e) => setEditFormData({ ...editFormData, message: e.target.value })}
                  placeholder="디자인 및 납기 관련 요청사항을 입력해주세요."
                  className="w-full bg-white text-slate-800 text-xs sm:text-sm p-3 border border-slate-300 focus:border-blue-600 rounded-lg outline-none leading-relaxed"
                />
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setCustomerEditModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>수정사항 저장하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {adminModalItem && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-lg">
                    {adminModalItem.id}
                  </span>
                  {adminModalItem.createdAt && (
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      신청일시: {adminModalItem.createdAt}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {adminModalItem.companyName} &middot; 신청 상세서
                </h3>
              </div>
              <button
                onClick={() => setAdminModalItem(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block">담당자 & 연락처</span>
                <span className="font-bold text-slate-900 block mt-0.5">{adminModalItem.contactPerson} ({adminModalItem.phone})</span>
                <span className="text-slate-500 font-mono text-[11px] block mt-0.5">{adminModalItem.email}</span>
              </div>

              <div className="bg-purple-50/70 p-3.5 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-purple-900 font-bold flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-purple-600" />
                    고객 설정 비밀번호
                  </span>
                  <span className="text-[10px] text-purple-700 bg-white px-2 py-0.5 rounded border border-purple-200 font-bold">
                    관리자 확인용
                  </span>
                </div>
                <div className="font-mono text-base font-black text-purple-900 mt-1">
                  {adminModalItem.password || '1234 (기본)'}
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 block">업종 & 규모</span>
                <span className="font-bold text-slate-900 block mt-0.5">{adminModalItem.industry} / {adminModalItem.companySize}</span>
              </div>

              {(() => {
                const modalStaffTotal = adminModalItem.totalStaffCount || (adminModalItem.roleHeadcounts ? adminModalItem.roleHeadcounts.reduce((sum, r) => sum + r.count, 0) : 0);
                const modalAccurateQty = modalStaffTotal > 0 ? `${modalStaffTotal * 2}~${modalStaffTotal * 3}벌` : adminModalItem.quantity;
                return (
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-xs">예상 수량</span>
                    <span className="font-bold text-blue-700 text-sm">{modalAccurateQty}</span>
                    {modalStaffTotal > 0 && (
                      <span className="text-[11px] text-blue-600 block mt-1 font-medium">
                        산출 근거: 직군 총 {modalStaffTotal}명 &times; 1인당 2~3벌 = {modalStaffTotal * 2}~{modalStaffTotal * 3}벌 (교대 세탁 권장)
                      </span>
                    )}
                  </div>
                );
              })()}

              {/* 견적 희망 품목 상세 (2번 이미지 양식) */}
              {adminModalItem.productItems && adminModalItem.productItems.length > 0 && (
                <div className="col-span-2 bg-blue-50/70 p-3.5 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-950">
                      견적 희망 품목 구성 ({adminModalItem.productItems.length}종)
                    </span>
                    <span className="font-bold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                      총 {adminModalItem.productItems.reduce((s, p) => s + (Number(p.quantity) || 0), 0)}벌
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs bg-white rounded-lg border border-blue-200 overflow-hidden">
                      <thead className="bg-blue-100/60 text-slate-700 font-bold border-b border-blue-200">
                        <tr>
                          <th className="py-1.5 px-2 w-8 text-center">No.</th>
                          <th className="py-1.5 px-2">업종</th>
                          <th className="py-1.5 px-2">성별</th>
                          <th className="py-1.5 px-2">제품군</th>
                          <th className="py-1.5 px-2 text-center">수량</th>
                          <th className="py-1.5 px-2">요청사항</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {adminModalItem.productItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-1.5 px-2 text-center font-mono text-slate-400 font-bold">{idx + 1}</td>
                            <td className="py-1.5 px-2 font-semibold text-slate-700">{item.industry}</td>
                            <td className="py-1.5 px-2 font-semibold text-slate-700">{item.gender}</td>
                            <td className="py-1.5 px-2 font-bold text-blue-900">{item.customProductGroup || item.productGroup}</td>
                            <td className="py-1.5 px-2 text-center font-bold font-mono text-blue-700">{item.quantity}벌</td>
                            <td className="py-1.5 px-2 text-slate-600">{item.requestDetails || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 직군별 인원 구성 (기존 데이터 호환) */}
              {adminModalItem.roleHeadcounts && adminModalItem.roleHeadcounts.length > 0 && !adminModalItem.productItems && (
                <div className="col-span-2 bg-blue-50/70 p-3.5 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-950">직군별 인원 구성</span>
                    <span className="font-bold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                      총 {adminModalItem.totalStaffCount || adminModalItem.roleHeadcounts.reduce((sum, r) => sum + r.count, 0)}명
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {adminModalItem.roleHeadcounts
                      .filter((rh) => rh.count > 0)
                      .map((rh, idx) => (
                        <span key={idx} className="bg-white px-2.5 py-1 rounded-lg border border-blue-200 text-xs font-medium text-slate-800">
                          {rh.role}: <strong className="text-blue-600">{rh.count}명</strong>
                        </span>
                      ))}
                  </div>
                </div>
              )}

              <div className="col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="text-slate-700 font-bold text-xs block">고객 상담 요청 및 메모:</span>
                {adminModalItem.title && (
                  <div className="bg-blue-50/90 border border-blue-200 rounded-lg p-2.5">
                    <span className="text-[10px] font-bold text-blue-600 block mb-0.5">📌 상담 제목 (고객 선택 템플릿)</span>
                    <div className="text-xs font-bold text-blue-950">{adminModalItem.title}</div>
                  </div>
                )}
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                  {adminModalItem.message && 
                   adminModalItem.message !== '별도 추가 요청사항 없음' &&
                   adminModalItem.message !== adminModalItem.title ? (
                    adminModalItem.message
                  ) : adminModalItem.title ? (
                    <span className="text-slate-600 font-medium">위 상담 제목으로 접수되었으며, 추가 작성된 별도 요청 본문은 없습니다.</span>
                  ) : (
                    adminModalItem.message || '없음'
                  )}
                </div>
              </div>

              <div className="col-span-2 bg-purple-50/70 p-3.5 rounded-xl border border-purple-200">
                <span className="text-purple-900 font-bold block mb-1.5">관리자 내부 메모:</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editingAdminNoteId === adminModalItem.id ? adminNoteText : (adminModalItem.adminNote || '')}
                    onFocus={() => {
                      setEditingAdminNoteId(adminModalItem.id);
                      setAdminNoteText(adminModalItem.adminNote || '');
                    }}
                    onChange={(e) => {
                      setEditingAdminNoteId(adminModalItem.id);
                      setAdminNoteText(e.target.value);
                    }}
                    placeholder="관리자 메모 입력"
                    className="flex-1 bg-white text-xs px-3 py-1.5 border border-purple-300 rounded-lg outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = { ...adminModalItem, adminNote: adminNoteText };
                      if (onUpdateConsulting) onUpdateConsulting(updated);
                      setAdminModalItem(updated);
                      if (adminSelectedConsulting?.id === adminModalItem.id) {
                        setAdminSelectedConsulting(updated);
                      }
                      setEditingAdminNoteId(null);
                    }}
                    className="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-xs font-bold cursor-pointer"
                  >
                    저장
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    const target = adminModalItem;
                    setAdminModalItem(null);
                    setQuotationEditorConsulting(target);
                    setIsQuotationEditorOpen(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                  title="견적서 작성"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>견적서 작성</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>신청서 인쇄</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderSheetConsulting(adminModalItem)}
                  className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="정규 B2B 주문서 원본 서식 보기"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>주문서 원본보기</span>
                </button>

                {onDeleteConsulting && (
                  <button
                    type="button"
                    onClick={() => {
                      const item = adminModalItem;
                      setAdminModalItem(null);
                      setDeleteConfirmTarget(item);
                    }}
                    className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                    title="신청 내역 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>삭제</span>
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setAdminModalItem(null)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs cursor-pointer shadow-xs"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      )}

      {/* Official B2B Original Order Sheet Modal */}
      <OriginalOrderSheetModal
        isOpen={Boolean(orderSheetConsulting)}
        onClose={() => setOrderSheetConsulting(null)}
        consulting={orderSheetConsulting}
      />

      {/* Official B2B Quotation Viewer & Approval Modal */}
      <QuotationViewModal
        isOpen={isQuotationModalOpen}
        onClose={() => {
          setIsQuotationModalOpen(false);
          setQuotationModalConsulting(null);
        }}
        consulting={quotationModalConsulting}
        isMyReq={Boolean(quotationModalConsulting && isMyConsultingRequest(quotationModalConsulting))}
        isAdmin={isAdminAuthenticated}
        onUpdateConsulting={(updated) => {
          if (onUpdateConsulting) onUpdateConsulting(updated);
          setQuotationModalConsulting(updated);
          if (adminSelectedConsulting?.id === updated.id) {
            setAdminSelectedConsulting(updated);
          }
          if (selectedConsulting?.id === updated.id) {
            setSelectedConsulting(updated);
          }
        }}
        onOpenQuotationEditor={(target) => {
          setQuotationEditorConsulting(target);
          setIsQuotationEditorOpen(true);
        }}
      />

      {/* Admin B2B Quotation Editor Modal */}
      <QuotationEditorModal
        isOpen={isQuotationEditorOpen}
        onClose={() => {
          setIsQuotationEditorOpen(false);
          setQuotationEditorConsulting(null);
        }}
        consulting={quotationEditorConsulting}
        onSaveQuotation={(updated) => {
          if (onUpdateConsulting) onUpdateConsulting(updated);
          if (adminSelectedConsulting?.id === updated.id) {
            setAdminSelectedConsulting(updated);
          }
          if (selectedConsulting?.id === updated.id) {
            setSelectedConsulting(updated);
          }
        }}
      />
    </div>
  );
};
