import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { RequestsModule } from '../requests/requests.module';

@Module({
  imports: [RequestsModule],
  providers: [CronService],
  exports: [],
})
export class CronModule {}
