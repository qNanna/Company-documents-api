import fs from 'fs/promises';
import { constants } from 'fs';

import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { LoggingInterceptor } from './enchancers/interceptors/logging.interceptor';
import { AuthGuard } from './enchancers/guards/auth.guard';

const PRIVATE_KEY = '../secrets/private-key.pem';
const PUBLIC_CERTIFICATE = '../secrets/public-certificate.pem';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, await getAppOptions());

  app.enableCors();
  app.useGlobalInterceptors(new LoggingInterceptor());
  const configService = app.get(ConfigService);
  const { userPem, adminPem } = await AuthGuard.init(configService);
  app.useGlobalGuards(new AuthGuard(userPem, adminPem));

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', `Application started on port: ${PORT}`);
    console.log('\x1b[36m%s\x1b[0m', `GraphQL started on port: ${PORT}`);
  });
}

bootstrap();
