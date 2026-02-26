require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoute');

const mongoURI = process.env.MONGO_URI;

const app = express();
const PORT = 3001 ;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Backend working" });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Connection failed', err));