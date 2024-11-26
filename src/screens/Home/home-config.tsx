import assets from '@assets';

export interface NumberItem {
  number: string;
  text: string;
  additionalTextOnBottom?: string;
  additionalTextTopLeft?: string;
  additionalTextTopRight?: string;
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

interface PartnerLogoItem {
  image: string;
  alt: string;
  additionalStyle?: Record<string, string>;
}

interface HomeConfig {
  numbers: NumberItem[];
  solutions: SolutionItem[];
  services: ServiceItem[];
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
      image: assets.peopleIconBlack,
      title: 'Product Design Workshops',
      text: 'Structured workshops to accelerate feature ideation, testing, and development while aligning key stakeholders from Product, Design, and other departments to streamline requirements and drive collaboration.',
    },
    {
      image: assets.speedLimitBlack,
      title: 'UX Process Optimization',
      text: 'Assessing and refining UX workflows to reduce time-to-market, improve efficiency, and foster better cross-functional alignment.',
    },
    {
      image: assets.lightBulbBlack,
      title: 'UX Expert for Complex Systems',
      text: 'Expertise in designing complex systems and user flows, ensuring intuitive navigation and optimized user experiences for multifaceted products.',
    },
    {
      image: assets.checkMarkBlack,
      title: 'User Research & Testing',
      text: 'Conducting and analyzing user research to validate concepts, inform product decisions, and ensure that design choices are data-driven and user-centric.',
    },
    {
      image: assets.arrowRightBlack,
      title: 'Product and UX Strategy Alignment',
      text: 'Defining and aligning UX deliverable with product goals to ensure that design decisions support business KPIs and enhance user satisfaction.',
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