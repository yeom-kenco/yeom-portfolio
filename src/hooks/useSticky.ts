/**
 * useSticky: 스크롤이 임계값(threshold)을 지나면 true를 리턴
 * - 스티키 네비 등장 트리거 등에 사용
 */
import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export function useSticky(threshold = 140) {
  const [stuck, setStuck] = useState(false);
  useEventListener(window, 'scroll', () => setStuck(window.scrollY > threshold), { passive: true });
  useEffect(() => {
    setStuck(window.scrollY > threshold);
  }, [threshold]);
  return stuck;
}
