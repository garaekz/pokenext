import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const GROWTHRATE_TABLE = 'growthrates';

const GrowthrateSchema = {
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
  formula: {
    allowNull: false,
    type: DataTypes.STRING(500)
  },
}

class Growthrate extends Model<InferAttributes<Growthrate>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: GROWTHRATE_TABLE,
      modelName: 'Growthrate',
      timestamps: false
    }
  }
}
export { GROWTHRATE_TABLE, GrowthrateSchema, Growthrate }