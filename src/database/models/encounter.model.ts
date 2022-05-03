import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_SLOT_TABLE } from './encounter-slot.model';
import { LOCATION_AREA_TABLE } from './location-area.model';
import { POKEMON_TABLE } from './pokemon.model';
import { VERSION_TABLE } from './version.model';
const ENCOUNTER_TABLE = 'encounters';

const EncounterSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  min_level: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  max_level: {
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
  pokemon_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEMON_TABLE,
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
  encounter_slot_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ENCOUNTER_SLOT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class Encounter extends Model<InferAttributes<Encounter>> {
  static associate(models: any) {
    this.belongsTo(models.Version, {as: 'version'})
    this.belongsTo(models.LocationArea, {as: 'location_area'})
    this.belongsTo(models.EncounterSlot, {as: 'slot'})
    this.belongsTo(models.Pokemon, {as: 'pokemon'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_TABLE,
      modelName: 'Encounter',
      timestamps: false
    }
  }
}
export { ENCOUNTER_TABLE, EncounterSchema, Encounter }