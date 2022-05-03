import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { TYPE_TABLE } from './type.model';
const TYPE_NAME_TABLE = 'type_names';

const TypeNameSchema = {
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
  type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
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

class TypeName extends Model<InferAttributes<TypeName>> {
  static associate(models: any) {
    this.belongsTo(models.Type, {as: 'type'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: TYPE_NAME_TABLE,
      modelName: 'TypeName',
      timestamps: false
    }
  }
}
export { TYPE_NAME_TABLE, TypeNameSchema, TypeName }