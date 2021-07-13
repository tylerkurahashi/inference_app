import express from 'express';
import AIModel from './models/AIModel';
import connectDB from './mongo/db';

const app: express.Express = express();

connectDB()


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();

router.get('/home', async (req: express.Request, res: express.Response) => {
  const aimodels = await AIModel.find({});
  res.send(aimodels);
});

router.post(
  '/models/:type/:name',
  (req: express.Request, res: express.Response) => {
    res.send(req.params);
  }
);

app.use(router);

app.listen(3000, () => {
  console.log('app listening on 3000');
});
