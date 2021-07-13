import express, { Request, Response, NextFunction, Router } from 'express';
import AIModel from './models/AIModel';
import connectDB from './mongo/db';

const app: express.Express = express();

connectDB();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: Router = Router();

router.get('/home', async (req: Request, res: Response) => {
  const aimodels = await AIModel.find({});
  res.send(aimodels);
});

router.post(
  '/models/:type/:name',
  (req: Request, res: Response) => {
    res.send(req.params);
  }
);

app.use(router);

app.listen(3000, () => {
  console.log('app listening on 3000');
});
