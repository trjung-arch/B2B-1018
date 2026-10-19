import { ConsultingRequest } from './types';

export const INITIAL_CONSULTING_REQUESTS: ConsultingRequest[] = [
  {
    id: 'REQ-2026-001',
    companyName: '카페 루미에르 성수',
    applicantName: '김민준 실장',
    phone: '010-8234-9102',
    email: 'contact@cafelumiere.kr',
    businessNumber: '214-87-19283',
    category: '캔버스 바리스타 에이프런',
    quantity: 50,
    expectedDeliveryDate: '2026-11-15',
    budgetRange: '200만원 ~ 300만원',
    embroiderySpec: {
      embroideryType: '일반 자수 (평면 다다미)',
      placement: '좌측 가슴 (기본 로고)',
      sizeEstimate: '가로 7.5cm x 세로 3.2cm',
      textOrContent: 'Café Lumière 필기체 영문 & 에스프레소 심볼',
      fontPreference: '클래식 세리프 & 필기체 혼합',
      threadColors: ['#D4AF37 (앤틱 골드)', '#1E293B (다크 네이비)'],
      notes: '앞치마 캔버스 원단(12수 차콜/아이보리 각 25벌)에 깔끔한 자수 희망합니다.'
    },
    uploadedFileName: 'lumiere_vector_logo.ai',
    detailedRequest: '성수 본점 및 2호점 바리스타 크루용 에이프런 50벌 제작 문의드립니다. 세탁이 잦은 카페 특성상 세탁 후에도 실 풀림이 없는 견고한 고밀도 컴퓨터 자수를 원합니다. 1차 견적서 요청드립니다.',
    status: '접수완료',
    createdAt: '2026-10-18 10:24',
    updatedAt: '2026-10-18 10:24',
    consultantName: '박세영 수석 디자이너',
    adminInternalMemo: '신규 프랜차이즈 후보. 에이프런 캔버스 12수 원단 스와치 발송 예정.'
  },
  {
    id: 'REQ-2026-002',
    companyName: '(주)넥스트바이오 연구원',
    applicantName: '이서연 팀장',
    phone: '010-3490-1288',
    email: 'sy.lee@nextbio.com',
    businessNumber: '110-86-45920',
    category: '프리미엄 코튼 유니폼 셔츠',
    quantity: 120,
    expectedDeliveryDate: '2026-11-20',
    budgetRange: '600만원 ~ 800만원',
    embroiderySpec: {
      embroideryType: '일반 자수 (평면 다다미)',
      placement: '좌측 가슴 (기본 로고)',
      sizeEstimate: '가로 8.0cm x 세로 2.5cm',
      textOrContent: 'NEXT BIO 로고마크 + 영문 CI',
      fontPreference: '공식 CI 지정 폰트',
      threadColors: ['#0284C7 (시안 블루)', '#475569 (슬레이트 그레이)'],
      notes: '소매 끝단에 각 연구원 영문 이니셜 1도 자수 추가 포함'
    },
    uploadedFileName: 'NEXTBIO_CI_Guide_2026.pdf',
    detailedRequest: '연구개발 연구원 120명 착용 셔츠 및 랩코트 자수 견적 요청드립니다. 견적서 발송 완료 상태이며 고객사 품의 결재 대기 중입니다.',
    status: '견적 발송',
    createdAt: '2026-10-16 14:10',
    updatedAt: '2026-10-17 09:30',
    consultantName: '최진우 총괄 실장',
    quotation: {
      quoteNumber: 'QT-2026-1017-02',
      createdAt: '2026-10-17',
      validUntil: '2026-10-31',
      items: [
        {
          id: 'item-1',
          name: '프리미엄 코튼 유니폼 셔츠 (화이트/스카이블루)',
          spec: '고밀도 옥스포드 코튼 100%, 흡한속건',
          quantity: 120,
          unitPrice: 42000,
          embroideryFee: 4500,
          amount: 5580000
        },
        {
          id: 'item-2',
          name: '연구원 소매 개별 이니셜 맞춤 자수 (120인)',
          spec: '1도 슬레이트 그레이 이니셜 자수',
          quantity: 120,
          unitPrice: 0,
          embroideryFee: 2000,
          amount: 240000
        }
      ],
      subtotal: 5820000,
      embroiderySetupFee: 50000,
      discountAmount: 290000,
      vatAmount: 558000,
      totalAmount: 6138000,
      bankName: '기업은행',
      accountNumber: '028-192830-01-018',
      accountHolder: '(주)라린느코리아',
      notes: [
        '본 견적 유효기간은 발행일로부터 14일간입니다.',
        '고객 승인 및 결제 확인 후 7영업일 이내 자수 샘플 감리가 진행됩니다.',
        '완제품 납품 시 개별 친환경 비닐 패킹 및 사원별 라벨링 무료 지원.'
      ],
      status: '발송됨'
    },
    adminInternalMemo: '견적서 발송 완료 (담당자 이서연 팀장 확인). 내부 구매팀 품의 통과 시 승인 버튼 누를 예정이라고 통화함.'
  },
  {
    id: 'REQ-2026-003',
    companyName: '오스테리아 문 (Osteria Moon)',
    applicantName: '문성진 오너셰프',
    phone: '010-9102-5541',
    email: 'chef.moon@osteriamoon.com',
    businessNumber: '107-28-99412',
    category: '셰프 자켓 / 조리복',
    quantity: 80,
    expectedDeliveryDate: '2026-11-10',
    budgetRange: '450만원 내외',
    embroiderySpec: {
      embroideryType: '3D 볼륨 입체 자수',
      placement: '앞치마 중앙 포켓',
      sizeEstimate: '가로 9.0cm x 세로 4.0cm',
      textOrContent: 'Osteria Moon 이탈리안 자수 엠블럼',
      threadColors: ['#C2410C (테라코타 오렌지)', '#F8FAFC (퓨어 화이트)'],
      notes: '조리 시 열기에 강한 내열 자수사 사용 요망'
    },
    uploadedFileName: 'osteria_moon_crest.png',
    detailedRequest: '신규 오픈 레스토랑 주방 및 홀 직원 유니폼입니다. 견적서 확인 후 고객 포털에서 승인을 완료하였으며 세금계산서 발행 및 입금 확인을 요청한 상태입니다.',
    status: '견적 승인완료',
    createdAt: '2026-10-15 11:20',
    updatedAt: '2026-10-17 16:45',
    consultantName: '박세영 수석 디자이너',
    quotation: {
      quoteNumber: 'QT-2026-1016-01',
      createdAt: '2026-10-16',
      validUntil: '2026-10-30',
      items: [
        {
          id: 'item-1',
          name: '프리미엄 셰프 코트 & 홀 조리복',
          spec: '항균 방오 가공 트윌 패브릭',
          quantity: 80,
          unitPrice: 48000,
          embroideryFee: 5000,
          amount: 4240000
        }
      ],
      subtotal: 4240000,
      embroiderySetupFee: 60000,
      discountAmount: 200000,
      vatAmount: 410000,
      totalAmount: 4510000,
      bankName: '기업은행',
      accountNumber: '028-192830-01-018',
      accountHolder: '(주)라린느코리아',
      notes: [
        '고객 승인 완료 건: 입금 확인 즉시 컴퓨터 자수 펀칭 데이터 프로그램 세팅 착수.',
        '세금계산서 역발행 요청 접수됨.'
      ],
      status: '고객승인',
      approvedAt: '2026-10-17 16:45'
    },
    adminInternalMemo: '고객 포털에서 문성진 셰프 직접 승인 완료함. 회계팀 계좌 입금 확인 후 작업진행 전환 예정.'
  },
  {
    id: 'REQ-2026-004',
    companyName: '그랜드 앰배서더 호텔',
    applicantName: '정우철 총무부장',
    phone: '010-4491-7720',
    email: 'wc.jung@grandambassador.co.kr',
    businessNumber: '101-81-29401',
    category: '호텔 페이스/배스 타월',
    quantity: 500,
    expectedDeliveryDate: '2026-11-25',
    budgetRange: '800만원 ~ 1,000만원',
    embroiderySpec: {
      embroideryType: '메탈릭 금사/은사 특수자수',
      placement: '소매 끝단 (미니 심볼)',
      sizeEstimate: '가로 5.0cm x 세로 3.0cm',
      textOrContent: 'Grand Ambassador 로고 금사 자수',
      threadColors: ['#EAB308 (프리미엄 골드 메탈릭)'],
      notes: '호텔 세탁기 고온 세탁에도 풀림 없도록 40수 고밀도 실크 터치 자수사 적용'
    },
    uploadedFileName: 'Ambassador_Gold_Logo.ai',
    detailedRequest: '스위트룸 전용 린넨 가운 및 타월 500세트 금사 자수 제작. 결제 완료되었으며 현재 자수 공장에서 1차 파일럿 샘플 10장 제작 및 감리 진행 중.',
    status: '결제완료/작업진행',
    createdAt: '2026-10-12 09:15',
    updatedAt: '2026-10-16 11:00',
    consultantName: '최진우 총괄 실장',
    depositConfirmed: true,
    quotation: {
      quoteNumber: 'QT-2026-1013-05',
      createdAt: '2026-10-13',
      validUntil: '2026-10-27',
      items: [
        {
          id: 'item-1',
          name: '호텔 컬렉션 40수 프리미엄 타월 & 린넨 가운',
          spec: '이집트산 최고급 면 100%, 550GSM',
          quantity: 500,
          unitPrice: 16000,
          embroideryFee: 2500,
          amount: 9250000
        }
      ],
      subtotal: 9250000,
      embroiderySetupFee: 80000,
      discountAmount: 500000,
      vatAmount: 883000,
      totalAmount: 9713000,
      bankName: '기업은행',
      accountNumber: '028-192830-01-018',
      accountHolder: '(주)라린느코리아',
      notes: ['결제 완료 건 - 컴퓨터 자수기 4호 라인 배치 완료'],
      status: '입금확인',
      approvedAt: '2026-10-14 15:30'
    },
    adminInternalMemo: '법인카드 결제 완료. 금사 펀칭 시 실 끊어짐 방지 위해 텐션 3.5 유지 세팅됨.'
  },
  {
    id: 'REQ-2026-005',
    companyName: '딥블루 커피 로스터스 (Deep Blue Coffee)',
    applicantName: '한상우 대표',
    phone: '010-7711-3049',
    email: 'roaster@deepbluecoffee.com',
    businessNumber: '204-86-55190',
    category: '프리미엄 린넨 앞치마',
    quantity: 30,
    expectedDeliveryDate: '2026-10-18',
    budgetRange: '150만원',
    embroiderySpec: {
      embroideryType: '일반 자수 (평면 다다미)',
      placement: '좌측 가슴 (기본 로고)',
      sizeEstimate: '가로 7.0cm x 세로 3.0cm',
      textOrContent: 'DEEP BLUE COFFEE ROASTERS 영문 타이포',
      threadColors: ['#1E3A8A (인디고 블루)', '#F59E0B (앰버 옐로우)'],
      notes: '린넨 100% 원단 네이비 컬러'
    },
    uploadedFileName: 'deepblue_final.ai',
    detailedRequest: '로스터리 매장 크루 앞치마 30벌 전량 제작 및 검수 완료되어 CJ대한통운으로 출고 배송 완료되었습니다.',
    status: '상담 완료', // 출고 종료된 신청서!
    createdAt: '2026-10-05 14:00',
    updatedAt: '2026-10-18 16:30',
    consultantName: '박세영 수석 디자이너',
    depositConfirmed: true,
    courierName: 'CJ대한통운',
    trackingNumber: '6829-1029-4401',
    quotation: {
      quoteNumber: 'QT-2026-1006-03',
      createdAt: '2026-10-06',
      validUntil: '2026-10-20',
      items: [
        {
          id: 'item-1',
          name: '프리미엄 프렌치 린넨 100% 바리스타 앞치마',
          spec: '워싱 가공 린넨 100%, 네이비 컬러',
          quantity: 30,
          unitPrice: 38000,
          embroideryFee: 4000,
          amount: 1260000
        }
      ],
      subtotal: 1260000,
      embroiderySetupFee: 40000,
      discountAmount: 50000,
      vatAmount: 125000,
      totalAmount: 1375000,
      bankName: '기업은행',
      accountNumber: '028-192830-01-018',
      accountHolder: '(주)라린느코리아',
      notes: ['출고 배송 완료: 송장번호 CJ 6829-1029-4401'],
      status: '출고완료',
      approvedAt: '2026-10-08 11:20'
    },
    adminInternalMemo: '최종 검품 통과 후 10/18 발송 완료. 고객사 대표님 만족도 높음.'
  },
  {
    id: 'REQ-2026-006',
    companyName: '베이커리 쁘띠 (Petite Boulangerie)',
    applicantName: '윤지후 매니저',
    phone: '010-5522-8199',
    email: 'info@petiteboulangerie.kr',
    businessNumber: '119-09-33821',
    category: '헤비 캔버스 에코백',
    quantity: 200,
    expectedDeliveryDate: '2026-12-01',
    budgetRange: '200만원',
    embroiderySpec: {
      embroideryType: '체인 스티치 (빈티지 감성)',
      placement: '등판 중앙 (빅 로고/텍스트)',
      sizeEstimate: '가로 14cm x 세로 6cm',
      textOrContent: 'Petite Boulangerie 크로와상 아트워크',
      threadColors: ['#92400E (번트 시에나)', '#B45309 (앰버)'],
      notes: '크리스마스 프로모션용 증정 에코백'
    },
    uploadedFileName: 'croissant_artwork.png',
    detailedRequest: '연말 프로모션 일정 변동으로 인하여 고객사 요청으로 잠정 보류 처리되었습니다.',
    status: '취소/보류',
    createdAt: '2026-10-14 17:00',
    updatedAt: '2026-10-16 10:15',
    consultantName: '최진우 총괄 실장',
    adminInternalMemo: '고객사 매장 인테리어 공사 지연으로 12월 중순 재협의 요청.'
  }
];
