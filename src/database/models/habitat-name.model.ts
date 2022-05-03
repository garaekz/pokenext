import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { HABITAT_TABLE } from './habitat.model';
import { LANGUAGE_TABLE } from './language.model';
const HABITAT_NAME_TABLE = 'habitat_names';

const HabitatNameSchema = {
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
  habitat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: HABITAT_TABLE,
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

class HabitatName extends Model<InferAttributes<HabitatName>> {
  static associate(models: any) {
    this.belongsTo(models.Habitat, {as: 'habitat'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: HABITAT_NAME_TABLE,
      modelName: 'HabitatName',
      timestamps: false
    }
  }
}
export { HABITAT_NAME_TABLE, HabitatNameSchema, HabitatName }