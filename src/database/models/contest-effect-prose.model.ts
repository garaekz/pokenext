import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { CONTEST_EFFECT_TABLE } from './contest-effect.model';
import { LANGUAGE_TABLE } from './language.model';
const CONTEST_EFFECT_PROSE_TABLE = 'contest_effect_proses';

const ContestEffectProseSchema = {
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
  flavor_text: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  contest_effect_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONTEST_EFFECT_TABLE,
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

class ContestEffectProse extends Model<InferAttributes<ContestEffectProse>> {
  static associate(models: any) {
    this.belongsTo(models.ContestEffect, {as: 'contest_effect'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CONTEST_EFFECT_PROSE_TABLE,
      modelName: 'ContestEffectProse',
      timestamps: false
    }
  }
}
export { CONTEST_EFFECT_PROSE_TABLE, ContestEffectProseSchema, ContestEffectProse }