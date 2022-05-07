import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { SHAPE_TABLE } from './shape.model';
const SHAPE_PROSE_TABLE = 'shape_proses';

const ShapeProseSchema = {
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
  awesome_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING(1000)
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

class ShapeProse extends Model<InferAttributes<ShapeProse>> {
  static associate(models: any) {
    this.belongsTo(models.Shape, {as: 'shape'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SHAPE_PROSE_TABLE,
      modelName: 'ShapeProse',
      timestamps: false
    }
  }
}
export { SHAPE_PROSE_TABLE, ShapeProseSchema, ShapeProse }