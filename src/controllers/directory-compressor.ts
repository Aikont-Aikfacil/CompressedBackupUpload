import { Request, Response } from 'express';
import CompressService from '../services/compress-service';
import UploadService from '../services/upload-service';

class DiretoryCompressor {
  public async store(request: Request, response: Response): Promise<Response | void> {
    try {
      const { sourceDir, outputFileName } = request.body;

      const compress = new CompressService(sourceDir, outputFileName);
      await compress.compress();

      const upload = new UploadService(outputFileName);
      await upload.upload();

      return response.status(200).json({ message: 'Diretório comprimido e enviado com sucesso.' });
    } catch (error: any) {
      return response.status(500).json({
        error: true,
        message: `Ocorreu um erro ao comprimir e enviar o diretório: ${error.message}`
      })
    }
  }
}

export default new DiretoryCompressor();