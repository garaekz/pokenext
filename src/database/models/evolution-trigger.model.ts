import { Model, DataTypes, Sequelize } from 'sequelize';
const EVOLUTION_TRIGGER_TABLE = 'evolution_triggers';

const EvolutionTriggerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true
  },
}

class EvolutionTrigger extends Model {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EVOLUTION_TRIGGER_TABLE,
      modelName: 'EvolutionTrigger',
      timestamps: false
    }
  }
}
export { EVOLUTION_TRIGGER_TABLE, EvolutionTriggerSchema, EvolutionTrigger }