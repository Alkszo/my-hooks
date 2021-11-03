import { useEffect, useRef, useCallback } from 'react';

export default function useInterval(callback, delay) {
  const callbackRef = useRef(callback)
  const intervalRef = useRef()

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    intervalRef.current = setInterval(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)
}, [])

  useEffect(() => {
      set()  
  return clear
  }, [delay, set, clear]);

  return { clear, set }
}
