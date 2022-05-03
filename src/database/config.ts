import config from '../config/';
const USER = encodeURIComponent(config.DBUser || '');
const PASS = encodeURIComponent(config.DBPassword || '');
const URI = `postgres://${USER}:${PASS}@${config.DBHost}:${config.DBPort}/${config.DBName}`;

export const development = {
  url: URI,
  dialect: 'postgres'
}
export const production = {
  url: URI,
  dialect: 'postgres'
}
