// src/sections/EduExpSection.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../primitives/Section';
import Container from '../primitives/Container';
import { eduAndExperience, awards, certificates } from '../features/eduExp/data/eduExp';
import { TimelineItem, CertificateItem } from '../features/eduExp/types';

/* -------------------- Component -------------------- */
export default function EduExpSection() {
  return (
    <Section id="exp" className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl px-6">
          {/* 제목(h2/p) — 이 부분은 크기 그대로 유지 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-[clamp(22px,2vw,36px)] text-center font-extrabold text-brand-purple">
              교육 및 경험
            </h2>
            <p className="mt-3 font-heading text-[clamp(18px,1vw,22px)] text-ink">
              프론트엔드 개발자로 성장하기 위해 쌓아온 관련 교육 및 경험, 자격증 입니다.
            </p>
            <div className="relative mx-auto mt-8 h-8 w-[1px] bg-transparent">
              <span className="absolute left-1/2 top-1/2 h-10 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-brand-purple" />
            </div>
          </motion.div>

          {/* ---------------- 교육/경험 ---------------- */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-6 font-semibold text-brand-purple text-[clamp(1rem,0.96rem+0.5vw,1.25rem)]"
          ></motion.h3>

          <TimelineList items={eduAndExperience} />

          <Divider />

          {/* ---------------- 상장 ---------------- */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-6 font-semibold text-[#7F6BFF] text-[clamp(1rem,0.96rem+0.5vw,1.25rem)]"
          ></motion.h3>

          <TimelineList items={awards} />

          <Divider />

          {/* ---------------- 자격증 ---------------- */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-6 font-semibold text-[#7F6BFF] text-[clamp(1rem,0.96rem+0.5vw,1.25rem)]"
          ></motion.h3>

          <CertificateList items={certificates} />
        </div>
      </Container>
    </Section>
  );
}

/* -------------------- Sub Components -------------------- */

function Divider() {
  return <div className="my-12 h-px w-full bg-brand-purple/50" />;
}

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="space-y-10">
      {items.map((it, idx) => (
        <li key={idx}>
          <TimelineRow item={it} />
        </li>
      ))}
    </ul>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 items-start"
    >
      {/* 날짜 */}
      <div className="flex items-start gap-1 font-heading text-brand-purple text-[clamp(0.875rem,0.84rem+0.2vw,1.125rem)]">
        <span className="mt-[1px] inline-block">*</span>
        <span className="font-medium">{item.date}</span>
      </div>

      {/* 내용 */}
      <div className="text-ink max-w-[30rem]">
        {/* 제목(기본 16px → 큰 화면 18px) */}
        <p className="font-heading font-extrabold text-[clamp(0.875rem,0.96rem+0.2vw,1.125rem)]">
          {item.title}
        </p>
        {/* 부제(모바일 14px → 큰 화면 18px) */}
        {item.subtitle && (
          <p className="font-heading text-ink text-[clamp(0.875rem,0.84rem+0.2vw,1.125rem)]">
            {item.subtitle}
          </p>
        )}
        {/* 불릿(모바일 14px → 큰 화면 16px) */}
        {!!item.bullets?.length && (
          <ul className="mt-3 list-disc pl-4 font-body text-ink-muted space-y-1 text-[clamp(0.875rem,0.84rem+0.1vw,1rem)]">
            {item.bullets!.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

/* -------- Certificates -------- */

function CertificateList({ items }: { items: CertificateItem[] }) {
  return (
    <ul className="space-y-10">
      {items.map((it, idx) => (
        <li key={idx}>
          <CertificateRow item={it} />
        </li>
      ))}
    </ul>
  );
}

function CertificateRow({ item }: { item: CertificateItem }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6"
    >
      {/* 날짜 */}
      <div className="flex items-start gap-1 font-heading text-brand-purple text-[clamp(0.875rem,0.84rem+0.2vw,1.125rem)]">
        <span className="mt-[1px] inline-block">*</span>
        <span className="font-medium">{item.date}</span>
      </div>

      {/* 내용 + 토글 */}
      <div>
        {/* 이름(기본 16px → 큰 화면 18px) */}
        <p className="font-heading font-extrabold text-ink text-[clamp(0.875rem,0.96rem+0.2vw,1.125rem)]">
          {item.name}
        </p>

        {/* 불릿(모바일 14px → 큰 화면 16px) */}
        {!!item.bullets?.length && (
          <ul className="mt-2 list-disc pl-4 font-body text-ink-muted space-y-1 text-[clamp(0.875rem,0.84rem+0.15vw,1rem)]">
            {item.bullets!.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {item.images?.length ? (
          <div className="mt-2">
            <button
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex items-center gap-1 font-medium text-brand-purple hover:text-purple-600 text-[clamp(0.875rem,0.84rem+0.15vw,1rem)]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform ${open ? 'rotate-90' : ''}`}
              >
                <path
                  d="M8 5l8 7-8 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item.detailsLinkLabel ?? '취득 정보 자세히 보기'}
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-1">
                    {item.images!.map((src, i) => (
                      <motion.img
                        key={i}
                        src={src}
                        alt={`${item.name} - 이미지 ${i + 1}`}
                        className="rounded-xl border border-[#EEE] shadow-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
