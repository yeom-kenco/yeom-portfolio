// src/components/nav/StickyNav.tsx
import Container from '../../primitives/Container';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type SectionRef = { id: string; label: string };

export default function StickyNav({
  sections,
  appearWithinId = 'top',
  thresholdPx = 200, // 활성 판정 기준선(뷰포트 상단에서 px)
  appearLeadPx = 400, // 네비가 더 빨리 나타나게(클수록 빨리)
}: {
  sections: SectionRef[];
  appearWithinId?: string;
  thresholdPx?: number;
  appearLeadPx?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // 보임 토글 (조금 빨리 등장시키려면 appearLeadPx 키우기)
      const appearEl = document.getElementById(appearWithinId);
      if (appearEl) {
        const appearBottom = appearEl.offsetTop + appearEl.offsetHeight;
        setIsVisible(window.scrollY > appearBottom - appearLeadPx);
      }

      // --- 활성 섹션 판정 ---
      // 1) 기준선을 지난 섹션들 중 '마지막'을 잡는다
      let current = '';
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - thresholdPx <= 0) current = id;
        else break;
      }

      // 2) 못 찾은 경우(=첫 섹션 전 구간)엔, 기준선이 어떤 섹션 rect 내부에 있는지도 체크
      if (!current) {
        for (const { id } of sections) {
          const el = document.getElementById(id);
          if (!el) continue;
          const r = el.getBoundingClientRect();
          if (r.top <= thresholdPx && r.bottom >= thresholdPx) {
            current = id;
            break;
          }
        }
      }

      setActiveId(current); // 못 찾으면 '' → 아무 것도 활성화 안 함
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections, appearWithinId, thresholdPx, appearLeadPx]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToAbout = () => {
    (
      document.getElementById('about') || document.getElementById(sections[0]?.id || '')
    )?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={clsx(
        'fixed inset-x-0 top-8 z-40 transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
      )}
      aria-hidden={!isVisible}
    >
      <Container>
        <div className="flex items-center gap-3 rounded-full bg-surface/1 backdrop-blur px-4 py-2 shadow-brand-glow">
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
                  <button
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={clsx(
                      'px-2 md:px-4 py-2 rounded-full font-heading font-medium text-ink hover:text-brand-purple transition',
                      activeId === s.id && 'text-white font-bold bg-brand-lavender'
                    )}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </nav>
  );
}
