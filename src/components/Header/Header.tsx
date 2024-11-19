import { Link } from 'react-router-dom';
import './Header.scss';
import { useIsMobile } from '@hooks';
import { Button, Dropdown, Menu } from 'antd';
import { MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';

type Props = {

}

interface HeaderItem {
  key: number;
  label: string;
  link?: string;
}

export const Header = ({}: Props) => {
  const isMobile = useIsMobile(700);

  const items: HeaderItem[] = [
    { key: 1, label: 'Use Cases', link: 'use-cases' },
    { key: 2, label: 'Projects', link: 'projects' },
    { key: 3, label: 'Testimonials', link: 'what-people-say' },
  ];

  const handleCtaClick = () => {
    return console.log("CTA Button Clicked!");
  }

  return (
    <header>
      <div className="header-content">
        <div className="header-content-left">
          <Link to={"/"}>
            <h2>DE<span>FINE</span></h2>
          </Link>
        </div>
        {isMobile ? (
          <div className="header-content-right mobile">
            <Dropdown menu={{items}} placement="bottomRight">
              <Button><MenuOutlined/></Button>
            </Dropdown>
            {/*<button className="main-btn contact-btn" onClick={() => handleCtaClick()}>Let's talk</button>*/}
          </div>
        ) : (
          <div className="header-content-right">
            {items.map((item) =>
              <Link key={item.key} to={item.link as string} className="header-menu-item">
                {item.label}
              </Link>
            )}
            <button className="main-btn contact-btn" onClick={() => handleCtaClick()}>Let's talk</button>
          </div>
        )}
      </div>
    </header>
  );
}
