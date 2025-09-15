/**
 * Hero(Section-1): 도입부
 */
import Section from '../primitives/Section';
import Container from '../primitives/Container';
import Reveal from '../motion/Reveal';
import type { CSSProperties } from 'react';
import { MButton } from './../primitives/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Hero() {
  const orb = (w: number, h: number, cls: string, extra: CSSProperties) => (
    <div style={{ width: w, height: h, ...extra }} className={`absolute rounded-full ${cls}`} />
  );

  const upDate = '2025.09.15';

  return (
    <Section id="top" className="bg-surface">
      <Container className="pt-2 pb-0">
        {/* ✅ 2-Row 그리드: 1행(콘텐츠) + 2행(화살표) / 세로 늘리기 */}
        <div
          className="
        grid min-h-[72vh]
        grid-rows-[1fr_auto]           /* 1행은 남은 높이 채우고, 2행은 화살표 높이만 */
        md:grid-cols-2                 /* 데스크탑 두 컬럼 */
        items-stretch                  /* 각 칼럼 세로로 꽉 늘리기 */
        gap-x-12
      "
        >
          {/* LEFT: 이미지 - 세로 가운데 정렬되도록 래퍼를 stretch + flex-center */}
          <div className="relative h-full self-stretch flex items-center justify-center md:justify-start md:ml-20">
            {orb(240, 240, 'hidden md:block bg-brand-purple shadow-brand-glow', {
              left: -60,
              top: 10,
            })}
            {orb(180, 180, 'hidden md:block bg-brand-purple shadow-elev', {
              right: 70,
              bottom: 25,
            })}

            <Reveal
              as="img"
              y={26}
              className="relative z-10 w-[292px] max-w-[65%] rounded-[5rem]"
              src="/images/profile.webp"
              alt="프로필"
              onError={(e) => {
                e.currentTarget.src = '/images/profile.png';
              }}
            />
          </div>

          {/* RIGHT: (위: 텍스트 묶음 / 아래: 버튼) + 모바일 중앙/데스크탑 좌측 */}
          <div
            className="
            pt-3 pb-12 gap-7 md:pt-12 md:gap-0
          h-full self-stretch
          flex flex-col justify-between
          items-center md:items-start
          text-center md:text-left
        "
          >
            {/* ↖ 위쪽 블록 : 날짜/타이틀/설명 */}
            <div className="w-full">
              <Reveal
                as="span"
                y={10}
                className="font-heading text-brand-pink tracking-wide text-[clamp(12px,1.95vw,18px)]"
              >
                UPDATE {upDate}
              </Reveal>

              <Reveal>
                <h1 className="mt-[-10px] tracking-wider font-heading font-extrabold text-brand-purple text-[clamp(36px,6vw,76px)]">
                  안녕하세요!
                </h1>
              </Reveal>

              <Reveal y={10}>
                <p className="font-heading leading-tight text-[clamp(18px,2.4vw,32px)] font-normal text-brand-purple/90">
                  즐거운 경험을 만드는
                  <br />
                  <b className="font-heading text-[clamp(18px,2.4vw,32px)] text-brand-purple">
                    프론트엔드 개발자, 염승아
                  </b>
                  입니다.
                </p>
              </Reveal>
            </div>

            {/* ↘ 아래쪽 블록 : 버튼(모바일 가운데 / 데스크탑 좌측) */}
            <Reveal y={10}>
              <MButton
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="self-center md:self-start"
              >
                이력서 다운로드
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MButton>
            </Reveal>
          </div>

          {/* ↓ 2행(맨 아래)에 붙는 화살표: grid의 두 컬럼 전체 차지 + 아래에 딱 붙게 */}
          <Reveal y={6} className="col-span-full self-end flex justify-center md:pt-5">
            <button
              aria-label="다음 섹션으로 이동"
              onClick={() =>
                document
                  .getElementById('exp')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              className="w-[38px] h-[38px] grid place-items-center"
            >
              <i
                className="bi bi-chevron-double-down text-surface text-[40px] drop-shadow-[0_4px_4px_rgba(160,145,255,1)] animate-bounce"
                aria-hidden="true"
              ></i>
            </button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
