import express from 'express'; 
import dotenv from 'dotenv'; 
import { connectDB } from './database';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect to the database MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());


// Use routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);