import * as dotenv from 'dotenv';
dotenv.config();
import { router } from './routes';
import bodyParser from 'body-parser';
import express from 'express';

const api = express();

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));


api.use('/api', router);



api.listen(process.env.PORT, () => {
    console.log(`server run on ${process.env.PORT}`);
})

