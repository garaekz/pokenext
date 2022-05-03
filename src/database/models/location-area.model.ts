import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LOCATION_TABLE } from './location.model';
const LOCATION_AREA_TABLE = 'location_areas';

const LocationAreaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  game_index: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  location_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LOCATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class LocationArea extends Model<InferAttributes<LocationArea>> {
  static associate(models: any) {
    this.belongsTo(models.Location, {as: 'location'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LOCATION_AREA_TABLE,
      modelName: 'LocationArea',
      timestamps: false
    }
  }
}
export { LOCATION_AREA_TABLE, LocationAreaSchema, LocationArea }