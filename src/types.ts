export type ConsultingStatus =
  | '접수완료'
  | '컨설턴트 배정'
  | '시안 제작중'
  | '견적 발송'
  | '견적 승인완료'
  | '입금확인요청'
  | '결제완료/작업진행'
  | '상담 완료'
  | '취소/보류';

export type ProductType = 
  | '프리미엄 린넨 앞치마'
  | '캔버스 바리스타 에이프런'
  | '셰프 자켓 / 조리복'
  | '호텔 컬렉션 린넨 셔츠'
  | '프리미엄 코튼 유니폼 셔츠'
  | '호텔 페이스/배스 타월'
  | '헤비 캔버스 에코백'
  | '기타 맞춤 제작 의류';

export type EmbroideryPlacement =
  | '좌측 가슴 (기본 로고)'
  | '우측 가슴'
  | '등판 중앙 (빅 로고/텍스트)'
  | '소매 끝단 (미니 심볼)'
  | '앞치마 중앙 포켓'
  | '카라 / 넥라인'
  | '기타 위치 상담';

export type EmbroideryType =
  | '일반 자수 (평면 다다미)'
  | '3D 볼륨 입체 자수'
  | '체인 스티치 (빈티지 감성)'
  | '패치/와펜 오바로크 부착'
  | '메탈릭 금사/은사 특수자수';

export interface EmbroiderySpec {
  embroideryType: EmbroideryType;
  placement: EmbroideryPlacement;
  sizeEstimate: string; // e.g. "가로 8cm x 세로 3cm"
  textOrContent: string;
  fontPreference?: string;
  threadColors: string[];
  notes?: string;
}

export interface QuotationItem {
  id: string;
  name: string;
  spec: string;
  quantity: number;
  unitPrice: number;
  embroideryFee: number;
  amount: number;
}

export interface Quotation {
  quoteNumber: string;
  createdAt: string;
  validUntil: string;
  items: QuotationItem[];
  subtotal: number;
  embroiderySetupFee: number;
  discountAmount: number;
  vatAmount: number;
  totalAmount: number;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  notes: string[];
  status: '발송됨' | '고객승인' | '입금확인' | '출고완료';
  approvedAt?: string;
}

export interface StatusHistoryLog {
  timestamp: string;
  fromStatus: ConsultingStatus;
  toStatus: ConsultingStatus;
  actor: '고객' | '관리자' | '시스템';
  memo?: string;
}

export interface ConsultingRequest {
  id: string; // e.g. "REQ-2026-001"
  companyName: string;
  applicantName: string;
  phone: string;
  email: string;
  businessNumber?: string;
  category: ProductType;
  quantity: number;
  expectedDeliveryDate: string;
  budgetRange?: string;
  embroiderySpec: EmbroiderySpec;
  uploadedFileName?: string;
  uploadedFilePreview?: string;
  detailedRequest: string;
  status: ConsultingStatus;
  createdAt: string;
  updatedAt: string;
  consultantName?: string;
  trackingNumber?: string;
  courierName?: string;
  quotation?: Quotation;
  depositConfirmed?: boolean;
  historyLogs?: StatusHistoryLog[];
  adminInternalMemo?: string;
}

export type ViewMode = 'customer' | 'admin';
