import AWS, { CognitoIdentityServiceProvider } from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CognitoService {
  private readonly cognito: CognitoIdentityServiceProvider;
  private readonly adminPoolId: string;
  private readonly userPoolId: string;

  constructor(private configService: ConfigService) {
    this.cognito = new AWS.CognitoIdentityServiceProvider();
    this.adminPoolId = this.configService.get(
      'COGNITO_ADMIN_POOL_ID',
    ) as string;
    this.userPoolId = this.configService.get('COGNITO_USER_POOL_ID') as string;
  }

  async getUser(AccessToken: string) {
    return await this.cognito.getUser({ AccessToken }).promise();
  }

  // REMOVED
}
