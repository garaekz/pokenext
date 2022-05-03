import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_ATTRIBUTE_TABLE } from './item-attribute.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_ATTRIBUTE_NAME_TABLE = 'item_attribute_names';

const ItemAttributeNameSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
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

class ItemAttributeName extends Model<InferAttributes<ItemAttributeName>> {
  static associate(models: any) {
    this.belongsTo(models.ItemAttribute, {as: 'item_attribute'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_ATTRIBUTE_NAME_TABLE,
      modelName: 'ItemAttributeName',
      timestamps: false
    }
  }
}
export { ITEM_ATTRIBUTE_NAME_TABLE, ItemAttributeNameSchema, ItemAttributeName }