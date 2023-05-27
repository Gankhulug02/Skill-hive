import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER_EMAIL,
    pass: process.env.GMAIL_USER_PASS,
  },
});

const sendEmail = async (name: any, email: any, code: any) => {
  console.log(name, email);
  console.log("from", process.env.GMAIL_USER_EMAIL);

  const info = await transport.sendMail({
    from: process.env.GMAIL_USER_EMAIL,
    to: email,
    subject: "Email Confirmation Link",
    html: `
    <h4>Email confirmation link</h4>
    <p>Hi there</p>
    <p>Thank you for signing up for Skill Hive. Click on the link below verify your email:</p>
    <a href="http://localhost:3000/">Click Here</a>
    <p>This link will expire in 24 hours. if you did not sign up for a Skill Hive account, you can safely ignore this email</p>
    <p>The Skill Hive Team</p>`,
  });
};

export default sendEmail;
