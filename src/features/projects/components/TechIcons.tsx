type Props = {
  stacks: string[];
  showLabel?: boolean; // 기본값 true
};

/** DEVICON CDN URL 생성 */
const deviconSvg = (slug: string, variant: string = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

/** 스택 키 → 아이콘 정의(컬러 우선). customSrc는 /public 기준 경로 */
type IconDef = {
  name: string;
  slug?: string; // devicon slug (예: 'javascript', 'vitejs')
  variant?: string; // devicon 파일 접미사 (original|plain|line 등)
  customSrc?: string; // devicon에 없을 때 로컬/외부 SVG 경로
};

const ICONS: Record<string, IconDef> = {
  // ✅ Devicon 컬러 SVG
  html5: { name: 'HTML5', slug: 'html5', variant: 'original' },
  css3: { name: 'CSS3', slug: 'css3', variant: 'original' },
  javascript: { name: 'JavaScript', slug: 'javascript', variant: 'original' },
  typescript: { name: 'TypeScript', slug: 'typescript', variant: 'original' },
  react: { name: 'React', slug: 'react', variant: 'original' },
  vite: { name: 'Vite', slug: 'vitejs', variant: 'original' },
  tailwind: { name: 'Tailwind CSS', slug: 'tailwindcss', variant: 'original' },
  styledcomponents: { name: 'Styled-components', slug: 'styledcomponents', variant: 'original' },
  redux: { name: 'Redux', slug: 'redux', variant: 'original' },
  zustand: { name: 'Zustand', slug: 'zustand', variant: 'original' },
  pnpm: { name: 'Pnpm', slug: 'pnpm', variant: 'original' },
  axios: { name: 'Axios', slug: 'axios', variant: 'plain' },
  lodash: { name: 'Lodash', slug: 'lodash', variant: 'original' },
  framermotion: { name: 'Framermotion', slug: 'framermotion', variant: 'original' },
  vscode: { name: 'VScode', slug: 'vscode', variant: 'original' },
  notion: { name: 'Notion', slug: 'notion', variant: 'original' },
  github: { name: 'Github', slug: 'github', variant: 'original' },
  git: { name: 'Git', slug: 'git', variant: 'original' },
  figma: { name: 'Figma', slug: 'figma', variant: 'original' },

  // ✅ 필요시 로컬 SVG 추가 (/public/icons/*.svg)
  gsap: { name: 'GSAP', customSrc: '/icons/gsap.png' },
};

function getIconSrc(key: string): { src?: string; name: string } {
  const def = ICONS[key];
  if (!def) return { name: key }; // 미정의 키는 텍스트 칩으로 대체
  if (def.customSrc) return { src: def.customSrc, name: def.name };
  if (def.slug) return { src: deviconSvg(def.slug, def.variant), name: def.name };
  return { name: def.name };
}

export default function TechIcons({ stacks, showLabel = true }: Props) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {stacks.map((key) => {
        const { src, name } = getIconSrc(key);

        if (!src) {
          return (
            <li
              key={key}
              className="rounded-full bg-surface-soft px-3 py-1.5 text-xs text-ink"
              title={name}
            >
              {name}
            </li>
          );
        }

        return (
          <li key={key} className="relative group">
            <img
              src={src}
              alt={name}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-8 w-8 md:h-9 md:w-9 select-none"
            />
            {/* ✅ showLabel=false면 라벨 렌더 자체를 안 함 */}
            {showLabel && (
              <span
                className="
                  pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2
                  whitespace-nowrap rounded-md bg-surface px-1.5 py-0.5
                  text-[11px] leading-none text-ink shadow
                  opacity-0 translate-y-1 transition-all duration-150
                  group-hover:opacity-100 group-hover:translate-y-0
                  group-focus-within:opacity-100 group-focus-within:translate-y-0
                "
              >
                {name}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
