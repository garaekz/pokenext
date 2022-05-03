import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const EGG_GROUP_TABLE = 'egg_groups';

const EggGroupSchema = {
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

class EggGroup extends Model<InferAttributes<EggGroup>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EGG_GROUP_TABLE,
      modelName: 'EggGroup',
      timestamps: false
    }
  }
}
export { EGG_GROUP_TABLE, EggGroupSchema, EggGroup }