import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_BATTLESTYLE_TABLE = 'move_battlestyles';

const MoveBattlestyleSchema = {
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

class MoveBattlestyle extends Model<InferAttributes<MoveBattlestyle>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_BATTLESTYLE_TABLE,
      modelName: 'MoveBattlestyle',
      timestamps: false
    }
  }
}
export { MOVE_BATTLESTYLE_TABLE, MoveBattlestyleSchema, MoveBattlestyle }