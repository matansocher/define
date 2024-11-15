import './Home.scss';
import { ContactForm } from '@components';
import { HomeTestimonials } from './HomeTestimonials/HomeTestimonials.tsx';
import { homeConfig } from './home-config.tsx';
import { HomeProjects } from './HomeTestimonials/HomeProjects.tsx';

type Props = {}

export const Home = ({}: Props) => {
  return (
    <div className="page-wrapper home-page">
      <div className="section hero-section">
        <div className="section-content">
            <h1 className="title">Define better processes for your organization</h1>
            <p className="text">Make your path to success shorter</p>
            <button className="main-btn">Let’s talk</button>
        </div>
      </div>

      <div className="section logos-section">
        <div className="section-content">
          <h4 className="title">Some Clients & Partners</h4>
        </div>
        <div className="section-content logos-section-wrapper">
          <div className="logo-track">
            {homeConfig.partnersLogos.map((logo, index) => (
              <img key={`original-${index}`} src={logo.image} alt={logo.alt} className="logo" />
            ))}
            {homeConfig.partnersLogos.map((logo, index) => (
              <img key={`duplicate-${index}`} src={logo.image} alt={logo.alt} className="logo" />
            ))}
          </div>
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
          <div className="section-content">
            <div className="solutions-items">
              {homeConfig.solutions.map((solution, i) => (
                <div className="solutions-item" key={i}>
                  <img src={solution.image} alt=""/>
                  <h3 className={`title`} style={solution.additionalHeaderStyle || {}}>{solution.title}</h3>
                  <p style={solution.additionalTextStyle || {}}>{solution.text}</p>
                  <button className="main-btn">Let's Talk</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section projects-section">
        <div className="section-content">
          <h2>Projects</h2>
          <HomeProjects />
        </div>
      </div>

      <div className="section services-section">
        <div className="section-content">
          <h2>Our Services</h2>
          <div className="services-items">
            {homeConfig.services.map((service, i) => (
              <div className="services-item" key={i}>
                <img src={service.image} alt=""/>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section testimonials-section">
        <div className="section-content">
          <h2>What People Say</h2>
          <HomeTestimonials />
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
