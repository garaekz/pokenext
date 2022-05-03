
import {Router, Request, Response, NextFunction} from 'express';
import { PokemonsService } from '../services/pokemons.service';
const router = Router();
const service = new PokemonsService;
router.get('/', async (req: Request, res: Response) => {
  const list = await service.find(req.query)
  res.json(list);
});
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const item = await service.findById(id);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

export default router;