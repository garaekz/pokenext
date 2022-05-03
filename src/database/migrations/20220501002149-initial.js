'use strict';

const { BERRY_FIRMNESS_TABLE, BerryFirmnessSchema } = require('../models/berry-firmness.model');
const { CONTEST_TYPE_TABLE, ContestTypeSchema } = require('../models/contest-type.model');
const { EGG_GROUP_TABLE, EggGroupSchema } = require('../models/egg-group.model');
const { GROWTHRATE_TABLE, GrowthrateSchema } = require('../models/growthrate.model');
const { LANGUAGE_TABLE, LanguageSchema } = require('../models/language.model');
const { MOVE_BATTLESTYLE_TABLE, MoveBattlestyleSchema } = require('../models/move-battlestyle.model');
const { MOVE_DAMAGE_CLASS_TABLE, MoveDamageClassSchema } = require('../models/move-damage-class.model');
const { MOVE_EFFECT_TABLE, MoveEffectSchema } = require('../models/move-effect.model');
const { MOVE_TARGET_TABLE, MoveTargetSchema } = require('../models/move-target.model');
const { POKEATHLON_STAT_TABLE, PokeathlonStatSchema } = require('../models/pokeathlon-stat.model');
const { REGION_TABLE, RegionSchema } = require('../models/region.model');
const { CONTEST_EFFECT_TABLE, ContestEffectSchema } = require('../models/contest-effect.model');
const { SUPERCONTEST_EFFECT_TABLE, SuperContestEffectSchema } = require('../models/supercontest-effect.model');
const { MOVE_ATTRIBUTE_TABLE, MoveAttributeSchema } = require('../models/move-attribute.model');
const { MOVE_META_AILMENT_TABLE, MoveMetaAilmentSchema } = require('../models/move-meta-ailment.model');
const { MOVE_META_CATEGORY_TABLE, MoveMetaCategorySchema } = require('../models/move-meta-category.model');
const { EVOLUTION_TRIGGER_TABLE, EvolutionTriggerSchema } = require('../models/evolution-trigger.model');
const { GENDER_TABLE, GenderSchema } = require('../models/gender.model');
const { COLOR_TABLE, ColorSchema } = require('../models/color.model');
const { HABITAT_TABLE, HabitatSchema } = require('../models/habitat.model');
const { SHAPE_TABLE, ShapeSchema } = require('../models/shape.model');
const { MOVE_LEARN_METHOD_TABLE, MoveLearnMethodSchema } = require('../models/move-learn-method.model');
const { ITEM_ATTRIBUTE_TABLE, ItemAttributeSchema } = require('../models/item-attribute.model');
const { ITEM_FLING_EFFECT_TABLE, ItemFlingEffectSchema } = require('../models/item-fling-effect.model');
const { ITEM_POCKET_TABLE, ItemPocketSchema } = require('../models/item-pocket.model');
const { ENCOUNTER_METHOD_TABLE, EncounterMethodSchema } = require('../models/encounter-method.model');
const { ENCOUNTER_CONDITION_TABLE, EncounterConditionSchema } = require('../models/encounter-condition.model');
const { PALPARK_AREA_TABLE, PalParkAreaSchema } = require('../models/palpark-area.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.createTable(BERRY_FIRMNESS_TABLE, BerryFirmnessSchema),
      queryInterface.createTable(COLOR_TABLE, ColorSchema),
      queryInterface.createTable(CONTEST_EFFECT_TABLE, ContestEffectSchema),
      queryInterface.createTable(CONTEST_TYPE_TABLE, ContestTypeSchema),
      queryInterface.createTable(EGG_GROUP_TABLE, EggGroupSchema),
      queryInterface.createTable(ENCOUNTER_CONDITION_TABLE, EncounterConditionSchema),
      queryInterface.createTable(ENCOUNTER_METHOD_TABLE, EncounterMethodSchema),
      queryInterface.createTable(EVOLUTION_TRIGGER_TABLE, EvolutionTriggerSchema),
      queryInterface.createTable(GENDER_TABLE, GenderSchema),
      queryInterface.createTable(GROWTHRATE_TABLE, GrowthrateSchema),
      queryInterface.createTable(HABITAT_TABLE, HabitatSchema),
      queryInterface.createTable(ITEM_ATTRIBUTE_TABLE, ItemAttributeSchema),
      queryInterface.createTable(ITEM_FLING_EFFECT_TABLE, ItemFlingEffectSchema),
      queryInterface.createTable(ITEM_POCKET_TABLE, ItemPocketSchema),
      queryInterface.createTable(LANGUAGE_TABLE, LanguageSchema),
      queryInterface.createTable(MOVE_ATTRIBUTE_TABLE, MoveAttributeSchema),
      queryInterface.createTable(MOVE_BATTLESTYLE_TABLE, MoveBattlestyleSchema),
      queryInterface.createTable(MOVE_DAMAGE_CLASS_TABLE, MoveDamageClassSchema),
      queryInterface.createTable(MOVE_EFFECT_TABLE, MoveEffectSchema),
      queryInterface.createTable(MOVE_LEARN_METHOD_TABLE, MoveLearnMethodSchema),
      queryInterface.createTable(MOVE_META_AILMENT_TABLE, MoveMetaAilmentSchema),
      queryInterface.createTable(MOVE_META_CATEGORY_TABLE, MoveMetaCategorySchema),
      queryInterface.createTable(MOVE_TARGET_TABLE, MoveTargetSchema),
      queryInterface.createTable(PALPARK_AREA_TABLE, PalParkAreaSchema),
      queryInterface.createTable(POKEATHLON_STAT_TABLE, PokeathlonStatSchema),
      queryInterface.createTable(REGION_TABLE, RegionSchema),
      queryInterface.createTable(SHAPE_TABLE, ShapeSchema),
      queryInterface.createTable(SUPERCONTEST_EFFECT_TABLE, SuperContestEffectSchema),
    ]);
  },

  async down (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.dropTable(SUPERCONTEST_EFFECT_TABLE),
      queryInterface.dropTable(SHAPE_TABLE),
      queryInterface.dropTable(REGION_TABLE),
      queryInterface.dropTable(POKEATHLON_STAT_TABLE),
      queryInterface.dropTable(PALPARK_AREA_TABLE),
      queryInterface.dropTable(MOVE_TARGET_TABLE),
      queryInterface.dropTable(MOVE_META_CATEGORY_TABLE),
      queryInterface.dropTable(MOVE_META_AILMENT_TABLE),
      queryInterface.dropTable(MOVE_LEARN_METHOD_TABLE),
      queryInterface.dropTable(MOVE_EFFECT_TABLE),
      queryInterface.dropTable(MOVE_DAMAGE_CLASS_TABLE),
      queryInterface.dropTable(MOVE_BATTLESTYLE_TABLE),
      queryInterface.dropTable(MOVE_ATTRIBUTE_TABLE),
      queryInterface.dropTable(LANGUAGE_TABLE),
      queryInterface.dropTable(ITEM_POCKET_TABLE),
      queryInterface.dropTable(ITEM_FLING_EFFECT_TABLE),
      queryInterface.dropTable(ITEM_ATTRIBUTE_TABLE),
      queryInterface.dropTable(HABITAT_TABLE),
      queryInterface.dropTable(GROWTHRATE_TABLE),
      queryInterface.dropTable(GENDER_TABLE),
      queryInterface.dropTable(EVOLUTION_TRIGGER_TABLE),
      queryInterface.dropTable(ENCOUNTER_METHOD_TABLE),
      queryInterface.dropTable(ENCOUNTER_CONDITION_TABLE),
      queryInterface.dropTable(EGG_GROUP_TABLE),
      queryInterface.dropTable(CONTEST_TYPE_TABLE),
      queryInterface.dropTable(CONTEST_EFFECT_TABLE),
      queryInterface.dropTable(COLOR_TABLE),
      queryInterface.dropTable(BERRY_FIRMNESS_TABLE),
    ]);
  }
};
