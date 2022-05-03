import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { LANGUAGE_TABLE } from './language.model';
import { SPECIE_TABLE } from './specie.model';
const SPECIE_FLAVOR_TEXT_TABLE = 'specie_flavor_texts';

const SpecieFlavorTextSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  flavor_text: {
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

class SpecieFlavorText extends Model<InferAttributes<SpecieFlavorText>> {
  static associate(models: any) {
    this.belongsTo(models.Specie, {as: 'specie'})
    this.belongsTo(models.Language, {as: 'language'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableFlavorText: SPECIE_FLAVOR_TEXT_TABLE,
      modelFlavorText: 'SpecieFlavorText',
      timestamps: false
    }
  }
}
export { SPECIE_FLAVOR_TEXT_TABLE, SpecieFlavorTextSchema, SpecieFlavorText }