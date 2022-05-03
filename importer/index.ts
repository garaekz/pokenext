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

const basePath = path.join(__dirname+'/csv/')

const genericBuild = (parsedHeaders: HeaderTransformFunction | null, filename: String, model: any) => {
  const list: String[] = [];
  createReadStream(path.join(basePath+filename))
    .pipe(parse({headers: parsedHeaders ? (headers => parsedHeaders(headers)):true}))
    .on("data", (row) => {
      list.push(row);
    })
    .on("end", () => {
      model.bulkCreate(list);
    });
}

const nonDependentModelsBuild = () => {
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

const buildLanguageDependant = async () => {
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

// const buildRegions = () => {
//   const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
//   genericBuild(makeHeaders, 'regions.csv', sequelize.models.Region);
//   genericBuild(makeHeaders, 'region_names.csv', sequelize.models.RegionName);
// }

// const buildGenerations = () => {
//   const makeHeaders = (headers: HeaderArray) => headers.map((h:any) => h === 'identifier'?'name':h);
//   genericBuild(makeHeaders, 'generations.csv', sequelize.models.Generation);
//   genericBuild(makeHeaders, 'generation_names.csv', sequelize.models.GenerationName);
// }

const init = async () => {
  await nonDependentModelsBuild();
  await buildLanguageDependant();
  // await buildLanguages();
  // await buildRegions();
  // await buildGenerations();
}

init();