import { ProjectDetail } from '../types';

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  Netflix: {
    id: 'Netflix',
    title: '영화 API를 활용한 넷플릭스 클론 코딩 및\n웹 아키텍처의 이해',
    description: [
      <>TMDB API를 활용해 영화 데이터를 불러와 넷플릭스와 유사한 UI/UX를 구현한 미니 프로젝트</>,
      <>
        단순 UI 제작을 넘어 라우팅 처리, 웹 아키텍처의 기본 개념(클라이언트-서버 구조, 요청·응답
        흐름 등)을 실습하며 프론트엔드 전반의 기초를 다진 프로젝트
      </>,
    ],
    stacks: ['javascript', 'typescript', 'react', 'vite', 'tailwind', 'redux', 'github', 'git'],
    team: '2명 (FE 2)',
    period: '2025.03.13 ~ 2025.03.21(7일)',
    links: [
      { type: 'github', url: 'https://github.com/yeom-kenco/ureca-netflix.git' },
      { type: 'video', url: 'https://youtu.be/7eS-owFXQQ4?si=gDL92Ew9JLx_BBcz' },
      { type: 'blog', url: 'https://kenco.tistory.com/69' },
    ],
    sections: [
      {
        title: '1. 담당 역할 주요 기능 구현',
        groups: [
          {
            heading: '백엔드 설계 및 인증 시스템 구현',
            items: [
              <>API 서버 구축 및 MongoDB 연동</>,
              <>JWT 기반 사용자 인증/인가 토큰 시스템 설계 및 개발</>,
              <>회원가입·로그인·로그아웃 전반의 DB 및 토큰 로직 직접 구현</>,
              <>비밀번호 Salt + Hash 암호화 적용으로 보안 강화</>,
              <>토큰 재발급·유효성 검증 등 실전 인증 흐름 구현</>,
              <>Google OAuth를 통한 소셜 로그인 도입</>,
            ],
          },
          {
            heading: '프론트엔드 기능 구현',
            items: [
              <>회원가입/로그인/로그아웃 페이지, Header, 로딩 페이지 UI 및 기능 구현</>,
              <>Context API로 글로벌 로그인 상태 관리</>,
              <>토큰 만료 시 자동 로그아웃·요청 시 토큰 갱신 반영</>,
              <>영화 찜하기/찜 목록 표시 기능 구현</>,
              <>일관성 있는 CSS 스타일링 구성</>,
            ],
          },
        ],
      },
      {
        title: '2. 문제 해결 및 개선 경험',
        groups: [
          {
            heading: '유튜브 자동재생 관련 정책 이슈',
            items: [
              <>
                유튜브 API 사용 시, 사용자 조작 없이는 음소거 상태에서만 자동재생 가능하다는
                브라우저 정책에 직면
              </>,
              <>단순 기능 구현을 넘어 사용자 환경과 정책 이슈까지 고려하는 실전 경험</>,
            ],
          },
          {
            heading: 'UX를 고려한 알림 시스템 개선',
            items: [
              <>초기에 alert()을 사용해 알림 처리 → 사용자 경험에 방해 요소로 작용</>,
              <>toast 알림(Notification) 시스템으로 전환, 인터랙션 최소화 및 UX 개선</>,
              <>더 나은 사용자 경험과 실전 서비스 수준의 UI 개선</>,
            ],
          },
        ],
      },
      {
        title: '3. 주요 기능 요약',
        bullets: [
          <>TMDB API 기반 영화 목록/상세 정보/찜</>,
          <>인기 영화의 YouTube 예고편 자동재생(정책 대응)</>,
          <>로그인/회원가입</>,
        ],
      },
      {
        title: '4. 프로젝트를 통해 얻은 것',
        bullets: [
          <>인증/토큰 방식에 대한 실무형 이해</>,
          <>백엔드부터 프론트까지 풀스택 서비스 흐름 전반의 경험</>,
          <>정책 제약 대응 능력과 기능적 사고</>,
          <>더 나은 UX를 위한 기능적 사고와 개선 실행력</>,
        ],
      },
    ],
  },

  Umate: {
    id: 'Umate',
    title: '유메이트 (U:Mate)\n통신사 요금제 추천 AI챗봇 및 리뷰 플랫폼',
    description: [
      <>
        통신사 요금제를 쉽고 빠르게 탐색하고, 챗봇과의 대화를 통해 사용자에게 맞춤형 요금제를
        추천하는 서비스
      </>,
      <>리뷰/만족도 입력 기능과 혜택/등급별 요금제 비교 기능을 제공하여 합리적인 선택을 지원</>,
    ],
    stacks: [
      'javascript',
      'typescript',
      'react',
      'vite',
      'tailwind',
      'redux',
      'axios',
      'github',
      'git',
      'figma',
      'notion',
    ],
    team: '5명 (FE 5)',
    period: '2025.06.09 ~ 2025.06.27',
    links: [
      { type: 'github', url: 'https://github.com/U-Mate' },
      {
        type: 'demo',
        url: 'https://drive.google.com/file/d/1ZJ57Xf4YSCOjn92_7d_dxel9232qiOPY/view?usp=sharing',
      },
      {
        type: 'slides',
        url: 'https://www.canva.com/design/DAGrahLxUcQ/Eyw86zhcfPz9vi9mTbTmLA/edit?utm_content=DAGrahLxUcQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      },
      {
        type: 'notion',
        url: 'https://learned-scarf-b41.notion.site/5-206ca47e589c8078a3adea55ad68d15b',
        label: '팀노션',
      },
    ],
    sections: [
      {
        title: '1. 프로젝트 개요',
        bullets: [
          <>AI 챗봇과 요금제 조회·비교·리뷰 기능을 통해 사용자의 합리적인 선택을 지원</>,
          <>
            특히 디지털 취약 계층(시니어)도 쉽게 접근할 수 있도록 접근성과 편의성을 강화하여 설계
          </>,
        ],
      },
      {
        title: '2. 담당 역할',
        bullets: [
          <>공통 컴포넌트 제작 및 리팩토링(푸터, 챗봇 버튼, 혜택 드롭바, 리뷰 카드, 캐러셀 등)</>,
          <>대표 페이지(로그인 전/후·웹/모바일) UI 구현 및 반응형 디자인 적용</>,
          <>요금제 상세 페이지 UI 구현</>,
          <>발표 자료 총괄 디자인</>,
          <>노션 서비스 소개 및 깃허브 리드미 총괄 작성</>,
        ],
      },
      {
        title: '3. 주요 구현 기능',
        groups: [
          {
            heading: '챗봇 대화를 통한 요금제 추천',
            items: [
              <>
                사용자의 데이터 사용량·통화 습관·예산 등을 자연어로 입력받아 AI가 최적 요금제를 추천
              </>,
              <>대화 기록 및 음성/텍스트 입력 지원</>,
            ],
          },
          {
            heading: '시니어 유저를 위한 페이지 (바로가기)',
            items: [
              <>
                진입 시 별도의 안내 페이지 제공 → 핵심 기능만 큼직한 버튼으로 구성하여 직관적 사용성
                강화
              </>,
            ],
          },
          {
            heading: '요금제 리뷰',
            items: [<>리뷰/별점 작성·수정·삭제·조회 기능</>],
          },
          {
            heading: '요금제 목록 조회 및 비교 분석',
            items: [
              <>50여 개의 다양한 요금제 제공, 다중 필터링으로 탐색 가능</>,
              <>데이터, 통화, 가격 등 항목별 비교</>,
            ],
          },
          {
            heading: '회원가입/로그인으로 개인화 서비스 제공',
            items: [
              <>챗봇 대화 내역 저장</>,
              <>멤버십 등급 기반 혜택 노출</>,
              <>연령대 기반 맞춤 추천</>,
            ],
          },
        ],
      },
      {
        title: '4. 트러블 슈팅',
        groups: [
          {
            heading:
              '연령별 리뷰 신뢰성 유지: 리뷰를 참고하여 각 나이대별의 요금제 추천을 하게되는데, 만약 탈퇴를 하게되면 개인정보를삭제해야 하므로 나이를 파악할 수 없어 리뷰의 신뢰성이 떨어짐',
            items: [<>➡️ 유저 테이블 중 생년월일의 년도만을 남겨 리뷰의 신뢰도 유지</>],
          },
          {
            heading:
              '음성 대화 품질 문제: 리뷰를 참고하여 각 나이대별의 요금제 추천을 하게되는데, 만약',
            items: [<>➡️ 유저 테이블 중 생년월일의 년도만을 남겨 리뷰의 신뢰도 유지</>],
          },
          {
            heading:
              '디지털 취약 계층도 쉽게 이용할 수 있도록 접근성과 편의성을 높이고자 했으나, 디지털 취약 계층 중에서도 구체적으로 어떤 사용자를 고려한 설계인지가 불분명했고, 이로 인해 기능 범위 확정이 어려웠음',
            items: [
              <>
                ➡️ 디지털 취약 계층을 구체화(시니어)하여 접근성·가독성 지침(큰 글씨, rem 전환, 버튼
                적정 크기 등) 준수, 바로가기 페이지와 온보딩 절차로 서비스 진입 장벽 낮춤, 음성지원
                기능 추가로 입력 부담 최소화
              </>,
            ],
          },
        ],
      },
    ],
  },
  Jobthoughts: {
    id: 'Jobthoughts',
    title: '잡생각 (Job Thoughts)\n당신에게 맞는 직업과 채용정보를 추천!',
    description: [
      <>
        사용자의 성향 및 가치관 데이터를 기반으로 적합한 직업을 추천하고, 해당 직업과 관련된 채용
        정보까지 연결해주는 진로 탐색 및 채용 연계 서비스
      </>,
    ],
    stacks: [
      'javascript',
      'typescript',
      'react',
      'vite',
      'styledcomponents',
      'zustand',
      'framermotion',
      'pnpm',
      'github',
      'git',
      'figma',
      'notion',
    ],
    team: '4명 (FE 4)',
    period: '2025.05.07 ~ 2025.05.20 (14일)',
    links: [
      { type: 'github', url: 'https://github.com/yeom-kenco/JobThoughts' },
      { type: 'site', url: 'https://job-thoughts-client.vercel.app/' },
      { type: 'demo', url: 'https://tv.kakao.com/v/455335159' },
      {
        type: 'slides',
        url: 'https://www.canva.com/design/DAGm6Gp7AEs/RV6anLgGtHmjVq6RjZv9dw/view?utm_content=DA[%E2%80%A6]hare&utm_medium=link2&utm_source=uniquelinks&utlId=h4543e21b68',
      },
      { type: 'blog', url: 'https://kenco.tistory.com/132' },
    ],
    sections: [
      {
        title: '1. 프로젝트 개요',
        bullets: [
          <>
            사용자의 직업 가치관을 기반으로 적합한 직업을 추천하고, 실시간 채용 공고까지 연결해주는
            커리어 탐색 서비스
          </>,
          <>
            커리어넷 직업가치관 검사 API와의 연동을 통해 신뢰성 있는 데이터를 기반으로 하며,
            직관적인 UI와 다채로운 애니메이션으로 사용자가 몰입도 있게 커리어 여정을 경험하도록 설계
          </>,
        ],
      },
      {
        title: '2. 주요 구현 기능',
        groups: [
          {
            heading: '직업 가치관 검사',
            items: [
              <>검사 문항 제공(안정성, 수입, 자아계발, 사회적 기여 등 총 28개 문항)</>,
              <>
                응답 분석 및 시각화: 사용자의 응답 데이터를 수집해 점수 계산 후 Nivo 라이브러리로
                레이더 차트 시각화
              </>,
              <>
                카드덱 애니메이션: 문항 선택 시, 카드 슬라이드 형태로 부드럽게 전환되는 애니메이션을
                구현해 사용자 경험(UX) 강화
              </>,
              <>
                키보드 입력 지원: 방향키와 엔터 키를 활용해 문항을 선택할 수 있도록 접근성을 높임
              </>,
            ],
          },
          {
            heading: '직업 추천',
            items: [
              <>
                검사 결과 기반 추천: 사용자의 가치관 상위 요소를 분석해 적합한 직업군을 자동으로
                추천
              </>,
              <>
                직업 상세 정보 제공: 평균 연봉, 필요 역량, 전망 등 직업별 핵심 데이터를 함께 제공해
                직업 선택을 도움
              </>,
            ],
          },
          {
            heading: '채용 공고 조회',
            items: [
              <>
                채용 공고 연동: 추천받은 직업을 클릭하면 해당 직업의 채용 공고 리스트로 즉시 이동{' '}
                <br />
                <span className="text-brand-purple">
                  *사람인 API 승인이 나지 않아 현재는 mock 데이터로 대체
                </span>
              </>,
              <>필터링 기능: 지역, 고용 형태 등에 따른 맞춤 필터링 제공</>,
              <>무한 스크롤 구현: 스크롤 할 때마다 채용 공고가 자연스럽게 추가 로드되도록 최적화</>,
            ],
          },
        ],
      },
      {
        title: '3. 성과',
        groups: [
          {
            heading: 'UI/UX & 애니메이션 경험',
            items: [
              <>
                메인 페이지에서는 스크롤에 따라 서비스의 스텝이 순차적으로 드러나도록 sticky
                애니메이션을 적용하여, 마치 ‘여정을 따라가는 듯한 경험’을 제공
              </>,
              <>
                Framer Motion을 처음 활용했음에도 불구하고, 요소별 등장/퇴장, 스크롤 진입/이탈에
                따른 애니메이션 제어를 성공적으로 구현
              </>,
              <>
                이를 통해 단순 정보 나열이 아니라, 사용자가 서비스 흐름을 직관적으로 이해할 수
                있도록 디자인에 성공
              </>,
            ],
          },
          {
            heading: '다양한 환경에서의 안정적인 반응형 구현',
            items: [
              <>
                safari, chrome, 안드로이드, 카카오톡 웹 등 다양한 환경에서 안정적으로 반응형 구현
              </>,
            ],
          },
        ],
      },
      {
        title: '4. 배운 점',
        bullets: [
          <>Framer Motion 기반 스크롤 애니메이션 구현 경험</>,
          <>실시간 API 연동과 데이터 시각화 과정에서의 데이터 처리/표현 방법 학습</>,
          <>
            무한 스크롤, 필터링, 키보드 접근성 등 사용자 중심 기능을 구현하며, 서비스의 편의성을
            고려한 프론트엔드 설계 역량 강화
          </>,
        ],
      },
    ],
  },
  Itplace: {
    id: 'Itplace',
    title: '통신사 멤버십 혜택을 쉽고\n스마트하게 탐색하는 지도 기반 플랫폼',
    description: [
      <>통신사 멤버십 제휴 혜택을 지도 기반으로 탐색하고 개인화된 추천을 제공</>,
      <>LG U+에서 회원 데이터를 제공받는 상황을 가정</>,
    ],
    stacks: [
      'javascript',
      'typescript',
      'react',
      'vite',
      'tailwind',
      'redux',
      'gsap',
      'github',
      'figma',
      'notion',
    ],
    team: '8명 (FE 4, BE 4)',
    period: '2025.06.30 ~ 2025.08.07',
    links: [
      { type: 'github', url: 'https://github.com/ureca-itPlace' },
      { type: 'site', url: 'https://www.itplace.click/' },
      { type: 'demo', url: 'https://youtu.be/TE7qdcYTI7o?si=fpPM9oXz8EK_RQg8' },
      {
        type: 'slides',
        url: 'https://www.canva.com/design/DAGu0Z7UfSQ/mnmqGLz8YHmUcCQHYcLEMA/edit?utm_content=DAGu0Z7UfSQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      },
      { type: 'blog', url: 'https://kenco.tistory.com/135' },
    ],
    sections: [
      {
        title: '1. 담당 역할',
        groups: [
          {
            heading: 'UI/UX디자인',
            items: [
              <>Tailwind CSS를 활용한 반응형 인터페이스 설계</>,
              <>모달, 토스트 알림 등 인터랙티브 컴포넌트 디자인</>,
              <>사용자 행동 로그·즐겨찾기·혜택 사용 이력 등의 UI 설계 및 흐름 구성</>,
            ],
          },
          {
            heading: '프론트엔드 개발',
            items: [
              <>
                React + TypeScript 기반 핵심 UI/UX 구현(마이 페이지, 이벤트 페이지, 주요 컴포넌트)
              </>,
              <>Kakao Map API를 활용한 제휴처 위치 마커 커스텀</>,
              <>Axios 기반 API 연동 및 에러 핸들링 구현</>,
            ],
          },
          {
            heading: '각종 문서화',
            items: [
              <>레포지토리 리드미 총괄 작성</>,
              <>팀 노션 회의록, 서비스 소개 등 필수 문서화 및 총정리</>,
            ],
          },
        ],
      },
      {
        title: '2. 주요 구현 기능',
        groups: [
          {
            heading: '지도 기반 탐색',
            items: [
              <>카카오 맵 API로 제휴처 마커 표시 + 로드뷰 제공</>,
              <>GPS 기반 위치 탐색, 거리 정렬, 카테고리 필터 등 탐색형 UI</>,
            ],
          },
          {
            heading: '개인화 AI 추천 기능',
            items: [
              <>사용자 행동 로그 기반 혜택 추천</>,
              <>질문 기반 추천 챗봇 인터페이스 + 금칙어 필터링</>,
            ],
          },
          {
            heading: '회원 관리 및 보안',
            items: [<>다양한 가입 방식 지원, LG U+ 연동, 인증 강화 기능 포함</>],
          },
          {
            heading: '관리자 대시보드',
            items: [<>제휴처/사용자 통계, 정보 조회·수정 등</>],
          },
          {
            heading: '이벤트 페이지',
            items: [<>지도 기반 이벤트, 스크래치 쿠폰, 로그인 조건 기반 제한 기능</>],
          },
          {
            heading: '혜택 및 제휴처 정보 제공',
            items: [
              <>제휴처 상세 정보 + 멤버십 등급별 혜택 표기</>,
              <>마이페이지 내 혜택 사용 이력 및 누적 금액 조회</>,
              <>혜택 즐겨찾기·등록·검색 로그 저장</>,
            ],
          },
        ],
      },
      {
        title: '3. 성과 및 배운 점',
        groups: [
          {
            heading: '성과',
            items: [
              <>프로젝트의 최종 배포 성공 및 버그 없는 안정적인 결과물 완성</>,
              <>UI/UX 인터랙션에서 이용자 경험에 대한 긍정적 피드백 획득 (모달, 토스트 알림 등)</>,
              <>다양한 환경(모바일 & 데스크탑)에서도 안정적인 속도와 UI 제공</>,
              <>
                상태 관리(Redux Toolkit, Redux-Persist), API 에러 핸들링, 반응형 UI 설계 역량 강화
              </>,
            ],
          },
          {
            heading: '회고 & 개선점',
            items: [
              <>
                짧은 기간 서비스 기획, 디자인, 개발을 모두 마쳐야 했기에테스트 코드를 작성하지 못한
                점이 아쉬움 <br />
                ➡️ 디버깅 시 흐름 단위 테스트로 보완
              </>,
              <>
                팀원간 API 에러 핸들링의 일관성 부족 <br />
                ➡️ 사용자 메시지와 형식 일관성의 필요성을 인식
              </>,
              <>협업 과정에서 코드 리뷰 문화의 중요성과 명확한 커뮤니케이션의 가치를 깊이 체감</>,
            ],
          },
        ],
      },
      {
        title: '4. 다음 목표',
        bullets: [
          <>Next.js 등 SSR 프레임워크로 성능·SEO 개선 실험</>,
          <>테스트 자동화·CI/CD 배포 환경 구축으로 안정적이고 확장 가능한 개발 역량 강화</>,
        ],
      },
    ],
  },
  Portfolio: {
    id: 'portfolio',
    title: '승아의\n포트폴리오 사이트',
    description: [
      <>
        나의 프로젝트, 경험, 성장을 한눈에 확인할 수 있도록 직접 디자인하고 개발한 포트폴리오 사이트
      </>,
    ],
    stacks: [
      'javascript',
      'typescript',
      'react',
      'vite',
      'tailwind',
      'framermotion',
      'github',
      'git',
      'figma',
    ],
    team: '개인 (FE 1)',
    period: '2025.09.15 ~ 2025.09.17',
    links: [
      { type: 'github', url: 'https://github.com/yeom-kenco/yeom-portfolio.git', label: 'GitHub' },
      {
        type: 'slides',
        url: 'https://www.figma.com/design/JlFe8M5C9g6A5a2E7GlW4W/SeungAh-s-Portfolio?node-id=0-1&t=gAThxM3djTuWHXrR-1',
        label: '피그마',
      },
    ],
    sections: [
      {
        title: '1. 주요 구현 사항',
        groups: [
          {
            heading: '디자인 시스템 & 베이스 컴포넌트',
            items: [
              <>
                primitive <b>Section</b>, <b>Container</b> 컴포넌트로 모든 섹션 레이아웃을 일관되게
                관리
              </>,
              <>
                컬러 토큰(<b>ink</b>, <b>surface</b>, <b>brand-purple</b>)으로 디자인 통일감
              </>,
              <>접근성 고려: 시맨틱 태그와 ARIA 라벨, 포커스 표시</>,
            ],
          },
          {
            heading: '프로젝트 카드 & 그리드',
            items: [
              <>
                카드 진입 시 <b>stagger</b> 애니메이션, 카드 자체는 spring 기반 “떠오름” 효과
              </>,
              <>
                타이틀 <b>2줄 고정(line-clamp + min-height)</b>, summary <b>3줄 고정</b>, 하단에{' '}
                <b>자세히 보기</b>를 항상 붙게 정렬
              </>,
              <>
                hover 시 <b>surface-soft</b> 배경, 이미지 살짝 확대
              </>,
              <>반응형 그리드: 3 → 2 → 1 열 전환</>,
            ],
          },
          {
            heading: '공용 모달',
            items: [
              <>
                배경 스크롤 락, <b>position: fixed</b> & 스크롤바 폭 보정으로 레이아웃 흔들림 방지
              </>,
              <>
                스택 아이콘은 <b>Devicon 컬러 SVG</b> 사용, hover 시 아래에 라벨 표시
              </>,
              <>
                링크 영역은 <b>GitHub | 시연영상 | 발표자료 | 블로그</b> 스타일로 인라인 구분막대
                적용
              </>,
            ],
          },
          {
            heading: '타이포그래피 & 반응형',
            items: [
              <>
                <b>clamp()</b>로 모바일~대형 화면에서 자연스러운 크기 스케일링
              </>,
            ],
          },
        ],
      },
      {
        title: '2. 기술 선택 이유',
        bullets: [
          <>React + TypeScript: 재사용성/안정성 높은 컴포넌트 설계, 타입 기반 협업 대비</>,
          <>Vite: 빠른 HMR과 빌드 속도</>,
          <>Tailwind CSS: 디자인 토큰화와 생산성, 반응형 구현 단순화로 빠른 속도의 개발을 위함</>,
          <>Framer Motion: 자연스러운 진입·스크롤 인터랙션으로 UX 강조</>,
        ],
      },
      {
        title: '3. 다음 계획',
        bullets: [<>Next.js 도입으로 SEO/OG 최적화</>, <>다크모드</>],
      },
    ],
  },
  Donghang: {
    id: 'Donghang',
    title: '의료취약계층 셔틀 플랫폼',
    description: [
      <>
        #제주 #클라우드 #제주도민의 삶을 바꾸는 생활 인프라 개선
        <br />
        해커톤에서 주어진 세가지 키워드에 맞춰, ‘제주의 외곽과 중심을 잇는 새로운 의료 인프라’를
        구축
      </>,
    ],
    stacks: [
      'typescript',
      'react',
      'vite',
      'tailwind',
      'vapor',
      'zustand',
      'framermotion',
      'github',
      'git',
      'figma',
    ],
    team: '5명 (FE 2, BE 1, 기획 1, 디자인 1)',
    period: '2025.09.24 ~ 2025.09.26 (3일)',
    links: [
      { type: 'github', url: 'https://github.com/jeju-goormthon', label: 'GitHub' },
      { type: 'video', url: 'https://tv.kakao.com/v/458357623', label: '시연영상' },
      { type: 'site', url: 'https://donghang.klr.kr/', label: '배포사이트' },
      {
        type: 'notion',
        url: 'https://leestana01.notion.site/278704f432e080888ed5f6e8de64660e?pvs=143',
        label: '팀노션',
      },
    ],
    sections: [
      {
        title: '1. 프로젝트 개요',
        bullets: [
          <>
            이동 수단이 부족한 의료취약계층의 병원 접근성을 높이기 위해, 노선 선택 → 날짜 선택 →
            시간/좌석 선택 → 예약 완료까지 이어지는 모바일 중심 예약 서비스를 개발했다.
          </>,
          <>
            이 중에서도 나는 실제 사용성과 구현 난이도가 모두 높았던 “노선 선택용 가로 스크롤 날짜
            캘린더”를 중심으로 상세 내용을 작성했다.
          </>,
        ],
      },
      {
        title: '2. 주요 기능 中 날짜 선택 슬라이더(Embla Carousel) 구현 과정',
        groups: [
          {
            heading: '1) 문제 상황',
            items: [
              <>의료 취약계층 셔틀 예약 흐름에서 날짜 선택은 핵심 단계이다.</>,
              <>
                {' '}
                하지만 일반적인 달력(DatePicker) 컴포넌트를 그대로 사용하면 모바일 가로 스와이프
                사용성, 과거 날짜 비활성화, 오늘을 시각적으로 강조같은 요구사항을 만족하기 어려웠다.
              </>,
              <>
                모든 요구사항을 모두 만족시키기 위해, <br /> <b>디테일한 목표</b>를 세웠으며,{' '}
                <b>가로 스크롤 가능한 '주 단위 날짜 슬라이더'</b>를 직접 구현했다.
              </>,
            ],
          },
          {
            heading: '2) 목표',
            items: [
              <>
                <b>모바일 퍼스트 UI</b>
                <br /> 손가락 스와이프로 자연스럽게 날짜를 넘길 수 있는 수평 스크롤 구조
              </>,
              <>
                <b>첫 진입 경험 최적화</b>
                <br /> 처음 화면 진입 시, “오늘”이 스크롤의 맨 왼쪽에 위치하고 오늘부터 7일이 한
                번에 보이도록 구성
              </>,
              <>
                <b>과거 날짜 비활성화 & 접근성 고려</b>
                <br /> 오늘 이전 날짜는 선택 불가
                <br /> 터치 영역, 폰트 크기, 콘트라스트 등 가독성/접근성 확보
              </>,
              <>
                <b>교차-월(이웃 달) 날짜도 자연스럽게 선택</b>
                <br /> 예: 9월 마지막 주에 보이는 10월 1~2일도 선택 가능
                <br /> 이때 헤더의 “월 표시”는 자동으로 선택된 달로 동기화
              </>,
              <>
                <b>무한 스크롤 제거</b>
                <br /> 스와이프만으로 달이 갑자기 바뀌지 않도록 제한
                <br /> “교차-월 날짜를 탭했을 때만” 월 변경
              </>,
              <>
                <b>상단 월 네비게이션 지원</b>
                <br /> “이전/이번/다음 달”을 선택할 수 있는 헤더
                <br /> 이번 달 선택 시에는 오늘, 그 외에는 해당 달 1일을 기준으로 노출
              </>,
            ],
          },
          {
            heading: '3) 핵심 구현 과정',
            items: [
              <>React + TypeScript, date-fns(달/주/요일 계산), Embla Carousel(가로 스와이프)</>,
              <>
                <b>커스텀 훅/유틸</b>
                <br /> buildWeeksInMonth(month)로 월의 주(월~일) 배열 생성
                <br /> forward7FromToday(weeks, today)로 첫 진입 시 “오늘부터 7일” 뷰 구성
              </>,
              <>
                <b>상태/동기화</b>
                <br />
                오늘 이전 날짜는 비활성화
                <br /> 교차-월 날짜는 살짝 옅게(opacity) 표시하되 선택은 가능
              </>,
            ],
          },
          {
            heading: '4) UX 디테일',
            items: [
              <>
                <b>초기 진입 경험</b>: “오늘”이 맨 왼쪽에 위치하도록 7칸을 재구성 → 사용자는
                들어오자마자 <b>예약 가능한 연속 날짜</b>를 바로 인지
              </>,
              <>
                <b>무한 스크롤 제거</b>: 스와이프만으로 다음/이전 달로 강제 이동하지 않도록 제한 →
                상황이 갑자기 바뀌는 느낌을 줄이고, 사용자의 예측 가능성 확보
              </>,
              <>
                <b>교차-월 UX</b>: 9월 달력을 보고 있지만, 한 주 안에 보이는 10월 1~2일을 누르면
                헤더가 10월로 자연스럽게 변경 → 유저 입장에서 “보이는 날짜 = 선택 가능한 날짜”이라는
                직관적인 경험 제공
              </>,
              <>
                <b>시각적 상태 구분</b>: 선택 가능/불가, 오늘/선택된 날짜 등 명확히 구분
              </>,
            ],
          },
          {
            heading: '5) 기능의 의미와 성과',
            items: [
              <>
                복잡한 달력 라이브러리 없이도 Embla + date-fns + React 조합으로 경량 날짜 선택
                컴포넌트를 직접 설계·구현했다.
              </>,
              <>
                실제 서비스에서 중요한 날짜 선택 경험을 “오늘 기준 7일” 이라는 UI로 제공하여, 유저가
                선택 가능한 날짜만을 빠르게 확인하여 예약 결정을 내릴 수 있는 흐름을 만들었다.
              </>,
              <>
                과거 날짜, 교차-월과 같은 엣지 케이스를 치밀하게 처리함으로써 기능 구현뿐 아니라
                UX·디테일·안정성까지 고려한 개발 경험을 쌓았다.
              </>,
            ],
          },
        ],
      },
      {
        title: '3. 해커톤 경험으로 얻은 강점',
        groups: [
          {
            heading: '✔️실제 문제 해결 중심 접근',
            items: [
              <>
                의료취약계층이라는 현실적인 문제를 기반으로, 사용자 상황·사용 맥락·장애 요소를
                고려한 UI/UX를 직접 설계했다. 단순 기능 구현을 넘어 “서비스 관점의 문제 해결 능력”을
                보여주는 경험이다
              </>,
            ],
          },
          {
            heading: '✔️제한된 시간 안에 MVP 완성',
            items: [
              <>
                기획 → UX 설계 → Vapor 기반 UI → 예약 플로우 구현까지 해커톤 기간 내에 실제 사용
                가능한 MVP로 완성했다. 우선순위를 빠르게 정하고 핵심 가치부터 구현할 수 있는 역량을
                증명한다.
              </>,
            ],
          },
          {
            heading: '✔️디자인 시스템(Vapor) 활용 능력',
            items: [
              <>
                Vapor Design System의 토큰·컴포넌트·접근성 원칙을 이해하고 프로젝트 전반에 일관되게
                적용했다. 기업 내부 DS 환경에도 빠르게 적응할 수 있는 역량을 기를 수 있었다.
              </>,
            ],
          },
          {
            heading: '✔️인터랙션/UI 디테일에 더욱 강해짐',
            items: [
              <>
                가로 스와이프 캘린더, 단계별 예약 흐름, 오늘/비활성/선택 상태 구분 등 단순 CRUD가
                아닌 서비스 지향 인터페이스를 설계·구현했다. 사용자 경험을 고려한 인터랙션 설계
                역량을 더욱 강화할 수 있었다.
              </>,
            ],
          },
        ],
      },
    ],
  },
};
