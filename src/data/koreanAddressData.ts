export interface KoreanAddressItem {
  zipCode: string;        // 5자리 우편번호
  roadAddress: string;    // 도로명 주소
  jibunAddress: string;   // 지번 주소 (동네 이름 포함)
  buildingName?: string;  // 주요 건물명 / 메디컬 센터
  dong: string;           // 동네 이름 (예: 청담동, 역삼동)
  sido: string;           // 시/도
  sigungu: string;        // 시/군/구
}

export const POPULAR_DISTRICT_TAGS = [
  { label: '강남구 청담동', query: '청담동' },
  { label: '강남구 역삼동', query: '역삼동' },
  { label: '강남구 신사동', query: '신사동' },
  { label: '강남구 압구정동', query: '압구정동' },
  { label: '서초구 서초동', query: '서초동' },
  { label: '송파구 잠실동', query: '잠실동' },
  { label: '용산구 한남동', query: '한남동' },
  { label: '성동구 성수동', query: '성수동' },
  { label: '영등포구 여의도동', query: '여의도동' },
  { label: '마포구 상암동', query: '상암동' },
  { label: '분당구 삼평동 (판교)', query: '삼평동' },
  { label: '부산 해운대구 우동', query: '우동' },
  { label: '대구 수성구 범어동', query: '범어동' },
  { label: '대전 서구 둔산동', query: '둔산동' },
  { label: '광주 서구 치평동 (상무)', query: '치평동' },
];

