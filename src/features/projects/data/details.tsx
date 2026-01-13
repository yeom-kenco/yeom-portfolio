import { ProjectDetail } from '../types';

// [디자인 시스템] 텍스트 하이라이터
const TextHighlight = ({
  color,
  children,
}: {
  color: 'red' | 'blue' | 'green' | 'purple';
  children: string;
}) => {
  const styles = {
    red: 'bg-red-50 text-red-600', // Problem
    blue: 'bg-blue-50 text-blue-600', // Goal, Mission
    green: 'bg-emerald-50 text-emerald-600', // Action, Solution
    purple: 'bg-purple-50 text-purple-600', // Result, Outcome
  };

  return (
    <span className={`font-bold px-1 rounded-[2px] mr-1.5 ${styles[color]}`}>[{children}]</span>
  );
};

// [디자인 시스템] Notion 스타일 Callout (회고/배운점 강조 박스)
const Callout = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-slate-50 border border-slate-200 rounded-md p-3.5 mt-2 text-sm text-slate-700 leading-relaxed shadow-sm">
    <div className="font-bold text-slate-900 mb-1.5 flex items-center gap-2 text-[15px]">
      <span className="text-lg">{icon}</span> {title}
    </div>
    <div className="text-slate-600 pl-7">{children}</div>
  </div>
);

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
              '음성 대화 품질 문제: OpenAI의 Real-Time API를 사용하여 음성 기반의 한국어 대화를 구현하려 했으나, 한국어 인식 및 음성 출력 품질이 충분히 안정적이지 않아 실사용이 어려움 ',
            items: [
              <>➡️ Speech Synthesis/Web Speech API로 대체하여 안정적인 한국어 음성 입출력을 구현</>,
            ],
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
      <>
        LG 유플러스 유레카(URECA) 최종 융합 프로젝트 <b>우수상 수상작</b>
      </>,
      <>
        분산된 멤버십 혜택 정보를 <b>지도(Map) 기반으로 시각화</b>하고, 개인화 추천을 통해 실제
        방문까지 유도하는 반응형 웹 플랫폼
      </>,
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
        title: '1. 배경 및 목표 (Situation & Task)',
        bullets: [
          <>
            <TextHighlight color="red">Problem</TextHighlight>
            <b>정보의 파편화와 낮은 활용도</b>
            <br />
            <span className="block mt-1 leading-relaxed">
              대부분의 사용자가 혜택을 보유하고 있음에도, 텍스트 위주의 정보와 복잡한 검색 과정으로
              인해 내 주변 혜택을 즉각적으로 찾기 어려움.
            </span>
          </>,
          <>
            <TextHighlight color="green">Goal</TextHighlight>
            <b>위치 기반 시각화 & 마케팅 효과 창출</b>
            <br />
            <span className="block mt-1 leading-relaxed">
              데이터를 <b>지도 위에서 직관적으로 보여주고</b>, 게이미피케이션 요소를 도입해{' '}
              <b>체류 시간 증대 및 방문 유도</b>를 달성하는 것이 목표.
            </span>
          </>,
        ],
      },
      {
        title: '2. 핵심 설계 및 구현 (Action)',
        groups: [
          {
            heading: 'Figma를 활용한 빈틈없는 유저 플로우 설계',
            items: [
              <>
                <TextHighlight color="blue">Edge Case</TextHighlight>
                <b className="text-blue-600">예외 상황까지 고려한 디테일 설계</b>
                <br />
                단순 Happy Path뿐만 아니라, <b>검색 결과 없음(Empty)</b>, <b>비로그인 접근</b>,{' '}
                <b>오류 발생</b> 등 모든 예외를 시각화하여 개발 시행착오 최소화.
                <div className="mt-1 pl-2 text-sm text-slate-500 border-l-2 border-slate-100 space-y-1">
                  <p>
                    • <b>Empty State</b>: 검색 결과나 데이터가 없을 때의 안내 UI
                  </p>
                  <p>
                    • <b>Auth Guard</b>: 비로그인 접근 시 차단 및 로그인 유도 모달
                  </p>
                  <p>
                    • <b>Error Feedback</b>: 오류 발생 시 사용자에게 제공할 친절한 피드백
                  </p>
                </div>
              </>,
              <>
                <TextHighlight color="blue">CTA Flow</TextHighlight>
                <b className="text-blue-600">목적 중심의 행동 유도 설계</b>
                <br />
                서비스 목표인 '제휴처 방문'을 위해 <b>[가상 혜택 경험 → 이벤트 참여 → 실제 방문]</b>
                으로 이어지는 자연스러운 동선 구축.
              </>,
            ],
          },
          {
            heading: '지도 시각화 & UX 디테일 (Dev)',
            items: [
              <>
                <TextHighlight color="blue">Visualization</TextHighlight>
                <b className="text-blue-600">브랜드 로고 마커 커스텀</b>
                <br />
                단순 핀이 아닌 <b>제휴처 로고를 지도 위에 직접 렌더링</b>하여, 사용자가 상호명을
                읽지 않고도 브랜드를 직관적으로 식별하도록 구현.
              </>,
              <>
                <TextHighlight color="blue">Interaction</TextHighlight>
                <b className="text-blue-600">마이크로 인터랙션 (Micro-interaction)</b>
                <br />
                혜택을 즐겨찾기 할 때 <b>'폴더에 쏙 담기는 듯한' 애니메이션</b>을 구현하여, 사용자의
                행동에 대해 명확하고 즐거운 시각적 피드백 제공.
              </>,
              <>
                <TextHighlight color="blue">Search</TextHighlight>
                <b className="text-blue-600">탐색 편의성 강화</b>
                <br />
                GPS 기반 거리순 정렬, 카테고리 필터링을 구현하여 능동적인 혜택 탐색 지원.
              </>,
            ],
          },
          {
            heading: '안정성 및 협업 효율화',
            items: [
              <>
                <TextHighlight color="blue">Docs</TextHighlight>
                <b className="text-blue-600">
                  정보 비대칭 해소
                  <br />
                </b>
                README, 회의록, 서비스 정의, 각종 링크 등의 정리 및 작성을 총괄하여 프론트/백엔드
                간의 소통 비용 절감.
              </>,
            ],
          },
        ],
      },
      {
        title: '3. 성과 (Result)',
        bullets: [
          <>
            <TextHighlight color="purple">Award</TextHighlight>
            <b>유레카 최종 프로젝트 경진대회 본선 진출 및 우수상 수상</b>
          </>,
          <>
            <TextHighlight color="purple">Deploy</TextHighlight>
            다양한 환경(모바일/데스크탑)에서 버그 없는 <b>안정적인 배포 성공</b>
          </>,
          <>
            <TextHighlight color="purple">Feedback</TextHighlight>
            "데이터가 없을 때의 안내가 친절하다"는 <b>긍정적 사용자 피드백 획득</b>
          </>,
        ],
      },
      {
        title: '4. 회고 및 배운점 (Lessons Learned)',
        bullets: [
          <Callout icon="💡" title="설계가 탄탄하면 개발이 빨라진다">
            코드를 작성하기 전, Figma를 통해 예외 상황까지 미리 시뮬레이션해 본 덕분에 실제 개발
            단계에서의 시행착오를 획기적으로 줄일 수 있었습니다.{' '}
            <b>'설계 단계에서의 꼼꼼함이 전체 개발 생산성을 좌우한다'</b>는 것을 배웠습니다.
          </Callout>,
          <Callout icon="🔧" title="협업과 품질의 중요성">
            짧은 기간 안에 기획부터 디자인까지 진행하다보니 테스트 코드를 작성하지 못한 아쉬움을
            통해 <b>TDD의 필요성</b>을 느꼈으며, <b>명확한 문서화</b>가 팀의 커뮤니케이션 비용을
            얼마나 줄여주는지 체감했습니다.
          </Callout>,
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
        type: 'slides',
        url: 'https://9oormthon.goorm.io/28d4e699-7fb0-806a-8a86-ceb048ef97a9',
        label: '발표자료',
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
                보여주는 경험을 쌓았다.
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
