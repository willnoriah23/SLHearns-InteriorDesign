const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', function (req, res) {
	console.log('Received emailer request!!!')
	console.log(req.body)

	const output = `
		<p>You have a new contact request.</p>
		<p>${req.body}</p>
		`;

		// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sonnet22@gmail.com', // generated ethereal user
            pass: 'TexasDream33!'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer" <sonnet22@gmail.com>', // sender address
        to: 'sonnet22@gmail.com', // list of receivers
        subject: 'New Interior Design Client', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.json({status: "Email message sent."})
    });
})

module.exports = router;