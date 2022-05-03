import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_META_CATEGORY_TABLE = 'move_meta_categories';

const MoveMetaCategorySchema = {
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
}

class MoveMetaCategory extends Model<InferAttributes<MoveMetaCategory>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_META_CATEGORY_TABLE,
      modelName: 'MoveMetaCategory',
      timestamps: false
    }
  }
}
export { MOVE_META_CATEGORY_TABLE, MoveMetaCategorySchema, MoveMetaCategory }