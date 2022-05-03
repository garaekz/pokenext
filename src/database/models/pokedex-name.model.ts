import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { POKEDEX_TABLE } from './pokedex.model';
import { LANGUAGE_TABLE } from './language.model';
const POKEDEX_NAME_TABLE = 'pokedex_names';

const PokedexNameSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
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

class PokedexName extends Model<InferAttributes<PokedexName>> {
  static associate(models: any) {
    this.belongsTo(models.Pokedex, {as: 'pokedex'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEDEX_NAME_TABLE,
      modelName: 'PokedexName',
      timestamps: false
    }
  }
}
export { POKEDEX_NAME_TABLE, PokedexNameSchema, PokedexName }