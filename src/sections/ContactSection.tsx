import { useMemo, useState } from 'react';
import Section from '../primitives/Section';
import Container from '../primitives/Container';
import tistory from '../assets/icons/tistory.svg';

/**
 * ContactSection
 * - 가운데 정렬, Section/Container 사용
 * - 각 아이콘은 부트스트랩 아이콘(react-icons/bs) 사용
 * - 티스토리는 로컬 SVG 사용
 * - 호버 시 아이콘 하단에 캡션(이메일 / github / 티스토리 / 포트폴리오 피드백) 표시
 */
export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ysa2780@naver.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert('복사에 실패했습니다. 수동으로 복사해주세요.');
    }
  };

  const items = useMemo(
    () => [
      {
        id: 'mail',
        label: copied ? '이메일 복사됨!' : '이메일',
        onClick: handleCopyEmail,
        icon: <i className="bi bi-envelope-at-fill text-[34px]" aria-hidden />,
      },
      {
        id: 'github',
        label: 'github',
        href: 'https://github.com/yeom-kenco',
        icon: <i className="bi bi-github text-[34px]" aria-hidden />,
      },
      {
        id: 'tistory',
        label: '티스토리',
        href: 'https://kenco.tistory.com/',
        icon: (
          // 로컬 SVG 아이콘
          <img src={tistory} alt="Tistory" className="w-8 h-8 md:w-9 md:h-9" draggable={false} />
        ),
      },
      {
        id: 'feedback',
        label: '포트폴리오 피드백',
        href: 'https://forms.gle/UBt5DXMtG2pHMC8P6',
        icon: <i className="bi bi-send-fill text-[34px]" aria-hidden />,
      },
    ],
    [copied]
  );

  return (
    <Section
      id="contact"
      className="py-24 md:py-28 bg-surface
      min-h-[50vh] md:min-h-[60vh]
      scroll-mt-28 md:scroll-mt-32"
    >
      <Container className="max-w-4xl flex flex-col items-center text-center">
        {/* 헤더 텍스트 (원하는 문구로 수정 가능) */}
        <p className="font-heading text-brand-purple text-[15px] md:text-xl text-primary/70 font-bold tracking-wider">
          방문해주셔서 감사합니다.
        </p>
        <h2 className="font-heading text-brand-purple mt-2 text-[32px] md:text-6xl font-extrabold tracking-wider text-primary">
          언제든지 연락주세요!
        </h2>
        <p className="mt-6 max-w-2xl text-sm md:text-base text-ink-muted leading-relaxed">
          적극적인 자세로 집중하며 낙관적인 시선을 지니면 못 할 게 없다고 믿습니다.
        </p>
        <p className="mt-6 max-w-2xl text-sm md:text-base text-ink-muted leading-relaxed">
          ‘그럼 그렇지’ 보다 ‘이번에도 하나 배웠다’를, <br />
          ‘못하겠어요’ 보다 ‘그럼 한번 해볼게요’를 내뱉는 개발자가 되겠습니다.
        </p>

        {/* 아이콘 리스트 */}
        <ul className="mt-12 grid grid-cols-4 gap-8 md:gap-12 place-items-center">
          {items.map((item) => (
            <li key={item.id} className="group">
              {item.onClick ? (
                <button
                  onClick={item.onClick}
                  aria-label={item.label}
                  className="flex flex-col items-center text-ink hover:text-primary focus-visible:text-primary outline-none"
                >
                  <span className="relative block">
                    <span className="flex text-ink size-16 md:size-18 items-center justify-center rounded-full backdrop-blur transition-transform duration-200 group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 text-inherit">
                      {item.icon}
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.4rem)] -translate-x-1/2 whitespace-nowrap text-[11px] md:text-xs text-primary/70 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
                      {item.label}
                    </span>
                  </span>
                </button>
              ) : (
                <a
                  href={item.href!}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  className="flex flex-col items-center text-ink hover:text-primary focus-visible:text-primary"
                >
                  <span className="relative block">
                    <span className="flex size-16 text-ink md:size-18 items-center justify-center rounded-full backdrop-blur transition-transform duration-200 group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 text-inherit">
                      {item.icon}
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.4rem)] -translate-x-1/2 whitespace-nowrap text-[11px] md:text-xs text-primary/70 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
                      {item.label}
                    </span>
                  </span>
                </a>
              )}
            </li>
          ))}
        </ul>
        <div aria-hidden className="h-20 md:h-32" />
      </Container>
    </Section>
  );
}
