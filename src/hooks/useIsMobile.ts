import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint: number = 700) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpoint);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    // Listener to update state when screen width changes
    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Initial check and add event listener
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};
