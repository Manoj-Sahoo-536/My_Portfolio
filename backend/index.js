require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error: ', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/health', (req, res) => res.json({status: 'ok'}));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    
    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newContact = new Contact({ name, email, company, message });
    await newContact.save();

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(500).json({ error: 'Server error while sending message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
