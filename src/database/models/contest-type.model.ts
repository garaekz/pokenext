import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const CONTEST_TYPE_TABLE = 'contest_types';

const ContestTypeSchema = {
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

class ContestType extends Model<InferAttributes<ContestType>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CONTEST_TYPE_TABLE,
      modelName: 'ContestType',
      timestamps: false
    }
  }
}
export { CONTEST_TYPE_TABLE, ContestTypeSchema, ContestType }