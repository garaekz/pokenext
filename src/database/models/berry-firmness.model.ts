import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
const BERRY_FIRMNESS_TABLE = 'berry_firmnesses';

const BerryFirmnessSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
}

class BerryFirmness extends Model<InferAttributes<BerryFirmness>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: BERRY_FIRMNESS_TABLE,
      modelName: 'BerryFirmness',
      timestamps: false
    }
  }
}
export { BERRY_FIRMNESS_TABLE, BerryFirmnessSchema, BerryFirmness }