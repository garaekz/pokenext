import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { POKEMON_TABLE } from './pokemon.model';
import { TYPE_TABLE } from './type.model';
const POKEMON_TYPE_TABLE = 'pokemon_type';

const PokemonTypeSchema = {
  pokemon_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEMON_TABLE,
      key: 'id'
    }
  },
  type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    }
  },
  slot: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
}

class PokemonType extends Model<InferAttributes<PokemonType>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_TYPE_TABLE,
      modelName: 'PokemonType',
      timestamps: false
    }
  }
}
export { POKEMON_TYPE_TABLE, PokemonTypeSchema, PokemonType }