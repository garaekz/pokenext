import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_META_AILMENT_TABLE } from './move-meta-ailment.model';
const MOVE_META_AILMENT_NAME_TABLE = 'move_meta_ailment_names';

const MoveMetaAilmentNameSchema = {
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
  move_meta_ailment_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_META_AILMENT_TABLE,
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

class MoveMetaAilmentName extends Model<InferAttributes<MoveMetaAilmentName>> {
  static associate(models: any) {
    this.belongsTo(models.MoveMetaAilment, {as: 'move_meta_ailment'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_META_AILMENT_NAME_TABLE,
      modelName: 'MoveMetaAilmentName',
      timestamps: false
    }
  }
}
export { MOVE_META_AILMENT_NAME_TABLE, MoveMetaAilmentNameSchema, MoveMetaAilmentName }