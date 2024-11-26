import assets from '@assets';
import { NumberItem } from '../home-config';

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

interface ProjectItem {
  image: string;
  title: string;
  numbers: NumberItem[];
  tags: string[];
}

export const projectsCarouselData: ProjectItem[] = [
  {
    title: 'Salary Additions System',
    numbers: [
      { number: '2', text: 'People saved in project', additionalTextTopLeft: '*estimation based on the costs of staff usually needed' },
      { number: '98.5%', text: 'Calculations were successfully automated' },
      { number: '95%', text: 'Automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '12', text: 'Months duration' },
    ],
    image: assets.homeProjectSalaries,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'New Employee Onboarding',
    numbers: [
      { number: '4', text: 'Months Duration', additionalTextTopLeft: '*estimation based on the costs of staff usually needed' },
      { number: '100%', text: 'Accessibility Compliance' },
      { number: '50%', text: 'Reduced approval cycles', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '40$', text: 'Reduced decision-making time', additionalTextOnBottom: '*through comprehensive research findings' },
    ],
    image: assets.homeProjectEmployeeOnboarding,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'Marketer',
    numbers: [
      { number: '1', text: 'First & Single Designer (Startrup)' },
      { number: '100%', text: 'Reusable Components', additionalTextOnBottom: '(Design System)' },
      { number: '100%', text: 'Accessibility Compliance', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '1', text: 'Scalable Brand Language', additionalTextTopRight: 'Cutting costs and enabling quicker, aligned designs & website' },
    ],
    image: assets.homeProjectMarketer,
    tags: ['#UI', '#Research', '#Design System'],
  },
  {
    title: 'Digital Employee Homepage',
    numbers: [
      { number: '2', text: 'People saved in project', additionalTextTopLeft: '*estimation based on the costs of staff usually needed', },
      { number: '98.5%', text: 'Calculations were successfully automated' },
      { number: '95%', text: 'Automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '12', text: 'Months duration' },
    ],
    image: assets.homeProjectDigitalEmployee,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'MYCO',
    numbers: [
      { number: '6', text: 'Months Duration' },
      { number: '30%', text: 'Reduced Purchase Time', additionalTextTopLeft: 'Decrease friction by removing unnecessary fields on form' },
      { number: '40%', text: 'Reduced Design Iteration Time', additionalTextOnBottom: '*With rapid prototyping & feedback' },
      { number: '2', text: 'Integrated Products' },
    ],
    image: assets.homeProjectMyco,
    tags: ['#UXUI', '#Research', '#Design System', '#Competitive Analysis'],
  },
  {
    title: 'Beacon',
    numbers: [
      { number: '2', text: 'People saved in project', additionalTextTopLeft: '*estimation based on the costs of staff usually needed' },
      { number: '98.5%', text: 'Calculations were successfully automated' },
      { number: '95%', text: 'Automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '12', text: 'Months duration' },
    ],
    image: assets.homeProjectBeacon,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'Engineering Permits division',
    numbers: [
      { number: '9', text: 'Consolidated controls into one unified interface', additionalTextTopLeft: 'Moved less-used controls to single menu', },
      { number: '20%', text: 'Reduced screen space used by controls ' },
      { number: '1', text: 'Cleaner & Better User Interface', additionalTextTopRight: 'Improved functionality with cleaner layout' },
      { number: '13', text: 'Improved interactive features' },
    ],
    image: assets.homeProjectEngineeringPermitsDivision,
    tags: ['#UXUI', '#Research', '#Userflow', '#Redesign'],
  },
  {
    title: 'Automated reports',
    numbers: [
      { number: '20.3%', text: 'Quarterly Cumulative Growth in Completions', additionalTextTopLeft: 'Total increase in successful exports (Business metric)!' },
      { number: '2m 54s', text: 'Median time to convert' },
      { number: '31.21%', text: 'Conversion Rate', },
      { number: '32.8%', text: 'Average Completion Rate', additionalTextTopRight: '1 in 3 users who begin the export flow complete it successfully.' },
    ],
    image: assets.homeProjectAutomatedReports,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'App DX',
    numbers: [
      { number: '2', text: 'People saved in project', additionalTextTopLeft: '*estimation based on the costs of staff usually needed' },
      { number: '98.5%', text: 'Calculations were successfully automated' },
      { number: '95%', text: 'Automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '12', text: 'Months duration' },
    ],
    image: assets.homeProjectAppDx,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
];
