import { Request, Response } from 'express';
import { sendMailContact } from '../config/NodeMailer';


const post = async (req: Request, res: Response): Promise<any> => {
  try {
    const subject = `Thank you so much for reaching out!`
    const html = `
    <b>Contact submited</b>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Message: ${req.body.message}</p>
    `;
    const html2 = `
    <p>WE GOT IT!<p></br>

    <p>Hello ${req.body.name},<p>
    <p>Thank you so much for reaching out! This auto-reply is just to let you know...</p></br>

    <p>We received your email and will get back to you as soon as possible.</p></br>

    <p>If you have any additional information that you think will help us to assist you, please feel free to reply to this email.</p>
    <p>We look forward to chatting soon!</p></br>

    <p>Best regards,</p>
    <p>BingoFamily</p>
    `
    await sendMailContact(subject, process.env.COMPANYMAIL, html);
    await sendMailContact(subject, req.body.email, html2);
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
