import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_TABLE } from './item.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_EFFECT_TEXT_TABLE = 'item_effect_texts';

const ItemEffectTextSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  effect: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  short_effect: {
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

class ItemEffectText extends Model<InferAttributes<ItemEffectText>> {
  static associate(models: any) {
    this.belongsTo(models.Item, {as: 'item'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_EFFECT_TEXT_TABLE,
      modelName: 'ItemEffectText',
      timestamps: false
    }
  }
}
export { ITEM_EFFECT_TEXT_TABLE, ItemEffectTextSchema, ItemEffectText }