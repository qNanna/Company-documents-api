/* eslint-disable max-len */
import {
  CanActivate, ExecutionContext, HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetch from 'cross-fetch';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import jwkToPem, { JWK } from 'jwk-to-pem';

interface JWKS { keys: JWK[] }

export class AuthGuard implements CanActivate {
  constructor(private readonly userPem: string, private readonly adminPem: string) {}

  static async init(configService: ConfigService) {
    const region = configService.get<string>('REGION');
    const userPoolId = configService.get<string>('COGNITO_USER_POOL_ID');
    const adminPoolId = configService.get<string>('COGNITO_ADMIN_POOL_ID');

    const url = {
      userPool: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`,
      adminPool: `https://cognito-idp.${region}.amazonaws.com/${adminPoolId}/.well-known/jwks.json`,
    };

    const [res1, res2] = await Promise.all([fetch(url.userPool), fetch(url.adminPool)]);
    const [userJwks, adminJwks] = await Promise.all([res1.json(), res2.json()]);

    const userPem = this.getPemFromJwks(userJwks);
    const adminPem = this.getPemFromJwks(adminJwks);

    return { userPem, adminPem };
  }

  static getPemFromJwks(jwks: JWKS): string {
    const [key1, key2] = jwks.keys;
    return jwkToPem(key1 || key2);
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext().req;
    try {
      const { authorization } = ctx.headers;
      if (!authorization) {
        ctx.res.status(HttpStatus.UNAUTHORIZED).send('No token in headers.');

        return false;
      }

      try {
        ctx.user = await this.verify(authorization, this.userPem);
      } catch (_err) {
        ctx.user = await this.verify(authorization, this.adminPem);
        ctx.user.SuperAdmin = true;
      }

      return true;
    } catch (error) {
      ctx.res.status(HttpStatus.UNAUTHORIZED).send(error);

      return false;
    }
  }

  async verify(token: string, key: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      jwt.verify(token, key, { algorithms: ['RS256'] }, (err, val) => {
        if (err) reject(err);
        resolve(val);
      });
    });
  }
}
