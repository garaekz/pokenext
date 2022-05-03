import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { BERRY_FIRMNESS_TABLE } from './berry-firmness.model';
import { ITEM_TABLE } from './item.model';
import { TYPE_TABLE } from './type.model';
const BERRY_TABLE = 'berries';

const BerrySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  natural_gift_power: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  size: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  max_harvest: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  growth_time: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  soil_dryness: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  smoothness: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  berry_firmness_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BERRY_FIRMNESS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  item_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  natural_gift_type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Berry extends Model<InferAttributes<Berry>> {
  static associate(models: any) {
    this.belongsTo(models.BerryFirmness, {as: 'firmness'})
    this.belongsTo(models.Item, {as: 'item'})
    this.belongsTo(models.Type, {as: 'natural_gift_type'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: BERRY_TABLE,
      modelName: 'Berry',
      timestamps: false
    }
  }
}
export { BERRY_TABLE, BerrySchema, Berry }