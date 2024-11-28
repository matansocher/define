import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MenuOutlined } from '@ant-design/icons';
import { useIsMobile } from '@hooks';
import './Header.scss';

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
    // { key: 1, label: 'Use Cases', link: 'use-cases' },
    // { key: 2, label: 'Projects', link: 'projects' },
    { key: 3, label: 'Testimonials', link: 'testimonials' },
  ];

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
          </div>
        ) : (
          <div className="header-content-right">
            {items.map((item) =>
              <Link key={item.key} to={item.link as string} className="header-menu-item">
                {item.label}
              </Link>
            )}
            <ScrollLink to="contact-form" smooth={true} duration={1000}>
              <button className="main-btn contact-btn">Let's talk</button>
            </ScrollLink>
          </div>
        )}
      </div>
    </header>
  );
}
