import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { VERSION_GROUP_TABLE } from './version-group.model';
const VERSION_TABLE = 'version_groups';

const VersionSchema = {
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
}

class Version extends Model<InferAttributes<Version>> {
  static associate(models: any) {
    this.belongsTo(models.VersionGroup, {as: 'group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: VERSION_TABLE,
      modelName: 'Version',
      timestamps: false
    }
  }
}
export { VERSION_TABLE, VersionSchema, Version }