import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { ContactForm, ScrollSpy } from '@components';
import { homeConfig } from './home-config';
import { HomeTestimonials } from './HomeTestimonials/HomeTestimonials';
import { HomeProjects } from './HomeProjects/HomeProjects';
import { HomeTimeOptimization } from './HomeTimeOptimization/HomeTimeOptimization.tsx';
import './Home.scss';

type Props = {}

export const Home = ({}: Props) => {
  return (
    <div className="page-wrapper home-page">
      <ScrollSpy/>
      <div className="section hero-section">
        <div className="section-content">
          <h1 className="title">Define better processes for your organization</h1>
          <p className="text">Make your path to success shorter</p>
          <ScrollLink to="contact-form" smooth={true} duration={1000}>
            <button className="main-btn">Let’s talk</button>
          </ScrollLink>
        </div>
      </div>

      <div className="section logos-section">
        <div className="section-content">
          <h4 className="title">Some Clients & Partners</h4>
        </div>
        <div className="section-content logos-section-wrapper">
          <div className="logos-track">
            {homeConfig.partnersLogos.map((logo, index) => (
              <img key={`original-${index}`} src={logo.image} alt={logo.alt} className="logo"/>
            ))}
            {homeConfig.partnersLogos.map((logo, index) => (
              <img key={`duplicate-${index}`} src={logo.image} alt={logo.alt} className="logo"/>
            ))}
          </div>
          {/*<div className="logos-mobile">*/}
          {/*  {homeConfig.partnersLogos.map((logo, index) => (*/}
          {/*    <img key={index} src={logo.image} alt={logo.alt} className="logo"/>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="section numbers-section">
        <div className="section-content">
          {homeConfig.numbers.map((number, i) => (
            <div className="number-item" key={i}>
              <span className="number">{number.number}</span>
              <span className="text" dangerouslySetInnerHTML={{__html: number.text}}></span>
            </div>
          ))}
        </div>
      </div>

      <div className="section solutions-section">
        <div className="section-content">
          <h2>Choose Your Fit</h2>
          <div className="solutions-items">
            {homeConfig.solutions.map((solution, i) => (
              <div className="solutions-item" key={i}>
                <img src={solution.image} alt="solution illustration"/>
                <div className="content">
                  <h3 className="title" style={solution.additionalHeaderStyle || {}}>{solution.title}</h3>
                  <p className="text" style={solution.additionalTextStyle || {}}>{solution.text}</p>
                </div>
                <ScrollLink to="contact-form" smooth={true} duration={1000}>
                  <button className="main-btn">Let's Talk</button>
                </ScrollLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section projects-section">
        <div className="section-content">
          <h2>Projects</h2>
          <HomeProjects/>
        </div>
      </div>

      <div className="section services-section">
        <div className="section-content">
          <h2>Our Services</h2>
          <div className="services-items">
            {homeConfig.services.map(({ title, text, image, imageAlt, imageTopPosition }, i) => (
              <div className="services-item" key={i}>
                <div className="left">
                  <img src={image} style={{ top: imageTopPosition }} alt={imageAlt} />
                </div>
                <div className="content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section time-optimization">
        <div className="section-content">
          <HomeTimeOptimization />
        </div>
      </div>

      <div className="section testimonials-section">
        <div className="section-content">
          <div className="headers">
            <h2>What People Say</h2>
            <Link to={'/testimonials'}>All Testimonials</Link>
          </div>
          <HomeTestimonials/>
        </div>
      </div>

      <div className="section contact-section">
        <div className="section-content">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};
