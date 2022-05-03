import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { MOVE_DAMAGE_CLASS_TABLE } from './move-damage-class.model';
const STAT_TABLE = 'stats';

const StatSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  is_battle_only: {
    allowNull: false,
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  },
  game_index: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  move_damage_class_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_DAMAGE_CLASS_TABLE,
      key: 'id'
    }
  }
}

class Stat extends Model<InferAttributes<Stat>> {
  static associate(models: any) {
    this.belongsTo(models.MoveDamageClass, {as: 'move_damage_class'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: STAT_TABLE,
      modelName: 'Stat',
      timestamps: false
    }
  }
}
export { STAT_TABLE, StatSchema, Stat }