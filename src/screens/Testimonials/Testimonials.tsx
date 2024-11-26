import { TESTIMONIALS_CONFIG } from '@core/testimonials-config.ts';
import { ContactForm, ScrollSpy, TestimonialItem } from '@components';
import { ITestimonial } from '@interface';
import './Testimonials.scss';

type Props = {

}

export const Testimonials = ({}: Props) => {
  const renderTestimonials = () => {
    return [...TESTIMONIALS_CONFIG].map((testimonial: ITestimonial) => {
      return (
        <TestimonialItem key={testimonial.name} testimonial={testimonial} />
      );
    })
  }

  return (
    <div className="page-wrapper testimonials-page">
      <ScrollSpy />
      <div className="section">
        <div className="section-content">
          <h1>What People Say</h1>
          <div className="testimonials-wrapper">
            {renderTestimonials()}
          </div>
        </div>
      </div>

        <div className="section contact-section">
        <div className="section-content">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
