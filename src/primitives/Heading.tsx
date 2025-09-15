/**
 * Heading: 프로젝트 전반에서 쓰는 타이틀 스타일
 */
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export const H1 = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <h1
    className={clsx(
      'font-heading text-[clamp(36px,5vw,64px)] leading-tight font-extrabold',
      className
    )}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <h2
    className={clsx(
      'font-heading text-[clamp(22px,3vw,34px)] leading-snug font-semibold',
      className
    )}
  >
    {children}
  </h2>
);
