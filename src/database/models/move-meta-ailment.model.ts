import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
const MOVE_META_AILMENT_TABLE = 'move_meta_ailments';

const MoveMetaAilmentSchema = {
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

class MoveMetaAilment extends Model<InferAttributes<MoveMetaAilment>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_META_AILMENT_TABLE,
      modelName: 'MoveMetaAilment',
      timestamps: false
    }
  }
}
export { MOVE_META_AILMENT_TABLE, MoveMetaAilmentSchema, MoveMetaAilment }