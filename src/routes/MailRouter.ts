import express from 'express';
import { mailController } from '../controllers/MailController';

const mailRouter = express.Router();

mailRouter.post('/send-mail',
  mailController.post
);

export {mailRouter} ;
