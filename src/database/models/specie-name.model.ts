import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { SPECIE_TABLE } from './specie.model';
const SPECIE_NAME_TABLE = 'specie_names';

const SpecieNameSchema = {
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
  genus: {
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

class SpecieName extends Model<InferAttributes<SpecieName>> {
  static associate(models: any) {
    this.belongsTo(models.Specie, {as: 'specie'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SPECIE_NAME_TABLE,
      modelName: 'SpecieName',
      timestamps: false
    }
  }
}
export { SPECIE_NAME_TABLE, SpecieNameSchema, SpecieName }