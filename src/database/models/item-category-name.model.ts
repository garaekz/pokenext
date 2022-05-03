import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_CATEGORY_TABLE } from './item-category.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_CATEGORY_NAME_TABLE = 'item_category_names';

const ItemCategoryNameSchema = {
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
  item_category_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_CATEGORY_TABLE,
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

class ItemCategoryName extends Model<InferAttributes<ItemCategoryName>> {
  static associate(models: any) {
    this.belongsTo(models.ItemCategory, {as: 'habitat'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_CATEGORY_NAME_TABLE,
      modelName: 'ItemCategoryName',
      timestamps: false
    }
  }
}
export { ITEM_CATEGORY_NAME_TABLE, ItemCategoryNameSchema, ItemCategoryName }