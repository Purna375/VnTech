const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Replace with your email and password or use environment variables
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'purnagiduthuri32@gmail.com',
            pass: 'Purna@143'
        }
    });

    const mailOptions = {
        from: email,
        to: 'purnagiduthuri32@gmail.com',
        subject: `Contact Form Submission from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
