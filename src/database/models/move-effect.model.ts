import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_EFFECT_TABLE = 'move_effects';

const MoveEffectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  }
}

class MoveEffect extends Model<InferAttributes<MoveEffect>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_EFFECT_TABLE,
      modelName: 'MoveEffect',
      timestamps: false
    }
  }
}
export { MOVE_EFFECT_TABLE, MoveEffectSchema, MoveEffect }