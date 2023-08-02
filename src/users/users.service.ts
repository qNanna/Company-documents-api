import * as uuid from 'uuid';
import { URLSearchParams } from 'url';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CognitoService } from '../cognito/cognito.service';
import { MailerService } from '../mailer/mailer.service';
import { UsersRepository } from './users.repository';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CountUsersInput } from './dto/count-users.input';
import { CreateUserPasswordInput } from './dto/create-password.input';
import { UpdateUserPasswordInput } from './dto/update-password.input';
import { ActivationLinkDto } from './dto/activation-link.dto';
import { InviteUserDto } from './dto/invite-user.dto';
import { InviteUserInput } from './dto/invite-user.input';
import { User } from './model/user.model';
import { FilesService } from '../files/files.service';
import { CompanyService } from '../company/company.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UsersRepository,
    private readonly configService: ConfigService,
    private readonly cognitoService: CognitoService,
    private readonly filesServie: FilesService,
    private readonly companyService: CompanyService,
  ) {}

  async countByParams(countUsersInput: CountUsersInput): Promise<number> {
    return this.repository.countByParams(countUsersInput);
  }

  // REMOVED
}
