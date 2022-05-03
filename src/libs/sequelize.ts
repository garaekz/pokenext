import { Sequelize } from 'sequelize';
import config from '../config';
import setupModels from '../database/models';

const USER = encodeURIComponent(config.DBUser || '');
const PASS = encodeURIComponent(config.DBPassword || '');
const URI = `postgres://${USER}:${PASS}@${config.DBHost}:${config.DBPort}/${config.DBName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

export default sequelize;
