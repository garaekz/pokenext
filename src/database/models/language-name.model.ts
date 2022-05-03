import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
const LANGUAGE_NAME_TABLE = 'language_names';

const LanguageNameSchema = {
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

class LanguageName extends Model<InferAttributes<LanguageName>> {
  static associate(models: any) {
    this.belongsTo(models.Language, {as: 'language'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LANGUAGE_NAME_TABLE,
      modelName: 'LanguageName',
      timestamps: false
    }
  }
}
export { LANGUAGE_NAME_TABLE, LanguageNameSchema, LanguageName }