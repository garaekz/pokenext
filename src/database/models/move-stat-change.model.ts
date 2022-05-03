import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { MOVE_TABLE } from './move.model';
import { STAT_TABLE } from './stat.model';
const MOVE_META_STAT_CHANGE_TABLE = 'move_meta_stat_changes';

const MoveMetaStatChangeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  change: {
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
  stat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STAT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class MoveMetaStatChange extends Model<InferAttributes<MoveMetaStatChange>> {
  static associate(models: any) {
    this.belongsTo(models.Move, {as: 'move'})
    this.belongsTo(models.Stat, {as: 'stats'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_META_STAT_CHANGE_TABLE,
      modelName: 'MoveMetaStatChange',
      timestamps: false
    }
  }
}
export { MOVE_META_STAT_CHANGE_TABLE, MoveMetaStatChangeSchema, MoveMetaStatChange }