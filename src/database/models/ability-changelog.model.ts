import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ABILITY_TABLE } from './ability.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const ABILITY_CHANGELOG_TABLE = 'ability_changelogs';

const AbilityChangelogSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ability_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ABILITY_TABLE,
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
}

class AbilityChangelog extends Model<InferAttributes<AbilityChangelog>> {
  static associate(models: any) {
    this.belongsTo(models.Ability, {as: 'ability'})
    this.belongsTo(models.VersionGroup, {as: 'version_group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ABILITY_CHANGELOG_TABLE,
      modelName: 'AbilityChangelog',
      timestamps: false
    }
  }
}
export { ABILITY_CHANGELOG_TABLE, AbilityChangelogSchema, AbilityChangelog }