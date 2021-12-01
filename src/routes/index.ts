import express from 'express';
import { mailRouter } from './MailRouter';
const router = express.Router();

router.use('/', mailRouter);


export { router };
