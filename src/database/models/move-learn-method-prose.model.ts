import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_LEARN_METHOD_TABLE } from './move-learn-method.model';
const MOVE_LEARN_METHOD_PROSE_TABLE = 'move_learn_method_proses';

const MoveLearnMethodProseSchema = {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING(1000)
  },
  move_learn_method_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_LEARN_METHOD_TABLE,
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

class MoveLearnMethodProse extends Model<InferAttributes<MoveLearnMethodProse>> {
  static associate(models: any) {
    this.belongsTo(models.MoveLearnMethod, {as: 'move_learn_method'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_LEARN_METHOD_PROSE_TABLE,
      modelName: 'MoveLearnMethodProse',
      timestamps: false
    }
  }
}
export { MOVE_LEARN_METHOD_PROSE_TABLE, MoveLearnMethodProseSchema, MoveLearnMethodProse }