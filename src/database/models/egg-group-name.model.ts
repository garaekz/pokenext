import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { EGG_GROUP_TABLE } from './egg-group.model';
import { LANGUAGE_TABLE } from './language.model';
const EGG_GROUP_NAME_TABLE = 'egg_group_names';

const EggGroupNameSchema = {
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
  egg_group_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EGG_GROUP_TABLE,
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

class EggGroupName extends Model<InferAttributes<EggGroupName>> {
  static associate(models: any) {
    this.belongsTo(models.EggGroup, {as: 'egg_group'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EGG_GROUP_NAME_TABLE,
      modelName: 'EggGroupName',
      timestamps: false
    }
  }
}
export { EGG_GROUP_NAME_TABLE, EggGroupNameSchema, EggGroupName }