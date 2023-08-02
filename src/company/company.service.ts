import * as uuid from 'uuid';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { Company } from './model/company.model';
import { UsersService } from '../users/users.service';
import { CompanyRepository } from './company.repository';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { CreateCompanyContactInput } from './dto/create-company-contact.input';
import { UpdateCompanyContactInput } from './dto/update-company-contact.input';
import { CompanyContact } from './model/company-contact.model';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly repository: CompanyRepository,
  ) {}

  async update(updateCompanyInput: UpdateCompanyInput): Promise<Company> {
    return await this.repository.update(updateCompanyInput);
  }

  async remove(companyId: string): Promise<string> {
    await this.repository.remove(companyId);
    await this.usersService.removeCompanyUsers(companyId);

    return companyId;
  }

  async removeContact(companyId: string, contactId: string): Promise<Company> {
    return await this.repository.removeContact(companyId, contactId);
  }

  // REMOVED
}
