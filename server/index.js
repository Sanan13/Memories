import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './connectDB.js';
import 'dotenv/config'

import postRoutes from './routes/posts.js';

const app = express()
app.use(bodyParser.json({ limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

const start = async () => {
    try {
      await connectDB(CONNECTION_URL)
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();