export const KOREAN_ADDRESS_DATABASE: KoreanAddressItem[] = [
  // 1. 강남구
  {
    zipCode: '06015',
    roadAddress: '서울특별시 강남구 도산대로 411',
    jibunAddress: '서울특별시 강남구 청담동 89-4',
    buildingName: '메디린 청담 B2B 갤러리타워',
    dong: '청담동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06014',
    roadAddress: '서울특별시 강남구 압구정로 443',
    jibunAddress: '서울특별시 강남구 청담동 98-2',
    buildingName: '청담 명품거리 메디컬빌딩',
    dong: '청담동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06018',
    roadAddress: '서울특별시 강남구 학동로 413',
    jibunAddress: '서울특별시 강남구 청담동 34-12',
    buildingName: '청담역 클리닉센터',
    dong: '청담동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06236',
    roadAddress: '서울특별시 강남구 테헤란로 152',
    jibunAddress: '서울특별시 강남구 역삼동 737',
    buildingName: '강남파이낸스센터 (GFC)',
    dong: '역삼동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06232',
    roadAddress: '서울특별시 강남구 테헤란로 142',
    jibunAddress: '서울특별시 강남구 역삼동 736-1',
    buildingName: '아크플레이스 메디컬허브',
    dong: '역삼동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06241',
    roadAddress: '서울특별시 강남구 강남대로 382',
    jibunAddress: '서울특별시 강남구 역삼동 825-13',
    buildingName: '메리츠타워 강남',
    dong: '역삼동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06234',
    roadAddress: '서울특별시 강남구 논현로 508',
    jibunAddress: '서울특별시 강남구 역삼동 679',
    buildingName: 'GS타워 역삼',
    dong: '역삼동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06028',
    roadAddress: '서울특별시 강남구 도산대로 159',
    jibunAddress: '서울특별시 강남구 신사동 561-31',
    buildingName: '신사 미성메디컬타워',
    dong: '신사동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06027',
    roadAddress: '서울특별시 강남구 압구정로 134',
    jibunAddress: '서울특별시 강남구 신사동 549-1',
    buildingName: '신사동 가로수길 메디컬빌딩',
    dong: '신사동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06030',
    roadAddress: '서울특별시 강남구 강남대로 600',
    jibunAddress: '서울특별시 강남구 신사동 501',
    buildingName: '신사역 블룸메디타워',
    dong: '신사동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06004',
    roadAddress: '서울특별시 강남구 압구정로 162',
    jibunAddress: '서울특별시 강남구 압구정동 428',
    buildingName: '현대백화점 본점 메디컬존',
    dong: '압구정동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06002',
    roadAddress: '서울특별시 강남구 압구정로 201',
    jibunAddress: '서울특별시 강남구 압구정동 481',
    buildingName: '압구정 현대 메디컬센터',
    dong: '압구정동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06052',
    roadAddress: '서울특별시 강남구 논현로 703',
    jibunAddress: '서울특별시 강남구 논현동 37-1',
    buildingName: '학동 메디컬타워',
    dong: '논현동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06103',
    roadAddress: '서울특별시 강남구 강남대로 476',
    jibunAddress: '서울특별시 강남구 논현동 200-1',
    buildingName: '신논현 어반하이브 빌딩',
    dong: '논현동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06164',
    roadAddress: '서울특별시 강남구 영동대로 517',
    jibunAddress: '서울특별시 강남구 삼성동 159',
    buildingName: '아셈타워 코엑스',
    dong: '삼성동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06169',
    roadAddress: '서울특별시 강남구 테헤란로 521',
    jibunAddress: '서울특별시 강남구 삼성동 159-8',
    buildingName: '파르나스타워',
    dong: '삼성동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06284',
    roadAddress: '서울특별시 강남구 남부순환로 2621',
    jibunAddress: '서울특별시 강남구 도곡동 953-1',
    buildingName: '매봉 클리닉센터',
    dong: '도곡동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06351',
    roadAddress: '서울특별시 강남구 일원로 81',
    jibunAddress: '서울특별시 강남구 일원동 50',
    buildingName: '삼성서울병원 본관',
    dong: '일원동',
    sido: '서울특별시',
    sigungu: '강남구',
  },
  {
    zipCode: '06277',
    roadAddress: '서울특별시 강남구 선릉로 314',
    jibunAddress: '서울특별시 강남구 대치동 889-11',
    buildingName: '한티 메디컬빌딩',
    dong: '대치동',
    sido: '서울특별시',
    sigungu: '강남구',
  },

  // 2. 서초구
  {
    zipCode: '06621',
    roadAddress: '서울특별시 서초구 강남대로 373',
    jibunAddress: '서울특별시 서초구 서초동 1318-2',
    buildingName: '홍우빌딩 강남역 메디컬타워',
    dong: '서초동',
    sido: '서울특별시',
    sigungu: '서초구',
  },
  {
    zipCode: '06591',
    roadAddress: '서울특별시 서초구 서초대로 250',
    jibunAddress: '서울특별시 서초구 서초동 1498-5',
    buildingName: '서초역 스타빌딩',
    dong: '서초동',
    sido: '서울특별시',
    sigungu: '서초구',
  },
  {
    zipCode: '06591',
    roadAddress: '서울특별시 서초구 반포대로 222',
    jibunAddress: '서울특별시 서초구 반포동 505',
    buildingName: '가톨릭대학교 서울성모병원',
    dong: '반포동',
    sido: '서울특별시',
    sigungu: '서초구',
  },
  {
    zipCode: '06544',
    roadAddress: '서울특별시 서초구 신반포로 176',
    jibunAddress: '서울특별시 서초구 반포동 19-3',
    buildingName: '센트럴시티 파미에스테이션',
    dong: '반포동',
    sido: '서울특별시',
    sigungu: '서초구',
  },
  {
    zipCode: '06720',
    roadAddress: '서울특별시 서초구 양재천로 131',
    jibunAddress: '서울특별시 서초구 양재동 93-7',
    buildingName: '양재 클리닉센터',
    dong: '양재동',
    sido: '서울특별시',
    sigungu: '서초구',
  },

  // 3. 송파구
  {
    zipCode: '05551',
    roadAddress: '서울특별시 송파구 올림픽로 300',
    jibunAddress: '서울특별시 송파구 신천동 29',
    buildingName: '롯데월드타워 & 롯데월드몰',
    dong: '신천동',
    sido: '서울특별시',
    sigungu: '송파구',
  },
  {
    zipCode: '05505',
    roadAddress: '서울특별시 송파구 올림픽로 43',
    jibunAddress: '서울특별시 송파구 잠실동 27',
    buildingName: '잠실 종합운동장 메디컬타워',
    dong: '잠실동',
    sido: '서울특별시',
    sigungu: '송파구',
  },
  {
    zipCode: '05505',
    roadAddress: '서울특별시 송파구 올림픽로 82',
    jibunAddress: '서울특별시 송파구 잠실동 175-1',
    buildingName: '잠실엘스 메디컬파크',
    dong: '잠실동',
    sido: '서울특별시',
    sigungu: '송파구',
  },
  {
    zipCode: '05505',
    roadAddress: '서울특별시 송파구 올림픽로 35길 137',
    jibunAddress: '서울특별시 송파구 풍납동 388-1',
    buildingName: '서울아산병원 본관',
    dong: '풍납동',
    sido: '서울특별시',
    sigungu: '송파구',
  },
  {
    zipCode: '05836',
    roadAddress: '서울특별시 송파구 송파대로 167',
    jibunAddress: '서울특별시 송파구 문정동 651',
    buildingName: '문정테라타워 메디컬동',
    dong: '문정동',
    sido: '서울특별시',
    sigungu: '송파구',
  },

  // 4. 용산구 & 중구 & 종로구
  {
    zipCode: '04419',
    roadAddress: '서울특별시 용산구 한남대로 91',
    jibunAddress: '서울특별시 용산구 한남동 68-1',
    buildingName: '한남더힐 클리닉 아케이드',
    dong: '한남동',
    sido: '서울특별시',
    sigungu: '용산구',
  },
  {
    zipCode: '04403',
    roadAddress: '서울특별시 용산구 독서당로 111',
    jibunAddress: '서울특별시 용산구 한남동 28-2',
    buildingName: '한남 메디컬스퀘어',
    dong: '한남동',
    sido: '서울특별시',
    sigungu: '용산구',
  },
  {
    zipCode: '04344',
    roadAddress: '서울특별시 용산구 이태원로 179',
    jibunAddress: '서울특별시 용산구 이태원동 127-1',
    buildingName: '해밀톤 메디컬빌딩',
    dong: '이태원동',
    sido: '서울특별시',
    sigungu: '용산구',
  },
  {
    zipCode: '04524',
    roadAddress: '서울특별시 중구 세종대로 136',
    jibunAddress: '서울특별시 중구 태평로1가 84',
    buildingName: '서울파이낸스센터 (SFC)',
    dong: '태평로1가',
    sido: '서울특별시',
    sigungu: '중구',
  },
  {
    zipCode: '04533',
    roadAddress: '서울특별시 중구 을지로 100',
    jibunAddress: '서울특별시 중구 을지로2가 203',
    buildingName: '파인에비뉴 메디컬타워',
    dong: '을지로2가',
    sido: '서울특별시',
    sigungu: '중구',
  },
  {
    zipCode: '03080',
    roadAddress: '서울특별시 종로구 대학로 101',
    jibunAddress: '서울특별시 종로구 연건동 28',
    buildingName: '서울대학교병원 암병원',
    dong: '연건동',
    sido: '서울특별시',
    sigungu: '종로구',
  },

  // 5. 영등포구 & 마포구 & 성동구 & 서대문구
  {
    zipCode: '07326',
    roadAddress: '서울특별시 영등포구 여의대로 108',
    jibunAddress: '서울특별시 영등포구 여의도동 22',
    buildingName: '파크원 타워 / 더현대 서울',
    dong: '여의도동',
    sido: '서울특별시',
    sigungu: '영등포구',
  },
  {
    zipCode: '07335',
    roadAddress: '서울특별시 영등포구 국제금융로 10',
    jibunAddress: '서울특별시 영등포구 여의도동 23',
    buildingName: 'IFC몰 여의도 메디컬센터',
    dong: '여의도동',
    sido: '서울특별시',
    sigungu: '영등포구',
  },
  {
    zipCode: '03925',
    roadAddress: '서울특별시 마포구 월드컵북로 396',
    jibunAddress: '서울특별시 마포구 상암동 1602',
    buildingName: '누리꿈스퀘어 디지털센터',
    dong: '상암동',
    sido: '서울특별시',
    sigungu: '마포구',
  },
  {
    zipCode: '04781',
    roadAddress: '서울특별시 성동구 성수이로 113',
    jibunAddress: '서울특별시 성동구 성수동2가 314-1',
    buildingName: '성수 헤이그라운드 클리닉',
    dong: '성수동2가',
    sido: '서울특별시',
    sigungu: '성동구',
  },
  {
    zipCode: '04778',
    roadAddress: '서울특별시 성동구 왕십리로 83-21',
    jibunAddress: '서울특별시 성동구 성수동1가 685-700',
    buildingName: '아크로서울포레스트 디타워',
    dong: '성수동1가',
    sido: '서울특별시',
    sigungu: '성동구',
  },
  {
    zipCode: '03722',
    roadAddress: '서울특별시 서대문구 연세로 50-1',
    jibunAddress: '서울특별시 서대문구 신촌동 134',
    buildingName: '신촌 세브란스병원 본관',
    dong: '신촌동',
    sido: '서울특별시',
    sigungu: '서대문구',
  },

  // 6. 경기도 성남시 분당구 (판교)
  {
    zipCode: '13494',
    roadAddress: '경기도 성남시 분당구 판교역로 166',
    jibunAddress: '경기도 성남시 분당구 백현동 532',
    buildingName: '카카오판교아지트 & 메디컬스퀘어',
    dong: '백현동',
    sido: '경기도',
    sigungu: '성남시 분당구',
  },
  {
    zipCode: '13493',
    roadAddress: '경기도 성남시 분당구 판교역로 235',
    jibunAddress: '경기도 성남시 분당구 삼평동 681',
    buildingName: '에이치스퀘어 N동 메디컬클리닉',
    dong: '삼평동',
    sido: '경기도',
    sigungu: '성남시 분당구',
  },
  {
    zipCode: '13486',
    roadAddress: '경기도 성남시 분당구 판교로 256번길 25',
    jibunAddress: '경기도 성남시 분당구 삼평동 633',
    buildingName: '판교테크노밸리 이노밸리',
    dong: '삼평동',
    sido: '경기도',
    sigungu: '성남시 분당구',
  },
  {
    zipCode: '13557',
    roadAddress: '경기도 성남시 분당구 정자일로 210',
    jibunAddress: '경기도 성남시 분당구 정자동 16-1',
    buildingName: '정자 동양파라곤 메디컬타워',
    dong: '정자동',
    sido: '경기도',
    sigungu: '성남시 분당구',
  },
  {
    zipCode: '13589',
    roadAddress: '경기도 성남시 분당구 황새울로 360번길 21',
    jibunAddress: '경기도 성남시 분당구 서현동 246-2',
    buildingName: '분당 서현 YBM메디컬센터',
    dong: '서현동',
    sido: '경기도',
    sigungu: '성남시 분당구',
  },

  // 7. 부산광역시
  {
    zipCode: '48058',
    roadAddress: '부산광역시 해운대구 센텀남대로 35',
    jibunAddress: '부산광역시 해운대구 우동 1495',
    buildingName: '신세계 센텀시티몰 메디컬클리닉',
    dong: '우동',
    sido: '부산광역시',
    sigungu: '해운대구',
  },
  {
    zipCode: '48060',
    roadAddress: '부산광역시 해운대구 센텀중앙로 78',
    jibunAddress: '부산광역시 해운대구 우동 1464',
    buildingName: '센텀그린타워 메디컬센터',
    dong: '우동',
    sido: '부산광역시',
    sigungu: '해운대구',
  },
  {
    zipCode: '48099',
    roadAddress: '부산광역시 해운대구 해운대로 774',
    jibunAddress: '부산광역시 해운대구 좌동 1432',
    buildingName: '인제대학교 해운대백병원',
    dong: '좌동',
    sido: '부산광역시',
    sigungu: '해운대구',
  },
  {
    zipCode: '47249',
    roadAddress: '부산광역시 부산진구 가야대로 772',
    jibunAddress: '부산광역시 부산진구 부전동 503-15',
    buildingName: '서면 롯데메디컬스퀘어',
    dong: '부전동',
    sido: '부산광역시',
    sigungu: '부산진구',
  },

  // 8. 대구광역시
  {
    zipCode: '42019',
    roadAddress: '대구광역시 수성구 달구벌대로 2424',
    jibunAddress: '대구광역시 수성구 범어동 177-1',
    buildingName: '범어네거리 두산위브 더제니스 메디컬센터',
    dong: '범어동',
    sido: '대구광역시',
    sigungu: '수성구',
  },
  {
    zipCode: '41940',
    roadAddress: '대구광역시 중구 동덕로 130',
    jibunAddress: '대구광역시 중구 삼덕동2가 50',
    buildingName: '경북대학교병원 본원',
    dong: '삼덕동2가',
    sido: '대구광역시',
    sigungu: '중구',
  },

  // 9. 대전광역시
  {
    zipCode: '35233',
    roadAddress: '대전광역시 서구 대덕대로 226',
    jibunAddress: '대전광역시 서구 둔산동 1362',
    buildingName: '갤러리아 타임월드 둔산메디컬타워',
    dong: '둔산동',
    sido: '대전광역시',
    sigungu: '서구',
  },
  {
    zipCode: '35242',
    roadAddress: '대전광역시 서구 둔산로 133',
    jibunAddress: '대전광역시 서구 둔산동 1420',
    buildingName: '대전 시청역 크로바메디컬센터',
    dong: '둔산동',
    sido: '대전광역시',
    sigungu: '서구',
  },

  // 10. 광주광역시
  {
    zipCode: '61947',
    roadAddress: '광주광역시 서구 상무중앙로 78',
    jibunAddress: '광주광역시 서구 치평동 1218-1',
    buildingName: '상무지구 메디컬센터',
    dong: '치평동',
    sido: '광주광역시',
    sigungu: '서구',
  },
  {
    zipCode: '61466',
    roadAddress: '광주광역시 동구 제봉로 42',
    jibunAddress: '광주광역시 동구 학동 8',
    buildingName: '전남대학교병원 본관',
    dong: '학동',
    sido: '광주광역시',
    sigungu: '동구',
  },

  // 11. 인천광역시 (송도 & 구월)
  {
    zipCode: '21998',
    roadAddress: '인천광역시 연수구 컨벤시아대로 165',
    jibunAddress: '인천광역시 연수구 송도동 6-10',
    buildingName: '포스코타워 송도 메디컬센터',
    dong: '송도동',
    sido: '인천광역시',
    sigungu: '연수구',
  },
  {
    zipCode: '21556',
    roadAddress: '인천광역시 남동구 남동대로 774번길 21',
    jibunAddress: '인천광역시 남동구 구월동 1198',
    buildingName: '가천대 길병원 본관',
    dong: '구월동',
    sido: '인천광역시',
    sigungu: '남동구',
  },

  // 12. 고양시 일산동구 & 수원시 영통구 (광교)
  {
    zipCode: '10410',
    roadAddress: '경기도 고양시 일산동구 중앙로 1205',
    jibunAddress: '경기도 고양시 일산동구 장항동 855',
    buildingName: '마두역 일산메디컬센터',
    dong: '장항동',
    sido: '경기도',
    sigungu: '고양시 일산동구',
  },
  {
    zipCode: '16514',
    roadAddress: '경기도 수원시 영통구 광교중앙로 170',
    jibunAddress: '경기도 수원시 영통구 하동 1016',
    buildingName: '광교 효성해링턴 메디컬타워',
    dong: '하동',
    sido: '경기도',
    sigungu: '수원시 영통구',
  }
];

