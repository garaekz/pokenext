import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
const ABILITY_TABLE = 'abilities';

const AbilitySchema = {
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
  generation_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  is_main_series: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
  },
}

class Ability extends Model<InferAttributes<Ability>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ABILITY_TABLE,
      modelName: 'Ability',
      timestamps: false
    }
  }
}
export { ABILITY_TABLE, AbilitySchema, Ability }