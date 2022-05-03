import { Model, DataTypes, Sequelize } from 'sequelize';
import { POKEMON_TABLE } from './pokemon.model';
const POKEMON_SPRITE_TABLE = 'pokemon_sprites';

const PokemonSpritesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
  sprites: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  }
}

class PokemonSprites extends Model {
  static associate(models: any) {
    this.belongsTo(models.Pokemon, {as: 'pokemon'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_SPRITE_TABLE,
      modelName: 'PokemonSprites',
      timestamps: false
    }
  }
}
export { POKEMON_SPRITE_TABLE, PokemonSpritesSchema, PokemonSprites }