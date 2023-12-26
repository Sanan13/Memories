import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './connectDB.js';


import postRoutes from './routes/posts.js';

const app = express()
app.use('/posts',postRoutes);
app.use(bodyParser.json({ limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://saiyedsanan9:dDHprASUPGericcg@cluster0.3qmd4bb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
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