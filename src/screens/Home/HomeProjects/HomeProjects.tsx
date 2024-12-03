import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { assets } from '@assets';
import { useIsMobile } from '@hooks';
import { carouselConfig, ProjectItem, projectsCarouselData } from './carousel-config';
import './HomeProjects.scss';

type Props = {}

export const HomeProjects = ({}: Props) => {
  const isMobile = useIsMobile(800);

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
          const { title, additionalTextBaseClass, numbers, image, tags } = project;
          return (
            <div key={title} className="project-item">
              <p className="title">{title}</p>
              <div className="numbers">
                {numbers.map(({ number, text, mobileText, additionalTextOnBottom, additionalTextTopLeft, additionalTextTopRight }, index) => (
                // {numbers.map(({ number, text }) => (
                  <div key={text} className="number-item">
                    {additionalTextTopLeft && <div className={`additional-text additional-text-top-left ${additionalTextBaseClass}-${index+1}`}>
                        <p>{additionalTextTopLeft}</p>
                      {/*<div className="purple-arrow">*/}
                      {/*  <img src={assets.curvedPurpleArrow} alt="arrow" />*/}
                      {/*</div>*/}
                    </div>}
                    {additionalTextTopRight && <div className={`additional-text additional-text-top-right ${additionalTextBaseClass}-${index+1}`}>
                        <p>{additionalTextTopRight}</p>
                      {/*<div className="purple-arrow inverted-arrow">*/}
                      {/*  <img src={assets.curvedPurpleArrow} alt="arrow" />*/}
                      {/*</div>*/}
                    </div>}
                    <div className="number-item-content">
                      <p className="number-item-content-number">{number}</p>
                      <p className="number-item-content-text">{isMobile ? (mobileText || text) : text}</p>
                    </div>
                    {additionalTextOnBottom && <div className={`additional-text additional-text-on-bottom ${additionalTextBaseClass}-${index+1}`}>
                      <p>{additionalTextOnBottom}</p>
                    </div>}
                  </div>
                ))}
              </div>
              <div className="image" style={{ backgroundImage: `url(${image})` }} />

              <div className="tags">
                {tags.map((tag) => <p key={tag}>{tag}</p>)}
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
