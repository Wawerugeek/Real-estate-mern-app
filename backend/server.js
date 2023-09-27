import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoutes.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})
app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)