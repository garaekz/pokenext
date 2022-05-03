import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const ENCOUNTER_CONDITION_TABLE = 'encounter_conditions';

const EncounterConditionSchema = {
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
}

class EncounterCondition extends Model<InferAttributes<EncounterCondition>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_CONDITION_TABLE,
      modelName: 'EncounterCondition',
      timestamps: false
    }
  }
}
export { ENCOUNTER_CONDITION_TABLE, EncounterConditionSchema, EncounterCondition }