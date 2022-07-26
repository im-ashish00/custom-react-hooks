import { useEffect, useRef } from 'react';

export default function useUpdateEffect(cb, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return cb();
  }, dependencies);
}
