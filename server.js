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

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/item', itemRoutes);

app.get('/', (req, res) => {
    res.send({
        message:'Welcome'
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
});