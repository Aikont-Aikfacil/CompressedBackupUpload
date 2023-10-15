import { Router } from 'express';
import DiretoryCompressor from './controllers/directory-compressor';
import cron from 'node-cron';
import axios from 'axios';

const PORT = process.env.PORT || 4000;
const baseUrl = `http://127.0.0.1:${PORT}`;

const routes = Router();

routes.post('/compress-and-upload', DiretoryCompressor.store);

cron.schedule('0 2 * * *', async () => {
  try {
    await axios.post(`${baseUrl}/api/compress-and-upload`, {
      sourceDir: process.env.SOURCE_DIR,
      outputFileName: process.env.OUTPUT_FILENAME,
    });

    console.log('Tarefa agendada executada com sucesso');
  } catch (error) {
    console.log('Erro ao executar a tarefa agendada: ', error);
  }
});

export default routes;