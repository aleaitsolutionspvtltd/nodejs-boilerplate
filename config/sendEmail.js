import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = (to, subject, html, attachments) => {
  const msg = {
    to: to,
    from: "nandlal@aleaitsolutions.in",
    subject: subject,
    text: "Test",
    html: html,
    attachments: attachments,
  };

  sgMail
    .send(msg)
    .then((response) => {
      // console.log(response[0].statusCode);
    })
    .catch((error) => {
      console.log("error found");
      // console.error(error);
    });
};

export {sendEmail};