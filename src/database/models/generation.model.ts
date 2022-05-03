import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { REGION_TABLE } from './region.model';
const GENERATION_TABLE = 'generations';

const GenerationSchema = {
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
  main_region_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REGION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    unique: true
  },
}

class Generation extends Model<InferAttributes<Generation>> {
  static associate(models: any) {
    this.belongsTo(models.Region, {as: 'main_region'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: GENERATION_TABLE,
      modelName: 'Generation',
      timestamps: false
    }
  }
}
export { GENERATION_TABLE, GenerationSchema, Generation }