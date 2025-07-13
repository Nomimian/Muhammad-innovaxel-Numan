const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const connectDB = require('./config/db');
const urlRoutes = require('./routes/urlRoutes');
const app = express();

dotenv.config();
connectDB();

app.use(cors()); 
app.use(express.json());

app.use('/api/shorten', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
