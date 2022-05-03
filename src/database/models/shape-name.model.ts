import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { SHAPE_TABLE } from './shape.model';
const SHAPE_NAME_TABLE = 'shape_names';

const ShapeNameSchema = {
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
  shape_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SHAPE_TABLE,
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

class ShapeName extends Model<InferAttributes<ShapeName>> {
  static associate(models: any) {
    this.belongsTo(models.Shape, {as: 'shape'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SHAPE_NAME_TABLE,
      modelName: 'ShapeName',
      timestamps: false
    }
  }
}
export { SHAPE_NAME_TABLE, ShapeNameSchema, ShapeName }