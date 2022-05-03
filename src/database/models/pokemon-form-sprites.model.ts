import { Model, DataTypes, Sequelize } from 'sequelize';
import { POKEMON_FORM_TABLE } from './pokemon-form.model';
const POKEMON_FORM_SPRITE_TABLE = 'pokemon_form_sprites';

const PokemonFormSpritesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
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
  sprites: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  }
}

class PokemonFormSprites extends Model {
  static associate(models: any) {
    this.belongsTo(models.PokemonForm, {as: 'pokemon_form'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_FORM_SPRITE_TABLE,
      modelName: 'PokemonFormSprites',
      timestamps: false
    }
  }
}
export { POKEMON_FORM_SPRITE_TABLE, PokemonFormSpritesSchema, PokemonFormSprites }