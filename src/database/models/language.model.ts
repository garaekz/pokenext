import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
const LANGUAGE_TABLE = 'languages';

const LanguageSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  iso639: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  iso3166: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  official: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  order: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}

class Language extends Model<InferAttributes<Language>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LANGUAGE_TABLE,
      modelName: 'Language',
      timestamps: false
    }
  }
}
export { LANGUAGE_TABLE, LanguageSchema, Language }