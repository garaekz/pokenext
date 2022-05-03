import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { PALPARK_AREA_TABLE } from './palpark-area.model';
const PALPARK_AREA_NAME_TABLE = 'palpark_area_names';

const PalParkAreaNameSchema = {
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
  palpark_area_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PALPARK_AREA_TABLE,
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

class PalParkAreaName extends Model<InferAttributes<PalParkAreaName>> {
  static associate(models: any) {
    this.belongsTo(models.PalParkArea, {as: 'palpark_area'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: PALPARK_AREA_NAME_TABLE,
      modelName: 'PalParkAreaName',
      timestamps: false
    }
  }
}
export { PALPARK_AREA_NAME_TABLE, PalParkAreaNameSchema, PalParkAreaName }