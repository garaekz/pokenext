import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_ATTRIBUTE_TABLE } from './move-attribute.model';
import { LANGUAGE_TABLE } from './language.model';
const MOVE_ATTRIBUTE_NAME_TABLE = 'move_attribute_names';

const MoveAttributeNameSchema = {
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
  move_attribute_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_ATTRIBUTE_TABLE,
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

class MoveAttributeName extends Model<InferAttributes<MoveAttributeName>> {
  static associate(models: any) {
    this.belongsTo(models.MoveAttribute, {as: 'move_attribute'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_ATTRIBUTE_NAME_TABLE,
      modelName: 'MoveAttributeName',
      timestamps: false
    }
  }
}
export { MOVE_ATTRIBUTE_NAME_TABLE, MoveAttributeNameSchema, MoveAttributeName }