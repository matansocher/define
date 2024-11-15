import './TestimonialItem.scss';
import { ITestimonial } from '@interface';

type Props = {
  testimonial: ITestimonial
}

export const TestimonialItem = ({ testimonial }: Props) => {
  const { text, name, title, org } = testimonial;
  return (
    <div className="testimonial-item">
      <p className="text">{ text }</p>
      <p className="name">{ name }</p>
      <p className="title">{ title }</p>
      <p className="org">{ org }</p>
    </div>
  );
}
