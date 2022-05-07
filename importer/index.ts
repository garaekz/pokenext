import path from 'path';
import { createReadStream } from 'fs';
import { parse } from 'fast-csv';
import { HeaderArray, HeaderTransformFunction } from '@fast-csv/parse';
import { Model } from 'sequelize/types';
import '../src/libs/sequelize';
import { BerryFirmness } from '../src/database/models/berry-firmness.model';
import { Color } from '../src/database/models/color.model';
import { ContestEffect } from '../src/database/models/contest-effect.model';
import { ContestType } from '../src/database/models/contest-type.model';
import { EggGroup } from '../src/database/models/egg-group.model';
import { EncounterCondition } from '../src/database/models/encounter-condition.model';
import { EncounterMethod } from '../src/database/models/encounter-method.model';
import { EvolutionTrigger } from '../src/database/models/evolution-trigger.model';
import { Gender } from '../src/database/models/gender.model';
import { Growthrate } from '../src/database/models/growthrate.model';
import { Habitat } from '../src/database/models/habitat.model';
import { ItemAttribute } from '../src/database/models/item-attribute.model';
import { ItemFlingEffect } from '../src/database/models/item-fling-effect.model';
import { ItemPocket } from '../src/database/models/item-pocket.model';
import { Language } from '../src/database/models/language.model';
import { MoveAttribute } from '../src/database/models/move-attribute.model';
import { MoveBattlestyle } from '../src/database/models/move-battlestyle.model';
import { MoveDamageClass } from '../src/database/models/move-damage-class.model';
import { MoveEffect } from '../src/database/models/move-effect.model';
import { MoveLearnMethod } from '../src/database/models/move-learn-method.model';
import { MoveMetaAilment } from '../src/database/models/move-meta-ailment.model';
import { MoveTarget } from '../src/database/models/move-target.model';
import { PalParkArea } from '../src/database/models/palpark-area.model';
import { PokeathlonStat } from '../src/database/models/pokeathlon-stat.model';
import { Region } from '../src/database/models/region.model';
import { Shape } from '../src/database/models/shape.model';
import { SuperContestEffect } from '../src/database/models/supercontest-effect.model';
import { GrowthrateProse } from '../src/database/models/growthrate-prose.model';
import { MoveAttributeProse } from '../src/database/models/move-attribute-prose.model';
import { MoveLearnMethodProse } from '../src/database/models/move-learn-method-prose.model';
import { BerryFirmnessName } from '../src/database/models/berry-firmness-name.model';
import { ColorName } from '../src/database/models/color-name.model';
import { ContestTypeName } from '../src/database/models/contest-type-name.model';
import { EggGroupName } from '../src/database/models/egg-group-name.model';
import { EncounterConditionName } from '../src/database/models/encounter-condition-name.model';
import { EncounterMethodName } from '../src/database/models/encounter-method-name.model';
import { EvolutionTriggerName } from '../src/database/models/evolution-trigger-name.model';
import { HabitatName } from '../src/database/models/habitat-name.model';
import { ItemAttributeProse } from '../src/database/models/item-attribute-prose.model';
import { ItemPocketName } from '../src/database/models/item-pocket-name.model';
import { LanguageName } from '../src/database/models/language-name.model';
import { MoveBattlestyleName } from '../src/database/models/move-battlestyle-name.model';
import { MoveDamageClassProse } from '../src/database/models/move-damage-class-prose.model';
import { MoveMetaAilmentName } from '../src/database/models/move-meta-ailment-name.model';
import { MoveTargetProse } from '../src/database/models/move-target-prose.model';
import { PalParkAreaName } from '../src/database/models/palpark-area-name.model';
import { PokeathlonStatName } from '../src/database/models/pokeathlon-stat-name.model';
import { RegionName } from '../src/database/models/region-name.model';
import { ShapeProse } from '../src/database/models/shape-prose.model';
import { ContestEffectProse } from '../src/database/models/contest-effect-prose.model';
import { SuperContestEffectProse } from '../src/database/models/supercontest-effect-prose.model';
import { BerryFlavor } from '../src/database/models/berry-flavor.model';
import { Stat } from '../src/database/models/stat.model';
import { CharacteristicDescription } from '../src/database/models/characteristic-description.model';
import { Characteristic } from '../src/database/models/characteristic.model';
import { Generation } from '../src/database/models/generation.model';
import { Ability } from '../src/database/models/ability.model';
import { ItemCategory } from '../src/database/models/item-category.model';
import { Item } from '../src/database/models/item.model';
import { VersionGroup } from '../src/database/models/version-group.model';
import { Version } from '../src/database/models/version.model';
import { AbilityChangelog } from '../src/database/models/ability-changelog.model';
import { AbilityChangelogProse } from '../src/database/models/ability-changelog-prose.model';
import { AbilityEffectText } from '../src/database/models/ability-effect-text.model';
import { AbilityFlavorText } from '../src/database/models/ability-flavor-text.model';
import { AbilityName } from '../src/database/models/ability-name.model';
import { EvolutionChain } from '../src/database/models/evolution-chain.model';
import { Pokedex } from '../src/database/models/pokedex.model';
import { Specie } from '../src/database/models/specie.model';
import { DexNumber } from '../src/database/models/dex-number.model';
import { EggGroupSpecie } from '../src/database/models/eggroup-specie.model';
import { Type } from '../src/database/models/type.model';

