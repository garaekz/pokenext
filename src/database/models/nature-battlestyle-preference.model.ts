import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { MOVE_BATTLESTYLE_TABLE } from './move-battlestyle.model';
import { NATURE_TABLE } from './nature.model';
const NATURE_BATTLESTYLE_PREFERENCE_TABLE = 'nature_battlestyle_preferences';

const NatureBattlestylePreferenceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  low_hp_preference: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  high_hp_preference: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  nature_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: NATURE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  move_battle_style_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_BATTLESTYLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class NatureBattlestylePreference extends Model<InferAttributes<NatureBattlestylePreference>> {
  static associate(models: any) {
    this.belongsTo(models.Nature, {as: 'nature'})
    this.belongsTo(models.MoveBattlestyle, {as: 'move_battlestyle'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: NATURE_BATTLESTYLE_PREFERENCE_TABLE,
      modelName: 'NatureBattlestylePreference',
      timestamps: false
    }
  }
}
export { NATURE_BATTLESTYLE_PREFERENCE_TABLE, NatureBattlestylePreferenceSchema, NatureBattlestylePreference }