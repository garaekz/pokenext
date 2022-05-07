import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_DAMAGE_CLASS_TABLE } from './move-damage-class.model';
import { LANGUAGE_TABLE } from './language.model';
const MOVE_DAMAGE_CLASS_PROSE_TABLE = 'move_damage_class_proses';

const MoveDamageClassProseSchema = {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING(1000),
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

class MoveDamageClassProse extends Model<InferAttributes<MoveDamageClassProse>> {
  static associate(models: any) {
    this.belongsTo(models.MoveDamageClass, {as: 'move-damage-class'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_DAMAGE_CLASS_PROSE_TABLE,
      modelName: 'MoveDamageClassProse',
      timestamps: false
    }
  }
}
export { MOVE_DAMAGE_CLASS_PROSE_TABLE, MoveDamageClassProseSchema, MoveDamageClassProse }