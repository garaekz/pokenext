import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
import { TYPE_TABLE } from './type.model';
const TYPE_GAME_INDEX_TABLE = 'type_game_index';

const TypeGameIndexSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  game_index: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  generation_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class TypeGameIndex extends Model<InferAttributes<TypeGameIndex>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'})
    this.belongsTo(models.Type, {as: 'type'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: TYPE_GAME_INDEX_TABLE,
      modelName: 'TypeGameIndex',
      timestamps: false
    }
  }
}
export { TYPE_GAME_INDEX_TABLE, TypeGameIndexSchema, TypeGameIndex }