import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ABILITY_TABLE } from './ability.model';
import { LANGUAGE_TABLE } from './language.model';
const ABILITY_EFFECT_TEXT_TABLE = 'ability_effect_texts';

const AbilityEffectTextSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  effect: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  short_effect: {
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
}

class AbilityEffectText extends Model<InferAttributes<AbilityEffectText>> {
  static associate(models: any) {
    this.belongsTo(models.Ability, {as: 'ability'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ABILITY_EFFECT_TEXT_TABLE,
      modelName: 'AbilityEffectText',
      timestamps: false
    }
  }
}
export { ABILITY_EFFECT_TEXT_TABLE, AbilityEffectTextSchema, AbilityEffectText }