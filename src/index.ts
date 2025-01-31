import express from 'express';
import todoRoutes from './routes/todo';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});