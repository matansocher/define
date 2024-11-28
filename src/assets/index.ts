import { assetsConfig, AssetsKeys } from './assetsConfig';

const STORAGE_BASE_URL = 'https://storage.googleapis.com/dkl-portfolio';

const query_param = `a=${new Date().getTime()}`;

export const assets: Record<AssetsKeys, string> = Object.fromEntries(
  Object.entries(assetsConfig).map(([key, value]) => [key, `${STORAGE_BASE_URL}/define/${value}?${query_param}`])
  // Object.entries(assetsConfig).map(([key, value]) => [key, `${STORAGE_BASE_URL}/define/${value}`])
) as Record<AssetsKeys, string>;
