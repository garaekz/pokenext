import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LOCATION_TABLE } from './location.model';
import { LANGUAGE_TABLE } from './language.model';
const LOCATION_NAME_TABLE = 'location_names';

const LocationNameSchema = {
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
  language_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LANGUAGE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class LocationName extends Model<InferAttributes<LocationName>> {
  static associate(models: any) {
    this.belongsTo(models.Location, {as: 'location'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LOCATION_NAME_TABLE,
      modelName: 'LocationName',
      timestamps: false
    }
  }
}
export { LOCATION_NAME_TABLE, LocationNameSchema, LocationName }