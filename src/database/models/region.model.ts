import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const REGION_TABLE = 'regions';

const RegionSchema = {
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

class Region extends Model<InferAttributes<Region>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: REGION_TABLE,
      modelName: 'Region',
      timestamps: false
    }
  }
}
export { REGION_TABLE, RegionSchema, Region }