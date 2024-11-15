import { STORAGE_BASE_URL } from '../core/config';
import assetsConfig from './assetsConfig';

const query_param = `a=${new Date().getTime()}`;

const files: Record<string, string> = {};

assetsConfig.forEach(asset => {
  // files[asset.name] = config.USE_CDN ? `${config.STORAGE_BASE_URL}/${asset.file}?${query_param}` : require(`./${asset.file}`);
  // files[asset.name] = `${config.STORAGE_BASE_URL}/${asset.file}`;
  // files[asset.name] = `${config.STORAGE_BASE_URL}/new/${asset.file}`;
  files[asset.name] = `${STORAGE_BASE_URL}/define/${asset.file}?${query_param}`;
});

export default files;
