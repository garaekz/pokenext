import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { CHARACTERISTIC_TABLE } from './characteristic.model';
import { LANGUAGE_TABLE } from './language.model';
const CHARACTERISTIC_DESCRIPTION_TABLE = 'characteristic_descriptions';

const CharacteristicDescriptionSchema = {
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
  characteristic_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CHARACTERISTIC_TABLE,
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

class CharacteristicDescription extends Model<InferAttributes<CharacteristicDescription>> {
  static associate(models: any) {
    this.belongsTo(models.Characteristic, {as: 'characteristic'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CHARACTERISTIC_DESCRIPTION_TABLE,
      modelName: 'CharacteristicDescription',
      timestamps: false
    }
  }
}
export { CHARACTERISTIC_DESCRIPTION_TABLE, CharacteristicDescriptionSchema, CharacteristicDescription }