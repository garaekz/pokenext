import { Model, DataTypes, Sequelize } from 'sequelize';
import config from '../../config';
import { COLOR_TABLE } from './color.model';
import { EVOLUTION_CHAIN_TABLE } from './evolution-chain.model';
import { GENERATION_TABLE } from './generation.model';
import { GROWTHRATE_TABLE } from './growthrate.model';
import { HABITAT_TABLE } from './habitat.model';
import { SHAPE_TABLE } from './shape.model';
const SPECIE_TABLE = 'species';

const SpecieSchema = {
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
  order: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  gender_rate: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  capture_rate: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  base_happiness: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  is_baby: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  hatch_counter: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  has_gender_differences: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  forms_switchable: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  evolution_chain_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EVOLUTION_CHAIN_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  evolves_from_species_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  generation_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GENERATION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  growthrate_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GROWTHRATE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  color_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COLOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  habitat_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: HABITAT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  shape_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SHAPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  is_legendary: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  is_mythical: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  // _link: {
  //   type: DataTypes.VIRTUAL,
  //   get(): any {
  //     return `${config.BaseURL}species/${(<any>this).id}`;
  //   },
  //   set(value: any) {
  //     throw new Error('You can\'t set the link!');
  //   }
  // },
}

class Specie extends Model {
  static associate(models: any) {
    this.belongsTo(models.EvolutionChain, {as: 'evolution_chain'});
    this.belongsTo(models.Specie, {as: 'evolves_from_specie'});
    this.belongsTo(models.Generation, {as: 'generation'});
    this.belongsTo(models.Growthrate, {as: 'growthrate'});
    this.belongsTo(models.Color, {as: 'color'});
    this.belongsTo(models.Habitat, {as: 'habitat'});
    this.belongsTo(models.Shape, {as: 'shape'});
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: SPECIE_TABLE,
      modelName: 'Specie',
      timestamps: false
    }
  }
}
export { SPECIE_TABLE, SpecieSchema, Specie }