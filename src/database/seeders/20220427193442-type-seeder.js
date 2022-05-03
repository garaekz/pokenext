'use strict';

const { TYPE_TABLE } = require("../models/type.model");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(TYPE_TABLE, [
      {id: 1, name: 'normal', generation_id:  1},
      {id: 2, name: 'fighting', generation_id:  1},
      {id: 3, name: 'flying', generation_id:  1},
      {id: 4, name: 'poison', generation_id:  1},
      {id: 5, name: 'ground', generation_id:  1},
      {id: 6, name: 'rock', generation_id:  1},
      {id: 7, name: 'bug', generation_id:  1},
      {id: 8, name: 'ghost', generation_id:  1},
      {id: 9, name: 'steel', generation_id:  2},
      {id: 10, name: 'fire', generation_id:  1},
      {id: 11, name: 'water', generation_id:  1},
      {id: 12, name: 'grass', generation_id:  1},
      {id: 13, name: 'electric', generation_id:  1},
      {id: 14, name: 'psychic', generation_id:  1},
      {id: 15, name: 'ice', generation_id:  1},
      {id: 16, name: 'dragon', generation_id:  1},
      {id: 17, name: 'dark', generation_id:  2},
      {id: 18, name: 'fairy', generation_id:  6},
      {id: 10001, name: 'unknown', generation_id:  2},
      {id: 10002, name: 'shadow', generation_id:  3},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TYPE_TABLE, null, {});
  }
};
