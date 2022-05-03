import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { REGION_TABLE } from './region.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const REGION_VERSIONGROUP_TABLE = 'region_versiongroup';

const RegionVersiongroupSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
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
  region_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REGION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class RegionVersiongroup extends Model<InferAttributes<RegionVersiongroup>> {
  static associate(models: any) {
    this.belongsTo(models.VersionGroup, {as: 'versiongroup'})
    this.belongsTo(models.Region, {as: 'region'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: REGION_VERSIONGROUP_TABLE,
      modelName: 'RegionVersiongroup',
      timestamps: false
    }
  }
}
export { REGION_VERSIONGROUP_TABLE, RegionVersiongroupSchema, RegionVersiongroup }