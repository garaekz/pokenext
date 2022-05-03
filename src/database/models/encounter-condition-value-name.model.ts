import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_CONDITION_VALUE_TABLE } from './encounter-condition-value.model';
import { LANGUAGE_TABLE } from './language.model';
const ENCOUNTER_CONDITION_VALUE_NAME_TABLE = 'encounter_condition_value_names';

const EncounterConditionValueNameSchema = {
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
  encounter_condition_value_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ENCOUNTER_CONDITION_VALUE_TABLE,
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

class EncounterConditionValueName extends Model<InferAttributes<EncounterConditionValueName>> {
  static associate(models: any) {
    this.belongsTo(models.EncounterConditionValue, {as: 'encounter_condition_value'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_CONDITION_VALUE_NAME_TABLE,
      modelName: 'EncounterConditionValueName',
      timestamps: false
    }
  }
}
export { ENCOUNTER_CONDITION_VALUE_NAME_TABLE, EncounterConditionValueNameSchema, EncounterConditionValueName }