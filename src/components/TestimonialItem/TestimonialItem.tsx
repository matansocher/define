import './TestimonialItem.scss';
import { ITestimonial } from '@interface';

type Props = {
  testimonial: ITestimonial;
}

export const TestimonialItem = ({ testimonial }: Props) => {
  const { text, name, title, org, logo } = testimonial;
  return (
    <div className="testimonial-item">
      <p className="text">{text}</p>
      <div className="testimonial-item-bottom">
        <div className="testimonial-item-bottom-left">
          <p className="name">{name}</p>
          <p className="title">{title}</p>
          {org && <p className="org">{org}</p>}
        </div>
        <div className="testimonial-item-bottom-right">
          {logo && <img src={logo} alt="logo"/>}
        </div>
      </div>
    </div>
  );
}
