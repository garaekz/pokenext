import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { SPECIE_TABLE } from './specie.model';
const SPECIE_DESCRIPTION_TABLE = 'specie_descriptions';

const SpecieDescriptionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  specie_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
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

class SpecieDescription extends Model<InferAttributes<SpecieDescription>> {
  static associate(models: any) {
    this.belongsTo(models.Specie, {as: 'specie'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SPECIE_DESCRIPTION_TABLE,
      modelName: 'SpecieDescription',
      timestamps: false
    }
  }
}
export { SPECIE_DESCRIPTION_TABLE, SpecieDescriptionSchema, SpecieDescription }