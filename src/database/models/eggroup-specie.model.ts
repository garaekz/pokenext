import { Model, DataTypes, Sequelize } from 'sequelize';
import { EGG_GROUP_TABLE } from './egg-group.model';
import { SPECIE_TABLE } from './specie.model';
const EGG_GROUP_SPECIE_TABLE = 'egg_group_species';

const EggGroupSpecieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  egg_group_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EGG_GROUP_TABLE,
      key: 'id'
    }
  },
  specie_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    }
  },
}

class EggGroupSpecie extends Model {
  static associate(models: any) {
    this.belongsTo(models.EggGroup, {as: 'egg_group'});
    this.belongsTo(models.Specie, {as: 'specie'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EGG_GROUP_SPECIE_TABLE,
      modelName: 'EggGroupSpecie',
      timestamps: false
    }
  }
}
export { EGG_GROUP_SPECIE_TABLE, EggGroupSpecieSchema, EggGroupSpecie }