// src/features/projects/components/TechIcons.tsx
const DEVICON_CLASS: Record<string, string> = {
  javascript: 'devicon-javascript-plain colored',
  typescript: 'devicon-typescript-plain colored',
  react: 'devicon-react-original colored',
  vite: 'devicon-vitejs-plain colored',
  tailwind: 'devicon-tailwindcss-plain colored',
  redux: 'devicon-redux-original colored',
  // 필요시 추가: kakao, gsap, notion ...
};

const LABEL: Record<string, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  vite: 'Vite',
  tailwind: 'Tailwind CSS',
  redux: 'Redux',
  kakao: 'Kakao Map API',
  gsap: 'GSAP',
  notion: 'Notion',
};

type Props = { stacks: string[] };

export default function TechIcons({ stacks }: Props) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {stacks.map((k) => (
        <li key={k} className="relative group">
          {/* 아이콘 */}
          <button
            type="button"
            className="text-3xl leading-none outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded-md"
            aria-label={LABEL[k] ?? k}
          >
            <i className={DEVICON_CLASS[k] ?? ''} aria-hidden />
          </button>

          {/* 라벨: 아이콘 '아래'에 작게 표시 */}
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
            {LABEL[k] ?? k}
          </span>
        </li>
      ))}
    </ul>
  );
}
