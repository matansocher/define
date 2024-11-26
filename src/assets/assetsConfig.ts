const homeAssetsPath = 'home';
const homeAssets = {
  peopleIconBlack: `${homeAssetsPath}/people-icon-black.png`,
  speedLimitBlack: `${homeAssetsPath}/speed-limit-black.png`,
  lightBulbBlack: `${homeAssetsPath}/light-bulb-black.png`,
  checkMarkBlack: `${homeAssetsPath}/check-mark-black.png`,
  arrowRightBlack: `${homeAssetsPath}/arrow-right-black.png`,
  homeSolutions1: `${homeAssetsPath}/home-solutions-1.png`,
  homeSolutions2: `${homeAssetsPath}/home-solutions-2.png`,
  homeSolutions3: `${homeAssetsPath}/home-solutions-3.png`,
  homeProjectSalaries: `${homeAssetsPath}/home-project-salaries.png`,
  homeProjectEmployeeOnboarding: `${homeAssetsPath}/home-project-employee-onboarding.png`,
  homeProjectMarketer: `${homeAssetsPath}/home-project-marketer.png`,
  homeProjectDigitalEmployee: `${homeAssetsPath}/home-project-digital-employee.png`,
  homeProjectMyco: `${homeAssetsPath}/home-project-myco.png`,
  homeProjectBeacon: `${homeAssetsPath}/home-project-beacon.png`,
  homeProjectEngineeringPermitsDivision: `${homeAssetsPath}/home-project-engineering-permits-division.png`,
  homeProjectAutomatedReports: `${homeAssetsPath}/home-project-automated-reports.png`,
  homeProjectAppDx: `${homeAssetsPath}/home-project-app-dx.png`,
};

const partnersLogosPath = 'shared/partners-logos';
const partnersLogos = {
  amdocs: `${partnersLogosPath}/amdocs.png`,
  beacon: `${partnersLogosPath}/beacon.png`,
  beaconWhite: `${partnersLogosPath}/beacon-white.png`,
  bergerWhite: `${partnersLogosPath}/berger-white.png`,
  brinkslogo: `${partnersLogosPath}/brinkslogo.png`,
  controlup: `${partnersLogosPath}/controlup.png`,
  controlupWhite: `${partnersLogosPath}/controlup-white.png`,
  gool: `${partnersLogosPath}/gool.png`,
  hippoCampus: `${partnersLogosPath}/hippo-campus.png`,
  hippoCampusColored: `${partnersLogosPath}/hippo-campus-colored.png`,
  lobby: `${partnersLogosPath}/lobby.png`,
  marketer: `${partnersLogosPath}/marketer.png`,
  myco: `${partnersLogosPath}/myco.png`,
  sheCodes: `${partnersLogosPath}/she-codes.png`,
  sheCodesColored: `${partnersLogosPath}/she-codes-colored.png`,
  sofferWhite: `${partnersLogosPath}/soffer-white.png`,
  sqlink: `${partnersLogosPath}/sqlink.png`,
  teamStefansky: `${partnersLogosPath}/team-stefansky.png`,
  teva: `${partnersLogosPath}/teva.png`,
  tevaColored: `${partnersLogosPath}/teva-colored.png`,
  tlvMuni: `${partnersLogosPath}/tlv-muni.png`,
  tlvMuniColored: `${partnersLogosPath}/tlv-muni-colored.png`,
  trustech: `${partnersLogosPath}/trustech.png`,
  trustechWhite: `${partnersLogosPath}/trustech-white.png`,
  userFlowzzz: `${partnersLogosPath}/user-flowzzz.png`,
};

const sharedAssetsPath = 'shared';
const sharedAssets = {
  chvronLeft: `${sharedAssetsPath}/chevron-left.png` ,
  chvronRight: `${sharedAssetsPath}/chevron-right.png` ,
  purpleArrowToEight: `${sharedAssetsPath}/purple-arrow-to-right.png` ,
} as const;

export const assetsConfig = {
  ...homeAssets,
  ...partnersLogos,
  ...sharedAssets,
};

export type AssetsKeys = keyof typeof assetsConfig; // Automatically infer all keys
