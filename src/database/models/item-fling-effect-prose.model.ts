import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_FLING_EFFECT_TABLE } from './item-fling-effect.model';
import { LANGUAGE_TABLE } from './language.model';
const ITEM_FLING_EFFECT_PROSE_TABLE = 'item_fling_effect_proses';

const ItemFlingEffectProseSchema = {
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
  item_fling_effect_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_FLING_EFFECT_TABLE,
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

class ItemFlingEffectProse extends Model<InferAttributes<ItemFlingEffectProse>> {
  static associate(models: any) {
    this.belongsTo(models.ItemFlingEffect, {as: 'contest_effect'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_FLING_EFFECT_PROSE_TABLE,
      modelName: 'ItemFlingEffectProse',
      timestamps: false
    }
  }
}
export { ITEM_FLING_EFFECT_PROSE_TABLE, ItemFlingEffectProseSchema, ItemFlingEffectProse }