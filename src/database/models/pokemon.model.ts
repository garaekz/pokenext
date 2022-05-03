import { Model, DataTypes, Sequelize } from 'sequelize';
import config from '../../config';
import { SPECIE_TABLE } from './specie.model';
const POKEMON_TABLE = 'pokemons';

const PokemonSchema = {
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
  order: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  height: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  weight: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  base_experience: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  is_default: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  specie_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  // _link: {
  //   type: DataTypes.VIRTUAL,
  //   get(): any {
  //     return `${config.BaseURL}pokemons/${(<any>this).id}`;
  //   },
  //   set(value: any) {
  //     throw new Error('You can\'t set the link!');
  //   }
  // },
}

class Pokemon extends Model {
  static associate(models: any) {
    this.belongsTo(models.Specie, {as: 'specie'});
    this.belongsToMany(models.Type, {
      as: 'types',
      through: models.PokemonType,
      foreignKey: 'pokemon_id',
      otherKey: 'type_id'
    });
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_TABLE,
      modelName: 'Pokemon',
      timestamps: false
    }
  }
}
export { POKEMON_TABLE, PokemonSchema, Pokemon }