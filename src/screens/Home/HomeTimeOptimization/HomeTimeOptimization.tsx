import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import './HomeTimeOptimization.scss';

type Props = {}

export const HomeTimeOptimization = ({}: Props) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState<boolean>(false);

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
        {isReadMoreOpen && (
          <div>ReadMoreContent</div>
        )}
        <p className="toggle" onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>{isReadMoreOpen ? `Read less` : `Read more`}</p>
      </div>
    </div>
  );
};
