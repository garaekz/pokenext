import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { EVOLUTION_TRIGGER_TABLE } from './evolution-trigger.model';
import { LANGUAGE_TABLE } from './language.model';
const EVOLUTION_TRIGGER_NAME_TABLE = 'evolution_trigger_names';

const EvolutionTriggerNameSchema = {
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
  evolution_trigger_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EVOLUTION_TRIGGER_TABLE,
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

class EvolutionTriggerName extends Model<InferAttributes<EvolutionTriggerName>> {
  static associate(models: any) {
    this.belongsTo(models.EvolutionTrigger, {as: 'evolution_trigger'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EVOLUTION_TRIGGER_NAME_TABLE,
      modelName: 'EvolutionTriggerName',
      timestamps: false
    }
  }
}
export { EVOLUTION_TRIGGER_NAME_TABLE, EvolutionTriggerNameSchema, EvolutionTriggerName }