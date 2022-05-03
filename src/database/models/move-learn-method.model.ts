import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_LEARN_METHOD_TABLE = 'move_learn_methods';

const MoveLearnMethodSchema = {
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

class MoveLearnMethod extends Model<InferAttributes<MoveLearnMethod>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_LEARN_METHOD_TABLE,
      modelName: 'MoveLearnMethod',
      timestamps: false
    }
  }
}
export { MOVE_LEARN_METHOD_TABLE, MoveLearnMethodSchema, MoveLearnMethod }