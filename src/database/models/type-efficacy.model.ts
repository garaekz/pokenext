import { Model, DataTypes, Sequelize, InferAttributes } from 'sequelize';
import { TYPE_TABLE } from './type.model';
const TYPE_EFFICACY_TABLE = 'type_efficacies';

const TypeEfficacySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  damage_factor: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  damage_type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  target_type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class TypeEfficacy extends Model<InferAttributes<TypeEfficacy>> {
  static associate(models: any) {
    this.belongsTo(models.Type, {as: 'damage_type'})
    this.belongsTo(models.Type, {as: 'target_type'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: TYPE_EFFICACY_TABLE,
      modelName: 'TypeEfficacy',
      timestamps: false
    }
  }
}
export { TYPE_EFFICACY_TABLE, TypeEfficacySchema, TypeEfficacy }