import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { MOVE_EFFECT_TABLE } from './move-effect.model';
import { MOVE_TABLE } from './move.model';
import { TYPE_TABLE } from './type.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const MOVE_CHANGELOG_TABLE = 'move_changelogs';

const MoveChangelogSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  power: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  pp: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  accuracy: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  move_effect_chance: {
    allowNull: true,
    type: DataTypes.INTEGER,
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
  move_effect_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_EFFECT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  type_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
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
  }
}

class MoveChangelog extends Model<InferAttributes<MoveChangelog>> {
  
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_CHANGELOG_TABLE,
      modelName: 'MoveChangelog',
      timestamps: false
    }
  }
}
export { MOVE_CHANGELOG_TABLE, MoveChangelogSchema, MoveChangelog }