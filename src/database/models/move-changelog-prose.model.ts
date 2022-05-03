import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_EFFECT_CHANGELOG_TABLE } from './move-effect-changelog.model';
const MOVE_EFFECT_CHANGELOG_PROSE_TABLE = 'move_changelog_proses';

const MoveEffectChangelogProseSchema = {
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
  move_effect_changelog_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_EFFECT_CHANGELOG_TABLE,
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

class MoveEffectChangelogProse extends Model<InferAttributes<MoveEffectChangelogProse>> {
  static associate(models: any) {
    this.belongsTo(models.MoveEffectChangelog, {as: 'move_effect_changelog'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_EFFECT_CHANGELOG_PROSE_TABLE,
      modelName: 'MoveEffectChangelogProse',
      timestamps: false
    }
  }
}
export { MOVE_EFFECT_CHANGELOG_PROSE_TABLE, MoveEffectChangelogProseSchema, MoveEffectChangelogProse }