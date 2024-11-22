import { useEffect, useState } from 'react';
import './ScrollSpy.scss';

type Props = {}

export const ScrollSpy = ({}: Props) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-spy">
      <div className="bar" style={{width: `${scrollProgress}%`}}/>
    </div>
  );
}
