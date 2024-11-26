interface Asset {
  name: string;
  file: string;
}

const homeAssetsPath = 'home';
const homeAssets: Asset[] = [
  { name: 'peopleIconBlack', file : `${homeAssetsPath}/people-icon-black.png` },
  { name: 'speedLimitBlack', file : `${homeAssetsPath}/speed-limit-black.png` },
  { name: 'lightBulbBlack', file : `${homeAssetsPath}/light-bulb-black.png` },
  { name: 'checkMarkBlack', file : `${homeAssetsPath}/check-mark-black.png` },
  { name: 'arrowRightBlack', file : `${homeAssetsPath}/arrow-right-black.png` },
  { name: 'homeSolutions1', file : `${homeAssetsPath}/home-solutions-1.png` },
  { name: 'homeSolutions2', file : `${homeAssetsPath}/home-solutions-2.png` },
  { name: 'homeSolutions3', file : `${homeAssetsPath}/home-solutions-3.png` },
  { name: 'homeProjectSalaries', file: `${homeAssetsPath}/home-project-salaries.png` },
  { name: 'homeProjectEmployeeOnboarding', file: `${homeAssetsPath}/home-project-employee-onboarding.png` },
  { name: 'homeProjectMarketer', file: `${homeAssetsPath}/home-project-marketer.png` },
  { name: 'homeProjectDigitalEmployee', file: `${homeAssetsPath}/home-project-digital-employee.png` },
  { name: 'homeProjectMyco', file: `${homeAssetsPath}/home-project-myco.png` },
  { name: 'homeProjectBeacon', file: `${homeAssetsPath}/home-project-beacon.png` },
  { name: 'homeProjectEngineeringPermitsDivision', file: `${homeAssetsPath}/home-project-engineering-permits-division.png` },
  { name: 'homeProjectAutomatedReports', file: `${homeAssetsPath}/home-project-automated-reports.png` },
  { name: 'homeProjectAppDx', file: `${homeAssetsPath}/home-project-app-dx.png` },
];

const partnersLogosPath = 'shared/partners-logos';
const partnersLogos: Asset[] = [
  { name: 'amdocs', file: `${partnersLogosPath}/amdocs.png` },
  { name: 'beacon', file: `${partnersLogosPath}/beacon.png` },
  { name: 'beaconWhite', file: `${partnersLogosPath}/beacon-white.png` },
  { name: 'bergerWhite', file: `${partnersLogosPath}/berger-white.png` },
  { name: 'brinkslogo', file: `${partnersLogosPath}/brinkslogo.png` },
  { name: 'controlup', file: `${partnersLogosPath}/controlup.png` },
  { name: 'controlupWhite', file: `${partnersLogosPath}/controlup-white.png` },
  { name: 'gool', file: `${partnersLogosPath}/gool.png` },
  { name: 'hippoCampus', file: `${partnersLogosPath}/hippo-campus.png` },
  { name: 'hippoCampusColored', file: `${partnersLogosPath}/hippo-campus-colored.png` },
  { name: 'lobby', file: `${partnersLogosPath}/lobby.png` },
  { name: 'marketer', file: `${partnersLogosPath}/marketer.png` },
  { name: 'myco', file: `${partnersLogosPath}/myco.png` },
  { name: 'sheCodes', file: `${partnersLogosPath}/she-codes.png` },
  { name: 'sheCodesColored', file: `${partnersLogosPath}/she-codes-colored.png` },
  { name: 'sofferWhite', file: `${partnersLogosPath}/soffer-white.png` },
  { name: 'sqlink', file: `${partnersLogosPath}/sqlink.png` },
  { name: 'teamStefansky', file: `${partnersLogosPath}/team-stefansky.png` },
  { name: 'teva', file: `${partnersLogosPath}/teva.png` },
  { name: 'tevaColored', file: `${partnersLogosPath}/teva-colored.png` },
  { name: 'tlvMuni', file: `${partnersLogosPath}/tlv-muni.png` },
  { name: 'tlvMuniColored', file: `${partnersLogosPath}/tlv-muni-colored.png` },
  { name: 'trustech', file: `${partnersLogosPath}/trustech.png` },
  { name: 'trustechWhite', file: `${partnersLogosPath}/trustech-white.png` },
  { name: 'userFlowzzz', file: `${partnersLogosPath}/user-flowzzz.png` },
];

const sharedAssetsPath = 'shared';
const sharedAssets: Asset[] = [
  { name: 'chvronLeft', file: `${sharedAssetsPath}/chevron-left.png`},
  { name: 'chvronRight', file: `${sharedAssetsPath}/chevron-right.png`},
  { name: 'purpleArrowToEight', file: `${sharedAssetsPath}/purple-arrow-to-right.png`},
];

const assetsConfig: Asset[] = [
  ...homeAssets,
  ...partnersLogos,
  ...sharedAssets,
];

export default assetsConfig;
