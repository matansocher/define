import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import assets from '@assets';
import { TESTIMONIALS_CONFIG } from '@core/config';
import { carouselConfig } from './carousel-config';
import './HomeTestimonials.scss';

type Props = {}

export const HomeTestimonials = ({}: Props) => {
  const testimonials = [...TESTIMONIALS_CONFIG];

  return (
    <div className="home-testimonials">
      <Carousel
        additionalTransfrom={0}
        arrows
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderButtonGroupOutside={true}
        showDots
        renderDotsOutside
        responsive={carouselConfig.testimonials.responsive}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {testimonials.map((testimonial) => {
          const { key, text, name, title, org } = testimonial;
          return (
            <div key={key} className="testimonial-item">
              <p className="text">{text}</p>
              <p className="name">{name}</p>
              <p className="title">{title}</p>
              <p className="org">{org}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

const CustomButtonGroupAsArrows = ({ next, previous }: any) => {
  return (
    <div className="custom-button-group">
      <button onClick={previous}><img src={assets.chvronLeft} alt=""/></button>
      <button onClick={next}><img src={assets.chvronRight} alt=""/></button>
    </div>
  );
};
