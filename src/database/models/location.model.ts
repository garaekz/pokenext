import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { REGION_TABLE } from './region.model';
const LOCATION_TABLE = 'locations';

const LocationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING
  },
  region_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: REGION_TABLE,
      key: 'id'
    }
  },
}

class Location extends Model<InferAttributes<Location>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LOCATION_TABLE,
      modelName: 'Location',
      timestamps: false
    }
  }
}
export { LOCATION_TABLE, LocationSchema, Location }