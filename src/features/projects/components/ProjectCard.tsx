import { motion, Variants } from 'framer-motion';
import { Project } from '../../projects/types';

type Props = { project: Project; onClick: (project: Project) => void };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 24, mass: 0.6 },
  },
};

export default function ProjectCard({ project, onClick }: Props) {
  const handleOpen = () => onClick(project);

  return (
    <motion.article
      variants={cardVariants}
      onClick={handleOpen}
      aria-label={`${project.title} 상세 보기`}
      className="
        group flex h-full flex-col cursor-pointer rounded-2xl
        bg-white p-2 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.2)]
        transition-colors hover:bg-surface-soft
      "
    >
      {/* 1) 썸네일 */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
        <img
          src={project.coverImg}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* 2) 타이틀 — 2줄까지만 표시 + 2줄 높이 확보 */}
      <h4
        className="
          px-2 mt-2 max-w-56 font-heading font-extrabold text-ink
          text-base md:text-lg leading-tight break-keep
          line-clamp-2
          min-h-[2.5rem] md:min-h-[2.82rem]
        "
        title={project.title}
      >
        {project.title}
      </h4>

      {/* 스페이서: 아래(서머리+버튼) 블록을 카드 바닥으로 밀어냄 */}
      <div className="flex-1" />

      {/* 3) summary — 3줄까지만 표시 + 3줄 높이 확보 (항상 버튼 위에 붙음) */}
      <p
        className="
          px-2 font-body text-sm text-ink-muted
          leading-5 line-clamp-3 min-h-[3.75rem]
        "
      >
        {project.summary}
      </p>

      {/* 4) 자세히 보기 > 버튼 — summary 좌측 아래에 고정 */}
      <div className="px-2 mt-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
          className="inline-flex items-center gap-1 rounded-lg text-sm text-brand-purple underline-offset-2 hover:underline"
          aria-label={`${project.title} 자세히 보기`}
        >
          자세히 보기<span aria-hidden>›</span>
        </button>
      </div>
    </motion.article>
  );
}
