import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { assets } from '@assets';
import { carouselConfig, ProjectItem, projectsCarouselData } from './carousel-config';
import './HomeProjects.scss';

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
        {projectsCarouselData.map((project: ProjectItem) => {
          const { title, numbers, image, tags } = project;
          // const { title, numbers, image, tags } = project;
          return (
            <div key={title} className="project-item">
              <p className="title">{title}</p>
              {/*{additionalTextAboveNumbers && <p className="additional-text-above-numbers">{additionalTextAboveNumbers}</p>}*/}
              {/*{additionalTextAboveNumbers && <img className="purple-arrow-to-right" src={assets.purpleArrowToEight} alt="arrow" />}*/}
              <div className="numbers">
                {numbers.map(({ number, text, additionalTextOnBottom, additionalTextTopLeft, additionalTextTopRight }) => (
                  <div key={text} className="number-item">
                    <p className="number-item-number">{number}</p>
                    <p className="number-item-text">{text}</p>
                    {additionalTextOnBottom && <div className="additional-text-on-bottom"><p>{additionalTextOnBottom}</p></div>}
                    {additionalTextTopLeft && <div className="additional-text-top-left"><p>{additionalTextTopLeft}</p></div>}
                    {additionalTextTopRight && <div className="additional-text-top-right"><p>{additionalTextTopRight}</p></div>}
                  </div>
                ))}
              </div>
              <div className="image" style={{ backgroundImage: `url(${image})` }} />

              <div className="tags">
                {tags.map((tag) => (
                  <p key={tag}>{tag}</p>
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
      <button onClick={previous}><img src={assets.chvronLeft} alt="arrow left"/></button>
      <button onClick={next}><img src={assets.chvronRight} alt="arrow right"/></button>
    </div>
  );
};
