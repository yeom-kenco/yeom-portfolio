/**
 * Text: 본문 텍스트. muted 여부만 분기
 */
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export default function Text({
  children,
  muted,
  className,
}: PropsWithChildren<{ muted?: boolean; className?: string }>) {
  return (
    <p className={clsx('font-body', muted ? 'text-ink-muted' : 'text-ink', className)}>
      {children}
    </p>
  );
}
