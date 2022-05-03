import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_CATEGORY_TABLE } from './item-category.model';
import { ITEM_FLING_EFFECT_TABLE } from './item-fling-effect.model';
const ITEM_TABLE = 'items';

const ItemSchema = {
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
  cost: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  fling_power: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  category_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_CATEGORY_TABLE,
      key: 'id'
    }
  },
  fling_effect_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_FLING_EFFECT_TABLE,
      key: 'id'
    }
  },
}
class Item extends Model<InferAttributes<Item>> {
  static associate(models: any) {
    this.belongsTo(models.ItemCategory, {as: 'category'});
    this.belongsTo(models.FlingEffect, {as: 'fling_effect'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_TABLE,
      modelName: 'Item',
      timestamps: false
    }
  }
}
export { ITEM_TABLE, ItemSchema, Item }