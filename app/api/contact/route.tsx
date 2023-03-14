 
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  let transporter = nodemailer.createTransport({
    service: "gmaild",
    auth: {
      user: "utchiha1996@gmail.com", // your gmail account
      pass: "yxsxhzjbffeqmeoq", // your gmail app password
    },
  });
  const mailOption = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "utchiha1996@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      return new Response('Error sending email', { status: 401 });
    } else {
      console.log("Email sent: " + info.response);
      return new Response('Sending message with successful', { status: 200 });

    }
  });

}
 