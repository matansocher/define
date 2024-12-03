import { assets } from '@assets';

export interface NumberItem {
  number: string;
  text: string;
  mobileText?: string;
  additionalTextOnBottom?: string;
  additionalTextTopLeft?: string;
  additionalTextTopRight?: string;
}

export interface ProjectItem {
  image: string;
  title: string;
  additionalTextBaseClass: string;
  numbers: NumberItem[];
  tags: string[];
}

export const projectsCarouselData: ProjectItem[] = [
  {
    title: 'Salary Additions System',
    additionalTextBaseClass: 'salary-additions-additional-text',
    numbers: [
      { number: '2', text: 'People saved in project', additionalTextTopLeft: '*estimation based on the costs of staff usually needed' },
      { number: '98.5%', text: 'Calculations were successfully automated', mobileText: 'Calculations automated' },
      { number: '95%', text: 'Automations approved by 10th of month', mobileText: 'Automations app. by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '12', text: 'Months duration' },
    ],
    image: assets.homeProjectSalaries,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'New Employee Onboarding',
    additionalTextBaseClass: 'employee-onboarding-additional-text',
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
    additionalTextBaseClass: 'marketer-additional-text',
    numbers: [
      { number: '1', text: 'First & Single Designer (Startrup)' },
      { number: '100%', text: 'Reusable Components', additionalTextOnBottom: '(Design System)' },
      { number: '100%', text: 'Accessibility Compliance', additionalTextOnBottom: '66.67% reduction in time' },
      { number: '1', text: 'Scalable Brand Language' },
      // { number: '1', text: 'Scalable Brand Language', additionalTextTopRight: 'Cutting costs and enabling quicker, aligned designs & website' }, // %$$$%%%%%%%%%%%%%%%$$$$$$$$$$$$$$$$$$$$$$$$$$
    ],
    image: assets.homeProjectMarketer,
    tags: ['#UI', '#Research', '#Design System'],
  },
  {
    title: 'Digital Employee Homepage',
    additionalTextBaseClass: 'digital-employee-additional-text',
    numbers: [
      { number: '72%', text: 'Faster Navigation Time', additionalTextTopLeft: 'Compared to their regular navigation', },
      { number: '2', text: 'Superior Navigation Solutions' },
      { number: '2nd', text: 'Conversion on Page for New Widget ', additionalTextOnBottom: '*On the home Page' },
      { number: '160%', text: 'Higher New Widget Conversion Rate', additionalTextOnBottom: '*Compared to search' },
    ],
    image: assets.homeProjectDigitalEmployee,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'MYCO',
    additionalTextBaseClass: 'myco-additional-text',
    numbers: [
      { number: '6', text: 'Months Duration' },
      { number: '30%', text: 'Reduced Purchase Time', additionalTextTopLeft: 'Decrease friction by removing unnecessary fields on form' },
      { number: '40%', text: 'Reduced Design Iteration Time', mobileText: 'Calculations automated', additionalTextOnBottom: '*With rapid prototyping & feedback' },
      { number: '2', text: 'Integrated Products' },
    ],
    image: assets.homeProjectMyco,
    tags: ['#UXUI', '#Research', '#Design System', '#Competitive Analysis'],
  },
  {
    title: 'Beacon',
    additionalTextBaseClass: 'beacon-additional-text',
    numbers: [
      { number: '6', text: 'Months Duration' },
      { number: '80%', text: 'Faster Filtering on Mobile', additionalTextOnBottom: 'As tracked on Log rocket' },
      { number: '10x', text: 'Delivery Scale' },
      { number: '1', text: 'Single Click Image Distribution' },
    ],
    image: assets.homeProjectBeacon,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  {
    title: 'Engineering Permits Division',
    additionalTextBaseClass: 'engineering-permits-division-additional-text',
    numbers: [
      { number: '9', text: 'Consolidated controls into one unified interface', mobileText: 'Controls Unified', additionalTextTopLeft: 'Moved less-used controls to single menu', },
      { number: '20%', text: 'Reduced screen space used by controls', mobileText: 'Reduced screen space' },
      { number: '1', text: 'Cleaner & Better User Interface', additionalTextTopRight: 'Improved functionality with cleaner layout' },
      { number: '13', text: 'Improved interactive features' },
    ],
    image: assets.homeProjectEngineeringPermitsDivision,
    tags: ['#UXUI', '#Research', '#Userflow', '#Redesign'],
  },
  {
    title: 'Automated reports',
    additionalTextBaseClass: 'automated-reports-additional-text',
    numbers: [
      { number: '20.3%', text: 'Quarterly Cumulative Growth in Completions', mobileText: 'Completions Growth Rate', additionalTextTopLeft: 'Total increase in successful exports (Business metric)!' },
      { number: '2m 54s', text: 'Median time to convert' },
      { number: '31.21%', text: 'Conversion Rate', },
      { number: '32.8%', text: 'Average Completion Rate', additionalTextTopRight: '1 in 3 users who begin the export flow complete it successfully.' },
    ],
    image: assets.homeProjectAutomatedReports,
    tags: ['#UXUI', '#Product', '#Research', '#QA'],
  },
  // {
  //   title: 'App DX',
  //   additionalTextBaseClass: 'app-dx-additional-text',
  //   numbers: [
  //     { number: '2', text: 'People saved in project', additionalTextTopLeft: '*estimation based on the costs of staff usually needed' },
  //     { number: '98.5%', text: 'Calculations were successfully automated' },
  //     { number: '95%', text: 'Automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
  //     { number: '12', text: 'Months duration' },
  //   ],
  //   image: assets.homeProjectAppDx,
  //   tags: ['#UXUI', '#Product', '#Research', '#QA'],
  // },
];

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
