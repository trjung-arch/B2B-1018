# MEDILYN B2B 아뜰리에 & 컨설팅 관리 시스템

메디린(MEDILYN) 병원/기업 유니폼 및 의사가운 B2B 맞춤 견적, 디자인 컨설팅 신청, 주문서 접수 및 관리자 ERP 시스템입니다.

## 🚀 기술 스택 (Tech Stack)

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, Lucide React (아이콘)
- **Animation**: Motion
- **Build Tool**: Vite 6
- **Package Manager**: npm / bun

## 💻 빠른 시작 (Getting Started)

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
기본적으로 `http://localhost:3000`에서 개발 서버가 실행됩니다.

### 3. 프로덕션 빌드 & 미리보기
```bash
npm run build
npm run preview
```

### 4. 타입 체크 (Lint)
```bash
npm run lint
```

## 📁 주요 디렉토리 구조 (Project Structure)

```text
src/
├── assets/                  # 이미지 및 정적 자원
├── components/
│   ├── ConsultingDetailModal.tsx # 컨설팅 접수 상세 독립 모달 (모바일/데스크톱 대응)
│   ├── CustomerOrderDetailModal.tsx # B2B 주문서 상세 독립 모달
│   ├── HistoryView.tsx           # B2B 컨설팅 내역 조회 (고객용/관리자용 전환)
│   ├── OrderAdminView.tsx        # B2B 주문서/견적서 관리 ERP & 고객 조회
│   ├── QuotationView.tsx         # 견적 및 단가표 계산기
│   ├── OrderFormModal.tsx        # 주문서 작성 모달
│   ├── OrderQuotationModal.tsx   # 견적서 발행 모달
│   ├── HeroSection.tsx           # 메인 비주얼 배너
│   └── ...
├── data/                    # 상품 카탈로그, 옵션 및 기본 목데이터
├── types.ts                 # 전역 TypeScript 타입 정의
├── App.tsx                  # 메인 네비게이션 및 뷰 라우팅
└── main.tsx                 # 엔트리포인트
```

## 🔑 환경 변수 (.env)
필요 시 `.env.example`을 복사하여 `.env` 파일을 생성하십시오.
```bash
cp .env.example .env
```
