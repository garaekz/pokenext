import { Model, DataTypes, Sequelize } from 'sequelize';
import { ITEM_TABLE } from './item.model';
const EVOLUTION_CHAIN_TABLE = 'evolution_chains';

const EvolutionChainSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  baby_trigger_item_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class EvolutionChain extends Model {
  static associate(models: any) {
    this.belongsTo(models.Item, {as: 'trigger_item'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EVOLUTION_CHAIN_TABLE,
      modelName: 'EvolutionChain',
      timestamps: false
    }
  }
}
export { EVOLUTION_CHAIN_TABLE, EvolutionChainSchema, EvolutionChain }