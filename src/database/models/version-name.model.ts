import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { VERSION_TABLE } from './version.model';
const VERSION_NAME_TABLE = 'version_names';

const VersionNameSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  version_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VERSION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  language_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LANGUAGE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class VersionName extends Model<InferAttributes<VersionName>> {
  static associate(models: any) {
    this.belongsTo(models.Version, {as: 'version'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: VERSION_NAME_TABLE,
      modelName: 'VersionName',
      timestamps: false
    }
  }
}
export { VERSION_NAME_TABLE, VersionNameSchema, VersionName }