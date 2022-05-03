import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { MOVE_EFFECT_TABLE } from './move-effect.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const MOVE_EFFECT_CHANGELOG_TABLE = 'move_effect_changelogs';

const MoveEffectChangelogSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  move_effect_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_EFFECT_TABLE,
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

class MoveEffectChangelog extends Model<InferAttributes<MoveEffectChangelog>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_EFFECT_CHANGELOG_TABLE,
      modelName: 'MoveEffectChangelog',
      timestamps: false
    }
  }
}
export { MOVE_EFFECT_CHANGELOG_TABLE, MoveEffectChangelogSchema, MoveEffectChangelog }