import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ABILITY_TABLE } from './ability.model';
import { LANGUAGE_TABLE } from './language.model';
import { VERSION_GROUP_TABLE } from './version-group.model';
const ABILITY_FLAVOR_TEXT_TABLE = 'ability_flavor_texts';

const AbilityFlavorTextSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  flavor_text: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  ability_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ABILITY_TABLE,
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
  },
}

class AbilityFlavorText extends Model<InferAttributes<AbilityFlavorText>> {
  static associate(models: any) {
    this.belongsTo(models.Ability, {as: 'ability'})
    this.belongsTo(models.Language, {as: 'language'})
    this.belongsTo(models.VersionGroup, {as: 'version_group'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ABILITY_FLAVOR_TEXT_TABLE,
      modelName: 'AbilityFlavorText',
      timestamps: false
    }
  }
}
export { ABILITY_FLAVOR_TEXT_TABLE, AbilityFlavorTextSchema, AbilityFlavorText }