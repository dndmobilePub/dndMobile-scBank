## 리액트 SC은행 테스트겸 공부용

Nexts.js + TypeScript 언어 사용

#### UI 라이브러리 [Shadcn](https://ui.shadcn.com/) 사용

#### CSS 라이브러리 https://tailwindcss.com/ 사용

프로젝트 생성 가이드

### 1. 신규 프로젝트 생성방법

터미널 명령 순서

#### 1) 리액트 Next.js를 최신 버전으로 하는 프로젝트 생성

    프로젝트 생성시 typescript / tailwind / eslint / App Router / src 구조 + 별칭(@) 설정까지 한꺼번에 설정

    npx init next-app@latest . -- --typescript --tailwind --eslint --app --src-dir --import-alias "@/\*"

    --app = App Router 사용(app/ 디렉토리 방식)
    --src-dir = src/ 폴더안에 모든 코드가 생성
    --import-alias = @/ 경로 별칭 자동 설정(tsconfig.json에 포함)

#### 2) shadcn-ui 설치

    npx shadcn-ui@latest init

#### 3) shadcn-ui 컴포넌트 설치

    프로젝트 마다 사용할 컴포넌트 설치

    npx shadcn@latest add [component]
    ex) 단일 컴포넌트 설치 npx shadcn@latest add button
    여러 컴포넌트 설치 npx shadcn@latest add button card dialog form input label select textarea alert

- https://ui.shadcn.com/docs/components 에서 확인후 사용할 공통 컴포넌트 설치

#### 4) 필수X - 스토리북 설치

- storybook@latest init

#### 5) 1-4번 과정 완료후 터미널 창에서 npm run dev 입력후 로컬주소 복사하여 브라우저에서 확인가능

### 2. 기존 프로젝트로 진행방법

    기존 프로젝트 경우에는 계정을 공유 받은후 Clone을 하거나 압축파일로 내려받은후 작업 폴더에 압축해제 후 비주얼 스튜디오로 폴더 열기 후 진행

#### 1) npm 설치

    터미널 npm ci  입력후 엔터
    npm install 로도 진행 가능하지만 버전이 변경될수 있어서 npm ci 로 진행

#### 2) shadcn-ui 추가 컴포넌트 설치

    사용해야 하는 컴포넌트 추가 설치

     npx shadcn@latest add [component]

### 3. 개별로컬주소입력/components-guide -> 임시 컴포넌트 가이드 페이지
