import { useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import './HomeTimeOptimization.scss';

type Props = {}

export const HomeTimeOptimization = ({}: Props) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleReadMore = () => {
    const content = contentRef.current;
    if (content) {
      content.style.height = isReadMoreOpen ? `${content.scrollHeight}px` : `${content.offsetHeight}px`;
      content.offsetHeight; // Access the property to trigger a reflow
      content.style.height = isReadMoreOpen ? "0px" : `${content.scrollHeight}px`;
    }
    setIsReadMoreOpen(!isReadMoreOpen);
  }

  return (
    <div className="time-optimization-wrapper">
      <div className="top">
        <div className="top-left">
          <p className="header-1">Design Time Optimization</p>
          <p className="header-2">40% faster</p>
        </div>
        <div className="top-right">
          <div className="top-right-item">
            <p className="description">Original Time</p>
            <p className="value">7.5h</p>
          </div>
          <div className="top-right-item">
            <p className="description">Optimized Time</p>
            <p className="value">4.5h</p>
          </div>
        </div>
      </div>

      <div className="graphs">
        <div className="top">
          <p className="left">Traditional Page Design Process</p>
          <p className="right">7.5h</p>
        </div>
        <div className="graph">
          <div className="bar" style={{width: '100%'}}></div>
        </div>
        <div className="top">
          <p className="left">Optimized Design Sprint Workshop</p>
          <p className="right">4.5h</p>
        </div>
        <div className="graph">
          <div className="bar" style={{width: '60%'}}></div>
        </div>
      </div>

      <div className="more">
        <div ref={contentRef} className="more-content" style={{ height: "0px", overflow: "hidden", transition: "height 0.3s ease" }}>
          <p>Transforming the traditional design process through focused workshops saved time while improving the quality of outcomes.</p>
          <p>Key improvements:</p>
          <ul>
            <li> Direct collaboration replaces back-and-forth emails</li>
            <li> Immediate feedback shapes better solutions faster</li>
            <li> Structured exercises keep everyone focused and productive</li>
            <li> Clear documentation captures decisions as they happen</li>
          </ul>
          <p>Beyond just saving time, this streamlined approach leads to better designs through stronger alignment and more engaged participation.</p>
          <p>A simple change in process that delivers significant results: better designs, happier stakeholders, and more time for other valuable work.</p>
        </div>
        <p className="toggle" onClick={toggleReadMore}>{isReadMoreOpen ? `Read less` : `Read more`}</p>
      </div>
    </div>
  );
};
