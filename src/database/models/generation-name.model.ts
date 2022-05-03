import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { GENERATION_TABLE } from './generation.model';
import { LANGUAGE_TABLE } from './language.model';
const GENERATION_NAME_TABLE = 'generation_names';

const GenerationNameSchema = {
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

class GenerationName extends Model<InferAttributes<GenerationName>> {
  static associate(models: any) {
    this.belongsTo(models.Generation, {as: 'generation'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: GENERATION_NAME_TABLE,
      modelName: 'GenerationName',
      timestamps: false
    }
  }
}
export { GENERATION_NAME_TABLE, GenerationNameSchema, GenerationName }