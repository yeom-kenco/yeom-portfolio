/**
 * useScrollSpy: 현재 스크롤 위치 기준으로 활성 섹션 id를 알려주는 훅
 */
import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export function useScrollSpy(ids: string[], offset = 140) {
  const [active, setActive] = useState<string | null>(null);

  const compute = () => {
    const y = window.scrollY + offset;
    let cur: string | null = null;
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= y) cur = id;
    }
    setActive(cur);
  };

  useEventListener(window, 'scroll', compute, { passive: true });
  useEffect(compute, [ids.join(','), offset]); // 초기 계산
  return active;
}
