'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const company = formData.get('company') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Use this default until you verify your own domain
            to: 'shivampandey5106@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Inquiry</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}