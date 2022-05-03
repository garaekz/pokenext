import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_LEARN_METHOD_TABLE } from './move-learn-method.model';
import { MOVE_TABLE } from './move.model';
import { POKEMON_TABLE } from './pokemon.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const MOVE_POKEMON_TABLE = 'item_pokemon';

const MovePokemonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  order: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  level: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  move_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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
  version_group_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VERSION_GROUP_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  mover_learn_method_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_LEARN_METHOD_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class MovePokemon extends Model<InferAttributes<MovePokemon>> {
  static associate(models: any) {
    this.belongsTo(models.Move, {as: 'item'})
    this.belongsTo(models.Pokemon, {as: 'pokemon'})
    this.belongsTo(models.VersionGroup, {as: 'version_group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_POKEMON_TABLE,
      modelName: 'MovePokemon',
      timestamps: false
    }
  }
}
export { MOVE_POKEMON_TABLE, MovePokemonSchema, MovePokemon }