export type ProjectLink = {
  label: string;
  url: string;
  icon?: React.ReactNode; // 필요 시 아이콘 컴포넌트 삽입
};

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
