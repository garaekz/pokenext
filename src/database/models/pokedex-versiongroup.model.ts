import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { POKEDEX_TABLE } from './pokedex.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const POKEDEX_VERSIONGROUP_TABLE = 'pokedex_versiongroup';

const PokedexVersiongroupSchema = {
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
      model: POKEDEX_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class PokedexVersiongroup extends Model<InferAttributes<PokedexVersiongroup>> {
  static associate(models: any) {
    this.belongsTo(models.VersionGroup, {as: 'versiongroup'})
    this.belongsTo(models.Pokedex, {as: 'pokedex'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: POKEDEX_VERSIONGROUP_TABLE,
      modelName: 'PokedexVersiongroup',
      timestamps: false
    }
  }
}
export { POKEDEX_VERSIONGROUP_TABLE, PokedexVersiongroupSchema, PokedexVersiongroup }