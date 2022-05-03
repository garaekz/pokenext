import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { ITEM_TABLE } from './item.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const ITEM_FLAVOR_TEXT_TABLE = 'item_flavor_texts';

const ItemFlavorTextSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  flavor_text: {
    allowNull: false,
    type: DataTypes.STRING
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
  version_group_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VERSION_GROUP_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class ItemFlavorText extends Model<InferAttributes<ItemFlavorText>> {
  static associate(models: any) {
    this.belongsTo(models.Item, {as: 'item'})
    this.belongsTo(models.Language, {as: 'language'})
    this.belongsTo(models.VersionGroup, {as: 'version_group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_FLAVOR_TEXT_TABLE,
      modelName: 'ItemFlavorText',
      timestamps: false
    }
  }
}
export { ITEM_FLAVOR_TEXT_TABLE, ItemFlavorTextSchema, ItemFlavorText }