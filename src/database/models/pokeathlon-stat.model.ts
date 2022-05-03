import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const POKEATHLON_STAT_TABLE = 'pokeathlonstats';

const PokeathlonStatSchema = {
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
}

class PokeathlonStat extends Model<InferAttributes<PokeathlonStat>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEATHLON_STAT_TABLE,
      modelName: 'PokeathlonStat',
      timestamps: false
    }
  }
}
export { POKEATHLON_STAT_TABLE, PokeathlonStatSchema, PokeathlonStat }