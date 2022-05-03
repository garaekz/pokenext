import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { POKEMON_TABLE } from './pokemon.model';
import { VERSION_TABLE } from './version.model';
const POKEMON_GAME_INDEX_TABLE = 'pokemon_game_index';

const PokemonGameIndexSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  game_index: {
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
}

class PokemonGameIndex extends Model<InferAttributes<PokemonGameIndex>> {
  static associate(models: any) {
    this.belongsTo(models.Pokemon, {as: 'pokemon'})
    this.belongsTo(models.Version, {as: 'version'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_GAME_INDEX_TABLE,
      modelName: 'PokemonGameIndex',
      timestamps: false
    }
  }
}
export { POKEMON_GAME_INDEX_TABLE, PokemonGameIndexSchema, PokemonGameIndex }