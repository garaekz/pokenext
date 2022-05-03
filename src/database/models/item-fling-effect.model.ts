import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const ITEM_FLING_EFFECT_TABLE = 'item_fling_effects';

const ItemFlingEffectSchema = {
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

class ItemFlingEffect extends Model<InferAttributes<ItemFlingEffect>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_FLING_EFFECT_TABLE,
      modelName: 'ItemFlingEffect',
      timestamps: false
    }
  }
}
export { ITEM_FLING_EFFECT_TABLE, ItemFlingEffectSchema, ItemFlingEffect }