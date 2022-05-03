import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
import { POKEMON_FORM_TABLE } from './pokemon-form.model';
const GENERATION_POKEMON_FORM_TABLE = 'generation_pokemonform';

const GenerationPokemonFormSchema = {
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
  generation_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  pokemon_form_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEMON_FORM_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class GenerationPokemonForm extends Model<InferAttributes<GenerationPokemonForm>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'})
    this.belongsTo(models.Type, {as: 'type'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: GENERATION_POKEMON_FORM_TABLE,
      modelName: 'GenerationPokemonForm',
      timestamps: false
    }
  }
}
export { GENERATION_POKEMON_FORM_TABLE, GenerationPokemonFormSchema, GenerationPokemonForm }