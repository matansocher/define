interface Asset {
  name: string;
  file: string;
}

const homeAssetsPath = 'home';
const homeAssets: Asset[] = [
  { name: 'homeServices1', file : `${homeAssetsPath}/home-services-1.png` },
  { name: 'homeServices2', file : `${homeAssetsPath}/home-services-2.png` },
  { name: 'homeServices3', file : `${homeAssetsPath}/home-services-3.png` },
  { name: 'homeServices4', file : `${homeAssetsPath}/home-services-4.png` },
  { name: 'homeServices5', file : `${homeAssetsPath}/home-services-5.png` },
  { name: 'homeSolutions1', file : `${homeAssetsPath}/home-solutions-1.png` },
  { name: 'homeSolutions2', file : `${homeAssetsPath}/home-solutions-2.png` },
  { name: 'homeSolutions3', file : `${homeAssetsPath}/home-solutions-3.png` },
  { name: 'homeProject1', file: `${homeAssetsPath}/home-project-1.png` },
  { name: 'homeProject2', file: `${homeAssetsPath}/home-project-2.png` },
  { name: 'homeProject3', file: `${homeAssetsPath}/home-project-3.png` },
  { name: 'homeProject4', file: `${homeAssetsPath}/home-project-4.png` },
  { name: 'homeProject5', file: `${homeAssetsPath}/home-project-5.png` },
  { name: 'homeProject6', file: `${homeAssetsPath}/home-project-6.png` },
  { name: 'homeProject7', file: `${homeAssetsPath}/home-project-7.png` },
  { name: 'homeProject8', file: `${homeAssetsPath}/home-project-8.png` },
];

const partnersLogosPath = 'shared/partners-logos';
const partnersLogos: Asset[] = [
  { name: 'amdocs', file: `${partnersLogosPath}/amdocs.png` },
  { name: 'beacon', file: `${partnersLogosPath}/beacon.png` },
  { name: 'brinkslogo', file: `${partnersLogosPath}/brinkslogo.png` },
  { name: 'controlp', file: `${partnersLogosPath}/controlp.png` },
  { name: 'gool', file: `${partnersLogosPath}/gool.png` },
  { name: 'hippoCampus', file: `${partnersLogosPath}/hippo-campus.png` },
  { name: 'lobby', file: `${partnersLogosPath}/lobby.png` },
  { name: 'Marketer', file: `${partnersLogosPath}/Marketer.png` },
  { name: 'myco', file: `${partnersLogosPath}/myco.png` },
  { name: 'sheCodes', file: `${partnersLogosPath}/she-codes.png` },
  { name: 'sqlink', file: `${partnersLogosPath}/sqlink.png` },
  { name: 'teamStefansky', file: `${partnersLogosPath}/team-stefansky.png` },
  { name: 'teva', file: `${partnersLogosPath}/teva.png` },
  { name: 'tlvMuni', file: `${partnersLogosPath}/tlv-muni.png` },
  { name: 'trustech', file: `${partnersLogosPath}/trustech.png` },
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