const basePath = path.join(__dirname+'/csv')

const genericBuild = async (parsedHeaders: HeaderTransformFunction | null, filename: String, model: any) => {
  const list: String[] = [];
  createReadStream(path.join(`${basePath}/${filename}`))
    .pipe(parse({headers: parsedHeaders ? (headers => parsedHeaders(headers)):true}))
    .on("data", (row) => {
      list.push(row);
    })
    .on("end", () => {
      model.bulkCreate(list);
    });
}

const nonDependentModelsBuild = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  genericBuild(makeHeaders, 'berry_firmness.csv', BerryFirmness);
  genericBuild(makeHeaders, 'pokemon_colors.csv', Color);
  genericBuild(null, 'contest_effects.csv', ContestEffect);
  genericBuild(makeHeaders, 'contest_types.csv', ContestType);
  genericBuild(makeHeaders, 'egg_groups.csv', EggGroup);
  genericBuild(makeHeaders, 'encounter_conditions.csv', EncounterCondition);
  genericBuild(makeHeaders, 'encounter_methods.csv', EncounterMethod);
  genericBuild(makeHeaders, 'evolution_triggers.csv', EvolutionTrigger);
  genericBuild(makeHeaders, 'genders.csv', Gender);
  genericBuild(makeHeaders, 'growth_rates.csv', Growthrate);
  genericBuild(makeHeaders, 'pokemon_habitats.csv', Habitat);
  genericBuild(makeHeaders, 'item_flags.csv', ItemAttribute);
  genericBuild(makeHeaders, 'item_fling_effects.csv', ItemFlingEffect);
  genericBuild(makeHeaders, 'item_pockets.csv', ItemPocket);
  genericBuild(makeHeaders, 'languages.csv', Language);
  genericBuild(makeHeaders, 'move_flags.csv', MoveAttribute);
  genericBuild(makeHeaders, 'move_battle_styles.csv', MoveBattlestyle);
  genericBuild(makeHeaders, 'move_damage_classes.csv', MoveDamageClass);
  genericBuild(null, 'move_effects.csv', MoveEffect);
  genericBuild(makeHeaders, 'pokemon_move_methods.csv', MoveLearnMethod);
  genericBuild(makeHeaders, 'move_meta_ailments.csv', MoveMetaAilment);
  genericBuild(makeHeaders, 'move_targets.csv', MoveTarget);
  genericBuild(makeHeaders, 'pal_park_areas.csv', PalParkArea);
  genericBuild(makeHeaders, 'pokeathlon_stats.csv', PokeathlonStat);
  genericBuild(makeHeaders, 'regions.csv', Region);
  genericBuild(makeHeaders, 'pokemon_shapes.csv', Shape);
  genericBuild(null, 'super_contest_effects.csv', SuperContestEffect);
}

const buildOnlyTranslatableModels = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'local_language_id'?'language_id':h);
  await genericBuild(makeHeaders, 'move_flag_prose.csv', MoveAttributeProse);
  await genericBuild(makeHeaders, 'berry_firmness_names.csv', BerryFirmnessName);
  await genericBuild(makeHeaders, 'contest_type_names.csv', ContestTypeName);
  await genericBuild(makeHeaders, 'egg_group_prose.csv', EggGroupName);
  await genericBuild(makeHeaders, 'encounter_condition_prose.csv', EncounterConditionName);
  await genericBuild(makeHeaders, 'encounter_method_prose.csv', EncounterMethodName);
  await genericBuild(makeHeaders, 'evolution_trigger_prose.csv', EvolutionTriggerName);
  await genericBuild(makeHeaders, 'pokemon_habitat_names.csv', HabitatName);
  await genericBuild(makeHeaders, 'item_flag_prose.csv', ItemAttributeProse);
  await genericBuild(makeHeaders, 'item_pocket_names.csv', ItemPocketName);
  await genericBuild(makeHeaders, 'language_names.csv', LanguageName);
  await genericBuild(makeHeaders, 'move_battle_style_prose.csv', MoveBattlestyleName);
  await genericBuild(makeHeaders, 'move_damage_class_prose.csv', MoveDamageClassProse);
  await genericBuild(makeHeaders, 'move_meta_ailment_names.csv', MoveMetaAilmentName);
  await genericBuild(makeHeaders, 'move_target_prose.csv', MoveTargetProse);
  await genericBuild(makeHeaders, 'pokeathlon_stat_names.csv', PokeathlonStatName);
  await genericBuild(makeHeaders, 'region_names.csv', RegionName);
  await genericBuild(makeHeaders, 'contest_effect_prose.csv', ContestEffectProse);
  await genericBuild(makeHeaders, 'super_contest_effect_prose.csv', SuperContestEffectProse);
}

