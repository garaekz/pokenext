import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_META_CATEGORY_TABLE } from './move-meta-category.model';
const MOVE_META_CATEGORY_DESCRIPTION_TABLE = 'move_meta_category_names';

const MoveMetaCategoryDescriptionSchema = {
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
  move_meta_category_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_META_CATEGORY_TABLE,
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

class MoveMetaCategoryDescription extends Model<InferAttributes<MoveMetaCategoryDescription>> {
  static associate(models: any) {
    this.belongsTo(models.MoveMetaCategory, {as: 'move_meta_category'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_META_CATEGORY_DESCRIPTION_TABLE,
      modelName: 'MoveMetaCategoryDescription',
      timestamps: false
    }
  }
}
export { MOVE_META_CATEGORY_DESCRIPTION_TABLE, MoveMetaCategoryDescriptionSchema, MoveMetaCategoryDescription }