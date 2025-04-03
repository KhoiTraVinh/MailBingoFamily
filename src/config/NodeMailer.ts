import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST,
    port: Number(process.env.MAILPORT),
    secure: false,
    auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS
    },
    tls: {
        rejectUnauthorized: false,
    },

});

const sendMailContact = async (subject: string, email: string,  html: string) => {
    await transporter.sendMail({
        from: `"${process.env.NAMECOMPANY}"`,
        to: email,
        subject: subject,
        html: html
    });
};

export { sendMailContact };
