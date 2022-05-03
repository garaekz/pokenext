import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_ATTRIBUTE_TABLE } from './item-attribute.model';
import { ITEM_TABLE } from './item.model';
const ITEM_ATTRIBUTE_MAP_TABLE = 'item_attribute_maps';

const ItemAttributeMapSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
  item_attribute_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_ATTRIBUTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class ItemAttributeMap extends Model<InferAttributes<ItemAttributeMap>> {
  static associate(models: any) {
    this.belongsTo(models.ItemAttribute, {as: 'item_attribute'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_ATTRIBUTE_MAP_TABLE,
      modelName: 'ItemAttributeMap',
      timestamps: false
    }
  }
}
export { ITEM_ATTRIBUTE_MAP_TABLE, ItemAttributeMapSchema, ItemAttributeMap }