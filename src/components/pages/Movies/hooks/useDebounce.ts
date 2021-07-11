import { useRef } from 'react';

const useDebounce = (callback: any, delay: number) => {
  let timeoutRef: any = useRef(null);

  return (...args: any) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      callback(...args);
    }, delay);
  }
}

export { useDebounce };