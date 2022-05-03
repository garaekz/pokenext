import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { SUPERCONTEST_EFFECT_TABLE } from './supercontest-effect.model';
import { LANGUAGE_TABLE } from './language.model';
const SUPERCONTEST_EFFECT_PROSE_TABLE = 'supercontest_effect_proses';

const SuperContestEffectProseSchema = {
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
  supercontest_effect_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SUPERCONTEST_EFFECT_TABLE,
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

class SuperContestEffectProse extends Model<InferAttributes<SuperContestEffectProse>> {
  static associate(models: any) {
    this.belongsTo(models.SuperContestEffect, {as: 'supercontest_effect'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SUPERCONTEST_EFFECT_PROSE_TABLE,
      modelName: 'SuperContestEffectProse',
      timestamps: false
    }
  }
}
export { SUPERCONTEST_EFFECT_PROSE_TABLE, SuperContestEffectProseSchema, SuperContestEffectProse }