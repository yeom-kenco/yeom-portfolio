// src/features/projects/components/LinkChips.tsx
import type { ProjectLink, ProjectLinkType } from '../types';

type Props = { links?: ProjectLink[] };

const DEFAULT_LABEL: Record<ProjectLinkType, string> = {
  github: 'GitHub',
  demo: '시연 영상',
  video: '시연 영상',
  slides: '발표 자료',
  blog: '블로그',
  notion: '팀노션',
};

const ICON: Record<ProjectLinkType, React.ReactNode> = {
  github: <>🐙</>,
  demo: <>🎥</>,
  video: <>🎥</>,
  slides: <>📄</>,
  blog: <>✍🏻</>,
  notion: <>✏️</>,
};

export default function LinkChips({ links = [] }: Props) {
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l, i) => (
        <a
          key={`${l.type}-${i}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-3 py-1.5 text-sm text-ink hover:bg-surface transition"
        >
          <span>{ICON[l.type]}</span>
          <span>{l.label ?? DEFAULT_LABEL[l.type]}</span>
        </a>
      ))}
    </div>
  );
}