const buildGrowthRateProse = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => {
    switch (h) {
      case 'growth_rate_id':
        return 'growthrate_id';
      case 'local_language_id':
        return 'language_id';
      case 'name':
        return 'description';
      default:
        return h;
    }
  });
  await genericBuild(makeHeaders, 'growth_rate_prose.csv', GrowthrateProse);
}

const buildMoveLearnMethodProse = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => {
    switch (h) {
      case 'pokemon_move_method_id':
        return 'move_learn_method_id';
      case 'local_language_id':
        return 'language_id';
      default:
        return h;
    }
  });
  await genericBuild(makeHeaders, 'pokemon_move_method_prose.csv', MoveLearnMethodProse);
}

const buildColorName = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => {
    switch (h) {
      case 'pokemon_color_id':
        return 'color_id';
      case 'local_language_id':
        return 'language_id';
      default:
        return h;
    }
  });
  await genericBuild(makeHeaders, 'pokemon_color_names.csv', ColorName);
}

const buildPalParkAreaName = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => {
    switch (h) {
      case 'pal_park_area_id':
        return 'palpark_area_id';
      case 'local_language_id':
        return 'language_id';
      default:
        return h;
    }
  });
  await genericBuild(makeHeaders, 'pal_park_area_names.csv', PalParkAreaName);
}

const buildShapeProse = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => {
    switch (h) {
      case 'pokemon_shape_id':
        return 'shape_id';
      case 'local_language_id':
        return 'language_id';
      default:
        return h;
    }
  });
  await genericBuild(makeHeaders, 'pokemon_shape_prose.csv', ShapeProse);
}

const buildStat = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => {
    switch (h) {
      case 'damage_class_id':
        return 'move_damage_class_id';
      case 'identifier':
        return 'name';
        default:
          return h;
    }
  });
  await genericBuild(makeHeaders, 'stats.csv', Stat);
}

const buildCharacteristic = async () => {
  await genericBuild(null, 'characteristics.csv', Characteristic);
}

const buildCharacteristicDescription = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => {
    switch (h) {
      case 'local_language_id':
        return 'language_id';
      case 'message':
        return 'description';
      default:
        return h;
    }
  });
  await genericBuild(makeHeaders, 'characteristic_text.csv', CharacteristicDescription);
}

const buildGeneration = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'generations.csv', Generation);
}

const buildAbility = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'abilities.csv', Ability);
}

const buildItemCategory = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'item_categories.csv', ItemCategory);
}

const buildItem = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'items.csv', Item);
}

const buildVersionGroup = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'version_groups.csv', VersionGroup);
}

const buildVersion = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'versions.csv', Version);
}

const buildAbilityChangelog = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'ability_changelog.csv', AbilityChangelog);
}

const buildAbilityChangelogProse = async () => {
  await genericBuild(null, 'ability_changelog_prose.csv', AbilityChangelogProse);
}

const buildAbilityEffectText = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'local_language_id'?'language_id':h);
  await genericBuild(makeHeaders, 'ability_prose.csv', AbilityEffectText);
}

const buildAbilityFlavorText = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'local_language_id'?'language_id':h);
  await genericBuild(makeHeaders, 'ability_flavor_text.csv', AbilityFlavorText);
}

const buildAbilityName = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'local_language_id'?'language_id':h);
  await genericBuild(makeHeaders, 'ability_names.csv', AbilityName);
}

const buildEvolutionChain = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'local_language_id'?'language_id':h);
  await genericBuild(makeHeaders, 'evolution_chains.csv', EvolutionChain);
}

const buildPokedex = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'pokedexes.csv', Pokedex);
}

const buildSpecie = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'growth_rate_id'?'growthrate_id':h);
  await genericBuild(makeHeaders, 'species.csv', Specie);
}

const buildDexNumber = async () => {
  await genericBuild(null, 'pokemon_dex_numbers.csv', DexNumber);
}

const buildEggGroupSpecie = async () => {
  await genericBuild(null, 'pokemon_egg_groups.csv', EggGroupSpecie);
  
} 

const buildType = async () => {
  const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
  await genericBuild(makeHeaders, 'types.csv', Type);
}

const init = async () => {
  await nonDependentModelsBuild();
  await buildOnlyTranslatableModels();
  await buildGrowthRateProse();
  await buildMoveLearnMethodProse();
  await buildColorName();
  await buildPalParkAreaName();
  await buildShapeProse();
  // TODO: BerryFlavor builders missing because weird procesing mumbo jumbo
  await buildStat();
  await buildCharacteristic();
  await buildCharacteristicDescription();
}

init();