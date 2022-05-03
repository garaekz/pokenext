import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
import { ITEM_TABLE } from './item.model';
const ITEM_GAME_INDEX_TABLE = 'item_game_index';

const ItemGameIndexSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  game_index: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  item_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  generation_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class ItemGameIndex extends Model<InferAttributes<ItemGameIndex>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'})
    this.belongsTo(models.Item, {as: 'item'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_GAME_INDEX_TABLE,
      modelName: 'ItemGameIndex',
      timestamps: false
    }
  }
}
export { ITEM_GAME_INDEX_TABLE, ItemGameIndexSchema, ItemGameIndex }