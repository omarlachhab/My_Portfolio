import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  let transporter = nodemailer.createTransport({
    service: "Gmails",
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
  await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      return Response.status(500);
    } else {
      console.log("Email sent: " + info.response);
      return NextResponse.json(
        {
          success: false,
          message: "Auth failed",
        },
        {
          status: 401,
        }
      );
    }
  });
}
