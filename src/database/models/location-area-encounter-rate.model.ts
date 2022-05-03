import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_METHOD_TABLE } from './encounter-method.model';
import { LOCATION_AREA_TABLE } from './location-area.model';
import { VERSION_TABLE } from './version.model';
const LOCATION_AREA_ENCOUNTER_RATE_TABLE = 'location_area_encounter_rates';

const LocationAreaEncounterRateSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  rate: {
    allowNull: false,
    type: DataTypes.INTEGER
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
  encounter_method_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ENCOUNTER_METHOD_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class LocationAreaEncounterRate extends Model<InferAttributes<LocationAreaEncounterRate>> {
  static associate(models: any) {
    this.belongsTo(models.EncounterMethod, {as: 'encounter_method'})
    this.belongsTo(models.LocationArea, {as: 'location_area'})
    this.belongsTo(models.Version, {as: 'version'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LOCATION_AREA_ENCOUNTER_RATE_TABLE,
      modelName: 'LocationAreaEncounterRate',
      timestamps: false
    }
  }
}
export { LOCATION_AREA_ENCOUNTER_RATE_TABLE, LocationAreaEncounterRateSchema, LocationAreaEncounterRate }