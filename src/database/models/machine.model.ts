import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GROWTHRATE_TABLE } from './growthrate.model';
import { ITEM_TABLE } from './item.model';
import { MOVE_TABLE } from './move.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const MACHINE_TABLE = 'machines';

const MachineSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  machine_number: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  growthrate_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: GROWTHRATE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  move_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  version_group_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VERSION_GROUP_TABLE,
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
}

class Machine extends Model<InferAttributes<Machine>> {
  static associate(models: any) {
    this.belongsTo(models.Growthrate, {as: 'growthrate'})
    this.belongsTo(models.Item, {as: 'item'})
    this.belongsTo(models.Move, {as: 'move'})
    this.belongsTo(models.VersionGroup, {as: 'version_group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MACHINE_TABLE,
      modelName: 'Machine',
      timestamps: false
    }
  }
}
export { MACHINE_TABLE, MachineSchema, Machine }