import { Router } from 'express';
import DiretoryCompressor from './controllers/directory-compressor';

const routes = Router();

routes.post('/compress-and-upload', DiretoryCompressor.store);

export default routes;