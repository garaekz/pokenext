import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_POCKET_TABLE } from './item-pocket.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_POCKET_NAME_TABLE = 'item_pocket_names';

const ItemPocketNameSchema = {
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
  item_pocket_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_POCKET_TABLE,
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

class ItemPocketName extends Model<InferAttributes<ItemPocketName>> {
  static associate(models: any) {
    this.belongsTo(models.ItemPocket, {as: 'item_pocket'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_POCKET_NAME_TABLE,
      modelName: 'ItemPocketName',
      timestamps: false
    }
  }
}
export { ITEM_POCKET_NAME_TABLE, ItemPocketNameSchema, ItemPocketName }