import express from 'express';
import apiRouter from './routes';
const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api/v1', router);
apiRouter(router);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})