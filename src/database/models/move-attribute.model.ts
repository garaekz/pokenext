import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_ATTRIBUTE_TABLE = 'move_attributes';

const MoveAttributeSchema = {
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

class MoveAttribute extends Model<InferAttributes<MoveAttribute>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_ATTRIBUTE_TABLE,
      modelName: 'MoveAttribute',
      timestamps: false
    }
  }
}
export { MOVE_ATTRIBUTE_TABLE, MoveAttributeSchema, MoveAttribute }