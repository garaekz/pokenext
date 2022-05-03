import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const HABITAT_TABLE = 'habitats';

const HabitatSchema = {
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

class Habitat extends Model<InferAttributes<Habitat>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: HABITAT_TABLE,
      modelName: 'Habitat',
      timestamps: false
    }
  }
}
export { HABITAT_TABLE, HabitatSchema, Habitat }