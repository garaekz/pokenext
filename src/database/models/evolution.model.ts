import { InferAttributes, Model, DataTypes, Sequelize } from 'sequelize';
import { EVOLUTION_TRIGGER_TABLE } from './evolution-trigger.model';
import { GENDER_TABLE } from './gender.model';
import { ITEM_TABLE } from './item.model';
import { LOCATION_TABLE } from './location.model';
import { MOVE_TABLE } from './move.model';
import { SPECIE_TABLE } from './specie.model';
import { TYPE_TABLE } from './type.model';
const EVOLUTION_TABLE = 'evolutions';

const EvolutionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  min_level: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  time_of_day: {
    allowNull: true,
    type: DataTypes.STRING
  },
  min_happines: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  min_beauty: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  min_affection: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  relative_physical_stats: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  needs_overworld_rain: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  turn_upside_down: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  evolution_trigger_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EVOLUTION_TRIGGER_TABLE,
      key: 'id'
    }
  },
  evolved_species_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    }
  },
  gender_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: GENDER_TABLE,
      key: 'id'
    }
  },
  known_move_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: MOVE_TABLE,
      key: 'id'
    }
  },
  known_move_type_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    }
  },
  party_species_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    }
  },
  party_type_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_TABLE,
      key: 'id'
    }
  },
  trade_species_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: SPECIE_TABLE,
      key: 'id'
    }
  },
  evolution_item_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_TABLE,
      key: 'id'
    }
  },
  held_item_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: ITEM_TABLE,
      key: 'id'
    }
  },
  location_id: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: LOCATION_TABLE,
      key: 'id'
    }
  },
}

class Evolution extends Model<InferAttributes<Evolution>> {
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: EVOLUTION_TABLE,
      modelName: 'Evolution',
      timestamps: false
    }
  }
}
export { EVOLUTION_TABLE, EvolutionSchema, Evolution }