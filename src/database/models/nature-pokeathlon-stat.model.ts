import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { NATURE_TABLE } from './nature.model';
import { POKEATHLON_STAT_TABLE } from './pokeathlon-stat.model';
const NATURE_POKEATHLON_STAT_TABLE = 'nature_pokeathlonstat';

const NaturePokeathlonStatSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  max_change: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  nature_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: NATURE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  pokeathlon_stat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEATHLON_STAT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class NaturePokeathlonStat extends Model<InferAttributes<NaturePokeathlonStat>> {
  static associate(models: any) {
    this.belongsTo(models.Nature, {as: 'nature'})
    this.belongsTo(models.PokeathlonStat, {as: 'pokeathlon_stat'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tablePokeathlonStat: NATURE_POKEATHLON_STAT_TABLE,
      modelPokeathlonStat: 'NaturePokeathlonStat',
      timestamps: false
    }
  }
}
export { NATURE_POKEATHLON_STAT_TABLE, NaturePokeathlonStatSchema, NaturePokeathlonStat }