import { ConsultingProductItem } from '../types';

export const CONSULTING_INDUSTRIES = [
  '메디컬',
  '에스테틱',
  '호텔/스파',
  '기업',
  '기타연구소',
  '식음료/F&B',
] as const;

export type ConsultingIndustryOption = typeof CONSULTING_INDUSTRIES[number];

export const CONSULTING_GENDERS = ['여성', '남성', '남여공용'] as const;
export type ConsultingGenderOption = typeof CONSULTING_GENDERS[number];

export const PRODUCT_CATALOG_BY_INDUSTRY_GENDER: Record<
  string,
  Record<string, string[]>
> = {
  '메디컬': {
    '여성': [
      '닥터가운 / 코트',
      '닥터자켓',
      '스크럽 상의',
      '스크럽 하의 / 바지',
      '수술복 (상/하의)',
      '간호사복 / 유니폼',
      '랩가운 / 원피스',
    ],
    '남성': [
      '닥터가운 / 코트',
      '닥터자켓',
      '스크럽 상의',
      '스크럽 하의 / 바지',
      '수술복 (상/하의)',
    ],
    '남여공용': [
      '닥터코트 (유니섹스)',
      '스크럽 상/하의 세트',
      '수술복 세트',
      '환자복 / 검진복',
      '격리가운 / 방호복',
    ],
  },
  '에스테틱': {
    '여성': [
      '랩가운 / 가운',
      '튜닉 / 에스테틱 상의',
      '슬랙스 / 팬츠',
      '에스테틱 원피스',
      '린넨 자켓',
      '에이프런 / 앞치마',
    ],
    '남성': [
      '테라피스트 상의',
      '슬랙스 / 팬츠',
      '에이프런 / 앞치마',
    ],
    '남여공용': [
      '테라피 가운',
      '트리트먼트 에이프런',
      '린넨 테라피웨어',
    ],
  },
  '호텔/스파': {
    '여성': [
      '리셉션 / 프런트 자켓',
      '블라우스 / 셔츠',
      '정장 슬랙스 / 스커트',
      '스파 테라피스트 가운',
      '하우스키핑 상/하의',
      '서비스 에이프런',
    ],
    '남성': [
      '리셉션 / 프런트 자켓',
      '정장 셔츠',
      '정장 슬랙스',
      '도어맨 / 벨보이 코트',
      '하우스키핑 상/하의',
      '서비스 에이프런',
    ],
    '남여공용': [
      '스파 가운',
      '서빙/홀 에이프런',
      '호텔 서비스 셔츠',
    ],
  },
  '기업': {
    '여성': [
      '오피스 자켓',
      '블라우스',
      '비즈니스 셔츠',
      '정장 슬랙스',
      '정장 스커트',
      '니트 / 가디건',
    ],
    '남성': [
      '오피스 자켓',
      '비즈니스 셔츠',
      '정장 슬랙스',
      '니트 / 가디건',
      '넥타이 / 엑세서리',
    ],
    '남여공용': [
      '유니폼 셔츠',
      '윈드브레이커 / 점퍼',
      '패딩 조끼',
      '폴로 셔츠 / 피케티',
    ],
  },
  '기타연구소': {
    '여성': [
      '실험복 / 연구가운',
      '랩 자켓',
      '기능성 연구 스크럽',
      '정전기 방지복',
      '연구 슬랙스',
    ],
    '남성': [
      '실험복 / 연구가운',
      '랩 자켓',
      '기능성 연구 스크럽',
      '정전기 방지복',
      '연구 슬랙스',
    ],
    '남여공용': [
      '롱 연구가운 (유니섹스)',
      '방진복 / 클린룸웨어',
      '실험용 방수 앞치마',
    ],
  },
  '식음료/F&B': {
    '여성': [
      '셰프 자켓 / 조리복',
      '홀서빙 셔츠 / 블라우스',
      '조리 팬츠',
      '바리스타 에이프런',
      '홀 서빙 앞치마',
      '셰프 캡 / 두건',
    ],
    '남성': [
      '셰프 자켓 / 조리복',
      '홀서빙 셔츠',
      '조리 팬츠',
      '바리스타 에이프런',
      '홀 서빙 앞치마',
      '셰프 캡 / 두건',
    ],
    '남여공용': [
      '프리미엄 셰프 코트',
      '주방 조리복 상/하의 세트',
      '롱 스트랩 바리스타 에이프런',
      '셰프 캡 / 위생모',
    ],
  },
};

