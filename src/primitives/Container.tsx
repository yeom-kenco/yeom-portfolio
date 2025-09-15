/**
 * Container: 고정 폭(1100px) + 좌우 92% 패딩의 레이아웃 래퍼
 */
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export default function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={clsx('mx-auto w-[92%] max-w-[1000px]', className)}>{children}</div>;
}
