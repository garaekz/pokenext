import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_CONDITION_TABLE } from './encounter-condition.model';
const ENCOUNTER_CONDITION_VALUE_TABLE = 'encounter_condition_values';

const EncounterConditionValueSchema = {
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
  is_default: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  encounter_condition_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ENCOUNTER_CONDITION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class EncounterConditionValue extends Model<InferAttributes<EncounterConditionValue>> {
  static associate(models: any) {
    this.belongsTo(models.EncounterCondition, {as: 'encounter_condition'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_CONDITION_VALUE_TABLE,
      modelName: 'EncounterConditionValue',
      timestamps: false
    }
  }
}
export { ENCOUNTER_CONDITION_VALUE_TABLE, EncounterConditionValueSchema, EncounterConditionValue }