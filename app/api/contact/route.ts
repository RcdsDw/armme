import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    await resend.emails.send({
      from: "Armme Formulaire <onboarding@resend.dev>",
      to: "armme.dev@gmail.com",
      subject: `Nouveau message de ${firstName} ${lastName}`,
      html: `
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email de contact :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}