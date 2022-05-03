import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { CONTEST_EFFECT_TABLE } from './contest-effect.model';
import { CONTEST_TYPE_TABLE } from './contest-type.model';
import { GENERATION_TABLE } from './generation.model';
import { MOVE_DAMAGE_CLASS_TABLE } from './move-damage-class.model';
import { MOVE_EFFECT_TABLE } from './move-effect.model';
import { MOVE_TARGET_TABLE } from './move-target.model';
import { SUPERCONTEST_EFFECT_TABLE } from './supercontest-effect.model';
import { TYPE_TABLE } from './type.model';
const MOVE_TABLE = 'moves';

const MoveSchema = {
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
  priority: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  move_effect_chance: {
    allowNull: true,
    type: DataTypes.INTEGER,
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
  move_damage_class_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_DAMAGE_CLASS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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
  move_target_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_TARGET_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  contest_effect_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONTEST_EFFECT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  contest_type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONTEST_TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  super_contest_effect_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SUPERCONTEST_EFFECT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class Move extends Model<InferAttributes<Move>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'});
    this.belongsTo(models.MoveDamageClass, {as: 'move_damage_class'});
    this.belongsTo(models.MoveEffect, {as: 'move_effect'});
    this.belongsTo(models.MoveTarget, {as: 'move_target'});
    this.belongsTo(models.Type, {as: 'type'});
    this.belongsTo(models.ContestEffect, {as: 'contest_effect'});
    this.belongsTo(models.ContestType, {as: 'contest_type'});
    this.belongsTo(models.SuperContestEffect, {as: 'supercontest_effect'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_TABLE,
      modelName: 'Move',
      timestamps: false
    }
  }
}
export { MOVE_TABLE, MoveSchema, Move }