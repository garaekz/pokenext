import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { POKEDEX_TABLE } from './pokedex.model';
const POKEDEX_DESCRIPTION_TABLE = 'pokedex_descriptions';

const PokedexDescriptionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  pokedex_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEDEX_TABLE,
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

class PokedexDescription extends Model<InferAttributes<PokedexDescription>> {
  static associate(models: any) {
    this.belongsTo(models.Pokedex, {as: 'pokedex'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEDEX_DESCRIPTION_TABLE,
      modelName: 'PokedexDescription',
      timestamps: false
    }
  }
}
export { POKEDEX_DESCRIPTION_TABLE, PokedexDescriptionSchema, PokedexDescription }