// 기본 품목 매핑 헬퍼
export const getProductOptions = (industry: string, gender: string): string[] => {
  // Normalize industry if needed (e.g., '메디컬/의료' -> '메디컬')
  const cleanInd = industry.includes('메디컬') ? '메디컬'
    : industry.includes('에스테틱') ? '에스테틱'
    : industry.includes('호텔') ? '호텔/스파'
    : industry.includes('기업') ? '기업'
    : industry.includes('연구소') ? '기타연구소'
    : industry.includes('식음료') || industry.includes('F&B') ? '식음료/F&B'
    : industry;

  const group = PRODUCT_CATALOG_BY_INDUSTRY_GENDER[cleanInd] || PRODUCT_CATALOG_BY_INDUSTRY_GENDER['메디컬'];
  return group[gender] || group['여성'] || [];
};

// 업종별 추천 기본 품목 리스트
export const getDefaultProductItems = (industry: string): ConsultingProductItem[] => {
  const cleanInd = industry.includes('메디컬') ? '메디컬'
    : industry.includes('에스테틱') ? '에스테틱'
    : industry.includes('호텔') ? '호텔/스파'
    : industry.includes('기업') ? '기업'
    : industry.includes('연구소') ? '기타연구소'
    : industry.includes('식음료') || industry.includes('F&B') ? '식음료/F&B'
    : '메디컬';

  if (cleanInd === '메디컬') {
    return [
      {
        id: 'item-1',
        industry: '메디컬',
        gender: '여성',
        productGroup: '스크럽 상의',
        quantity: 15,
        requestDetails: '원내 로고 자수 및 네이비 색상 희망',
      },
      {
        id: 'item-2',
        industry: '메디컬',
        gender: '남성',
        productGroup: '닥터가운 / 코트',
        quantity: 5,
        requestDetails: '왼쪽 가슴 영문 필기체 원장 자수',
      },
      {
        id: 'item-3',
        industry: '메디컬',
        gender: '남여공용',
        productGroup: '스크럽 상/하의 세트',
        quantity: 10,
        requestDetails: '통기성 우수한 쿨에어 스트레치 원단',
      },
    ];
  }

  if (cleanInd === '에스테틱') {
    return [
      {
        id: 'item-1',
        industry: '에스테틱',
        gender: '여성',
        productGroup: '랩가운 / 가운',
        quantity: 12,
        requestDetails: '베이지/더스티 로즈 톤 랩스타일',
      },
      {
        id: 'item-2',
        industry: '에스테틱',
        gender: '여성',
        productGroup: '튜닉 / 에스테틱 상의',
        quantity: 8,
        requestDetails: '관리 시 편안한 신축성 원단',
      },
    ];
  }

  if (cleanInd === '식음료/F&B') {
    return [
      {
        id: 'item-1',
        industry: '식음료/F&B',
        gender: '남여공용',
        productGroup: '셰프 자켓 / 조리복',
        quantity: 10,
        requestDetails: '화이트 싱글 브레스트 자켓',
      },
      {
        id: 'item-2',
        industry: '식음료/F&B',
        gender: '남여공용',
        productGroup: '바리스타 에이프런',
        quantity: 15,
        requestDetails: '캔버스 가죽 스트랩 에이프런 로고 자수',
      },
    ];
  }

  if (cleanInd === '호텔/스파') {
    return [
      {
        id: 'item-1',
        industry: '호텔/스파',
        gender: '여성',
        productGroup: '리셉션 / 프런트 자켓',
        quantity: 6,
        requestDetails: '단정하고 세련된 테일러드 네이비 자켓',
      },
      {
        id: 'item-2',
        industry: '호텔/스파',
        gender: '남여공용',
        productGroup: '스파 가운',
        quantity: 10,
        requestDetails: '프리미엄 테리 테라피 가운',
      },
    ];
  }

  if (cleanInd === '기타연구소') {
    return [
      {
        id: 'item-1',
        industry: '기타연구소',
        gender: '남여공용',
        productGroup: '실험복 / 연구가운',
        quantity: 15,
        requestDetails: '항균/방오 기능성 원단 및 기관 로고 자수',
      },
    ];
  }

  // 기업 기본
  return [
    {
      id: 'item-1',
      industry: '기업',
      gender: '여성',
      productGroup: '비즈니스 셔츠',
      quantity: 15,
      requestDetails: '구김 방지 링클프리 원단',
    },
    {
      id: 'item-2',
      industry: '기업',
      gender: '남성',
      productGroup: '오피스 자켓',
      quantity: 10,
      requestDetails: '사원용 단체 자켓 로고 인쇄',
    },
  ];
};
