import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { BERRY_TABLE } from './berry.model';
import { LANGUAGE_TABLE } from './language.model';
const BERRY_FIRMNESS_NAME_TABLE = 'berry_firmness_names';

const BerryFirmnessNameSchema = {
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
  berry_firmness_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BERRY_FIRMNESS_NAME_TABLE,
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

class BerryFirmnessName extends Model<InferAttributes<BerryFirmnessName>> {
  static associate(models: any) {
    this.belongsTo(models.BerryFirmness, {as: 'berry_firmness'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: BERRY_FIRMNESS_NAME_TABLE,
      modelName: 'BerryFirmnessName',
      timestamps: false
    }
  }
}
export { BERRY_FIRMNESS_NAME_TABLE, BerryFirmnessNameSchema, BerryFirmnessName }