const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

exports.sendContactForm = async (req, res) => {
    const { fullName, email, phoneNumber, location, pincode, message, subject } = req.body;

    if (!fullName || !email || !phoneNumber || !location || !subject) {
        return res.status(400).json({ error: "All required fields must be filled" });
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  // Ensure this is set in .env
            pass: process.env.EMAIL_PASSWORD // Ensure this is set in .env
        }
    });

    let mailOptions = {
        from: `"${fullName}" <${email}>`, // Proper sender format
        to: 'Support@jurisplanner.com',
        subject: `New Contact Form Submission - ${subject}`,
        text: `Full Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Location: ${location}
        Pincode: ${pincode || 'N/A'}
        Message: ${message || 'No message provided'}
        Subject: ${subject || 'No message provided'}`
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        res.status(200).json({ message: "Your message has been sent successfully!", info });
    } catch (error) {
        console.error("Email sending error:", error); // ✅ Log detailed error
        res.status(500).json({ error: `Failed to send message. ${error.message}` });
    }
};