/**
 * 동네 이름(동/읍/면), 도로명, 건물명, 우편번호로 실시간 검색
 */
export function searchKoreanAddress(query: string): KoreanAddressItem[] {
  const cleanQ = query.trim().toLowerCase().replace(/\s+/g, '');
  if (!cleanQ) return [];

  // 1. Direct database match
  const matched = KOREAN_ADDRESS_DATABASE.filter(item => {
    const dongMatch = item.dong.toLowerCase().replace(/\s+/g, '').includes(cleanQ);
    const roadMatch = item.roadAddress.toLowerCase().replace(/\s+/g, '').includes(cleanQ);
    const jibunMatch = item.jibunAddress.toLowerCase().replace(/\s+/g, '').includes(cleanQ);
    const bldgMatch = item.buildingName ? item.buildingName.toLowerCase().replace(/\s+/g, '').includes(cleanQ) : false;
    const zipMatch = item.zipCode.includes(cleanQ);
    const sigunguMatch = item.sigungu.toLowerCase().replace(/\s+/g, '').includes(cleanQ);

    return dongMatch || roadMatch || jibunMatch || bldgMatch || zipMatch || sigunguMatch;
  });

  if (matched.length > 0) {
    return matched;
  }

  // No random/virtual addresses. Only return real matched items.
  return [];
}
