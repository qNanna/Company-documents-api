import { Snowflake } from 'nodejs-snowflake';
import { Injectable } from '@nestjs/common';

import { Company } from 'src/company/model/company.model';
import { Request, RequestType } from './model/request.model';
import { CreateRequestInput } from './dto/create-request.input';
import { RequestsRepository } from './requests.repository';
import { CreateUserInput } from '../users/dto/create-user.input';
import { Approver } from './model/approvers.model';
import { UsersService } from '../users/users.service';
import { MailerService } from '../mailer/mailer.service';
import { User } from '../users/model/user.model';
import { CountRequestsInput } from './dto/count-requests.input';
import { CompanyContact } from '../company/model/company-contact.model';
import { CompanyService } from '../company/company.service';
import { DeleteRequestInput } from './dto/delete-request.input';
import { PDFService } from '../files/pdf.service';
import { FilesService } from '../files/files.service';
import { CorporateResolutionInput } from './dto/corporate-resolution.input';
import { RequestUser } from './model/request-user.model';

@Injectable()
export class RequestsService {
  private readonly flake: Snowflake;
  constructor(
    private readonly repository: RequestsRepository,
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
    private readonly companyService: CompanyService,
    private readonly pdfService: PDFService,
    private readonly filesService: FilesService,
  ) {
    this.flake = new Snowflake({
      custom_epoch: new Date('7-08-2022').getTime(),
      instance_id: +(process.env.PORT || 3000),
    });
  }

  pad(code: string, max: number): string {
    return code.length - 1 < max - 1 ? this.pad(`0${code}`, max) : code;
  }

  // REMOVED
}
