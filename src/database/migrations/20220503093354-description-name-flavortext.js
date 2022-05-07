'use strict';

const { BerryFirmnessNameSchema, BERRY_FIRMNESS_NAME_TABLE } = require("../models/berry-firmness-name.model");
const { ColorNameSchema, COLOR_NAME_TABLE } = require("../models/color-name.model");
const { ContestEffectProseSchema, CONTEST_EFFECT_PROSE_TABLE } = require("../models/contest-effect-prose.model");
const { ContestTypeNameSchema, CONTEST_TYPE_NAME_TABLE } = require("../models/contest-type-name.model");
const { EggGroupNameSchema, EGG_GROUP_NAME_TABLE } = require("../models/egg-group-name.model");
const { EncounterConditionNameSchema, ENCOUNTER_CONDITION_NAME_TABLE } = require("../models/encounter-condition-name.model");
const { EncounterMethodNameSchema, ENCOUNTER_METHOD_NAME_TABLE } = require("../models/encounter-method-name.model");
const { EvolutionTriggerNameSchema, EVOLUTION_TRIGGER_NAME_TABLE } = require("../models/evolution-trigger-name.model");
const { GrowthrateProseSchema, GROWTHRATE_PROSE_TABLE } = require("../models/growthrate-prose.model");
const { HabitatNameSchema, HABITAT_NAME_TABLE } = require("../models/habitat-name.model");
const { ItemAttributeProseSchema, ITEM_ATTRIBUTE_PROSE_TABLE } = require("../models/item-attribute-prose.model");
const { ItemPocketNameSchema, ITEM_POCKET_NAME_TABLE } = require("../models/item-pocket-name.model");
const { LanguageNameSchema, LANGUAGE_NAME_TABLE } = require("../models/language-name.model");
const { MoveAttributeProseSchema, MOVE_ATTRIBUTE_PROSE_TABLE } = require("../models/move-attribute-prose.model");
const { MoveBattlestyleNameSchema, MOVE_BATTLESTYLE_NAME_TABLE } = require("../models/move-battlestyle-name.model");
const { MoveDamageClassProseSchema, MOVE_DAMAGE_CLASS_PROSE_TABLE } = require("../models/move-damage-class-prose.model");
const { MoveLearnMethodProseSchema, MOVE_LEARN_METHOD_PROSE_TABLE } = require("../models/move-learn-method-prose.model");
const { MoveMetaAilmentNameSchema, MOVE_META_AILMENT_NAME_TABLE } = require("../models/move-meta-ailment-name.model");
const { MoveTargetProseSchema, MOVE_TARGET_PROSE_TABLE } = require("../models/move-target-prose.model");
const { PalParkAreaNameSchema, PALPARK_AREA_NAME_TABLE } = require("../models/palpark-area-name.model");
const { PokeathlonStatNameSchema, POKEATHLON_STAT_NAME_TABLE } = require("../models/pokeathlon-stat-name.model");
const { RegionNameSchema, REGION_NAME_TABLE } = require("../models/region-name.model");
const { ShapeProseSchema, SHAPE_PROSE_TABLE } = require("../models/shape-prose.model");
const { SuperContestEffectProseSchema, SUPERCONTEST_EFFECT_PROSE_TABLE } = require("../models/supercontest-effect-prose.model");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(GROWTHRATE_PROSE_TABLE, GrowthrateProseSchema);
    await queryInterface.createTable(MOVE_ATTRIBUTE_PROSE_TABLE, MoveAttributeProseSchema);
    await queryInterface.createTable(BERRY_FIRMNESS_NAME_TABLE, BerryFirmnessNameSchema);
    await queryInterface.createTable(COLOR_NAME_TABLE, ColorNameSchema);
    await queryInterface.createTable(CONTEST_TYPE_NAME_TABLE, ContestTypeNameSchema);
    await queryInterface.createTable(EGG_GROUP_NAME_TABLE, EggGroupNameSchema);
    await queryInterface.createTable(ENCOUNTER_CONDITION_NAME_TABLE, EncounterConditionNameSchema);
    await queryInterface.createTable(ENCOUNTER_METHOD_NAME_TABLE, EncounterMethodNameSchema);
    await queryInterface.createTable(EVOLUTION_TRIGGER_NAME_TABLE, EvolutionTriggerNameSchema);
    await queryInterface.createTable(HABITAT_NAME_TABLE, HabitatNameSchema);
    await queryInterface.createTable(ITEM_ATTRIBUTE_PROSE_TABLE, ItemAttributeProseSchema);
    await queryInterface.createTable(ITEM_POCKET_NAME_TABLE, ItemPocketNameSchema);
    await queryInterface.createTable(LANGUAGE_NAME_TABLE, LanguageNameSchema);
    await queryInterface.createTable(MOVE_BATTLESTYLE_NAME_TABLE, MoveBattlestyleNameSchema);
    await queryInterface.createTable(MOVE_DAMAGE_CLASS_PROSE_TABLE, MoveDamageClassProseSchema);
    await queryInterface.createTable(MOVE_LEARN_METHOD_PROSE_TABLE, MoveLearnMethodProseSchema);
    await queryInterface.createTable(MOVE_META_AILMENT_NAME_TABLE, MoveMetaAilmentNameSchema);
    await queryInterface.createTable(MOVE_TARGET_PROSE_TABLE, MoveTargetProseSchema);
    await queryInterface.createTable(PALPARK_AREA_NAME_TABLE, PalParkAreaNameSchema);
    await queryInterface.createTable(POKEATHLON_STAT_NAME_TABLE, PokeathlonStatNameSchema);
    await queryInterface.createTable(REGION_NAME_TABLE, RegionNameSchema);
    await queryInterface.createTable(SHAPE_PROSE_TABLE, ShapeProseSchema);
    await queryInterface.createTable(CONTEST_EFFECT_PROSE_TABLE, ContestEffectProseSchema);
    await queryInterface.createTable(SUPERCONTEST_EFFECT_PROSE_TABLE, SuperContestEffectProseSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(GROWTHRATE_PROSE_TABLE);
    await queryInterface.dropTable(MOVE_ATTRIBUTE_PROSE_TABLE);
    await queryInterface.dropTable(MOVE_DAMAGE_CLASS_DESCRIPTION_TABLE);
    await queryInterface.dropTable(BERRY_FIRMNESS_NAME_TABLE);
    await queryInterface.dropTable(COLOR_NAME_TABLE);
    await queryInterface.dropTable(CONTEST_TYPE_NAME_TABLE);
    await queryInterface.dropTable(EGG_GROUP_NAME_TABLE);
    await queryInterface.dropTable(ENCOUNTER_CONDITION_NAME_TABLE);
    await queryInterface.dropTable(ENCOUNTER_METHOD_NAME_TABLE);
    await queryInterface.dropTable(EVOLUTION_TRIGGER_NAME_TABLE);
    await queryInterface.dropTable(HABITAT_NAME_TABLE);
    await queryInterface.dropTable(ITEM_ATTRIBUTE_PROSE_TABLE);
    await queryInterface.dropTable(ITEM_POCKET_NAME_TABLE);
    await queryInterface.dropTable(LANGUAGE_NAME_TABLE);
    await queryInterface.dropTable(MOVE_BATTLESTYLE_NAME_TABLE);
    await queryInterface.dropTable(MOVE_DAMAGE_CLASS_PROSE_TABLE);
    await queryInterface.dropTable(MOVE_LEARN_METHOD_PROSE_TABLE);
    await queryInterface.dropTable(MOVE_META_AILMENT_NAME_TABLE);
    await queryInterface.dropTable(MOVE_TARGET_PROSE_TABLE);
    await queryInterface.dropTable(PALPARK_AREA_NAME_TABLE);
    await queryInterface.dropTable(POKEATHLON_STAT_NAME_TABLE);
    await queryInterface.dropTable(REGION_NAME_TABLE);
    await queryInterface.dropTable(SHAPE_PROSE_TABLE);
    await queryInterface.dropTable(CONTEST_EFFECT_PROSE_TABLE);
    await queryInterface.dropTable(SUPERCONTEST_EFFECT_PROSE_TABLE);
  }
};
