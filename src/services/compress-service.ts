import fs from 'fs';
import archiver from 'archiver';
import path from 'path';

class CompressService {
  constructor(
    private sourceDir: string,
    private outputFileName: string,
  ) {
    if(!path.extname(this.outputFileName)) {
      this.outputFileName += '.zip';
    }
  }

  public async compress() {
    const archive = archiver('zip', {
      zlib: { level: 9 },
    });

    const output = fs.createWriteStream(this.outputFileName);

    return await new Promise<void>((resolve, reject) => {
      archive.on('error', (err) => reject(err));

      archive.on('end', () => resolve());

      archive.pipe(output);
      archive.directory(this.sourceDir, false);
      archive.finalize();
    });
  }
}

export default CompressService;