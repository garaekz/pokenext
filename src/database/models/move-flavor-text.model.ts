import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { MOVE_TABLE } from './move.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const MOVE_FLAVOR_TEXT_TABLE = 'move_flavor_texts';

const MoveFlavorTextSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  flavor_text: {
    allowNull: false,
    type: DataTypes.STRING
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
  version_group_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VERSION_GROUP_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class MoveFlavorText extends Model<InferAttributes<MoveFlavorText>> {
  static associate(models: any) {
    this.belongsTo(models.Move, {as: 'move'})
    this.belongsTo(models.Language, {as: 'language'})
    this.belongsTo(models.VersionGroup, {as: 'version_group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MOVE_FLAVOR_TEXT_TABLE,
      modelName: 'MoveFlavorText',
      timestamps: false
    }
  }
}
export { MOVE_FLAVOR_TEXT_TABLE, MoveFlavorTextSchema, MoveFlavorText }