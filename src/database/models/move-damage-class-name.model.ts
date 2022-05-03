import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_DAMAGE_CLASS_TABLE } from './move-damage-class.model';
import { LANGUAGE_TABLE } from './language.model';
const MOVE_DAMAGE_CLASS_NAME_TABLE = 'move_damage_class_names';

const MoveDamageClassNameSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
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

class MoveDamageClassName extends Model<InferAttributes<MoveDamageClassName>> {
  static associate(models: any) {
    this.belongsTo(models.MoveDamageClass, {as: 'move-damage-class'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_DAMAGE_CLASS_NAME_TABLE,
      modelName: 'MoveDamageClassName',
      timestamps: false
    }
  }
}
export { MOVE_DAMAGE_CLASS_NAME_TABLE, MoveDamageClassNameSchema, MoveDamageClassName }