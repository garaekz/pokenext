import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_TABLE } from './move.model';
const SUPER_CONTEST_COMBO_TABLE = 'supercontest_combos';

const SuperContestComboSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  first_move_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  second_move_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class SuperContestCombo extends Model<InferAttributes<SuperContestCombo>> {
  static associate(models: any) {
    this.belongsTo(models.Move, {as: 'move'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SUPER_CONTEST_COMBO_TABLE,
      modelName: 'SuperContestCombo',
      timestamps: false
    }
  }
}
export { SUPER_CONTEST_COMBO_TABLE, SuperContestComboSchema, SuperContestCombo }