import {Router, Request, Response} from 'express';
import path from 'path';
import fs from 'fs';

const apiRouter = (router: Router) => {
  // Importa dinamicamente las rutas, cuidado con el naming convention
  const routePath = path.join(__dirname)
  fs.readdirSync(routePath).forEach(async (filename) => {
    if (filename.includes('.router.ts')) {
      let route = path.join(routePath, filename);
      try {
          const item = await import(route);
          router.use(`/${filename.replace('.router.ts','')}`, item.default);
      } catch (error: any) {
          console.log(error.message);
      }
    }
  });
}

export default apiRouter;
