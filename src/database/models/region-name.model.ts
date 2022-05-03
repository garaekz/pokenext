import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { REGION_TABLE } from './region.model';
import { LANGUAGE_TABLE } from './language.model';
const REGION_NAME_TABLE = 'region_names';

const RegionNameSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  region_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REGION_TABLE,
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

class RegionName extends Model<InferAttributes<RegionName>> {
  static associate(models: any) {
    this.belongsTo(models.Region, {as: 'region'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: REGION_NAME_TABLE,
      modelName: 'RegionName',
      timestamps: false
    }
  }
}
export { REGION_NAME_TABLE, RegionNameSchema, RegionName }