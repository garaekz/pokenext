import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const PALPARK_AREA_TABLE = 'palpark_areas';

const PalParkAreaSchema = {
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

class PalParkArea extends Model<InferAttributes<PalParkArea>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: PALPARK_AREA_TABLE,
      modelName: 'PalParkArea',
      timestamps: false
    }
  }
}
export { PALPARK_AREA_TABLE, PalParkAreaSchema, PalParkArea }