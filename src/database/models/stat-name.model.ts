import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { STAT_TABLE } from './stat.model';
const STAT_NAME_TABLE = 'stat_names';

const StatNameSchema = {
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
  stat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STAT_TABLE,
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

class StatName extends Model<InferAttributes<StatName>> {
  static associate(models: any) {
    this.belongsTo(models.Stat, {as: 'stat'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: STAT_NAME_TABLE,
      modelName: 'StatName',
      timestamps: false
    }
  }
}
export { STAT_NAME_TABLE, StatNameSchema, StatName }