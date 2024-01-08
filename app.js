
const express = require('express');
var cors = require('cors')
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json())
app.use(cors())
// Configure Nodemailer with your email service details

app.post('/send-email',async (req, res) => {
  const body=req.body
  
  // Create a Nodemailer transporter and send the email
 
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'hamzaghazalme@gmail.com',
      pass: 'zopn nblx znzi oodt',
    },
  });

  const mailOptions = {
    from: 'AGADIR JOURNEY',
    to:body.to,
    subject:body.subject,
    html:body.content,
  };

  transporter.sendMail(mailOptions, async(error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email not sent');
    } else {
  
      console.log('Email sent: ' + info.response);
      
      const mailOptions = {
        from: 'AGADIR JOURNEY',
        to:body.toClient,
        subject:body.subjectClient,
        html:body.contentClient,
      };
      transporter.sendMail(mailOptions, async(error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Email not sent');
        } else {
      
          console.log('Email sent: ' + info.response);
          
          
          
        }
      });
      
    }
  });
});

app.listen(3800, () => {
  console.log('Server is running on port 3200');

});
