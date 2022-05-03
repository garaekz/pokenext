import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { NATURE_TABLE } from './nature.model';
const NATURE_NAME_TABLE = 'nature_names';

const NatureNameSchema = {
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
  nature_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: NATURE_TABLE,
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

class NatureName extends Model<InferAttributes<NatureName>> {
  static associate(models: any) {
    this.belongsTo(models.Nature, {as: 'nature'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: NATURE_NAME_TABLE,
      modelName: 'NatureName',
      timestamps: false
    }
  }
}
export { NATURE_NAME_TABLE, NatureNameSchema, NatureName }