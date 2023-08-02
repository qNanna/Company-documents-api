import { Injectable } from '@nestjs/common';

import { AdminRepository } from './admin.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminInput } from './dto/update-admin.input';
import { Admin } from './model/admin.model';
import { CognitoService } from '../cognito/cognito.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly repository: AdminRepository,
    private readonly cognitoService: CognitoService,
  ) {}

  // REMOVED

}
