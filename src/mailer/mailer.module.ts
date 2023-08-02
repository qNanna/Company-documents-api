import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MailerTemplateModule } from '../mailer-template/mailer-template.module';
import { MailerService } from './mailer.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [ConfigModule, MailerTemplateModule, forwardRef(() => UsersModule)],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
