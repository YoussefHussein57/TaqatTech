// src/hooks/useInView.js
import { option } from "framer-motion/client";
import { useRef, useEffect, useState } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
       
          setInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.5, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref,option]);

  return [ref, inView];
}
