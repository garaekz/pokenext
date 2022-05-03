import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_DAMAGE_CLASS_TABLE = 'move_damage_classes';

const MoveDamageClassSchema = {
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

class MoveDamageClass extends Model<InferAttributes<MoveDamageClass>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_DAMAGE_CLASS_TABLE,
      modelName: 'MoveDamageClass',
      timestamps: false
    }
  }
}
export { MOVE_DAMAGE_CLASS_TABLE, MoveDamageClassSchema, MoveDamageClass }