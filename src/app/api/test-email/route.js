import { NextResponse } from "next/server";

export async function GET() {
  const gmailUser = process.env.GMAIL_USER || "";
  const gmailPass = process.env.GMAIL_APP_PASSWORD || "";

  const isPlaceholder =
    !gmailPass ||
    gmailPass.includes("xxxx") ||
    gmailPass.includes("your_16") ||
    gmailPass.includes("your****") ||
    gmailPass.length < 16;

  const debugInfo = {
    GMAIL_USER: gmailUser || "NOT SET",
    GMAIL_APP_PASSWORD_LENGTH: gmailPass.length,
    GMAIL_APP_PASSWORD_PREVIEW: gmailPass ? gmailPass.slice(0, 4) + "****" : "NOT SET",
    isPlaceholder,
  };

  if (!gmailUser || isPlaceholder) {
    return NextResponse.json({
      success: false,
      error: "Credentials not properly set",
      debug: debugInfo,
    });
  }

  try {
    const nodemailer = (await import("nodemailer")).default;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Portfolio Test" <${gmailUser}>`,
      to: "kartikmaru2001@gmail.com",
      subject: "✅ Test Email from Portfolio",
      html: `<h2>Test successful!</h2><p>Nodemailer is working correctly.</p><p>Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>`,
    });

    return NextResponse.json({
      success: true,
      message: "Test email sent! Check your Gmail inbox (also check Spam).",
      messageId: info.messageId,
      debug: debugInfo,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err.message,
      errorCode: err.code,
      debug: debugInfo,
    });
  }
}
