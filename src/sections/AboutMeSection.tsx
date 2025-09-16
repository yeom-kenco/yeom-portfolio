import { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants, useInView } from 'framer-motion';
import Section from '../primitives/Section';
import Container from '../primitives/Container';
import Text from '../primitives/Text';

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 26, mass: 0.6 },
  },
};

export default function AboutMeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  return (
    <Section id="about" className="bg-surface">
      <Container>
        {/* 소타이틀 위치 통일 */}
        <h2 className="font-heading text-[clamp(22px,2vw,36px)] text-center font-extrabold text-brand-purple">
          About Me
        </h2>
        <p className="font-heading text-[clamp(18px,1vw,22px)] text-ink font-extrabold mx-auto mt-8 max-w-xs md:max-w-none text-center">
          섬세한 UI/UX 감각과 명확한 문서화로 팀의 속도와 품질을 끌어올립니다.
        </p>
        <Text className="text-[clamp(14px,1vw,18px)] mx-auto mt-4 max-w-sm md:max-w-none text-center">
          경영정보학과에서 사용자 중심의 시각과 다양한 프로젝트를 통해 협업 능력을 쌓았습니다.
          <br />
          <span className="hl-line">
            기획과 디자인, 개발 전 과정을 직접 경험하며 구현할 수 있는 실행력
          </span>
          을 길렀고,
          <br />
          문서화와 정리에도 강점을 갖고 있어
          <span className="hl-line"> 팀 내 소통과 작업의 흐름을 체계적으로 정리 </span>
          합니다.
        </Text>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.35, once: false }} // 재진입 시마다 다시 실행
          animate={controls}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <FeatureCard
            icon="/images/about/about-me-1.webp"
            title="아이디어를 실행으로"
            desc="기획에만 머무르지 않고, 직접 구현하는 과정을 통해 큰 성취를 느낍니다."
          />
          <FeatureCard
            icon="/images/about/about-me-2.webp"
            title="작은 정리의 힘"
            desc="정보를 명확히 정리 및 전달하여 팀 내 원활한 소통에 기여합니다."
          />
          <FeatureCard
            icon="/images/about/about-me-3.webp"
            title="즐거운 사용 흐름"
            desc="미적인 완성도와 UX에 대한 관심으로, 사용자가 편하게 느끼는 경험을 만들어가는 데 집중합니다."
          />
        </motion.div>
      </Container>
    </Section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur"
    >
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt="" className="hidden md:block w-36" />
        <h3 className="mt-1 text-[clamp(16px,1.2vw,18px)] font-heading font-semibold text-gray-800">
          {title}
        </h3>
        <p className="mt-3 text-[clamp(14px,1.2vw,15px)] leading-6 text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}
