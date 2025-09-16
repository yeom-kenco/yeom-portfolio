import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimation, Variants, useInView } from 'framer-motion';
import Section from '../primitives/Section';
import Container from '../primitives/Container';
import ProjectCard from '../features/projects/components/ProjectCard';
import { PROJECTS } from '../features/projects/data/projects';
import { Project } from '../features/projects/types';
import ProjectModal from '../features/projects/components/ProjectModal';
import { PROJECT_DETAILS } from '../features/projects/data/details'; // <- 반드시 .tsx

/** 카드 묶음 컨테이너: 자식 stagger 등장 */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  // 섹션 진입 시 자연스러운 "떠오름" 애니메이션 시작
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, once: true });
  const controls = useAnimation();

  // ✅ useEffect로 실제 side-effect 실행
  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  const open = (p: Project) => setActive(p);
  const close = () => setActive(null);

  // ✅ active.id로 상세데이터 찾기 (없으면 undefined)
  const detail = useMemo(() => (active ? PROJECT_DETAILS[active.id] : undefined), [active]);

  // optional: 개발 중 키 불일치 확인용
  if (active && !detail) {
    // eslint-disable-next-line no-console
    console.warn(`[ProjectsSection] PROJECT_DETAILS에 '${active.id}' 키가 없습니다.`);
  }

  return (
    <Section id="projects" className="bg-white">
      <Container>
        <div className="mx-auto max-w-5xl px-6">
          {/* 섹션 타이틀 & 설명: EduExpSection과 통일 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-14 text-center"
          >
            <h2 className="font-heading text-[clamp(22px,2vw,36px)] font-extrabold text-brand-purple">
              프로젝트
            </h2>
            <p className="mt-3 font-heading text-[clamp(18px,1vw,22px)] text-ink">
              주요 프로젝트의 세부 사항을 정리했습니다. <br />
              <span className="font-bold text-brand-purple">관련 링크</span>에서 더 자세한
              <span className="font-bold text-brand-purple"> 프로젝트 과정과 전체적인 UI</span>를
              확인할 수 있습니다.
            </p>
          </motion.div>

          {/* 카드 그리드 */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1"
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={open} />
            ))}
          </motion.div>
        </div>
      </Container>

      {/* ✅ detail이 있을 때만 모달 오픈 */}
      <ProjectModal open={Boolean(detail)} onClose={close} detail={detail} />
    </Section>
  );
}
