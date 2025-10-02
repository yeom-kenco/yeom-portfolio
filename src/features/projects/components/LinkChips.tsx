// src/features/projects/components/LinkChips.tsx
import type { ProjectLink, ProjectLinkType } from '../types';

type Props = { links?: ProjectLink[] };

const DEFAULT_LABEL: Record<ProjectLinkType, string> = {
  github: 'GitHub',
  site: '사이트',
  demo: '시연 영상',
  video: '발표 영상',
  slides: '발표 자료',
  blog: '블로그',
  notion: '팀노션',
};

/** 아이콘 렌더 (GitHub은 로고, 나머지는 심플 이모지) */
function Icon({ type }: { type: ProjectLinkType }) {
  if (type === 'github') {
    // GitHub 마크 (inline SVG)
    return (
      <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.62 7.62 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    );
  }

  const map: Record<ProjectLinkType, React.ReactNode> = {
    github: null, // 위에서 처리됨
    site: (
      <span aria-hidden className="text-base leading-none">
        🔗
      </span>
    ),
    demo: (
      <span aria-hidden className="text-base leading-none">
        🎥
      </span>
    ),
    video: (
      <span aria-hidden className="text-base leading-none">
        🎥
      </span>
    ),
    slides: (
      <span aria-hidden className="text-base leading-none">
        📄
      </span>
    ),
    blog: (
      <span aria-hidden className="text-base leading-none">
        ✍🏻
      </span>
    ),
    notion: (
      <span aria-hidden className="text-base leading-none">
        🗒️
      </span>
    ),
  };
  return <>{map[type]}</>;
}

export default function LinkChips({ links = [] }: Props) {
  if (!links.length) return null;

  return (
    <nav
      className="
        flex flex-wrap items-center
        text-[clamp(14px,1.1vw,16px)] text-ink
      "
    >
      {links.map((l, i) => {
        const label = l.label ?? DEFAULT_LABEL[l.type];
        return (
          <div key={`${l.type}-${i}`} className="inline-flex items-center">
            <a
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-brand-purple"
              aria-label={label}
            >
              <Icon type={l.type} />
              <span>{label}</span>
            </a>

            {/* 구분 막대 | (마지막 항목엔 표시 X) */}
            {i < links.length - 1 && (
              <span className="mx-3 text-ink-muted/60" aria-hidden>
                |
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
