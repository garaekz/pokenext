import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const COLOR_TABLE = 'colors';

const ColorSchema = {
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

class Color extends Model<InferAttributes<Color>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: COLOR_TABLE,
      modelName: 'Color',
      timestamps: false
    }
  }
}
export { COLOR_TABLE, ColorSchema, Color }