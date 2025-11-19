import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Verta Limited <onboarding@resend.dev>", // Use your verified domain
      to: ["vertaalimited@gmail.com"], // Your business email
      subject: "New Contact Form Submission from Verta Limited",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Name:</strong> ${name}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Email:</strong> ${email}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Message:</strong>
            </p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 10px;">
            This email was sent from the Verta Limited contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
