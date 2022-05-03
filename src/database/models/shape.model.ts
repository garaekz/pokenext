import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const SHAPE_TABLE = 'shapes';

const ShapeSchema = {
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
}

class Shape extends Model<InferAttributes<Shape>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SHAPE_TABLE,
      modelName: 'Shape',
      timestamps: false
    }
  }
}
export { SHAPE_TABLE, ShapeSchema, Shape }