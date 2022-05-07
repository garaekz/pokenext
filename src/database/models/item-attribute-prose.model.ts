import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_ATTRIBUTE_TABLE } from './item-attribute.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_ATTRIBUTE_PROSE_TABLE = 'item_attribute_proses';

const ItemAttributeProseSchema = {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING(1000)
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

class ItemAttributeProse extends Model<InferAttributes<ItemAttributeProse>> {
  static associate(models: any) {
    this.belongsTo(models.ItemAttribute, {as: 'item_attribute'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_ATTRIBUTE_PROSE_TABLE,
      modelName: 'ItemAttributeProse',
      timestamps: false
    }
  }
}
export { ITEM_ATTRIBUTE_PROSE_TABLE, ItemAttributeProseSchema, ItemAttributeProse }