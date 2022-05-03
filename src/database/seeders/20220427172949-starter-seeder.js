'use strict';

const { GENERATION_TABLE } = require("../models/generation.model");
const { REGION_TABLE } = require("../models/region.model");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(REGION_TABLE, [
      {name: 'kanto'},
      {name: 'johto'},
      {name: 'hoenn'},
      {name: 'sinnoh'},
      {name: 'unova'},
      {name: 'kalos'},
      {name: 'alola'},
      {name: 'galar'},
    ], {});

    await queryInterface.bulkInsert(GENERATION_TABLE, [
      {name: 'generation-i', main_region_id: 1},
      {name: 'generation-ii', main_region_id: 2},
      {name: 'generation-iii', main_region_id: 3},
      {name: 'generation-iv', main_region_id: 4},
      {name: 'generation-v', main_region_id: 5},
      {name: 'generation-vi', main_region_id: 6},
      {name: 'generation-vii', main_region_id: 7},
      {name: 'generation-viii', main_region_id: 8},
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(GENERATION_TABLE, null, {})
    await queryInterface.bulkDelete(REGION_TABLE, null, {})
  }
};
