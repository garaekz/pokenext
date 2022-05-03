import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const SUPERCONTEST_EFFECT_TABLE = 'supercontest_effects';

const SuperContestEffectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  appeal: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class SuperContestEffect extends Model<InferAttributes<SuperContestEffect>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SUPERCONTEST_EFFECT_TABLE,
      modelName: 'SuperContestEffect',
      timestamps: false
    }
  }
}
export { SUPERCONTEST_EFFECT_TABLE, SuperContestEffectSchema, SuperContestEffect }