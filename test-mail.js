const nodemailer = require("nodemailer");

// Read from env manually
const fs = require("fs");
const envFile = fs.readFileSync(".env.local", "utf8");
const envVars = {};
envFile.split("\n").forEach((line) => {
  const [key, ...val] = line.split("=");
  if (key && val.length) envVars[key.trim()] = val.join("=").trim();
});

const GMAIL_USER = envVars["GMAIL_USER"];
const GMAIL_PASS = envVars["GMAIL_APP_PASSWORD"];

console.log("GMAIL_USER:", GMAIL_USER);
console.log("GMAIL_PASS length:", GMAIL_PASS ? GMAIL_PASS.length : 0);
console.log("GMAIL_PASS preview:", GMAIL_PASS ? GMAIL_PASS.slice(0, 4) + "****" : "NOT SET");

if (!GMAIL_USER || !GMAIL_PASS) {
  console.error("❌ Credentials missing in .env.local");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

console.log("\nTesting connection...");

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Connection failed:");
    console.error("   Code:", error.code);
    console.error("   Message:", error.message);
    if (error.code === "EAUTH") {
      console.error("\n💡 Fix: App Password galat hai.");
      console.error("   1. https://myaccount.google.com/apppasswords pe jao");
      console.error("   2. Purana delete karo, naya banao");
      console.error("   3. .env.local mein update karo (bina spaces ke)");
    }
    if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      console.error("\n💡 Fix: Network/firewall issue. Port 465 blocked ho sakta hai.");
    }
  } else {
    console.log("✅ Connection verified! Sending test email...");
    transporter.sendMail(
      {
        from: `"Portfolio Test" <${GMAIL_USER}>`,
        to: "kartikmaru2001@gmail.com",
        subject: "✅ Test Email from Portfolio",
        text: "Nodemailer is working! Time: " + new Date().toLocaleString("en-IN"),
      },
      (err, info) => {
        if (err) {
          console.error("❌ Send failed:", err.message);
        } else {
          console.log("✅ Email sent! MessageId:", info.messageId);
          console.log("📬 Check kartikmaru2001@gmail.com inbox (and Spam folder)");
        }
      }
    );
  }
});
