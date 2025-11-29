const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ===== Middleware =====
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// ===== MongoDB connection =====
const MONGO_URL= 'mongodb+srv://2400030290_db_user:Satya0709@fedf.kubmxej.mongodb.net/?appName=fedf';

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB connected ✅');
  } catch (err) {
    console.error('MongoDB connection error ❌', err);
  }
}
connectDB();

// ===== Schema & Model =====
const menuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String },
  role: { type: String, default: 'citizen' }
}, { timestamps: true });

const Menu = mongoose.model('Menu', menuSchema);

// ===== Routes =====
app.get('/', (req, res) => res.send('Server is running!'));

app.get('/menus', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (err) {
    console.error('Error fetching menus:', err);
    res.status(500).json({ error: 'Failed to fetch menus' });
  }
});

app.post('/menus', async (req, res) => {
  try {
    console.log('Incoming menu:', req.body);
    const menu = new Menu(req.body);
    const savedMenu = await menu.save();
    res.status(201).json(savedMenu);
  } catch (err) {
    console.error('Error saving menu:', err);
    res.status(400).json({ error: err.message });
  }
});

// ===== Start server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
