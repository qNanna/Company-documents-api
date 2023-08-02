import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';
import { RequestsService } from '../requests/requests.service';

@Injectable()
export class CronService {
  constructor(private readonly requestsService: RequestsService) {
    this.requestsTreatment();
  }

  async requestsTreatment() {
    cron.schedule('0 30 0 * * *', async () => {
      console.log('\x1b[33m%s\x1b[0m', 'Cron: requests treatment');
      await this.requestsService.requestExpire();
    });
  }
}
