import { config } from 'dotenv';
import app from './app';

config();

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log(`Server running at ${PORT} closed`);
    process.exit();
  });
});