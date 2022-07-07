const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendEmail = async (data) => {
    console.log("Data for email ", data);
    try {
        let transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.PASSWORD, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: "dusan.andrejevic969@gmail.com", // email
            subject: "test reservation",
            text: `Hello sir your reservation is aproved, event starts at 20:00 h` // firstname
        });
        console.log("Email has been sent");
    } catch (err) {
        console.log("Ja sam error");
        console.log(err);
        //res.send({message: err.message, status: 403});
    }

};
