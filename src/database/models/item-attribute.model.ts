import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const ITEM_ATTRIBUTE_TABLE = 'item_attributes';

const ItemAttributeSchema = {
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

class ItemAttribute extends Model<InferAttributes<ItemAttribute>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_ATTRIBUTE_TABLE,
      modelName: 'ItemAttribute',
      timestamps: false
    }
  }
}
export { ITEM_ATTRIBUTE_TABLE, ItemAttributeSchema, ItemAttribute }