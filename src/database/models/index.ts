import { Sequelize } from 'sequelize/types';
import { AbilityChangelog, AbilityChangelogSchema } from './ability-changelog.model';
import { AbilityFlavorText, AbilityFlavorTextSchema } from './ability-flavor-text.model';
import { AbilityName, AbilityNameSchema } from './ability-name.model';
import { Ability, AbilitySchema }from './ability.model';
import { BerryFirmness, BerryFirmnessSchema } from './berry-firmness.model';
import { BerryFlavor, BerryFlavorSchema } from './berry-flavor.model';
import { Berry, BerrySchema } from './berry.model';
import { CharacteristicDescription, CharacteristicDescriptionSchema } from './characteristic-description.model';
import { Characteristic, CharacteristicSchema } from './characteristic.model';
import { ContestType, ContestTypeSchema } from './contest-type.model';
import { EggGroupName, EggGroupNameSchema } from './egg-group-name.model';
import { EggGroup, EggGroupSchema } from './egg-group.model';
import { GenerationName, GenerationNameSchema } from './generation-name.model';
import { Generation, GenerationSchema } from './generation.model';
import { GrowthrateProse, GrowthrateProseSchema } from './growthrate-prose.model';
import { Growthrate, GrowthrateSchema } from './growthrate.model';
import { ItemCategory, ItemCategorySchema } from './item-category.model';
import { Item, ItemSchema } from './item.model';
import { LanguageName, LanguageNameSchema } from './language-name.model';
import { Language, LanguageSchema } from './language.model';
import { MoveBattlestyle, MoveBattlestyleSchema } from './move-battlestyle.model';
import { MoveDamageClass, MoveDamageClassSchema } from './move-damage-class.model';
import { MoveEffect, MoveEffectSchema } from './move-effect.model';
import { MoveTarget, MoveTargetSchema } from './move-target.model';
import { NatureBattlestylePreference, NatureBattlestylePreferenceSchema } from './nature-battlestyle-preference.model';
import { NatureName, NatureNameSchema } from './nature-name.model';
import { NaturePokeathlonStat, NaturePokeathlonStatSchema } from './nature-pokeathlon-stat.model';
import { Nature, NatureSchema } from './nature.model';
import { PokeathlonStat, PokeathlonStatSchema } from './pokeathlon-stat.model';
import { PokemonType, PokemonTypeSchema } from './pokemon-type.model';
import { Pokemon, PokemonSchema }from './pokemon.model';
import { Region, RegionSchema } from './region.model';
import { RegionVersiongroup, RegionVersiongroupSchema } from './region-versiongroup.model';
import { StatName, StatNameSchema } from './stat-name.model';
import { Stat, StatSchema } from './stat.model';
import { TypeEfficacy, TypeEfficacySchema } from './type-efficacy.model';
import { TypeGameIndex, TypeGameIndexSchema } from './type-game-index.model';
import { TypeName, TypeNameSchema } from './type-name.model';
import { Type, TypeSchema } from './type.model';
import { VersionGroup, VersionGroupSchema } from './version-group.model';
import { VersionName, VersionNameSchema } from './version-name.model';
import { Version, VersionSchema } from './version.model';
import { ContestEffect, ContestEffectSchema } from './contest-effect.model';
import { SuperContestEffect, SuperContestEffectSchema } from './supercontest-effect.model';
import { Move, MoveSchema } from './move.model';
import { MoveBattlestyleName, MoveBattlestyleNameSchema } from './move-battlestyle-name.model';
import { MoveChangelog, MoveChangelogSchema } from './move-changelog.model';
import { MoveEffectChangelog, MoveEffectChangelogSchema } from './move-effect-changelog.model';
import { MoveAttribute, MoveAttributeSchema } from './move-attribute.model';
import { MoveFlavorText, MoveFlavorTextSchema } from './move-flavor-text.model';
import { MoveMetaCategory, MoveMetaCategorySchema } from './move-meta-category.model';
import { MoveMetaAilment, MoveMetaAilmentSchema } from './move-meta-ailment.model';
import { MoveMeta, MoveMetaSchema } from './move-meta.model';
import { MoveMetaAilmentName, MoveMetaAilmentNameSchema } from './move-meta-ailment-name.model';
import { MoveMetaCategoryDescription, MoveMetaCategoryDescriptionSchema } from './move-meta-category-description.model';
import { MoveMetaStatChange, MoveMetaStatChangeSchema } from './move-stat-change.model';
import { MoveName, MoveNameSchema } from './move-name.model';
import { EvolutionChain, EvolutionChainSchema } from './evolution-chain.model';
import { EvolutionTrigger, EvolutionTriggerSchema } from './evolution-trigger.model';
import { EvolutionTriggerName, EvolutionTriggerNameSchema } from './evolution-trigger-name.model';
import { Experience, ExperienceSchema } from './experience.model';
import { Gender, GenderSchema } from './gender.model';
import { Pokedex, PokedexSchema } from './pokedex.model';
import { PokedexDescription, PokedexDescriptionSchema } from './pokedex-description.model';
import { PokedexVersiongroup, PokedexVersiongroupSchema } from './pokedex-versiongroup.model';
import { Color, ColorSchema } from './color.model';
import { Habitat, HabitatSchema } from './habitat.model';
import { Shape, ShapeSchema } from './shape.model';
import { Specie, SpecieSchema } from './specie.model';
import { ColorName, ColorNameSchema } from './color-name.model';
import { DexNumber, DexNumberSchema } from './dex-number.model';
import { EggGroupSpecie, EggGroupSpecieSchema } from './eggroup-specie.model';
import { Location, LocationSchema } from './location.model';
import { Evolution, EvolutionSchema } from './evolution.model';
import { PokemonForm, PokemonFormSchema } from './pokemon-form.model';
import { GenerationPokemonForm, GenerationPokemonFormSchema } from './pokemon-form-generation.model';
import { PokemonFormName, PokemonFormNameSchema } from './pokemon-form-name.model';
import { PokemonGameIndex, PokemonGameIndexSchema } from './pokemon-game-index.model';
import { HabitatName, HabitatNameSchema } from './habitat-name.model';
import { ItemPokemon, ItemPokemonSchema } from './item-pokemon.model';
import { MoveLearnMethod, MoveLearnMethodSchema } from './move-learn-method.model';
import { MovePokemon, MovePokemonSchema } from './move-pokemon.model';
import { MoveLearnMethodProse, MoveLearnMethodProseSchema } from './move-learn-method-prose.model';
import { ShapeProse, ShapeProseSchema } from './shape-prose.model';
import { SpecieName, SpecieNameSchema } from './specie-name.model';
import { SpecieDescription, SpecieDescriptionSchema } from './specie-description.model';
import { SpecieFlavorText, SpecieFlavorTextSchema } from './specie-flavor-text.model';
import { PokemonStat, PokemonStatSchema } from './pokemon-stat.model';
import { Machine, MachineSchema } from './machine.model';
import { ItemCategoryName, ItemCategoryNameSchema } from './item-category-name.model';
import { ItemAttribute, ItemAttributeSchema } from './item-attribute.model';
import { ItemAttributeProse, ItemAttributeProseSchema } from './item-attribute-prose.model';
import { ItemFlavorText, ItemFlavorTextSchema } from './item-flavor-text.model';
import { ItemFlingEffect, ItemFlingEffectSchema } from './item-fling-effect.model';
import { ItemGameIndex, ItemGameIndexSchema } from './item-game-index.model';
import { ItemName, ItemNameSchema } from './item-name.model';
import { ItemPocket, ItemPocketSchema } from './item-pocket.model';
import { ItemPocketName, ItemPocketNameSchema } from './item-pocket-name.model';
import { BerryFirmnessName, BerryFirmnessNameSchema } from './berry-firmness-name.model';
import { ContestCombo, ContestComboSchema } from './contest-combo.model';
import { ContestTypeName, ContestTypeNameSchema } from './contest-type-name.model';
import { RegionName, RegionNameSchema } from './region-name.model';
import { LocationArea, LocationAreaSchema } from './location-area.model';
import { LocationAreaName, LocationAreaNameSchema } from './location-area-name.model';
import { EncounterMethod, EncounterMethodSchema } from './encounter-method.model';
import { EncounterMethodName, EncounterMethodNameSchema } from './encounter-method-name.model';
import { LocationAreaEncounterRate, LocationAreaEncounterRateSchema } from './location-area-encounter-rate.model';
import { LocationGameIndex, LocationGameIndexSchema } from './location-game-index.model';
import { LocationName, LocationNameSchema } from './location-name.model';
import { EncounterSlot, EncounterSlotSchema } from './encounter-slot.model';
import { Encounter, EncounterSchema } from './encounter.model';
import { EncounterCondition, EncounterConditionSchema } from './encounter-condition.model';
import { EncounterConditionName, EncounterConditionNameSchema } from './encounter-condition-name.model';
import { EncounterConditionValue, EncounterConditionValueSchema } from './encounter-condition-value.model';
import { EncounterConditionValueMap, EncounterConditionValueMapSchema } from './encounter-condition-value-map.model';
import { EncounterConditionValueName, EncounterConditionValueNameSchema } from './encounter-condition-value-name.model';
import { PalParkArea, PalParkAreaSchema } from './palpark-area.model';
import { PalParkAreaName, PalParkAreaNameSchema } from './palpark-area-name.model';
import { PalPark, PalParkSchema } from './palpark.model';
import { PokeathlonStatName, PokeathlonStatNameSchema } from './pokeathlon-stat-name.model';
import { ItemAttributeMap, ItemAttributeMapSchema } from './item-attribute-map.model';
import { MoveAttributeProse, MoveAttributeProseSchema } from './move-attribute-prose.model';
import { MoveAttributeMap, MoveAttributeMapSchema } from './move-attribute-map.model';
import { MoveDamageClassProse, MoveDamageClassProseSchema } from './move-damage-class-prose.model';
import { MoveTargetProse, MoveTargetProseSchema } from './move-target-prose.model';
import { PokedexName, PokedexNameSchema } from './pokedex-name.model';
import { AbilityChangelogProse, AbilityChangelogProseSchema } from './ability-changelog-prose.model';
import { AbilityEffectText, AbilityEffectTextSchema } from './ability-effect-text.model';
import { ItemEffectText, ItemEffectTextSchema } from './item-effect-text.model';
import { ContestEffectProse, ContestEffectProseSchema } from './contest-effect-prose.model';
import { MoveEffectChangelogProse, MoveEffectChangelogProseSchema } from './move-changelog-prose.model';
import { SuperContestEffectProse, SuperContestEffectProseSchema } from './supercontest-effect-prose.model';
import { ItemFlingEffectProse, ItemFlingEffectProseSchema } from './item-fling-effect-prose.model';
import { ItemSprites, ItemSpritesSchema } from './item-sprites.model';
import { PokemonFormSprites, PokemonFormSpritesSchema } from './pokemon-form-sprites.model';
import { PokemonSprites, PokemonSpritesSchema } from './pokemon-sprites.model';
import { BerryFlavorName, BerryFlavorNameSchema } from './berry-flavor-name.model';

