// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     // ✅ Parse request body ONCE
//     const body = await req.json();

//     // ✅ Log the received data
//     console.log("Contact form data received:", body);

//     const { company, name, email, message } = body;

//     await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>",
//       to: ["yashk40491@gmail.com"],
//       subject: `New Contact Form Submission from ${name}`,
//       replyTo: email,
//       html: `
//         <h2>New Contact Request</h2>
//         <p><strong>Company:</strong> ${company}</p>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Contact API error:", error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { company, name, email, message } = await req.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["yashk40491@gmail.com"], // 👈 your Gmail
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
 