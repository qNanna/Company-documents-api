import { Injectable } from '@nestjs/common';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

import { FileInput } from './dto/file.input';

@Injectable()
export class FilesService {
  private readonly s3: AWS.S3;
  private readonly s3Client: S3Client;
  private readonly bucketId: string;
  private readonly expiresIn: number;

  constructor(private readonly configService: ConfigService) {
    this.s3Client = new S3Client({
      region: this.configService.get('REGION'),
    });
    this.s3 = new AWS.S3();
    this.bucketId = this.configService.get('S3_BUCKET_ID') as string;
    this.expiresIn = this.configService.get('S3_URL_EXPIRE_TIME') as number;
  }

  private getBucketParams(key: string) {
    return { Bucket: this.bucketId, Key: key };
  }

  async getUploadUrl(fileInput: FileInput): Promise<string> {
    return await this.getSignedUrl(fileInput, PutObjectCommand);
  }

  async getFileUrl(fileInput: FileInput): Promise<string> {
    return await this.getSignedUrl(fileInput, GetObjectCommand);
  }

  private createCommand(
    key: string,
    Command: typeof GetObjectCommand | typeof PutObjectCommand | typeof DeleteObjectCommand,
  ) {
    const bucketParams = this.getBucketParams(key);
    return new Command(bucketParams);
  }

  // REMOVED
}
