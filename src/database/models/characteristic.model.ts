import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { STAT_TABLE } from './stat.model';
const CHARACTERISTIC_TABLE = 'characteristics';

const CharacteristicSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  gene_mod_5: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  stat_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: STAT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}

class Characteristic extends Model<InferAttributes<Characteristic>> {
  static associate(models: any) {
    this.belongsTo(models.Stat, {as: 'stat'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CHARACTERISTIC_TABLE,
      modelName: 'Characteristic',
      timestamps: false
    }
  }
}
export { CHARACTERISTIC_TABLE, CharacteristicSchema, Characteristic }