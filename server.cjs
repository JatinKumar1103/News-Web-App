const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');




const app = express();
const PORT = 3001;
const MONGO_URI = 'mongodb+srv://mangesh8736:23605861@Newzify.wpqiybc.mongodb.net/';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

const User = mongoose.model('Newzify', userSchema);

// Register new user
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Login user
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Simulate setting user session (for example purpose)
    res.json({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
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
      user: 'mangesh.07gsb@gmail.com',
      pass: 'exlq fadv enfl kszf'
    }
  });

  const mailOptions = {
    from: 'mangesh.07gsb@gmail.com',
    to: email,
    subject: 'Welcome To NewziFy!',
    html: `<p>Hi ${name},</p>
    
    <p><span style="font-weight: bold;">🎉 Welcome to NewziFy! 🎉</span></p>
    
    <p>Prepare to embark on an exciting journey with us, where staying informed is not just a habit, it's a delightful experience!</p>
    
    <p>As a member of our vibrant community, you're in for a treat:</p>
    
    <ul>
      <li><strong>Daily News Delight:</strong> Wake up to a curated selection of top news stories, handpicked just for you. Stay ahead of the curve with the latest updates delivered straight to your inbox every morning.</li>
      <li><strong>Tailored for You:</strong> Customize your news preferences and receive alerts on the topics that ignite your curiosity. Whether it's politics, tech trends, sports highlights, or entertainment buzz, we've got you covered!</li>
      <li><strong>Exclusive Access:</strong> Dive deep into exclusive articles, captivating interviews, and thought-provoking analysis from our seasoned journalists and contributors. Get the inside scoop before anyone else!</li>
      <li><strong>Join the Conversation:</strong> Engage with like-minded individuals by participating in lively discussions, polls, and surveys on our interactive platform. Your voice matters, and we're here to amplify it!</li>
      <li><strong>Seamless Experience:</strong> Enjoy a smooth and hassle-free browsing experience across all your devices. Whether you're on your computer, tablet, or smartphone, NewziFy is your ultimate companion for staying informed on the go!</li>
    </ul>
    
    <p>We're more than just a news source; we're your trusted companion in navigating the ever-evolving world around us.</p>
    
    <p>Thank you for choosing NewziFy as your partner in staying informed, entertained, and empowered. Together, let's explore the world of news like never before!</p>
    
    <p>Welcome to the NewziFy family!</p>
    
    <p>Best regards,<br>The NewziFy Team</p>`
};

  await transporter.sendMail(mailOptions);
};

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
