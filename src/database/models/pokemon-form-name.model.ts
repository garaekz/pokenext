import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { POKEMON_FORM_TABLE } from './pokemon-form.model';
const POKEMON_FORM_NAME_TABLE = 'pokemon_form_names';

const PokemonFormNameSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  pokemon_name: {
    allowNull: false,
    type: DataTypes.STRING
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

class PokemonFormName extends Model<InferAttributes<PokemonFormName>> {
  static associate(models: any) {
    this.belongsTo(models.PokemonForm, {as: 'pokemon_form'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_FORM_NAME_TABLE,
      modelName: 'PokemonFormName',
      timestamps: false
    }
  }
}
export { POKEMON_FORM_NAME_TABLE, PokemonFormNameSchema, PokemonFormName }