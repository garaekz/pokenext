import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { BERRY_FLAVOR_TABLE } from './berry-flavor.model';
const BERRY_FLAVOR_NAME_TABLE = 'berry_flavor_names';

const BerryFlavorNameSchema = {
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
  berry_flavor_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BERRY_FLAVOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class BerryFlavorName extends Model<InferAttributes<BerryFlavorName>> {
  static associate(models: any) {
    this.belongsTo(models.ContestType, {as: 'contest_type'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: BERRY_FLAVOR_NAME_TABLE,
      modelName: 'BerryFlavorName',
      timestamps: false
    }
  }
}
export { BERRY_FLAVOR_NAME_TABLE, BerryFlavorNameSchema, BerryFlavorName }