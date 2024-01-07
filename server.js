import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from "cors";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import itemRoutes from './routes/itemRoute.js'

dotenv.config()

connectDB();

const app = express()

const corsOptions = {
    origin: "https://mart-experience.onrender.com"
}

app.use(cors(corsOptions));
// app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/item', itemRoutes);

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send({
        message:`Welcome Server Running on ${PORT}`
    })
});



app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
});