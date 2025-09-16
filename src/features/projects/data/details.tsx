import { ProjectDetail } from '../types';

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  Netflix: {
    id: 'Netflix',
    title: '영화 API를 활용한 넷플릭스 클론 코딩 및\n웹 아키텍처의 이해',
    description: [
      <>TMDB API를 활용해 영화 데이터를 불러와 넷플릭스와 유사한 UI/UX를 구현한 미니 프로젝트</>,
      <>단순 UI 제작을 넘어 라우팅/요청/응답 흐름 등 웹 아키텍처 기본 개념을 실습</>,
    ],
    stacks: ['javascript', 'typescript', 'react', 'vite', 'tailwind', 'redux'],
    team: '2명 (FE 2)',
    period: '2025.03.13 ~ 2025.03.21(7일)',
    links: [
      { type: 'github', url: 'https://example.com' },
      { type: 'video', url: 'https://example.com' },
      { type: 'slides', url: 'https://example.com' },
      { type: 'blog', url: 'https://example.com' },
    ],
    sections: [
      {
        title: '1. 담당 역할 주요 기능 구현',
        bullets: [
          <>백엔드 설계 및 인증 시스템 구현(Express + MongoDB, JWT)</>,
          <>프론트엔드 로그인 상태 관리, 찜/찜목록, 전역 스타일 구성</>,
        ],
      },
      {
        title: '2. 문제 해결 및 개선 경험',
        bullets: [
          <>유튜브 자동재생 정책 이슈 대응(상태/정책 고려)</>,
          <>알림 시스템을 alert → toast로 전환하여 UX 개선</>,
        ],
      },
      {
        title: '3. 주요 기능 요약',
        bullets: [<>TMDB API 기반 목록/상세/찜</>, <>YouTube 예고편 자동재생(정책 대응)</>],
      },
      {
        title: '4. 프로젝트를 통해 얻은 것',
        bullets: [<>인증/토큰 방식 실무형 이해, 정책 이슈 대응 능력</>],
      },
    ],
  },

  // 다른 프로젝트(유메이트/잡생각/잇플레이스)도 동일 스키마로 추가
};
