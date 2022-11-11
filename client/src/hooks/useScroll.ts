import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const onScroll = (): void => {
    const scrollTop = window !== undefined ? window.pageYOffset : 0;

    setIsScrolled(scrollTop > 100);
  };

  useEffect(() => {
    // Learn more about how { passive: true } improves scrolling performance
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { isScrolled };
};
