//EduExpSection types

export type TimelineItem = {
  date: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
};

export type CertificateItem = {
  date: string;
  name: string;
  bullets?: string[];
  images?: string[]; // 자격증/성적표 이미지 경로
  detailsLinkLabel?: string; // 커스텀 토글 문구
};
