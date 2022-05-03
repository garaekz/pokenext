import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { BERRY_FLAVOR_TABLE } from './berry-flavor.model';
import { STAT_TABLE } from './stat.model';
const NATURE_TABLE = 'natures';

const NatureSchema = {
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
  hates_flavor_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BERRY_FLAVOR_TABLE,
      key: 'id'
    }
  },
  likes_flavor_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BERRY_FLAVOR_TABLE,
      key: 'id'
    }
  },
  game_index: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  decreased_stat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STAT_TABLE,
      key: 'id'
    }
  },
  increased_stat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STAT_TABLE,
      key: 'id'
    }
  },
}

class Nature extends Model<InferAttributes<Nature>> {
  static associate(models: any) {
    this.belongsTo(models.BerryFlavor, {as: 'hates_flavor'});
    this.belongsTo(models.BerryFlavor, {as: 'likes_flavor'});
    this.belongsTo(models.Stat, {as: 'decreased_stat'});
    this.belongsTo(models.Stat, {as: 'increased_stat'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: NATURE_TABLE,
      modelName: 'Nature',
      timestamps: false
    }
  }
}
export { NATURE_TABLE, NatureSchema, Nature }