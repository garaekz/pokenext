import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_ATTRIBUTE_TABLE } from './move-attribute.model';
import { MOVE_TABLE } from './move.model';
const MOVE_ATTRIBUTE_MAP_TABLE = 'move_attribute_maps';

const MoveAttributeMapSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
}

class MoveAttributeMap extends Model<InferAttributes<MoveAttributeMap>> {
  static associate(models: any) {
    this.belongsTo(models.MoveAttribute, {as: 'move_attribute'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_ATTRIBUTE_MAP_TABLE,
      modelName: 'MoveAttributeMap',
      timestamps: false
    }
  }
}
export { MOVE_ATTRIBUTE_MAP_TABLE, MoveAttributeMapSchema, MoveAttributeMap }