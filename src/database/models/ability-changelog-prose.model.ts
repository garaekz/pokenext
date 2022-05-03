import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { ABILITY_CHANGELOG_TABLE } from './ability-changelog.model';
const ABILITY_CHANGELOG_PROSE_TABLE = 'ability_changelog_proses';

const AbilityChangelogProseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  effect: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  ability_change_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ABILITY_CHANGELOG_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  language_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LANGUAGE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class AbilityChangelogProse extends Model<InferAttributes<AbilityChangelogProse>> {
  static associate(models: any) {
    this.belongsTo(models.AbilityChangelog, {as: 'ability_change'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ABILITY_CHANGELOG_PROSE_TABLE,
      modelName: 'AbilityChangelogProse',
      timestamps: false
    }
  }
}
export { ABILITY_CHANGELOG_PROSE_TABLE, AbilityChangelogProseSchema, AbilityChangelogProse }