import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limit store: email -> count + first request time
const rateLimitMap = new Map<
  string,
  { count: number; firstRequestAt: number }
>();

const LIMIT = 3; // 3 requests
const WINDOW = 24 * 60 * 60 * 1000; // 24 hours

export async function POST(req: Request) {
  try {
    const { company, name, email, message } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const now = Date.now();
    const user = rateLimitMap.get(email);

    if (user) {
      // Reset after 24 hours
      if (now - user.firstRequestAt > WINDOW) {
        rateLimitMap.set(email, { count: 1, firstRequestAt: now });
      } else if (user.count >= LIMIT) {
        return NextResponse.json(
          {
            success: false,
            message: "Daily limit reached. Please try again tomorrow.",
          },
          { status: 429 }
        );
      } else {
        user.count += 1;
      }
    } else {
      rateLimitMap.set(email, { count: 1, firstRequestAt: now });
    }

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["yashk40491@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
