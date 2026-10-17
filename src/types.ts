export type IndustryType = '메디컬/의료' | '에스테틱/뷰티' | '식음료/F&B' | '호텔/스파' | '기타/연구소';

export type CompanySizeType = 
  | '소형 (30인 미만)' 
  | '중형 (30인 이상 60인 미만)' 
  | '대형 (60인 이상)'
  | '개인 / SOHO (10인 이하)' 
  | '중형 (11~50인 이하)' 
  | '대형 (50인 이상)';

export type ConsultingPointType = '디자인' | '기능/원단' | '가격' | '빠른 납기' | '로고/자수 커스텀';

export interface RoleHeadcount {
  role: string;
  count: number;
}

export interface ConsultingProductItem {
  id?: string;
  industry: string; // 업종 (메디컬, 에스테틱, 호텔/스파, 기업, 기타연구소, 식음료/F&B)
  gender: string;   // 성별 (여성, 남성, 남여공용)
  productGroup: string; // 제품군 (스크럽/상의, 자켓, 가운, 블라우스 등)
  customProductGroup?: string; // 직접 입력한 제품군
  quantity: number | ''; // 수량
  requestDetails: string; // 상품 요청사항 (예: 로고 자수 / 색상톤 계열 빨간색으로 해주세요~)
}

export type ConsultingStatus = 
  | '접수완료' 
  | '컨설턴트 배정' 
  | '시안 제작중' 
  | '견적 발송' 
  | '견적 승인완료' 
  | '입금확인요청' 
  | '결제완료/작업진행' 
  | '제작/출고완료' 
  | '상담 완료' 
  | '취소/보류';

export interface QuotationApprovalInfo {
  isApproved: boolean;
  approvedAt?: string;       // e.g. "2026-10-16 15:42:19"
  approverName?: string;     // 승인 담당자명 (e.g. "김민서 총괄실장")
  approverPhone?: string;    // 승인 담당자 연락처
  approvalMemo?: string;     // 승인 메모
  digitalSignature?: string; // 서명 텍스트 / 전자서명
}

export interface PaymentInfo {
  paymentStatus: '결제대기' | '입금확인요청' | '결제완료' | '환불';
  paymentMethod?: '계좌이체' | '법인카드' | '가상계좌';
  depositorName?: string;
  paidAmount?: number;
  paidAt?: string;           // e.g. "2026-10-16 16:10:00"
  confirmedBy?: string;      // e.g. "메디린 재무팀 정다은"
  confirmedAt?: string;      // e.g. "2026-10-16 16:30:00"
  bankInfo?: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
  };
  taxInvoiceRequested?: boolean;
  taxInvoiceEmail?: string;
  trackingCourier?: string;
  trackingNumber?: string;
}

export interface TimelineLogEntry {
  id: string;
  timestamp: string;         // e.g. "2026-10-16 15:42:19"
  stage: '신청접수' | '컨설턴트배정' | '시안제작' | '견적발송' | '견적승인' | '입금요청' | '결제완료' | '작업진행' | '출고완료' | '메모';
  title: string;
  description: string;
  actor: string;             // '고객' | '메디린 관리자' | '시스템' | 담당자명
  badgeClass?: string;
}

export type GarmentType = '닥터 코트 (Doctor Coat)' | '시그니처 스크럽 탑 (Scrub Top)' | '에스테틱 랩 가운 (Wrap Gown)' | '클리닉 에이프런 (Clinic Apron)';

export type GarmentColor = {
  name: string;
  hex: string;
  textClass: string;
};

export type EmbroideryPlacement = '왼쪽 가슴' | '오른쪽 가슴' | '왼쪽 소매' | '오른쪽 소매' | '등 상단' | '카라/깃';

export type EmbroideryType = '텍스트 / 이니셜' | '로고 마크' | '복합 (로고 + 텍스트)';

export type ThreadColor = {
  name: string;
  hex: string;
  border?: string;
  isMetallic?: boolean;
};

export type EmbroideryFont = {
  id: string;
  name: string;
  fontFamily: string;
  previewText: string;
  category: 'sans' | 'serif' | 'script' | 'korean';
};

export interface OrderFormItem {
  id: string;
  category?: string;
  productName: string;
  size: string;
  quantity: number;
  note?: string;
  unitPrice?: number;
  totalPrice?: number;
}

