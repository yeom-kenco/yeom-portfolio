// 간단 토스트 스토어 (zustand)
// 어디서든 toast({ message: '...' }) 로 호출 가능
import { create } from 'zustand';

export type ToastVariant = 'default' | 'success' | 'warning' | 'error';

export type ToastInput = {
  title?: string;
  message: string;
  variant?: ToastVariant;
  duration?: number; // ms
};

export type Toast = Required<Pick<ToastInput, 'message'>> & {
  id: string;
  title?: string;
  variant: ToastVariant;
  duration: number;
};

interface ToastState {
  toasts: Toast[];
  show: (input: ToastInput) => string;
  dismiss: (id: string) => void;
  clear: () => void;
}

export const useToast = create<ToastState>((set, get) => ({
  toasts: [],
  show: (input) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const toast: Toast = {
      id,
      title: input.title,
      message: input.message,
      variant: input.variant ?? 'default',
      duration: input.duration ?? 2200,
    };
    set((s) => ({ toasts: [...s.toasts, toast] }));
    if (toast.duration > 0) {
      setTimeout(() => get().dismiss(id), toast.duration);
    }
    return id;
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  clear: () => set({ toasts: [] }),
}));

// 전역 헬퍼: 컴포넌트 밖에서도 호출 가능
export const toast = (input: ToastInput) => useToast.getState().show(input);
