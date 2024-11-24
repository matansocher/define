interface PlatformInfo {
  breakpoint: {
    max: number;
    min: number;
  };
  items: number;
  partialVisibilityGutter: number;
}

interface CarouselConfig {
  responsive: {
    desktop: PlatformInfo;
    tablet: PlatformInfo;
    mobile: PlatformInfo;
  };
}

export const carouselConfig: Record<string, CarouselConfig> = {
  testimonials: {
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1600
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: {
          max: 1600,
          min: 900
        },
        items: 2,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: {
          max: 900,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
    }
  },
  projects: {
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1100
        },
        items: 1,
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: {
          max: 1100,
          min: 700
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: {
          max: 700,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
    }
  },
};
