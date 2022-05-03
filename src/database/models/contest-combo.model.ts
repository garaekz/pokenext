import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_TABLE } from './move.model';
const CONTEST_COMBO_TABLE = 'contest_combos';

const ContestComboSchema = {
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

class ContestCombo extends Model<InferAttributes<ContestCombo>> {
  static associate(models: any) {
    this.belongsTo(models.Move, {as: 'move'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CONTEST_COMBO_TABLE,
      modelName: 'ContestCombo',
      timestamps: false
    }
  }
}
export { CONTEST_COMBO_TABLE, ContestComboSchema, ContestCombo }