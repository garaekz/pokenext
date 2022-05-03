import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { CONTEST_TYPE_TABLE } from './contest-type.model';
import { LANGUAGE_TABLE } from './language.model';
const CONTEST_TYPE_NAME_TABLE = 'contest_type_names';

const ContestTypeNameSchema = {
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
  flavor: {
    allowNull: false,
    type: DataTypes.STRING
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING
  },
  contest_type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONTEST_TYPE_TABLE,
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

class ContestTypeName extends Model<InferAttributes<ContestTypeName>> {
  static associate(models: any) {
    this.belongsTo(models.ContestType, {as: 'contest_type'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CONTEST_TYPE_NAME_TABLE,
      modelName: 'ContestTypeName',
      timestamps: false
    }
  }
}
export { CONTEST_TYPE_NAME_TABLE, ContestTypeNameSchema, ContestTypeName }