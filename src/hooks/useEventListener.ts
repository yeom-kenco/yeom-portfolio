/**
 * useEventListener
 * - addEventListener / removeEventListener를 안전하게 관리하는 훅
 * - Window / Document / HTMLElement 모두 지원
 * - 이벤트 타입을 제네릭으로 안전하게 추론
 */

import { useEffect, useRef } from 'react';

// 올바른 합집합(Union) — '!'가 아니라 '|' 입니다.
type Target = Window | Document | HTMLElement;

/** 대상별 이벤트 맵을 추론하기 위한 조건부 타입 */
type EventMapOf<T> = T extends Window
  ? WindowEventMap
  : T extends Document
    ? DocumentEventMap
    : GlobalEventHandlersEventMap;

/**
 * @param target  이벤트를 바인딩할 대상 (없으면 window 사용)
 * @param type    이벤트 타입 (대상에 맞는 키만 허용됨)
 * @param handler 이벤트 콜백
 * @param opts    addEventListener 옵션
 */
export function useEventListener<T extends Target, K extends keyof EventMapOf<T> & string>(
  target: T | null,
  type: K,
  handler: (ev: EventMapOf<T>[K]) => void,
  opts?: AddEventListenerOptions
) {
  // 최신 handler를 보관. 초깃값은 null을 반드시 넣어야 함.
  const saved = useRef<typeof handler | null>(null);

  useEffect(() => {
    saved.current = handler;
  }, [handler]);

  useEffect(() => {
    const el = (target ?? window) as T;

    // 리스너는 Event를 받아서 정확한 타입으로 전달
    const listener = (e: Event) => {
      saved.current?.(e as EventMapOf<T>[K]);
    };

    // 각 대상의 addEventListener 시그니처가 달라서 최소 단언만 사용
    el.addEventListener(type, listener as EventListener, opts);
    return () => el.removeEventListener(type, listener as EventListener, opts);
  }, [target, type, opts]);
}
