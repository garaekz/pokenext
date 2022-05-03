import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { MOVE_META_AILMENT_TABLE } from './move-meta-ailment.model';
import { MOVE_META_CATEGORY_TABLE } from './move-meta-category.model';
import { MOVE_TABLE } from './move.model';
const MOVE_META_TABLE = 'move_metas';

const MoveMetaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  min_hits: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  max_hits: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  min_turns: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  max_turns: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  crit_rate: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  ailment_chance: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  flinch_chance: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  stat_chance: {
    allowNull: false,
    type: DataTypes.INTEGER
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
  move_meta_category_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_META_CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  move_meta_ailment_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_META_AILMENT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  drain: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  healing: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
}

class MoveMeta extends Model<InferAttributes<MoveMeta>> {
  static associate(models: any) {
    this.belongsTo(models.Move, {as: 'move'})
    this.belongsTo(models.MoveMetaCategory, {as: 'move_meta_category'})
    this.belongsTo(models.MoveMetaAilment, {as: 'move_meta_ailment'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_META_TABLE,
      modelName: 'MoveMeta',
      timestamps: false
    }
  }
}
export { MOVE_META_TABLE, MoveMetaSchema, MoveMeta }