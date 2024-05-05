import { Resend } from "resend";

const resend = new Resend("re_LS5Q7BJY_GbFWHmVNauGyJjg4QgcF7coz");

export async function POST(req: Request) {
  const { email, random } = await req.json();
  console.log({ email, random });

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email.toString()],
      subject: "Hello world",
      react: random.toString(),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
