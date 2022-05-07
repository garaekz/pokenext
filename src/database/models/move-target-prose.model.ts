import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_TARGET_TABLE } from './move-target.model';
const MOVE_TARGET_PROSE_TABLE = 'move_target_proses';

const MoveTargetProseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
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

class MoveTargetProse extends Model<InferAttributes<MoveTargetProse>> {
  static associate(models: any) {
    this.belongsTo(models.MoveTarget, {as: 'move_target'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_TARGET_PROSE_TABLE,
      modelName: 'MoveTargetProse',
      timestamps: false
    }
  }
}
export { MOVE_TARGET_PROSE_TABLE, MoveTargetProseSchema, MoveTargetProse }