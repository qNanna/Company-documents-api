import { join } from 'path';
import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLError } from 'graphql';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DynamooseModule } from 'nestjs-dynamoose';

import { FilesModule } from './files/files.module';
import { CognitoModule } from './cognito/cognito.module';
import { MailerModule } from './mailer/mailer.module';
import { MailerTemplateModule } from './mailer-template/mailer-template.module';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { AdminModule } from './admin/admin.module';
import { RequestsModule } from './requests/requests.module';
import { AppController } from './app.controller';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      driver: ApolloDriver,
      playground: {
        endpoint: '/graphql',
      },
      cors: {
        origin: true,
        credentials: true,
      },
      formatError: (error: GraphQLError) => error,
    }),
    DynamooseModule.forRoot({
      local: !!process.env.IS_DDB_LOCAL,
      logger: !!process.env.DYNAMOOSE_LOGS,
      aws: { region: process.env.REGION },
      model: {
        create: false,
        prefix: `${process.env.STAGE}-`,
        suffix: '-table',
      },
    }),
    AdminModule,
    FilesModule,
    CognitoModule,
    MailerModule,
    MailerTemplateModule,
    UsersModule,
    CompanyModule,
    RequestsModule,
    CronModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
