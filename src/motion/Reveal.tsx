/**
 * Reveal
 * - 스크롤로 뷰포트에 들어올 때 자연스럽게 등장하는 래퍼
 * - as로 태그를 바꾸면 해당 태그 고유의 props를 그대로 받을 수 있도록
 *   폴리모픽 제네릭(React.ComponentPropsWithoutRef<T>)으로 타입화
 */
import { motion } from 'framer-motion';
import type { JSX, ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';

type OwnProps = {
  /** 등장 지연 */
  delay?: number;
  /** 초기 Y 오프셋(px) */
  y?: number;
  /** true면 최초 1회만 등장, false면 재진입 시마다 */
  once?: boolean;
  className?: string;
};

type RevealProps<T extends keyof JSX.IntrinsicElements> = PropsWithChildren<
  OwnProps & {
    /** 렌더링할 태그 (예: 'div' | 'img' | 'section' ...) */
    as?: T;
  }
> &
  // 선택된 태그의 기본 props(src, alt, onError 등)를 그대로 허용
  Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>;

export default function Reveal<T extends keyof JSX.IntrinsicElements = 'div'>({
  as,
  delay = 0.4,
  y = 16,
  once = true,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  // 어떤 태그든 motion으로 감싸서 애니메이션 가능
  const Comp: ElementType = (as ?? 'div') as ElementType;
  const MotionComp = motion(Comp);

  return (
    <MotionComp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once }}
      transition={{ type: 'spring', stiffness: 180, damping: 26, delay }}
      // 선택한 태그의 고유 props 전달 (type-safe)
      {...(rest as ComponentPropsWithoutRef<T>)}
    >
      {children}
    </MotionComp>
  );
}
