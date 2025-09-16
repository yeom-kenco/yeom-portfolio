import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  className?: string; // 컨텐츠 박스 커스터마이즈
};

// 접근성 & 재사용을 염두에 둔 기본 모달
export default function BaseModal({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}: BaseModalProps) {
  // ESC 키로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // 바디 스크롤 잠금
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = original;
    };
  }, [isOpen, onClose]);

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <motion.button
            aria-label="닫기"
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {/* panel */}
          <motion.div
            className={`relative max-h-[85vh] w-[min(960px,92vw)] overflow-auto rounded-2xl bg-white p-6 shadow-xl ${className}`}
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
              transition: { type: 'spring', stiffness: 240, damping: 26 },
            }}
            exit={{ y: 24, opacity: 0 }}
          >
            {/* 헤더 */}
            <div className="flex items-start justify-between gap-4">
              {title ? <h3 className="text-title-4 max-md:text-title-6">{title}</h3> : <span />}
              <button
                onClick={onClose}
                className="rounded-xl p-2 transition-colors hover:bg-surface-soft"
                aria-label="모달 닫기"
              >
                ✕
              </button>
            </div>
            {/* 컨텐츠 */}
            <div className="mt-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // 포털로 body 끝에 렌더링
  return createPortal(overlay, document.body);
}
