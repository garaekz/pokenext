import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_LEARN_METHOD_TABLE } from './move-learn-method.model';
const MOVE_LEARN_METHOD_DESCRIPTION_TABLE = 'move_learn_method_descriptions';

const MoveLearnMethodDescriptionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  move_learn_method_form_id: {
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

class MoveLearnMethodDescription extends Model<InferAttributes<MoveLearnMethodDescription>> {
  static associate(models: any) {
    this.belongsTo(models.MoveLearnMethod, {as: 'move_learn_method'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_LEARN_METHOD_DESCRIPTION_TABLE,
      modelName: 'MoveLearnMethodDescription',
      timestamps: false
    }
  }
}
export { MOVE_LEARN_METHOD_DESCRIPTION_TABLE, MoveLearnMethodDescriptionSchema, MoveLearnMethodDescription }