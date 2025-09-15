/**
 * FloatOnScroll: 페이지 스크롤 진행도에 따라 Y축을 부드럽게 이동시키는 패럴랙스 래퍼
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type FloatOnScrollProps = PropsWithChildren<{
  range?: [number, number];
  output?: [number, number];
  className?: string;
}>;

export default function FloatOnScroll({
  range = [0, 1],
  output = [0, -18],
  className,
  children,
}: FloatOnScrollProps) {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, range, output);

  return (
    <motion.div style={{ translateY }} className={className}>
      {children}
    </motion.div>
  );
}
