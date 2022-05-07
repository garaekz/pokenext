import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ENCOUNTER_METHOD_TABLE } from './encounter-method.model';
import { LANGUAGE_TABLE } from './language.model';
const ENCOUNTER_METHOD_NAME_TABLE = 'encounter_method_names';

const EncounterMethodNameSchema = {
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

class EncounterMethodName extends Model<InferAttributes<EncounterMethodName>> {
  static associate(models: any) {
    this.belongsTo(models.EncounterMethod, {as: 'encounter_method'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ENCOUNTER_METHOD_NAME_TABLE,
      modelName: 'EncounterMethodName',
      timestamps: false
    }
  }
}
export { ENCOUNTER_METHOD_NAME_TABLE, EncounterMethodNameSchema, EncounterMethodName }