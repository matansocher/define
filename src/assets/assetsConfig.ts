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
  amdocsBlack: `${partnersLogosPath}/amdocs-black.png`,
  beaconBlack: `${partnersLogosPath}/beacon-black.png`,
  beaconWhite: `${partnersLogosPath}/beacon-white.png`,
  bergerWhite: `${partnersLogosPath}/berger-white.png`,
  brinkslogoBlack: `${partnersLogosPath}/brinks-black.png`,
  controlupBlack: `${partnersLogosPath}/controlup-black.png`,
  controlupWhite: `${partnersLogosPath}/controlup-white.png`,
  goolBlack: `${partnersLogosPath}/gool-black.png`,
  hippoCampusBlack: `${partnersLogosPath}/hippo-campus-black.png`,
  hippoCampusColored: `${partnersLogosPath}/hippo-campus-colored.png`,
  lobbyBlack: `${partnersLogosPath}/lobby-black.png`,
  marketerBlack: `${partnersLogosPath}/marketer-black.png`,
  mycoBlack: `${partnersLogosPath}/myco-black.png`,
  sheCodesBlack: `${partnersLogosPath}/she-codes-black.png`,
  sheCodesColored: `${partnersLogosPath}/she-codes-colored.png`,
  sofferWhite: `${partnersLogosPath}/soffer-white.png`,
  sqlinkBlack: `${partnersLogosPath}/sqlink-black.png`,
  teamStefanskyBlack: `${partnersLogosPath}/team-stefansky-black.png`,
  tevaBlack: `${partnersLogosPath}/teva-black.png`,
  tevaColored: `${partnersLogosPath}/teva-colored.png`,
  tlvMuniBlack: `${partnersLogosPath}/tlv-muni-black.png`,
  tlvMuniColored: `${partnersLogosPath}/tlv-muni-colored.png`,
  trustechBlack: `${partnersLogosPath}/trustech-black.png`,
  trustechWhite: `${partnersLogosPath}/trustech-white.png`,
};

const sharedAssetsPath = 'shared';
const sharedAssets = {
  chvronLeft: `${sharedAssetsPath}/chevron-left.png` ,
  chvronRight: `${sharedAssetsPath}/chevron-right.png` ,
  curvedPurpleArrow: `${sharedAssetsPath}/curved-purple-arrow.png` ,
} as const;

export const assetsConfig = {
  ...homeAssets,
  ...partnersLogos,
  ...sharedAssets,
};

export type AssetsKeys = keyof typeof assetsConfig; // Automatically infer all keys
