import { ConsultingRequest, ConsultingStatus } from '../types';

export interface B2BStepConfig {
  step: number;
  id: string;
  customerLabel: string;
  customerDesc: string;
  adminLabel: string;
  adminDesc: string;
}

export const B2B_CORE_STEPS: B2BStepConfig[] = [
  {
    step: 1,
    id: 'step1',
    customerLabel: '1. 신청 접수완료',
    customerDesc: '맞춤 상담 접수 (1영업일 내 견적 준비)',
    adminLabel: '1. 접수완료 (견적작성 대기)',
    adminDesc: '신규 접수 건 견적서 작성 필요'
  },
  {
    step: 2,
    id: 'step2',
    customerLabel: '2. 견적 발송 (검토/승인)',
    customerDesc: '상세 단가 및 자수 스펙 검토',
    adminLabel: '2. 견적 발송 (고객승인 대기)',
    adminDesc: '견적서 전달 완료 (고객 승인 대기)'
  },
  {
    step: 3,
    id: 'step3',
    customerLabel: '3. 고객 승인완료',
    customerDesc: '견적 수락 및 결제/입금 진행',
    adminLabel: '3. 고객 승인완료 (입금 대기)',
    adminDesc: '고객 승인 접수됨 (입금/결제 확인 대기)'
  },
  {
    step: 4,
    id: 'step4',
    customerLabel: '4. 결제 및 제작 출고',
    customerDesc: '컴퓨터 자수 제작 및 배송 완료',
    adminLabel: '4. 결제완료 & 제작/출고',
    adminDesc: '자수 생산 완료 및 최종 출고'
  }
];

export function getProcessCurrentStep(status: ConsultingStatus): number {
  switch (status) {
    case '접수완료':
    case '컨설턴트 배정':
    case '시안 제작중':
      return 1;
    case '견적 발송':
      return 2;
    case '견적 승인완료':
    case '입금확인요청':
      return 3;
    case '결제완료/작업진행':
    case '상담 완료':
      return 4;
    case '취소/보류':
    default:
      return 0;
  }
}

export function isStepActiveOrDone(currentStep: number, targetStep: number): { active: boolean; done: boolean } {
  if (currentStep === 0) {
    return { active: false, done: false };
  }
  return {
    active: currentStep === targetStep,
    done: currentStep > targetStep
  };
}

export function getPerspectiveStatusLabel(status: ConsultingStatus, isCustomer: boolean): string {
  if (isCustomer) {
    switch (status) {
      case '접수완료':
      case '컨설턴트 배정':
      case '시안 제작중':
        return '1. 신청 접수완료 (견적 준비중)';
      case '견적 발송':
        return '2. 견적서 도착 (승인 대기)';
      case '견적 승인완료':
        return '3. 견적 승인완료 (입금 대기)';
      case '입금확인요청':
        return '3. 입금 확인 요청중';
      case '결제완료/작업진행':
        return '4. 결제완료 (컴퓨터 자수 제작중)';
      case '상담 완료':
        return '4. 제작 및 출고 배송완료';
      case '취소/보류':
        return '신청 취소 / 보류';
      default:
        return status;
    }
  } else {
    // Admin perspective
    switch (status) {
      case '접수완료':
        return '1. 신규 접수완료 (견적작성 필요)';
      case '컨설턴트 배정':
      case '시안 제작중':
        return '1. 시안 검토중 (견적작성 대기)';
      case '견적 발송':
        return '2. 견적 발송완료 (고객승인 대기)';
      case '견적 승인완료':
        return '3. 고객 승인완료 (입금 대기)';
      case '입금확인요청':
        return '3. 입금확인 요청접수 (입금확인 필요)';
      case '결제완료/작업진행':
        return '4. 결제확인 완료 (자수 제작중)';
      case '상담 완료':
        return '4. 출고 완료 (배송/종료)';
      case '취소/보류':
        return '상담 취소 / 보류';
      default:
        return status;
    }
  }
}

export function getPerspectiveBadgeClass(status: ConsultingStatus, isCustomer: boolean): string {
  switch (status) {
    case '접수완료':
    case '컨설턴트 배정':
    case '시안 제작중':
      return 'bg-blue-50 text-blue-700 border border-blue-200';
    case '견적 발송':
      return isCustomer 
        ? 'bg-amber-100 text-amber-800 border border-amber-300 ring-2 ring-amber-400/30 animate-pulse' 
        : 'bg-amber-50 text-amber-800 border border-amber-200';
    case '견적 승인완료':
    case '입금확인요청':
      return 'bg-purple-50 text-purple-700 border border-purple-200';
    case '결제완료/작업진행':
      return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
    case '상담 완료':
      return 'bg-slate-100 text-slate-700 border border-slate-300';
    case '취소/보류':
      return 'bg-rose-50 text-rose-700 border border-rose-200';
    default:
      return 'bg-slate-100 text-slate-700 border border-slate-200';
  }
}

/**
 * Question 1 Guard:
 * "출고종료된 신청서에 견적서작성 버튼이 왜 있지?"
 *
 * An admin can ONLY create a quotation if:
 * 1. The order is in early stage ('접수완료', '컨설턴트 배정', '시안 제작중')
 * 2. NO quotation exists yet
 * 3. The request is NOT finished ('상담 완료'), NOT in production/paid ('결제완료/작업진행'), NOT cancelled ('취소/보류')
 */
export function canAdminCreateQuotation(req: ConsultingRequest): boolean {
  if (req.quotation) return false;
  if (req.status === '상담 완료' || req.status === '취소/보류' || req.status === '결제완료/작업진행' || req.status === '견적 승인완료') {
    return false;
  }
  return true;
}

/**
 * An admin can edit a quotation only if:
 * 1. A quotation already exists
 * 2. Status is still '견적 발송' (customer hasn't approved it yet)
 * 3. It's not finished or in production
 */
export function canAdminEditQuotation(req: ConsultingRequest): boolean {
  if (!req.quotation) return false;
  if (req.status === '견적 발송') return true;
  return false;
}

/**
 * Question 2 Guard:
 * "관리자 모드에서 고객이 승인 해야 할 버튼이 보이는 게 맞을까? 자칫 관리자가 실수로 승인을 누를 수도 있잖아."
 *
 * Customer approval button MUST NEVER appear or be clickable by an admin!
 * It is strictly restricted to customer mode (!isAdmin) and when status is '견적 발송' and quotation exists.
 */
export function canCustomerApproveQuotation(req: ConsultingRequest, isAdmin: boolean): boolean {
  if (isAdmin) return false; // Strictly disabled for admin!
  return req.status === '견적 발송' && Boolean(req.quotation);
}
