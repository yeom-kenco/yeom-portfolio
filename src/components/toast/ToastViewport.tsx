// 화면에 토스트를 그리는 뷰포트 (App 루트에 한 번만 렌더)
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from './../../hooks/useToast';
import clsx from 'clsx';

const variantIcon = (v: string) => {
  switch (v) {
    case 'success':
      return 'bi bi-check-circle-fill';
    case 'warning':
      return 'bi bi-exclamation-triangle-fill';
    case 'error':
      return 'bi bi-x-circle-fill';
    default:
      return 'bi bi-info-circle-fill';
  }
};

export default function ToastViewport() {
  const { toasts, dismiss } = useToast();
  return (
    <div className="fixed inset-x-0 bottom-4 z-[100] pointer-events-none flex justify-center md:justify-end md:pr-6">
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 14, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="pointer-events-auto mb-2 w-[min(92vw,420px)] rounded-xl border border-brand-purple/25 bg-surface/90 backdrop-blur px-4 py-3 shadow-brand-glow"
          >
            <div className="flex items-start gap-3">
              {/* 아이콘 (Bootstrap Icons) */}
              <i className={clsx(variantIcon(t.variant), 'text-[18px] text-brand-purple mt-0.5')} />

              <div className="flex-1">
                {t.title && <p className="font-heading font-semibold text-ink">{t.title}</p>}
                <p className="text-sm text-ink-muted">{t.message}</p>
              </div>

              <button
                aria-label="닫기"
                onClick={() => dismiss(t.id)}
                className="ml-2 rounded-full p-1 hover:bg-black/5"
              >
                <i className="bi bi-x-lg text-[14px] text-ink-muted" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
