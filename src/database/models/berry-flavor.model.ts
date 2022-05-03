import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { CONTEST_TYPE_TABLE } from './contest-type.model';
const BERRY_FLAVOR_TABLE = 'berry_flavors';

const BerryFlavorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  contest_type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONTEST_TYPE_TABLE,
      key: 'id'
    }
  },
}

class BerryFlavor extends Model<InferAttributes<BerryFlavor>> {
  static associate(models: any) {
    this.belongsTo(models.ContestType, {as: 'contest_type'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: BERRY_FLAVOR_TABLE,
      modelName: 'BerryFlavor',
      timestamps: false
    }
  }
}
export { BERRY_FLAVOR_TABLE, BerryFlavorSchema, BerryFlavor }