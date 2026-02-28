"use client";

import { useEffect, useRef, useCallback } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const ref = useRef<T | null>(null);
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("revealed");
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observerRef.current = observer;
    observer.observe(element);

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}
