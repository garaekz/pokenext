import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { COLOR_TABLE } from './color.model';
const COLOR_NAME_TABLE = 'color_names';

const ColorNameSchema = {
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
  color_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COLOR_TABLE,
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

class ColorName extends Model<InferAttributes<ColorName>> {
  static associate(models: any) {
    this.belongsTo(models.Color, {as: 'color'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: COLOR_NAME_TABLE,
      modelName: 'ColorName',
      timestamps: false
    }
  }
}
export { COLOR_NAME_TABLE, ColorNameSchema, ColorName }