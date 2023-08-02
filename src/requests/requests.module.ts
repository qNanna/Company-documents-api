import { Module, forwardRef } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';

import { RequestsResolver } from './requests.resolver';
import { RequestsService } from './requests.service';
import { RequestSchema } from './schema/request.schema';
import { RequestsRepository } from './requests.repository';
import { UsersModule } from '../users/users.module';
import { FilesModule } from '../files/files.module';
import { MailerModule } from '../mailer/mailer.module';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [DynamooseModule.forFeature([
    {
      name: 'request',
      schema: RequestSchema,
    },
  ]),
  forwardRef(() => UsersModule),
  FilesModule,
  forwardRef(() => MailerModule),
  // CompanyModule,
  forwardRef(() => CompanyModule),
  ],
  providers: [RequestsResolver, RequestsService, RequestsRepository],
  exports: [RequestsService],
})

export class RequestsModule {}