export interface QuotationItemSizeBreakdown {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface QuotationBuyerInfo {
  companyName: string;            // 업체명
  contactPerson: string;          // 담당자명
  phone: string;                  // 전화번호
  mobilePhone: string;            // *핸드폰
  fax?: string;                   // 팩스번호
  shippingAddress: string;        // 배송주소
  zipCode?: string;               // *우편번호
  // 세금계산서 / 현금영수증 발행 정보
  taxInvoiceType?: '세금계산서' | '현금영수증' | '미신청';
  taxInvoiceEmail?: string;       // E-mail (전자세금계산서 발급용)
  businessNumber?: string;        // 사업자등록번호
  businessType?: string;          // 업종
  businessItem?: string;          // 업태
  registeredCompanyName?: string; // 사업자명
  ceoName?: string;               // 대표자명
  depositorName?: string;         // 입금자명
}

export interface QuotationItem {
  id?: string;
  productCategory?: string;       // 제품군 (예: "자켓", "스크럽", "가운", "원피스")
  productName: string;            // 제품명 (예: "쎄라젬 자켓")
  color?: string;                 // 색상 (예: "블랙", "네이비")
  size?: string;                  // 규격/사이즈 (레거시 호환용)
  sizes?: QuotationItemSizeBreakdown; // 사이즈별 수량 (XS, S, M, L, XL, 2XL)
  quantity: number;               // 토탈수량
  unitPrice: number;              // 가격 (단가)
  totalPrice: number;             // 토탈가격
  note?: string;                  // 비고
}

export interface QuotationData {
  quotationNumber?: string;
  orderDate?: string;             // 주문일 (예: "2026-10-16")
  quotedAt: string;
  quotedBy: string;
  buyerInfo?: QuotationBuyerInfo; // 2번 이미지 상단 업체/계산서 정보
  items: QuotationItem[];
  supplyPrice: number;            // 공급가액
  discountRate: number;           // 할인율 (%)
  discountAmount: number;         // 할인금액
  setupFee: number;               // 로고 제판비 (30SET 이상 0원)
  vat: number;                    // 부가세 10%
  totalAmount: number;            // 최종 결제/견적 금액
  estimatedLeadTime: string;      // 납기 (예: 입금 확인 후 2~3주)
  validUntil: string;             // 견적 유효기간
  managerNote?: string;           // 안내 메시지
  approval?: QuotationApprovalInfo;
  payment?: PaymentInfo;
}

export interface ConsultingRequest {
  id: string;
  createdAt: string;
  title?: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  password?: string;
  industry: IndustryType;
  companySize: CompanySizeType;
  roleHeadcounts?: RoleHeadcount[];
  totalStaffCount?: number;
  productItems?: ConsultingProductItem[];
  consultingPoints: ConsultingPointType[];
  quantity: string;
  preferredDate?: string;
  message: string;
  attachments?: { name: string; size: string; url?: string }[];
  status: ConsultingStatus;
  assignedConsultant?: string;
  adminNote?: string;
  quotation?: QuotationData;
  timelineLogs?: TimelineLogEntry[];
}

export interface CorrespondenceRecord {
  id: string;
  createdAt: string;
  author: string;
  type: '전화상담' | '이메일발송' | '견적서발송' | '시안전달' | '입금확인' | '제작배송' | '메모';
  content: string;
}

export type OrderFormStatus = 
  | '주문서 접수' 
  | '견적서 발행완료' 
  | '입금 대기' 
  | '입금완료/제작진행' 
  | '출고/배송완료' 
  | '주문 취소';

export interface OrderFormRequest {
  id: string;
  createdAt: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  fax?: string;
  address: string;
  deliveryAddress?: string;
  deliveryNote?: string;
  zipCode?: string;
  orderDate: string;
  taxInvoiceType: '세금계산서' | '현금영수증' | '미발행';
  email: string;
  taxInvoiceEmail?: string;
  bizNumber?: string;
  businessNumber?: string;
  bizCategory?: string; // 업종
  bizType?: string;     // 업태
  bizName?: string;     // 사업자명 (상호)
  ceoName?: string;     // 대표자명
  representativeName?: string;
  depositorName: string;// 입금자명
  items: OrderFormItem[];
  totalQuantity: number;
  status: OrderFormStatus;
  quotation?: QuotationData;
  correspondence?: CorrespondenceRecord[];
  adminNote?: string;
  trackingNumber?: string;
}

export interface EmbroideryOrder {
  id: string;
  createdAt: string;
  garmentType: GarmentType;
  garmentColor: GarmentColor;
  placement: EmbroideryPlacement;
  embroideryType: EmbroideryType;
  line1: string;
  line2: string;
  line3?: string;
  font: string;
  threadColor: ThreadColor;
  logoPreset?: string;
  uploadedLogoName?: string;
  uploadedLogoUrl?: string;
  sizeMm: number; // width in mm (e.g. 80mm)
  quantity: number;
  unitGarmentPrice: number;
  unitEmbroideryPrice: number;
  setupFee: number; // 제판비
  totalPrice: number;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  specialNotes?: string;
  adminNote?: string;
  trackingNumber?: string;
  status: '접수완료' | '자수 시안 제작' | '고객 승인대기' | '제작 진행' | '발송 완료' | '주문 완료' | '취소/환불';
}
