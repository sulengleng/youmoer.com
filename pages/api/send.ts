import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template.tsx";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: "hello@yeyouchuan.me",
      to: "yeyouchuan@gmail.com",
      subject: "Hello world",
      html: "<strong>It works!</strong>",
      react: EmailTemplate({ firstName: "Alan" }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
