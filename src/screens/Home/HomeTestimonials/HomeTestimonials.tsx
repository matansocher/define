import { useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TESTIMONIALS_CONFIG } from '@core/config';
import { TestimonialItem } from '@components';
import { ITestimonial } from '@interface';
import { carouselConfig } from '../HomeProjects/carousel-config.tsx';
import './HomeTestimonials.scss';

type Props = {}

export const HomeTestimonials = ({}: Props) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // const equalizeItemHeights = () => {
  //   const items = carouselRef.current?.querySelectorAll<HTMLElement>('.testimonial-item');
  //   if (!items) return;
  //
  //   const maxHeight = Math.max(...Array.from(items, (item) => {
  //     item.style.height = 'auto'; // Reset height
  //     return item.offsetHeight;  // Get height
  //   }));
  //
  //   items.forEach((item) => (item.style.height = `${maxHeight}px`));
  // };
  const equalizeItemHeights = () => {
    if (!carouselRef.current) return;

    const items = carouselRef.current.querySelectorAll('.testimonial-item');
    let maxHeight = 0;

    // Reset heights to auto before recalculating
    items.forEach((item) => {
      (item as HTMLElement).style.height = 'auto';
    });

    // Calculate the maximum height
    items.forEach((item) => {
      const height = (item as HTMLElement).offsetHeight;
      maxHeight = Math.max(maxHeight, height);
    });

    // Apply the maximum height
    items.forEach((item) => {
      (item as HTMLElement).style.height = `${maxHeight + 20}px`;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      equalizeItemHeights();
    }, 0); // Delay execution until the next event loop iteration

    const handleResize = () => equalizeItemHeights();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  const renderTestimonials = () => {
    return [...TESTIMONIALS_CONFIG].map((testimonial: ITestimonial) => {
      return (
        <TestimonialItem key={testimonial.name} testimonial={testimonial} />
      );
    })
  }

  return (
    <div ref={carouselRef} className="home-testimonials">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        className=""
        containerClass="home-testimonials-carousel"
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
        // customButtonGroup={<CustomButtonGroupAsArrows />}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {renderTestimonials()}
      </Carousel>
    </div>
  );
};

// const CustomButtonGroupAsArrows = ({ next, previous }: any) => {
//   return (
//     <div className="custom-button-group">
//       <button onClick={previous}><img src={assets.chvronLeft} alt=""/></button>
//       <button onClick={next}><img src={assets.chvronRight} alt=""/></button>
//     </div>
//   );
// };
