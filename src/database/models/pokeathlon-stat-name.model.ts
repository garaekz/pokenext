import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { POKEATHLON_STAT_TABLE } from './pokeathlon-stat.model';
const POKEATHLON_STAT_NAME_TABLE = 'habitat_names';

const PokeathlonStatNameSchema = {
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
  pokeathlon_stat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: POKEATHLON_STAT_TABLE,
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

class PokeathlonStatName extends Model<InferAttributes<PokeathlonStatName>> {
  static associate(models: any) {
    this.belongsTo(models.Pokeathlon, {as: 'habitat'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEATHLON_STAT_NAME_TABLE,
      modelName: 'PokeathlonStatName',
      timestamps: false
    }
  }
}
export { POKEATHLON_STAT_NAME_TABLE, PokeathlonStatNameSchema, PokeathlonStatName }