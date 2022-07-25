import { useEffect } from 'react';
import useTimeout from '../02-useTimeout/useTimeout';

export default function useDebounce(cb, delay, dependencies) {
  const [reset, clear] = useTimeout(cb, delay);
  useEffect(reset, [...dependencies, delay]);
  useEffect(clear, []);
}
