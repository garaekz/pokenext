import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const ENCOUNTER_METHOD_TABLE = 'encounter_methods';

const EncounterMethodSchema = {
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
  order: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
}

class EncounterMethod extends Model<InferAttributes<EncounterMethod>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_METHOD_TABLE,
      modelName: 'EncounterMethod',
      timestamps: false
    }
  }
}
export { ENCOUNTER_METHOD_TABLE, EncounterMethodSchema, EncounterMethod }