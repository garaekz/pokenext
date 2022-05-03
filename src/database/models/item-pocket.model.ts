import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const ITEM_POCKET_TABLE = 'item_pockets';

const ItemPocketSchema = {
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

class ItemPocket extends Model<InferAttributes<ItemPocket>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_POCKET_TABLE,
      modelName: 'ItemPocket',
      timestamps: false
    }
  }
}
export { ITEM_POCKET_TABLE, ItemPocketSchema, ItemPocket }