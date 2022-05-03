import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { POKEMON_TABLE } from './pokemon.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const POKEMON_FORM_TABLE = 'pokemon_forms';

const PokemonFormSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING
  },
  order: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  form_name: {
    allowNull: true,
    type: DataTypes.STRING
  },
  is_default: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  is_battle_only: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  is_mega: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  form_order: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  version_group_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: VERSION_GROUP_TABLE,
      key: 'id'
    }
  },
  pokemon_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: POKEMON_TABLE,
      key: 'id'
    }
  },
}

class PokemonForm extends Model<InferAttributes<PokemonForm>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_FORM_TABLE,
      modelName: 'PokemonForm',
      timestamps: false
    }
  }
}
export { POKEMON_FORM_TABLE, PokemonFormSchema, PokemonForm }