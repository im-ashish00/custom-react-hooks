import { useRef, useCallback, useEffect } from 'react';

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  });

  useEffect(() => {
    //restarting
    set();
    return clear;
  }, [set, delay, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [set, clear]);

  return [reset, clear];
}
