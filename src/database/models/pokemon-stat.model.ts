import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { POKEMON_TABLE } from './pokemon.model';
import { STAT_TABLE } from './stat.model';
const POKEMON_STAT_TABLE = 'pokemon_stat';

const PokemonStatSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  base_stat: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  effort: {
    allowNull: false,
    type: DataTypes.INTEGER
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
  stat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STAT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class PokemonStat extends Model<InferAttributes<PokemonStat>> {
  static associate(models: any) {
    this.belongsTo(models.Stat, {as: 'stat'})
    this.belongsTo(models.Pokemon, {as: 'pokemon'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEMON_STAT_TABLE,
      modelName: 'PokemonStat',
      timestamps: false
    }
  }
}
export { POKEMON_STAT_TABLE, PokemonStatSchema, PokemonStat }