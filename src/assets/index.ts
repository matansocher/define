import assetsConfig from './assetsConfig';

const STORAGE_BASE_URL = 'https://storage.googleapis.com/dkl-portfolio';

// const query_param = `a=${new Date().getTime()}`;

const files: Record<string, string> = {};

assetsConfig.forEach(asset => {
  // files[asset.name] = `${STORAGE_BASE_URL}/define/${asset.file}?${query_param}`;
  files[asset.name] = `${STORAGE_BASE_URL}/define/${asset.file}`;
});

export default files;
