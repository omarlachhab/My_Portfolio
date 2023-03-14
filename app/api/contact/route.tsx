import nodemailer from "nodemailer";
type dataPost = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  api_key: string;
};
export async function POST(req: Request, res: Response) {
  const body: dataPost = await req.json();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "utchiha1996@gmail.com", // your gmail account
      pass: process.env.GOOGLE_PASS, // your gmail app password
    },
  });
  const mailOption = {
    from: `From ${body.email}`, // sender address
    to: "utchiha1996@gmail.com", // list of receivers
    subject: body.subject, // Subject line
    text: body.message, // plain text body
    html: `
    <b>Name : ${body.name}</b><br>
    <b>Phone number : ${body.phone}</b><br>
    <b>Email : ${body.email}</b><br>
    <b>Message : ${body.message}</b><br>
    `,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log("Api Error :" + error);
      return new Response("Error sending email", { status: 401 });
    } else {
      console.log("Email sent: " + info.response);
      return new Response("Sending message with successful", { status: 200 });
    }
  });
  return new Response("Sending message with successful", { status: 200 });
}
