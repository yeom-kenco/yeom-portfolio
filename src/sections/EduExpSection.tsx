// src/sections/EduExpSection.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../primitives/Section';
import Container from '../primitives/Container';

/* -------------------- Types -------------------- */
type TimelineItem = {
  date: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
};

type CertificateItem = {
  date: string;
  name: string;
  bullets?: string[];
  images?: string[]; // 자격증/성적표 이미지 경로
  detailsLinkLabel?: string; // 커스텀 토글 문구
};

/* -------------------- Data (추가/수정만 하면 됨) -------------------- */
const eduAndExperience: TimelineItem[] = [
  {
    date: '2020 - 2025',
    title: '국민대학교',
    subtitle: '경영정보(경영학사), 인포메이션테크놀로지(공학사) 전공 성적 우수 졸업',
    bullets: [
      '웹클라이언트컴퓨팅, 캡스톤디자인, 데이터분석프로그래밍, HCI 개론을 통해 UI/UX 설계, 사용자 경험 중심의 개발, 프론트엔드 학습',
      'C, Java, 객체지향 프로그래밍, 데이터베이스, 웹클라이언트컴퓨팅, 고급프로그래밍을 통해 컴퓨터 공학 기반의 지식 학습',
      '경영정보학원론, 경영혁신과정보기술, 디지털비즈니스, 데이터분석프로그래밍 등을 통해 IT와 경영을 융합한 문제 해결 능력 향상',
    ],
  },
  {
    date: '2025.01 - 2025.08',
    title: '[LG 유플러스] 유레카 2기 프론트엔드 개발자',
    subtitle: '멀티캠퍼스 & LG U+ 공동 주관 SW 개발자 양성 과정 수료',
    bullets: [
      '백엔드의 이해, 리액트, 타입스크립트 등 실무에 직접적으로 필요한 역량 학습',
      '총 4개의 프로젝트를 통해 협업 능력 및 실무 능력 함양',
    ],
  },
  {
    date: '2025.09',
    title: '[부스트 코스] Connect On: 테크와 나를 잇다 (업무자동화)',
    subtitle: '네이버 커넥트 재단 부스트 코스 생성형 AI를 활용한 업무자동화 과정 수료',
    bullets: [
      'ChatGPT, KreaAI 등 최신 생성형 AI 툴을 활용해 데이터 분석·업무 자동화·웹앱 프로토타입 제작 실습',
      'AI를 활용한 생산성 향상과 프론트엔드 개발 적용 경험',
    ],
  },
  {
    date: '2025.09',
    title: '[kakao x goorm] 구름톤 in JEJU 15기',
    subtitle: '개발자/디자이너/기획자가 모여 3박 4일간 진행되는 해커톤 참여 예정',
    bullets: ['수료 후 작성 예정입니다.'],
  },
];

const awards: TimelineItem[] = [
  {
    date: '2020.12.24',
    title: '[최우수상] 경영정보학부 홈페이지 개발 경진대회',
    subtitle: '56명 중 상위 3명',
    bullets: [
      '처음 접해본 HTML, CSS, GitHub과 같은 기초적인 웹 스택으로 요구사항을 철저히 지킨 완성도 있는 결과물 도출',
    ],
  },
  {
    date: '2021.11.25',
    title: '[최우수상] 경영정보학부 3개 대학(국민x동국x명지) 연합 학술제',
    subtitle: 'MZ세대를 위한 초개인화 비즈니스 모델 및 경영 전략 제시',
    bullets: [
      'MZ세대가 자주 사용하는 카메라 필터 어플과 AI를 전략적으로 융합하여 UI/UX를 고려한 비즈니스 모델 제시',
    ],
  },
  {
    date: '2024.06.30',
    title: '[최우수상] 전공 캡스톤 경진대회',
    subtitle: '자율 주제 캡스톤 경진대회',
    bullets: [
      '‘한 방에 약속을 쉽게 잡는 방법’ 이라는 주제의 어플을 제시',
      '시장성, 사용성을 고려한 서비스와 목업 디자인 도출',
    ],
  },
  {
    date: '2025.08.12',
    title: '[우수상] 유레카 최종 융합 프로젝트 경진대회',
    subtitle: '멀티캠퍼스 & LG U+ 공동 주관 SW 개발자 양성 과정 프로젝트',
    bullets: [
      '통신사 멤버십 혜택을 쉽고 스마트하게 탐색하는 지도 기반 플랫폼 구현',
      '디자인/프론트엔드 담당',
    ],
  },
];

const certificates: CertificateItem[] = [
  {
    date: '2024.06.21',
    name: 'SQLD (SQL Developer)',
    images: ['/images/cert/sqld-cert.webp', '/images/cert/sqld-score.webp'],
    detailsLinkLabel: '취득 정보 자세히 보기',
  },
  {
    date: '2024.09.13',
    name: 'OPIc / 영어 IM2',
    images: ['/images/cert/opic-cert.webp'],
    detailsLinkLabel: '취득 정보 자세히 보기',
  },
  {
    date: '2024.10.20',
    name: '정보처리기사',
    images: [
      '/images/cert/ipe-cert.webp',
      '/images/cert/ipe-score.webp',
      '/images/cert/ipe-score-2.webp',
    ],
    detailsLinkLabel: '취득 정보 자세히 보기',
  },
];

/* -------------------- Component -------------------- */
export default function EduExpSection() {
  return (
    <Section id="exp" className="bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl px-6">
          {/* 제목 */}
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
            {/* 가운데 짧은 세로선 */}
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
            className="mb-6 text-lg font-semibold text-brand-purple"
          ></motion.h3>
          <TimelineList items={eduAndExperience} />

          <Divider />

          {/* ---------------- 상장 ---------------- */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-6 text-lg font-semibold text-[#7F6BFF]"
          ></motion.h3>
          <TimelineList items={awards} />

          <Divider />

          {/* ---------------- 자격증 ---------------- */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-6 text-lg font-semibold text-[#7F6BFF]"
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
      <div className="flex items-start gap-1 font-heading text-sm md:text-base text-brand-purple">
        <span className="mt-[1px] inline-block">*</span>
        <span className="font-medium">{item.date}</span>
      </div>

      {/* 내용 */}
      <div className="text-ink max-w-[30rem]">
        <p className="font-heading font-extrabold md:text-base">{item.title}</p>
        {item.subtitle && (
          <p className="font-heading text-sm md:text-base text-ink">{item.subtitle}</p>
        )}
        {!!item.bullets?.length && (
          <ul className="mt-3 font-body space-y-1 text-sm text-ink-muted list-disc pl-4">
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
      <div className="flex items-start gap-1 font-heading text-sm md:text-base text-brand-purple">
        <span className="mt-[1px] inline-block">*</span>
        <span className="font-medium">{item.date}</span>
      </div>

      {/* 내용 + 토글 */}
      <div>
        <p className="font-heading font-extrabold text-ink md:text-base">{item.name}</p>

        {!!item.bullets?.length && (
          <ul className="mt-2 space-y-1 text-sm font-body text-ink-muted list-disc pl-4">
            {item.bullets!.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {item.images?.length ? (
          <div className="mt-2">
            <button
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex items-center gap-1 text-brand-purple text-sm font-medium hover:text-purple-600"
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
