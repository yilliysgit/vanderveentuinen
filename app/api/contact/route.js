import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.formData();

    const name = data.get("name");
    const email = data.get("email");
    const location = data.get("location");
    const message = data.get("message");

    await resend.emails.send({
      from: "Contact <contact@vanderveen.nl>", // later eigen domein
      to: "yilliy@easyconcepts.com", // 👈 HIER komt jouw mail
      subject: "Nieuwe aanvraag via website",
      html: `
        <h2>Nieuwe aanvraag</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Locatie:</strong> ${location}</p>
        <p><strong>Bericht:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
}