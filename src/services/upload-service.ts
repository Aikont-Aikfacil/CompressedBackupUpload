import fs from 'fs';
import { S3Client, PutObjectCommand  } from '@aws-sdk/client-s3';

class UploadService {
  constructor(
    private outputFileName: string,
  ) {}

  public async upload() {
    const s3Client = new S3Client({
      region: process.env.REGION as string,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID as string,
        secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
      },
      endpoint: process.env.ENDPOINT as string
    });
    
    const params = {
      Bucket: process.env.BUCKET_NAME as string,
      Key: this.outputFileName,
      Body: fs.createReadStream(this.outputFileName),
    };

    const command = new PutObjectCommand(params);

    await s3Client.send(command);
  }
}

export default UploadService;