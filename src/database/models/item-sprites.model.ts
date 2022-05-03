import { Model, DataTypes, Sequelize } from 'sequelize';
import { ITEM_TABLE } from './item.model';
const ITEM_SPRITE_TABLE = 'item_sprites';

const ItemSpritesSchema = {
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
  sprites: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  }
}

class ItemSprites extends Model {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_SPRITE_TABLE,
      modelName: 'ItemSprites',
      timestamps: false
    }
  }
}
export { ITEM_SPRITE_TABLE, ItemSpritesSchema, ItemSprites }