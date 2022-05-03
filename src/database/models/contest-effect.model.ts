import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const CONTEST_EFFECT_TABLE = 'contest_effects';

const ContestEffectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  appeal: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  jam: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
}

class ContestEffect extends Model<InferAttributes<ContestEffect>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CONTEST_EFFECT_TABLE,
      modelName: 'ContestEffect',
      timestamps: false
    }
  }
}
export { CONTEST_EFFECT_TABLE, ContestEffectSchema, ContestEffect }