const express = require('express');
const app = express();
const router = require('./routes/user');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();


app.use(express.json());

connectDB();

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

