import { Model, DataTypes, Sequelize } from 'sequelize';
import { GROWTHRATE_TABLE } from './growthrate.model';
const EXPERIENCE_TABLE = 'experiences';

const ExperienceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  level: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  experience: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  growthrate_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GROWTHRATE_TABLE,
      key: 'id'
    }
  }
}

class Experience extends Model {
  static associate(models: any) {
    this.belongsTo(models.Growthrate, {as: 'growthrate'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EXPERIENCE_TABLE,
      modelName: 'Experience',
      timestamps: false
    }
  }
}
export { EXPERIENCE_TABLE, ExperienceSchema, Experience }