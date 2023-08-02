import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DynamooseModule } from 'nestjs-dynamoose';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema } from './schema/user.schema';
import { CognitoModule } from '../cognito/cognito.module';
import { MailerModule } from '../mailer/mailer.module';
import { RequestsModule } from '../requests/requests.module';
import { FilesModule } from '../files/files.module';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [
    ConfigModule,
    CognitoModule,
    forwardRef(() => MailerModule),
    FilesModule,
    forwardRef(() => RequestsModule),
    CompanyModule,
    DynamooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
