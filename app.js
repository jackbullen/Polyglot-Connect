const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

const mongoUser = process.env.MONGODB_USER;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoDb = process.env.MONGODB_NAME;

mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@${mongoDb}.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

app.use(express.json()); 

// const corsOptions = {
//   origin: '',
//   methods: ''
// };
app.use(cors());

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const matchRoutes = require('./routes/matchRoutes');
const messageRoutes = require('./routes/messageRoutes');
const languageRoutes = require('./routes/languageRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); 
app.use('/api/sessions', sessionRoutes);
app.use('/api/matches', matchRoutes); 
app.use('/api/messaging', messageRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
