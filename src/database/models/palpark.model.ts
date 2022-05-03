import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { PALPARK_AREA_TABLE } from './palpark-area.model';
import { SPECIE_TABLE } from './specie.model';
const PALPARK_TABLE = 'palpark_area_names';

const PalParkSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  base_score: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  rate: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  palpark_area_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PALPARK_AREA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  specie_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class PalPark extends Model<InferAttributes<PalPark>> {
  static associate(models: any) {
    this.belongsTo(models.PalParkArea, {as: 'palpark_area'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: PALPARK_TABLE,
      modelName: 'PalPark',
      timestamps: false
    }
  }
}
export { PALPARK_TABLE, PalParkSchema, PalPark }