export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  coverImg: string; // 카드 썸네일
  summary: string; // 카드 하단 짧은 설명
  stacks: string[]; // 2단계에서 DEVICON으로 렌더링
  links?: ProjectLink[]; // 모달 내 관련 링크들
  // 상세 본문은 2단계에서 구조화해서 추가
};

export type ProjectLinkType = 'github' | 'site' | 'demo' | 'video' | 'slides' | 'blog' | 'notion';

export type ProjectLink = {
  type: ProjectLinkType;
  label?: string; // 없으면 타입에 맞춘 기본 라벨 사용
  url: string;
};

// 섹션 안에서 "소제목 + 항목들" 묶음을 표현
export type ProjectDetailSection = {
  title: string; // 예: "1. 담당 역할 주요 기능 구현"
  bullets?: React.ReactNode[]; // (기존 그대로) 단일 단계 불릿
  groups?: ProjectDetailBulletGroup[]; // ✅ 새로 추가: 소제목 그룹 배열
};

export type ProjectDetailBulletGroup = {
  heading: string; // 예: "백엔드 설계 및 인증 시스템 구현"
  items: React.ReactNode[]; // 소제목 하위 불릿들
};

export type ProjectDetail = {
  id: string; // 카드 id와 동일
  title: string; // 큰 타이틀(2줄까지)
  description: React.ReactNode[]; // "프로젝트 설명" 단락(여러 줄)
  stacks: string[]; // devicon 키 배열 (js, ts, react 등)
  team: string; // "참여 인원"
  period?: string; // "기간"
  links?: ProjectLink[]; // "관련 링크"
  sections: ProjectDetailSection[]; // "상세 내용"의 번호 섹션들
};
