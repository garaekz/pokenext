import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GROWTHRATE_TABLE } from './growthrate.model';
import { LANGUAGE_TABLE } from './language.model';
const GROWTHRATE_PROSE_TABLE = 'growthrate_proses';

const GrowthrateProseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  growthrate_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GROWTHRATE_TABLE,
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

class GrowthrateProse extends Model<InferAttributes<GrowthrateProse>> {
  static associate(models: any) {
    this.belongsTo(models.Growthrate, {as: 'growthrate'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: GROWTHRATE_PROSE_TABLE,
      modelName: 'GrowthrateProse',
      timestamps: false
    }
  }
}
export { GROWTHRATE_PROSE_TABLE, GrowthrateProseSchema, GrowthrateProse }