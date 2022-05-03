import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
import { LOCATION_TABLE } from './location.model';
const LOCATION_GAME_INDEX_TABLE = 'location_game_index';

const LocationGameIndexSchema = {
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
  generation_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class LocationGameIndex extends Model<InferAttributes<LocationGameIndex>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'})
    this.belongsTo(models.Location, {as: 'location'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LOCATION_GAME_INDEX_TABLE,
      modelName: 'LocationGameIndex',
      timestamps: false
    }
  }
}
export { LOCATION_GAME_INDEX_TABLE, LocationGameIndexSchema, LocationGameIndex }