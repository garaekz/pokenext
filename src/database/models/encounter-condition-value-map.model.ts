import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_CONDITION_VALUE_TABLE } from './encounter-condition-value.model';
import { ENCOUNTER_TABLE } from './encounter.model';
const ENCOUNTER_CONDITION_VALUE_MAP_TABLE = 'encounter_condition_value_maps';

const EncounterConditionValueMapSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  encounter_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ENCOUNTER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  encounter_condition_value_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ENCOUNTER_CONDITION_VALUE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class EncounterConditionValueMap extends Model<InferAttributes<EncounterConditionValueMap>> {
  static associate(models: any) {
    this.belongsTo(models.EncounterConditionValue, {as: 'encounter_condition_value'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_CONDITION_VALUE_MAP_TABLE,
      modelName: 'EncounterConditionValueMap',
      timestamps: false
    }
  }
}
export { ENCOUNTER_CONDITION_VALUE_MAP_TABLE, EncounterConditionValueMapSchema, EncounterConditionValueMap }