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

export type ProjectLinkType = 'github' | 'demo' | 'video' | 'slides' | 'blog' | 'notion';

export type ProjectLink = {
  type: ProjectLinkType;
  label?: string; // 없으면 타입에 맞춘 기본 라벨 사용
  url: string;
};

export type ProjectDetailSection = {
  title: string; // 예: "1. 담당 역할"
  bullets: React.ReactNode[]; // 문장/리스트(필요시 <em>, <strong> 허용)
};

export type ProjectDetail = {
  id: string; // 카드 id와 동일
  title: string; // 큰 타이틀(2줄까지)
  subtitle?: string; // 2줄 타이틀일 경우 줄바꿈용 서브타이틀
  description: React.ReactNode[]; // "프로젝트 설명" 단락(여러 줄)
  stacks: string[]; // devicon 키 배열 (js, ts, react 등)
  team?: string; // "참여 인원"
  period?: string; // "기간"
  links?: ProjectLink[]; // "관련 링크"
  sections: ProjectDetailSection[]; // "상세 내용"의 번호 섹션들
};
