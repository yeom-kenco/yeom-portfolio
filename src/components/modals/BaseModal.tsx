// BaseModal.tsx
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BaseModal({
  isOpen,
  onClose,
  children,
  className = '',
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  // ▼ 스크롤 락 상태 저장용
  const lockRef = useRef<{
    scrollY: number;
    prev: Partial<CSSStyleDeclaration>;
  } | null>(null);

  // ▼ 모달 열릴 때 바디 스크롤 잠그기 (+ iOS 고정, 스크롤바 보정)
  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const docEl = document.documentElement;
    const scrollY = window.scrollY || window.pageYOffset || docEl.scrollTop || 0;

    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    // 스크롤바 폭 계산(레이아웃 흔들림 방지)
    const scrollbarW = window.innerWidth - docEl.clientWidth;
    if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;

    // iOS까지 고려한 고정(바운스 방지)
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    lockRef.current = { scrollY, prev };

    return () => {
      // 원복 + 기존 스크롤 위치 복귀
      const saved = lockRef.current;
      if (saved) {
        body.style.overflow = saved.prev.overflow || '';
        body.style.position = saved.prev.position || '';
        body.style.top = saved.prev.top || '';
        body.style.width = saved.prev.width || '';
        body.style.paddingRight = saved.prev.paddingRight || '';
        window.scrollTo(0, saved.scrollY);
      }
      lockRef.current = null;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center p-4 md:p-8">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
          {/* 바깥: radius + overflow-hidden (모서리 깨짐 방지) */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={
              'relative w-full max-w-4xl rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden ' +
              className
            }
          >
            {/* 닫기 */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-ink-muted hover:bg-surface-soft"
              aria-label="Close"
            >
              ✕
            </button>

            {/* 안쪽: 내용 스크롤만 */}
            <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
