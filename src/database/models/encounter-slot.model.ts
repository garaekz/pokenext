import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_METHOD_TABLE } from './encounter-method.model';
import { VERSION_TABLE } from './version.model';
const ENCOUNTER_SLOT_TABLE = 'encounter_slots';

const EncounterSlotSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  slot: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  rarity: {
    allowNull: false,
    type: DataTypes.INTEGER
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
}

class EncounterSlot extends Model<InferAttributes<EncounterSlot>> {
  static associate(models: any) {
    this.belongsTo(models.EncounterMethod, {as: 'encounter_method'})
    this.belongsTo(models.VersionGroup, {as: 'version_group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_SLOT_TABLE,
      modelName: 'EncounterSlot',
      timestamps: false
    }
  }
}
export { ENCOUNTER_SLOT_TABLE, EncounterSlotSchema, EncounterSlot }