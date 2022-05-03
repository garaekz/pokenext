import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LOCATION_AREA_TABLE } from './location-area.model';
import { LANGUAGE_TABLE } from './language.model';
const LOCATION_AREA_NAME_TABLE = 'location_area_names';

const LocationAreaNameSchema = {
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
  location_area_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LOCATION_AREA_TABLE,
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

class LocationAreaName extends Model<InferAttributes<LocationAreaName>> {
  static associate(models: any) {
    this.belongsTo(models.LocationArea, {as: 'location_area'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LOCATION_AREA_NAME_TABLE,
      modelName: 'LocationAreaName',
      timestamps: false
    }
  }
}
export { LOCATION_AREA_NAME_TABLE, LocationAreaNameSchema, LocationAreaName }