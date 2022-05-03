import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { REGION_TABLE } from './region.model';
const POKEDEX_TABLE = 'pokedexes';

const PokedexSchema = {
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
  region_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REGION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  is_main_series: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
  },
}

class Pokedex extends Model<InferAttributes<Pokedex>> {
  static associate(models: any) {
    this.belongsTo(models.Region, {as: 'region'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEDEX_TABLE,
      modelName: 'Pokedex',
      timestamps: false
    }
  }
}
export { POKEDEX_TABLE, PokedexSchema, Pokedex }