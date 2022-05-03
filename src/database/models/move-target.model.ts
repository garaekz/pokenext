import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_TARGET_TABLE = 'move_targets';

const MoveTargetSchema = {
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

class MoveTarget extends Model<InferAttributes<MoveTarget>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_TARGET_TABLE,
      modelName: 'MoveTarget',
      timestamps: false
    }
  }
}
export { MOVE_TARGET_TABLE, MoveTargetSchema, MoveTarget }