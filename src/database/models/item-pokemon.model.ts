import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ITEM_TABLE } from './item.model';
import { POKEMON_TABLE } from './pokemon.model';
import { VERSION_TABLE } from './version.model';
const ITEM_POKEMON_TABLE = 'item_pokemon';

const ItemPokemonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  rarity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  pokemon_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEMON_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  version_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VERSION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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
}

class ItemPokemon extends Model<InferAttributes<ItemPokemon>> {
  static associate(models: any) {
    this.belongsTo(models.Item, {as: 'item'})
    this.belongsTo(models.Pokemon, {as: 'pokemon'})
    this.belongsTo(models.Version, {as: 'version'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ITEM_POKEMON_TABLE,
      modelName: 'ItemPokemon',
      timestamps: false
    }
  }
}
export { ITEM_POKEMON_TABLE, ItemPokemonSchema, ItemPokemon }