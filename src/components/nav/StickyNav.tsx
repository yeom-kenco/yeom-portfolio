/**
 * StickyNav (single fixed instance)
 * - Hero에서 스크롤을 조금 내리면 화면 아래쪽(y≈180px)에서 서서히 나타남
 * - 스크롤하면서 위로 이동하다가 pin 섹션에서 상단(top-4)에 고정된 상태(y=0)
 * - DOM에 하나만 존재 (중복 네비 제거)
 */
import Container from '../../primitives/Container';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useEventListener } from './../../hooks/useEventListener';

type SectionRef = { id: string; label: string };

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function StickyNav({
  sections,
  appearWithinId = 'top',
  pinAtId = 'about',
  topInset = 36,
  appearTopRatioMd = 0.9, // md 이상(>=768px)
  appearTopRatioSm = 0.9, // 모바일(<768px)
}: {
  sections: SectionRef[];
  appearWithinId?: string;
  pinAtId?: string;
  topInset?: number;
  appearTopRatioMd?: number;
  appearTopRatioSm?: number;
}) {
  const activeId = useScrollSpy(sections.map((s) => s.id));

  // 현재 뷰포트가 md 이상인지
  const isMd = () => window.matchMedia('(min-width: 768px)').matches;
  const currentRatio = () => (isMd() ? appearTopRatioMd : appearTopRatioSm);

  // 초기 top은 현재 뷰포트 기준으로 계산
  const [top, setTop] = useState<number>(() => Math.round(window.innerHeight * currentRatio()));
  const [opacity, setOpacity] = useState<number>(0);

  const recompute = () => {
    const appearEl = document.getElementById(appearWithinId);
    const pinEl =
      document.getElementById(pinAtId) ||
      document.getElementById('about') ||
      document.getElementById('exp') ||
      (sections.length ? document.getElementById(sections[0].id) : null);
    if (!appearEl || !pinEl) return;

    const heroTop = appearEl.offsetTop;
    const heroH = appearEl.offsetHeight;
    const pinTop = pinEl.offsetTop;
    const scroll = window.scrollY;

    const appearStart = heroTop + heroH * 0.0; // 필요하면 0.2 등으로 조절
    const appearEnd = pinTop - topInset;

    const t = clamp((scroll - appearStart) / Math.max(appearEnd - appearStart, 1), 0, 1);

    // ✅ 뷰포트 폭에 따라 다른 ratio 사용
    const appearTopPx = Math.round(window.innerHeight * currentRatio());
    setTop(lerp(appearTopPx, topInset, t));

    setOpacity(lerp(0, 1, clamp((scroll - appearStart) / 120, 0, 1)));
  };

  useEventListener(window, 'scroll', recompute, { passive: true });
  useEventListener(window, 'resize', recompute);
  useEventListener(window, 'load', recompute);
  useEffect(() => {
    const raf = requestAnimationFrame(recompute);
    const t = setTimeout(recompute, 0);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    appearWithinId,
    pinAtId,
    sections.map((s) => s.id).join(','),
    topInset,
    appearTopRatioMd,
    appearTopRatioSm,
  ]);

  // ●●● 클릭 → about(폴백 포함)
  const scrollToAbout = () => {
    const target =
      document.getElementById('about') ||
      (sections.length ? document.getElementById(sections[0].id) : null);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      style={{ top, opacity }}
      className="fixed inset-x-0 z-40" // 수평 가운데
      aria-hidden={opacity < 0.02}
    >
      <Container>
        {/* 알약 네비 */}
        <div className="flex items-center gap-3 rounded-full bg-surface/1 backdrop-blur px-4 py-3 shadow-brand-glow">
          {/* 메뉴: 점 오른쪽 영역을 가득 차게 하고 내부는 균등 정렬 */}
          <nav className="flex-1">
            <ul className="flex w-full items-center justify-evenly text-sm max-[380px]:text-xs md:text-lg">
              <button
                type="button"
                onClick={scrollToAbout}
                aria-label="About 섹션으로 이동"
                className="flex items-center gap-2 rounded-full px-2 py-1 hover:drop-shadow-brand transition"
              >
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-brand-pink" />
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-brand-lavender" />
                <span className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-brand-purple" />
              </button>
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={clsx(
                      'px-2 md:px-4 py-2 rounded-full font-heading font-medium text-ink hover:text-brand-purple transition',
                      activeId === s.id && 'text-white font-bold bg-brand-lavender'
                    )}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </motion.nav>
  );
}
