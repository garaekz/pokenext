import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_CONDITION_TABLE } from './encounter-condition.model';
import { LANGUAGE_TABLE } from './language.model';
const ENCOUNTER_CONDITION_NAME_TABLE = 'encounter_condition_names';

const EncounterConditionNameSchema = {
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
  encounter_condition_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ENCOUNTER_CONDITION_TABLE,
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

class EncounterConditionName extends Model<InferAttributes<EncounterConditionName>> {
  static associate(models: any) {
    this.belongsTo(models.EncounterCondition, {as: 'encounter_condition'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_CONDITION_NAME_TABLE,
      modelName: 'EncounterConditionName',
      timestamps: false
    }
  }
}
export { ENCOUNTER_CONDITION_NAME_TABLE, EncounterConditionNameSchema, EncounterConditionName }