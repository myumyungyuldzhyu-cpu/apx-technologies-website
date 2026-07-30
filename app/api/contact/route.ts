import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Моля, попълнете име, email и съобщение." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "APX Technologies <contact@apxtechnologies.dev>",
      to: ["myumyun.gyuldzhyu@gmail.com"],
      replyTo: email,
      subject: `Ново запитване от ${name}`,
      html: `
        <h2>Ново запитване от сайта</h2>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Компания:</strong> ${company || "Не е посочена"}</p>
        <p><strong>Съобщение:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Имейлът не беше изпратен." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Възникна неочаквана грешка." },
      { status: 500 }
    );
  }
}