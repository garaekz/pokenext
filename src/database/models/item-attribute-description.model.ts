import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_ATTRIBUTE_TABLE } from './item-attribute.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_ATTRIBUTE_DESCRIPTION_TABLE = 'item_attribute_descriptions';

const ItemAttributeDescriptionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
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

class ItemAttributeDescription extends Model<InferAttributes<ItemAttributeDescription>> {
  static associate(models: any) {
    this.belongsTo(models.ItemAttribute, {as: 'item_attribute'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_ATTRIBUTE_DESCRIPTION_TABLE,
      modelName: 'ItemAttributeDescription',
      timestamps: false
    }
  }
}
export { ITEM_ATTRIBUTE_DESCRIPTION_TABLE, ItemAttributeDescriptionSchema, ItemAttributeDescription }