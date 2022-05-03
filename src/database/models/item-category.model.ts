import { Model, DataTypes, Sequelize } from 'sequelize';
import { ITEM_POCKET_TABLE } from './item-pocket.model';
const ITEM_CATEGORY_TABLE = 'item_categories';

const ItemCategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  pocket_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_POCKET_TABLE,
      key: 'id'
    }
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  }
}

class ItemCategory extends Model {
  static associate(models: any) {
    this.belongsTo(models.ItemPocket, {as: 'pocket'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_CATEGORY_TABLE,
      modelName: 'ItemCategory',
      timestamps: false
    }
  }
}
export { ITEM_CATEGORY_TABLE, ItemCategorySchema, ItemCategory }