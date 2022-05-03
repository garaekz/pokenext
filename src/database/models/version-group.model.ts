import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
const VERSION_GROUP_TABLE = 'version_groups';

const VersionGroupSchema = {
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
  order: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  generation_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class VersionGroup extends Model<InferAttributes<VersionGroup>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: VERSION_GROUP_TABLE,
      modelName: 'VersionGroup',
      timestamps: false
    }
  }
}
export { VERSION_GROUP_TABLE, VersionGroupSchema, VersionGroup }