const setupModels = (sequelize: Sequelize) => {
  // Non dependant models
  BerryFirmness.init(BerryFirmnessSchema, BerryFirmness.config(sequelize));
  Color.init(ColorSchema, Color.config(sequelize));
  ContestEffect.init(ContestEffectSchema, ContestEffect.config(sequelize));
  ContestType.init(ContestTypeSchema, ContestType.config(sequelize));
  EggGroup.init(EggGroupSchema, EggGroup.config(sequelize));
  EncounterCondition.init(EncounterConditionSchema, EncounterCondition.config(sequelize));
  EncounterMethod.init(EncounterMethodSchema, EncounterMethod.config(sequelize));
  EvolutionTrigger.init(EvolutionTriggerSchema, EvolutionTrigger.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));
  Growthrate.init(GrowthrateSchema, Growthrate.config(sequelize));
  Habitat.init(HabitatSchema, Habitat.config(sequelize));
  ItemAttribute.init(ItemAttributeSchema, ItemAttribute.config(sequelize));
  ItemFlingEffect.init(ItemFlingEffectSchema, ItemFlingEffect.config(sequelize));
  ItemPocket.init(ItemPocketSchema, ItemPocket.config(sequelize));
  Language.init(LanguageSchema, Language.config(sequelize));
  MoveAttribute.init(MoveAttributeSchema, MoveAttribute.config(sequelize));
  MoveBattlestyle.init(MoveBattlestyleSchema, MoveBattlestyle.config(sequelize));
  MoveDamageClass.init(MoveDamageClassSchema, MoveDamageClass.config(sequelize));
  MoveEffect.init(MoveEffectSchema, MoveEffect.config(sequelize));
  MoveLearnMethod.init(MoveLearnMethodSchema, MoveLearnMethod.config(sequelize));
  MoveMetaAilment.init(MoveMetaAilmentSchema, MoveMetaAilment.config(sequelize));
  MoveTarget.init(MoveTargetSchema, MoveTarget.config(sequelize));
  PalParkArea.init(PalParkAreaSchema, PalParkArea.config(sequelize));
  PokeathlonStat.init(PokeathlonStatSchema, PokeathlonStat.config(sequelize));
  Region.init(RegionSchema, Region.config(sequelize));
  Shape.init(ShapeSchema, Shape.config(sequelize));
  SuperContestEffect.init(SuperContestEffectSchema, SuperContestEffect.config(sequelize));
  
  // Dependants on non dependant models
  // Descriptions
  GrowthrateProse.init(GrowthrateProseSchema, GrowthrateProse.config(sequelize));
  MoveAttributeProse.init(MoveAttributeProseSchema, MoveAttributeProse.config(sequelize));
  // Names
  BerryFirmnessName.init(BerryFirmnessNameSchema, BerryFirmnessName.config(sequelize));
  ColorName.init(ColorNameSchema, ColorName.config(sequelize));
  ContestTypeName.init(ContestTypeNameSchema, ContestTypeName.config(sequelize));
  EggGroupName.init(EggGroupNameSchema, EggGroupName.config(sequelize));
  EncounterConditionName.init(EncounterConditionNameSchema, EncounterConditionName.config(sequelize));
  EncounterMethodName.init(EncounterMethodNameSchema, EncounterMethodName.config(sequelize));
  EvolutionTriggerName.init(EvolutionTriggerNameSchema, EvolutionTriggerName.config(sequelize));
  HabitatName.init(HabitatNameSchema, HabitatName.config(sequelize));
  ItemAttributeProse.init(ItemAttributeProseSchema, ItemAttributeProse.config(sequelize));
  ItemPocketName.init(ItemPocketNameSchema, ItemPocketName.config(sequelize));
  LanguageName.init(LanguageNameSchema, LanguageName.config(sequelize));
  MoveBattlestyleName.init(MoveBattlestyleNameSchema, MoveBattlestyleName.config(sequelize));
  MoveDamageClassProse.init(MoveDamageClassProseSchema, MoveDamageClassProse.config(sequelize));
  MoveLearnMethodProse.init(MoveLearnMethodProseSchema, MoveLearnMethodProse.config(sequelize));
  MoveMetaAilmentName.init(MoveMetaAilmentNameSchema, MoveMetaAilmentName.config(sequelize));
  MoveMetaCategory.init(MoveMetaCategorySchema, MoveMetaCategory.config(sequelize));
  MoveTargetProse.init(MoveTargetProseSchema, MoveTargetProse.config(sequelize));
  PalParkAreaName.init(PalParkAreaNameSchema, PalParkAreaName.config(sequelize));
  PokeathlonStatName.init(PokeathlonStatNameSchema, PokeathlonStatName.config(sequelize));
  RegionName.init(RegionNameSchema, RegionName.config(sequelize));
  ShapeProse.init(ShapeProseSchema, ShapeProse.config(sequelize));
  // Prose
  ContestEffectProse.init(ContestEffectProseSchema, ContestEffectProse.config(sequelize));
  SuperContestEffectProse.init(SuperContestEffectProseSchema, SuperContestEffectProse.config(sequelize));
  // The rest of multiple model dependants
  BerryFlavor.init(BerryFlavorSchema, BerryFlavor.config(sequelize));
  BerryFlavorName.init(BerryFlavorNameSchema, BerryFlavorName.config(sequelize));
  Stat.init(StatSchema, Stat.config(sequelize));
  Characteristic.init(CharacteristicSchema, Characteristic.config(sequelize));
  CharacteristicDescription.init(CharacteristicDescriptionSchema, CharacteristicDescription.config(sequelize));
  Generation.init(GenerationSchema, Generation.config(sequelize));
  Ability.init(AbilitySchema, Ability.config(sequelize));
  ItemCategory.init(ItemCategorySchema, ItemCategory.config(sequelize));
  Item.init(ItemSchema, Item.config(sequelize));
  VersionGroup.init(VersionGroupSchema, VersionGroup.config(sequelize));
  Version.init(VersionSchema, Version.config(sequelize));
  AbilityChangelog.init(AbilityChangelogSchema, AbilityChangelog.config(sequelize));
  AbilityChangelogProse.init(AbilityChangelogProseSchema, AbilityChangelogProse.config(sequelize));
  AbilityEffectText.init(AbilityEffectTextSchema, AbilityEffectText.config(sequelize));
  AbilityFlavorText.init(AbilityFlavorTextSchema, AbilityFlavorText.config(sequelize));
  AbilityName.init(AbilityNameSchema, AbilityName.config(sequelize));
  EvolutionChain.init(EvolutionChainSchema, EvolutionChain.config(sequelize));
  Pokedex.init(PokedexSchema, Pokedex.config(sequelize));
  Specie.init(SpecieSchema, Specie.config(sequelize));
  DexNumber.init(DexNumberSchema, DexNumber.config(sequelize));
  EggGroupSpecie.init(EggGroupSpecieSchema, EggGroupSpecie.config(sequelize));
  Type.init(TypeSchema, Type.config(sequelize));
  Berry.init(BerrySchema, Berry.config(sequelize));
  Move.init(MoveSchema, Move.config(sequelize));
  Pokemon.init(PokemonSchema, Pokemon.config(sequelize));
  ContestCombo.init(ContestComboSchema, ContestCombo.config(sequelize));
  Evolution.init(EvolutionSchema, Evolution.config(sequelize));
  Experience.init(ExperienceSchema, Experience.config(sequelize));
  GenerationName.init(GenerationNameSchema, GenerationName.config(sequelize));
  GenerationPokemonForm.init(GenerationPokemonFormSchema, GenerationPokemonForm.config(sequelize));
  ItemAttributeMap.init(ItemAttributeMapSchema, ItemAttributeMap.config(sequelize));
  ItemCategoryName.init(ItemCategoryNameSchema, ItemCategoryName.config(sequelize));
  ItemEffectText.init(ItemEffectTextSchema, ItemEffectText.config(sequelize));
  ItemFlavorText.init(ItemFlavorTextSchema, ItemFlavorText.config(sequelize));
  ItemFlingEffectProse.init(ItemFlingEffectProseSchema, ItemFlingEffectProse.config(sequelize));
  ItemGameIndex.init(ItemGameIndexSchema, ItemGameIndex.config(sequelize));
  ItemName.init(ItemNameSchema, ItemName.config(sequelize));
  ItemPokemon.init(ItemPokemonSchema, ItemPokemon.config(sequelize));
  Location.init(LocationSchema, Location.config(sequelize));
  LocationArea.init(LocationAreaSchema, LocationArea.config(sequelize));
  Encounter.init(EncounterSchema, Encounter.config(sequelize));
  EncounterConditionValue.init(EncounterConditionValueSchema, EncounterConditionValue.config(sequelize));
  EncounterConditionValueMap.init(EncounterConditionValueMapSchema, EncounterConditionValueMap.config(sequelize));
  EncounterConditionValueName.init(EncounterConditionValueNameSchema, EncounterConditionValueName.config(sequelize));
  EncounterSlot.init(EncounterSlotSchema, EncounterSlot.config(sequelize));
  LocationAreaEncounterRate.init(LocationAreaEncounterRateSchema, LocationAreaEncounterRate.config(sequelize));
  LocationAreaName.init(LocationAreaNameSchema, LocationAreaName.config(sequelize));
  LocationGameIndex.init(LocationGameIndexSchema, LocationGameIndex.config(sequelize));
  LocationName.init(LocationNameSchema, LocationName.config(sequelize));
  Machine.init(MachineSchema, Machine.config(sequelize));
  MoveAttributeMap.init(MoveAttributeMapSchema, MoveAttributeMap.config(sequelize));
  MoveChangelog.init(MoveChangelogSchema, MoveChangelog.config(sequelize));
  MoveEffectChangelog.init(MoveEffectChangelogSchema, MoveEffectChangelog.config(sequelize));
  MoveEffectChangelogProse.init(MoveEffectChangelogProseSchema, MoveEffectChangelogProse.config(sequelize));
  MoveFlavorText.init(MoveFlavorTextSchema, MoveFlavorText.config(sequelize));
  MoveMeta.init(MoveMetaSchema, MoveMeta.config(sequelize));
  MoveMetaCategoryDescription.init(MoveMetaCategoryDescriptionSchema, MoveMetaCategoryDescription.config(sequelize));
  MoveMetaStatChange.init(MoveMetaStatChangeSchema, MoveMetaStatChange.config(sequelize));
  MoveName.init(MoveNameSchema, MoveName.config(sequelize));
  MovePokemon.init(MovePokemonSchema, MovePokemon.config(sequelize));
  Nature.init(NatureSchema, Nature.config(sequelize));
  NatureBattlestylePreference.init(NatureBattlestylePreferenceSchema, NatureBattlestylePreference.config(sequelize));
  NatureName.init(NatureNameSchema, NatureName.config(sequelize));
  NaturePokeathlonStat.init(NaturePokeathlonStatSchema, NaturePokeathlonStat.config(sequelize));
  PalPark.init(PalParkSchema, PalPark.config(sequelize));
  PokedexDescription.init(PokedexDescriptionSchema, PokedexDescription.config(sequelize));
  PokedexName.init(PokedexNameSchema, PokedexName.config(sequelize));
  PokedexVersiongroup.init(PokedexVersiongroupSchema, PokedexVersiongroup.config(sequelize));
  PokemonForm.init(PokemonFormSchema, PokemonForm.config(sequelize));
  PokemonFormName.init(PokemonFormNameSchema, PokemonFormName.config(sequelize));
  PokemonGameIndex.init(PokemonGameIndexSchema, PokemonGameIndex.config(sequelize));
  PokemonStat.init(PokemonStatSchema, PokemonStat.config(sequelize));
  PokemonType.init(PokemonTypeSchema, PokemonType.config(sequelize));
  RegionVersiongroup.init(RegionVersiongroupSchema, RegionVersiongroup.config(sequelize));
  SpecieDescription.init(SpecieDescriptionSchema, SpecieDescription.config(sequelize));
  SpecieFlavorText.init(SpecieFlavorTextSchema, SpecieFlavorText.config(sequelize));
  SpecieName.init(SpecieNameSchema, SpecieName.config(sequelize));
  StatName.init(StatNameSchema, StatName.config(sequelize));
  TypeEfficacy.init(TypeEfficacySchema, TypeEfficacy.config(sequelize));
  TypeGameIndex.init(TypeGameIndexSchema, TypeGameIndex.config(sequelize));
  TypeName.init(TypeNameSchema, TypeName.config(sequelize));
  VersionName.init(VersionNameSchema, VersionName.config(sequelize));
  
  // Sprites Models
  ItemSprites.init(ItemSpritesSchema, ItemSprites.config(sequelize));
  PokemonFormSprites.init(PokemonFormSpritesSchema, PokemonFormSprites.config(sequelize));
  PokemonSprites.init(PokemonSpritesSchema, PokemonSprites.config(sequelize));

  // Region.associate(sequelize.models);
  // Generation.associate(sequelize.models);
  // Pokemon.associate(sequelize.models);
  // Type.associate(sequelize.models);
}

export default setupModels;
