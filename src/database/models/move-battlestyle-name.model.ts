import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_BATTLESTYLE_TABLE } from './move-battlestyle.model';
const MOVE_BATTLESTYLE_NAME_TABLE = 'move_battlestyle_names';

const MoveBattlestyleNameSchema = {
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
  move_battlestyle_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_BATTLESTYLE_TABLE,
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

class MoveBattlestyleName extends Model<InferAttributes<MoveBattlestyleName>> {
  static associate(models: any) {
    this.belongsTo(models.MoveBattlestyle, {as: 'move_battlestyle'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_BATTLESTYLE_NAME_TABLE,
      modelName: 'MoveBattlestyleName',
      timestamps: false
    }
  }
}
export { MOVE_BATTLESTYLE_NAME_TABLE, MoveBattlestyleNameSchema, MoveBattlestyleName }