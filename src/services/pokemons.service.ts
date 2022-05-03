import boom from '@hapi/boom';
import { Identifier } from 'sequelize/types';
import { Type } from '../database/models/type.model';
import sequelize from '../libs/sequelize';

class PokemonsService {
  async find({limit = 9, offset = 0}) {
    return await sequelize.models.Pokemon.findAll(
      { 
        limit,
        offset,
        include: [{
          model: Type,
          as: 'types',
          attributes: ['name'],
          required: false,
          through: {attributes: []}
        }],
      });
  }
  async findById(id: Identifier) {
    const item = await sequelize.models.Pokemon.findByPk(id,
      { 
        attributes: { exclude: ['_link'] },
        include: [{
          model: Type,
          as: 'types',
          attributes: ['name'],
          required: false,
          through: {attributes: []}
        }],
      }
    );
    if (!item) {
      throw boom.notFound('product not found')
    }
    return item;
  }
}

export { PokemonsService };
