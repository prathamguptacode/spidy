import nodemailer from "nodemailer"

export default function mailer({ pass, msg }: { pass: string, msg: string }) {
  let mailTransporter =
    nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: 'prathamgupta.wk@gmail.com',
          pass: pass
        }
      }
    );

  let mailDetails = {
    from: 'prathamgupta.wk@gmail.com',
    to: 'prathamgupta.wk@gmail.com',
    subject: 'Spidy mail',
    text: msg
  };

  mailTransporter
    .sendMail(mailDetails,
      function (err, data) {
        if (err) {
          console.log('Error Occurs');
        } else {
          console.log('Email sent successfully');
        }
      });
}
