/**
 * Section: 공통 수직 패딩을 제공하는 섹션 래퍼
 */
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export default function Section({
  id,
  children,
  className,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={clsx('pt-24 pb-20 md:pt-36 md:pb-36', className)}>
      {children}
    </section>
  );
}
