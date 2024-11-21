import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './HomeProjects.scss';
import { carouselConfig } from './carousel-config.tsx';
import assets from '@assets';
import { homeConfig } from '../home-config.tsx';

type Props = {}

export const HomeProjects = ({}: Props) => {
  return (
    <div className="home-projects">
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
        responsive={carouselConfig.projects.responsive}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {homeConfig.projects.map((project) => {
          // const { title, numbers, image, additionalTextAboveNumbers, tags } = project;
          const { title, numbers, image, tags } = project;
          return (
            <div key={title} className="project-item">
              <p className="title">{title}</p>
              {/*{additionalTextAboveNumbers && <p className="additional-text-above-numbers">{additionalTextAboveNumbers}</p>}*/}
              {/*{additionalTextAboveNumbers && <img className="purple-arrow-to-right" src={assets.purpleArrowToEight} alt="arrow" />}*/}
              <div className="numbers">
                {numbers.map(({ number, text, additionalTextOnBottom }) => (
                  <div key={text} className="number-item">
                    <p className="number-item-number">{number}</p>
                    <p className="number-item-text">{text}</p>
                    {additionalTextOnBottom && <p className="additional-text-on-bottom">{additionalTextOnBottom}</p>}
                  </div>
                ))}
              </div>
              <div className="image" style={{ backgroundImage: `url(${image})` }} />

              <div className="tags">
                {tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
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
