import { assets } from '@assets';

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
  imageAlt: string;
  imageTopPosition: string;
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
      text: 'Evidence-based approach combining deep user insights with strategic design thinking to create solutions that resonate with your target audience',
      additionalHeaderStyle: { maxWidth: '200px' },
      additionalTextStyle: {},
    },
    {
      image: assets.homeSolutions2,
      title: '1:1 Guidance',
      text: 'Get personalized mentorship and expert actionable recommendations to accelerate your success',
      additionalHeaderStyle: { maxWidth: '150px' },
    },
    {
      image: assets.homeSolutions3,
      title: 'Design Sprint Workshops',
      text: 'Bring your team together to rapidly prototype and validate solutions, turning months of work into days of focused, collaborative problem-solving',
    },
  ],
  services: [
    {
      image: assets.peopleIconBlack,
      imageAlt: 'people',
      imageTopPosition: '1px',
      title: 'Product Design Workshops',
      text: 'Structured workshops to accelerate feature ideation, testing, and development while aligning key stakeholders from Product, Design, and other departments to streamline requirements and drive collaboration.',
    },
    {
      image: assets.speedLimitBlack,
      imageAlt: 'speed limit',
      imageTopPosition: '0',
      title: 'UX Process Optimization',
      text: 'Assessing and refining UX workflows to reduce time-to-market, improve efficiency, and foster better cross-functional alignment.',
    },
    {
      image: assets.lightBulbBlack,
      imageAlt: 'light bulb',
      imageTopPosition: '2px',
      title: 'UX Expert for Complex Systems',
      text: 'Expertise in designing complex systems and user flows, ensuring intuitive navigation and optimized user experiences for multifaceted products.',
    },
    {
      image: assets.checkMarkBlack,
      imageAlt: 'check mark',
      imageTopPosition: '4px',
      title: 'User Research & Testing',
      text: 'Conducting and analyzing user research to validate concepts, inform product decisions, and ensure that design choices are data-driven and user-centric.',
    },
    {
      image: assets.arrowRightBlack,
      imageAlt: 'arrow right',
      imageTopPosition: '5px',
      title: 'Product and UX Strategy Alignment',
      text: 'Defining and aligning UX deliverable with product goals to ensure that design decisions support business KPIs and enhance user satisfaction.',
    },
  ],
  partnersLogos: [
    { image: assets.amdocsBlack, alt: 'amdocs logo' },
    { image: assets.tlvMuniBlack, alt: 'tlvMuni logo' },
    { image: assets.controlupBlack, alt: 'controlup logo' },
    { image: assets.sqlinkBlack, alt: 'sqlink logo' },
    { image: assets.brinkslogoBlack, alt: 'brinkslogo logo' },
    { image: assets.tevaBlack, alt: 'teva logo' },
    { image: assets.trustechBlack, alt: 'trustech logo' },
    { image: assets.hippoCampusBlack, alt: 'hippoCampus logo' },
    { image: assets.mycoBlack, alt: 'myco logo' },
    { image: assets.beaconBlack, alt: 'beacon logo' },
    { image: assets.teamStefanskyBlack, alt: 'teamStefansky logo' },
    { image: assets.marketerBlack, alt: 'marketer logo' },
    { image: assets.sheCodesBlack, alt: 'sheCodes logo' },
    { image: assets.goolBlack, alt: 'gool logo' },
    { image: assets.userFlowzzzBlack, alt: 'userFlowzzz logo' },
    { image: assets.lobbyBlack, alt: 'lobby logo' },
  ],
}