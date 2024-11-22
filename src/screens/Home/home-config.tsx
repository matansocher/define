import assets from '@assets';

interface NumberItem {
  number: string;
  text: string;
  additionalTextOnBottom?: string;
}

interface SolutionItem {
  image: string;
  title: string;
  text: string;
  additionalHeaderStyle?: Record<string, string>;
  additionalTextStyle?: Record<string, string>;
}

interface ServiceItem {
  image: string;
  title: string;
  text: string;
}

interface ProjectItem {
  image: string;
  title: string;
  numbers: NumberItem[];
  additionalTextAboveNumbers?: string;
  tags: string[];
}

interface PartnerLogoItem {
  image: string;
  alt: string;
  additionalStyle?: Record<string, string>;
}

interface HomeConfig {
  numbers: NumberItem[];
  solutions: SolutionItem[];
  services: ServiceItem[];
  projects: ProjectItem[];
  partnersLogos: PartnerLogoItem[];
}

export const homeConfig: HomeConfig = {
  numbers: [
    {
      number: '+30',
      text: `Successful Projects`,
    },
    {
      number: '+20',
      text: `Satisfied Customers`,
    },
    {
      number: '+45',
      text: `Improvement Processes Implemented`,
    }
  ],
  solutions: [
    {
      image: assets.homeSolutions1,
      title: 'Product Design & Research',
      text: 'Details on how to improve processes and use research to save money',
      additionalHeaderStyle: { maxWidth: '250px' },
      additionalTextStyle: {},
    },
    {
      image: assets.homeSolutions2,
      title: '1:1 Guidance',
      text: 'Details on how to improve processes and use research to save money',
      additionalHeaderStyle: { maxWidth: '150px' },
    },
    {
      image: assets.homeSolutions3,
      title: 'Design Sprint Workshops',
      text: 'Details on how to improve processes and use research to save money',
    },
  ],
  services: [
    {
      image: assets.homeServices1,
      title: 'Product Design Workshops',
      text: 'Structured workshops to accelerate feature ideation, testing, and development while aligning key stakeholders from Product, Design, and other departments to streamline requirements and drive collaboration.',
    },
    {
      image: assets.homeServices2,
      title: 'UX Process Optimization',
      text: 'Assessing and refining UX workflows to reduce time-to-market, improve efficiency, and foster better cross-functional alignment.',
    },
    {
      image: assets.homeServices3,
      title: 'UX Expert for Complex Systems',
      text: 'Expertise in designing complex systems and user flows, ensuring intuitive navigation and optimized user experiences for multifaceted products.',
    },
    {
      image: assets.homeServices4,
      title: 'User Research & Testing',
      text: 'Conducting and analyzing user research to validate concepts, inform product decisions, and ensure that design choices are data-driven and user-centric.',
    },
    {
      image: assets.homeServices5,
      title: 'Product and UX Strategy Alignment',
      text: 'Defining and aligning UX deliverable with product goals to ensure that design decisions support business KPIs and enhance user satisfaction.',
    },
  ],
  projects: [
    {
      title: 'Salary Additions system',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject1,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
    {
      title: 'New Employee Onboarding',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject2,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
    {
      title: 'Marketer',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject3,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
    {
      title: '$$$$$$$$',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject4,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
    {
      title: '$$$$$$$$$',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject5,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
    {
      title: '$$$$$$$$$$',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject6,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
    {
      title: '$$$$$$$$$$$$',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject7,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
    {
      title: '$$$$$$$$$$$$$',
      additionalTextAboveNumbers: '*estimation based on the costs of staff usually needed ',
      numbers: [
        { number: '2', text: 'people saved in project' },
        { number: '98.5%', text: 'of calculations were successfully automated' },
        { number: '95%', text: 'automations approved by 10th of month', additionalTextOnBottom: '66.67% reduction in time' },
        { number: '12', text: 'months duration' },
      ],
      image: assets.homeProject8,
      tags: ['#UXUI', '#Product', '#Research', '#QA'],
    },
  ],
  partnersLogos: [
    { image: assets.amdocs, alt: 'amdocs logo' },
    { image: assets.beacon, alt: 'beacon logo' },
    { image: assets.brinkslogo, alt: 'brinkslogo logo' },
    { image: assets.controlup, alt: 'controlup logo' },
    { image: assets.gool, alt: 'gool logo' },
    { image: assets.hippoCampus, alt: 'hippoCampus logo' },
    { image: assets.lobby, alt: 'lobby logo' },
    { image: assets.marketer, alt: 'marketer logo' },
    { image: assets.myco, alt: 'myco logo' },
    { image: assets.sheCodes, alt: 'sheCodes logo' },
    { image: assets.sqlink, alt: 'sqlink logo' },
    { image: assets.teamStefansky, alt: 'teamStefansky logo' },
    { image: assets.teva, alt: 'teva logo' },
    { image: assets.tlvMuni, alt: 'tlvMuni logo' },
    { image: assets.trustech, alt: 'trustech logo' },
    { image: assets.userFlowzzz, alt: 'userFlowzzz logo' },
  ],
}