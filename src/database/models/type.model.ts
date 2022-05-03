import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
import { MOVE_DAMAGE_CLASS_TABLE } from './move-damage-class.model';
const TYPE_TABLE = 'types';

const TypeSchema = {
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
  move_damage_class_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_DAMAGE_CLASS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class Type extends Model<InferAttributes<Type>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'});
    this.belongsTo(models.MoveDamageClass, {as: 'move_damage_class'});
    this.belongsToMany(models.Pokemon, {
      as: 'pokemons',
      through: models.PokemonType,
      foreignKey: 'typeId',
      otherKey: 'pokemonId'
    });
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: TYPE_TABLE,
      modelName: 'Type',
      timestamps: false
    }
  }
}
export { TYPE_TABLE, TypeSchema, Type }