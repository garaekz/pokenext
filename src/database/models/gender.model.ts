import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const GENDER_TABLE = 'genders';

const GenderSchema = {
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

class Gender extends Model<InferAttributes<Gender>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: GENDER_TABLE,
      modelName: 'Gender',
      timestamps: false
    }
  }
}
export { GENDER_TABLE, GenderSchema, Gender }