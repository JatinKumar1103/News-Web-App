const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const nodemailer = require('nodemailer');

const app = express();
const port1 = 3001;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/newzify');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);



app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ success: true, message: 'Login successful', user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

app.post('/subscribe', async (req, res) => {
  const { name, email } = req.body;
  try {
    await sendSubscriptionEmail(name, email);
    res.status(200).send('Subscription success!');
  } catch (error) {
    console.error('Error sending subscription email:', error);
    res.status(500).send('Subscription failed.');
  }
});

const sendSubscriptionEmail = async (name, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jatin.07gsb@gmail.com',
      pass: 'exlq fadv enfl kszf'
    }
  });

  const mailOptions = {
    from: 'jatin.07gsb@gmail.com',
    to: email,
    subject: 'Welcome To NewziFy',
    text: `Hi ${name}, Welcome to NewziFy!`
  };

  await transporter.sendMail(mailOptions);
};

app.listen(port1, () => {
  console.log(`Server 1 is running on http://localhost:${port1}`);
});
