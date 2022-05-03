import { Model, DataTypes, Sequelize } from 'sequelize';
import { POKEDEX_TABLE } from './pokedex.model';
import { SPECIE_TABLE } from './specie.model';
const DEX_NUMBER_TABLE = 'dex_numbers';

const DexNumberSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  pokedex_number: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  pokedex_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEDEX_TABLE,
      key: 'id'
    }
  },
  specie_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    }
  },
}

class DexNumber extends Model {
  static associate(models: any) {
    this.belongsTo(models.Pokedex, {as: 'pokedex'});
    this.belongsTo(models.Specie, {as: 'specie'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: DEX_NUMBER_TABLE,
      modelName: 'DexNumber',
      timestamps: false
    }
  }
}
export { DEX_NUMBER_TABLE, DexNumberSchema, DexNumber }