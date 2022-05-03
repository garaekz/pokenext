import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_TABLE } from './item.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_NAME_TABLE = 'item_names';

const ItemNameSchema = {
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

class ItemName extends Model<InferAttributes<ItemName>> {
  static associate(models: any) {
    this.belongsTo(models.Item, {as: 'item'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_NAME_TABLE,
      modelName: 'ItemName',
      timestamps: false
    }
  }
}
export { ITEM_NAME_TABLE, ItemNameSchema, ItemName }