/**
 * Button: 공통 버튼 컴포넌트. variant로 스타일 분기
 */
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ButtonHTMLAttributes, ForwardedRef } from 'react';
import React from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'chip';
};

const Button = React.forwardRef(function Button(
  { variant = 'primary', className, children, ...rest }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      {...rest}
      className={clsx(
        'h-12 px-9 inline-flex items-center gap-2 rounded-2xl transition font-heading font-medium',
        variant === 'primary' &&
          'bg-brand-purple text-white shadow-brand-glow hover:brightness-105 active:scale-95',
        variant === 'ghost' && 'bg-transparent hover:bg-black/5',
        variant === 'chip' && 'bg-transparent hover:bg-brand-purple/10',
        className
      )}
    >
      {children}
    </button>
  );
});

export const MButton = motion(Button);
export default Button;
