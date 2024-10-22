const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post("/send-email", (req, res) => {
    const { recipient_name, recipient_email, recipient_messege } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bibhude2@gmail.com",
        pass: "fftacooyfteqdfhv", 
      },
    });
  
    const mailOptions = {
      from: "bibhude2@gmail.com", 
      to: "bibhude5@gmail.com", 
      subject: "New Contact Form Submission",
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>Name:</strong> ${recipient_name}</p>
        <p><strong>Email:</strong> ${recipient_email}</p>
        <p><strong>Message:</strong></p>
        <p>${recipient_messege}</p>
      `, 
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: "Error sending email" });
      } else {
        res.status(200).send({ message: "Email sent successfully" });
      }
    });
  });
  
  
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
