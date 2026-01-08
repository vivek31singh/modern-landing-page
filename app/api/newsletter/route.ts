import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema for newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const { email } = newsletterSchema.parse(body);

    // TODO: Integrate with your email service provider (e.g., Resend, ConvertKit, Mailchimp)
    // const response = await fetch('https://api.your-email-service.com/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // });

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the subscription (for development purposes)
    console.log("Newsletter subscription:", email);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
