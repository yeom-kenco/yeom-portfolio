import { useState, useRef, useMemo, useCallback, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../primitives/Section';
import Container from '../primitives/Container';
import TechIcons from '../features/projects/components/TechIcons';

// 그룹 정의
type TechGroup = {
  id: string;
  label: string;
  desc: string;
  stacks: string[];
};

const TECH_GROUPS: TechGroup[] = [
  {
    id: 'htmlcss',
    label: 'HTML5 / CSS3',
    desc: '웹 접근성과 시맨틱 구조를 고려한 마크업을 작성하고, 반응형 및 컴포넌트 기반 스타일링을 구현할 수 있습니다.',
    stacks: ['html5', 'css3'],
  },
  {
    id: 'jsts',
    label: 'JavaScript / TypeScript',
    desc: '바닐라 JS로 동적 기능을 구현할 수 있으며, TypeScript로 타입 안정성을 확보하고 유지보수 가능한 코드를 작성합니다.',
    stacks: ['javascript', 'typescript'],
  },
  {
    id: 'react',
    label: 'React',
    desc: '컴포넌트 기반 구조로 페이지를 구성하고, props와 state를 통해 상태 관리를 할 수 있습니다. Hooks, Router등 다양한 기능을 적용할 수 있습니다.',
    stacks: ['react'],
  },
  {
    id: 'state',
    label: 'Redux / Zustand',
    desc: '전역 상태 관리 도구를 상황에 맞게 선택해 활용하며, 비동기 처리 및 전역 상태 동기화가 필요한 페이지에서 활용했습니다.',
    stacks: ['redux', 'zustand'],
  },
  {
    id: 'motion',
    label: 'Framer Motion',
    desc: '페이지 전환 및 컴포넌트 등장 애니메이션을 자연스럽게 구현해 사용자 경험을 향상시킬 수 있습니다.',
    stacks: ['framermotion'],
  },
  {
    id: 'styling',
    label: 'TailwindCSS / styled-components',
    desc: '상황에 따라 유틸리티 클래스 중심의 빠른 스타일링(Tailwind) 또는 컴포넌트 기반의 재사용 가능한 스타일링(styled-components)을 적용합니다.',
    stacks: ['tailwind', 'styledcomponents'],
  },
  {
    id: 'vite',
    label: 'Vite',
    desc: '빠른 개발 서버와 빌드 속도를 제공하는 환경에서 React 프로젝트를 설정하고 운영해본 경험이 있습니다.',
    stacks: ['vite'],
  },
  {
    id: 'git',
    label: 'Git / GitHub',
    desc: '브랜치 전략(Git Flow 등)을 기반으로 버전 관리 및 협업을 진행하며, PR 리뷰를 통한 협업 경험도 있습니다.',
    stacks: ['git', 'github'],
  },
  {
    id: 'figma',
    label: 'Figma',
    desc: 'UI/UX 설계안을 기반으로 컴포넌트를 구조화하며, 프로토타입을 제작해 본 경험이 있습니다.',
    stacks: ['figma'],
  },
  {
    id: 'vscode',
    label: 'VS Code',
    desc: '효율적인 개발을 위한 다양한 확장 기능과 설정을 적극 활용합니다.',
    stacks: ['vscode'],
  },
  {
    id: 'notion',
    label: 'Notion',
    desc: '회의록 정리, 일정 관리, 요구사항 문서화 등 협업 도구로 활용했습니다.',
    stacks: ['notion'],
  },
];

// 상세 패널
const DetailPanel = ({
  targetRect,
  group,
  onClose,
}: {
  targetRect: DOMRect | null;
  group: TechGroup;
  onClose: () => void;
}) => {
  const style = useMemo(() => {
    if (!targetRect) return {} as React.CSSProperties;
    const gap = 8;
    const top = targetRect.bottom + gap;
    const left = targetRect.left + targetRect.width / 2;
    return { top, left, transform: 'translate(-50%, 0)' } as React.CSSProperties;
  }, [targetRect]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed z-40 max-w-sm w-[92vw] rounded-lg bg-ink text-surface p-4 shadow-elev"
      style={style}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="font-semibold mb-2">{group.label}</div>
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="text-surface/70 hover:text-surface focus:outline-none"
          aria-label="닫기"
        >
          ✕
        </button>
      </div>
      <p className="text-sm leading-relaxed text-surface/90">{group.desc}</p>
    </motion.div>
  );
};

export default function TechStackSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null);
  const mapRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeGroup = useMemo(() => TECH_GROUPS.find((g) => g.id === activeId) || null, [activeId]);

  const handleClose = useCallback(() => {
    setActiveId(null);
    setActiveRect(null);
  }, []);

  useLayoutEffect(() => {
    if (!activeId) return;

    const el = mapRef.current[activeId];
    if (!el) return;

    const updateRect = () => setActiveRect(el.getBoundingClientRect());

    // 최초 계산
    updateRect();

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      // 화면에서 5px 이상 벗어나면 닫기 (임계값은 상황에 맞게 조절)
      if (r.bottom < -5 || r.top > window.innerHeight + 5) {
        handleClose();
        return;
      }
      // 아직 보이면 위치만 갱신
      requestAnimationFrame(updateRect);
    };

    const onResize = () => requestAnimationFrame(updateRect);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [activeId, handleClose]);

  return (
    <Section id="skills" className="bg-surface">
      <Container className="py-16 md:py-24 relative">
        <h2 className="font-heading text-[clamp(22px,2vw,36px)] text-center font-extrabold text-brand-purple">
          기술 스택 및 도구
        </h2>
        <p className="mt-3 font-heading text-[clamp(18px,1vw,22px)] text-center text-ink">
          아래의 기술과 도구를 사용할 수 있습니다. <br /> 클릭해보세요!
        </p>

        {/* 카드 영역만 블러 처리 */}
        <div className="relative mt-10 flex justify-center">
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 transition-all ${
              activeId ? 'blur-sm opacity-70' : ''
            }`}
          >
            {TECH_GROUPS.map((group) => (
              <motion.button
                key={group.id}
                ref={(el) => {
                  mapRef.current[group.id] = el;
                }}
                type="button"
                className={`relative place-items-center rounded-xl p-3 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.2)] outline-none transition-colors hover:bg-surface-soft focus-visible:ring-brand ${
                  activeId === group.id ? '!filter-none !opacity-100' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation();

                  const el = e.currentTarget; // 바로 클릭한 버튼
                  // 1) 즉시 좌표 세팅 → 첫 프레임에 패널 뜸
                  setActiveRect(el.getBoundingClientRect());
                  // 2) 상태 업데이트
                  setActiveId(group.id);
                  // 3) 다음 프레임에서 한 번 더 보정(애니메이션/레이아웃 반영 후)
                  requestAnimationFrame(() => {
                    setActiveRect(el.getBoundingClientRect());
                  });
                }}
              >
                <TechIcons stacks={group.stacks} showLabel={false} />
              </motion.button>
            ))}
          </div>

          {/* 배경 오버레이: 빈 화면 클릭 시 닫힘 + 버블링 차단 */}
          {activeId && (
            <div
              className="fixed inset-0 z-30"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                handleClose(); // activeId/activeRect 모두 초기화 → 블러 해제
              }}
              aria-hidden
            />
          )}

          <AnimatePresence>
            {activeGroup && (
              <DetailPanel
                key={activeGroup.id}
                targetRect={activeRect}
                group={activeGroup}
                onClose={handleClose} // ✕ 버튼 / ESC 모두 동일 경로로 닫힘
              />
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
