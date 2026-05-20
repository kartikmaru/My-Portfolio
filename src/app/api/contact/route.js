import { NextResponse } from "next/server";

async function trySaveToMongo(data) {
  const uri = process.env.MONGODB_URI || "";
  if (!uri || uri.includes("<username>") || uri.includes("xxxxx")) {
    console.warn("⚠️  MONGODB_URI not configured — skipping DB save.");
    return null;
  }
  try {
    const connectDB = (await import("@/lib/mongodb")).default;
    const Contact = (await import("@/models/Contact")).default;
    await connectDB();
    const doc = await Contact.create(data);
    console.log("✅ Saved to MongoDB:", doc._id);
    return doc;
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
    return null;
  }
}

async function trySendEmail({ name, email, mobile, subject, message }) {
  const gmailUser = process.env.GMAIL_USER || "";
  const gmailPass = process.env.GMAIL_APP_PASSWORD || "";

  // Check if properly configured
  if (
    !gmailUser ||
    !gmailPass ||
    gmailPass === "your_16_char_app_password_here" ||
    gmailPass.includes("xxxx")
  ) {
    console.warn("⚠️  Gmail App Password not set in .env.local — skipping email.");
    return false;
  }

  try {
    const nodemailer = (await import("nodemailer")).default;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: gmailUser,
        pass: gmailPass, // 16-char App Password (no spaces)
      },
    });

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // Mail 1 — to portfolio owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: "kartikmaru2001@gmail.com",
      subject: `📩 New Contact: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f0f1a;color:#e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#7c3aed,#3b82f6);padding:30px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:24px;">📬 New Portfolio Message</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Someone reached out via your portfolio</p>
          </div>
          <div style="padding:30px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;width:100px;">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;"><a href="mailto:${email}" style="color:#a78bfa;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Mobile</td>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;">${mobile}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Subject</td>
                <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top:20px;">
              <p style="color:#94a3b8;font-size:13px;margin-bottom:8px;">Message</p>
              <div style="background:#1e293b;border-radius:8px;padding:16px;color:#e2e8f0;line-height:1.7;font-size:14px;">
                ${message.replace(/\n/g, "<br/>")}
              </div>
            </div>
            <p style="margin-top:20px;color:#64748b;font-size:12px;">Received: ${timestamp} IST</p>
          </div>
        </div>`,
    });

    // Mail 2 — auto-reply to sender
    await transporter.sendMail({
      from: `"Kartik Maru" <${gmailUser}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 🙌`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f0f1a;color:#e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#7c3aed,#3b82f6);padding:30px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:24px;">Thanks for reaching out!</h1>
          </div>
          <div style="padding:30px;">
            <p style="color:#e2e8f0;line-height:1.7;">Hi <strong>${name}</strong>,</p>
            <p style="color:#94a3b8;line-height:1.7;">
              Thank you for contacting me through my portfolio. I've received your message and will get back to you within 24 hours.
            </p>
            <div style="background:#1e293b;border-radius:8px;padding:16px;margin:20px 0;">
              <p style="margin:0 0 8px;color:#94a3b8;font-size:13px;">Your message:</p>
              <p style="margin:0;color:#e2e8f0;font-size:14px;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</p>
            </div>
            <p style="color:#e2e8f0;margin-top:24px;">
              Best regards,<br/>
              <strong style="color:#a78bfa;">Kartik Maru</strong><br/>
              <span style="color:#64748b;font-size:13px;">MERN Stack Developer</span>
            </p>
          </div>
        </div>`,
    });

    console.log("✅ Emails sent to kartikmaru2001@gmail.com and", email);
    return true;
  } catch (err) {
    console.error("❌ Email Error Code:", err.code);
    console.error("❌ Email Error:", err.message);
    return false;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, mobile, subject, message } = body;

    // Validation
    if (!name || !email || !mobile || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    console.log("📬 Contact form submission:", { name, email, subject });

    // Run both in parallel
    const [savedDoc, emailSent] = await Promise.all([
      trySaveToMongo({ name, email, mobile, subject, message }),
      trySendEmail({ name, email, mobile, subject, message }),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully!",
        dbSaved: !!savedDoc,
        emailSent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Contact API Error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const uri = process.env.MONGODB_URI || "";
    if (!uri || uri.includes("<username>")) {
      return NextResponse.json(
        { success: false, error: "MongoDB not configured." },
        { status: 503 }
      );
    }
    const connectDB = (await import("@/lib/mongodb")).default;
    const Contact = (await import("@/models/Contact")).default;
    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: contacts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
