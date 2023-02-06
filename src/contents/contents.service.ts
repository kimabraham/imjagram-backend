import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class ContentsService {
  async createContent(file: Express.Multer.File): Promise<string> {
    AWS.config.update({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    try {
      const upload = await new AWS.S3()
        .putObject({
          Key: `${file.originalname}`,
          Body: file.buffer,
          Bucket: `${process.env.AWS_PUBLIC_BUCKET_KEY}/contents`,
        })
        .promise();
      console.log(upload);
      return 'file upload success';
    } catch (error) {
      console.log(error);
      return 'file upload fail';
    }
  }
}
