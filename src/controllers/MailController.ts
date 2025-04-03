import { Request, Response } from 'express';
import { sendMailContact } from '../config/NodeMailer';
const { resetPasswordEmailTemplate, registerEmailTemplate } = require('../config/TemplateMail');


const post = async (req: Request, res: Response): Promise<any> => {
  try {
    //await sendMailContact(subject, process.env.COMPANYMAIL, html);
    await sendMailContact(req.body.action === 'register' ? "Trialメールアドレスの確認をお願いします" : "パスワードリセット", req.body.email, req.body.action === 'Register' ? registerEmailTemplate(req.body.activeLink, req.body.username) : resetPasswordEmailTemplate(req.body.activeLink, req.body.username));
    return res.status(200).json({
      msg: 'success',
    });
  } catch (error) {
    return res.status(500).send({
      msg: error.message,
    });
  }
};

const mailController = {
  post,
};

export { mailController };
