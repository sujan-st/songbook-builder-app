// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://songbook:SUJAN..@cluster0.frfu2zf.mongodb.net/songbook?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Example test route
app.get('/', (req, res) => {
  res.send('🎵 Songbook API working');
});

// Start backend server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
