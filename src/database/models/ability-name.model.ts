import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { ABILITY_TABLE } from './ability.model';
import { LANGUAGE_TABLE } from './language.model';
const ABILITY_NAME_TABLE = 'ability_names';

const AbilityNameSchema = {
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
  ability_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ABILITY_TABLE,
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

class AbilityName extends Model<InferAttributes<AbilityName>> {
  static associate(models: any) {
    this.belongsTo(models.Ability, {as: 'ability'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ABILITY_NAME_TABLE,
      modelName: 'AbilityName',
      timestamps: false
    }
  }
}
export { ABILITY_NAME_TABLE, AbilityNameSchema, AbilityName }