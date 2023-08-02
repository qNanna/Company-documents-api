import { Module, forwardRef } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';

import { MailerModule } from '../mailer/mailer.module';
import { UsersModule } from '../users/users.module';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { CompanyRepository } from './company.repository';
import { CompanySchema } from './schema/company.schema';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'company',
        schema: CompanySchema,
      },
    ]),
    forwardRef(() => MailerModule),
    forwardRef(() => UsersModule),
  ],
  providers: [CompanyResolver, CompanyService, CompanyRepository],
  exports: [CompanyService],
})
export class CompanyModule {}
