import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';

import { UpdateCompanyInput } from './dto/update-company.input';
import { Company, CompanyKey } from './model/company.model';
import { CompanyContact } from './model/company-contact.model';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectModel('company')
    private readonly model: Model<Company, CompanyKey>,
  ) {}

  async create(company: Company) {
    return await this.model.create(company);
  }

  async findAll() {
    return await this.model.scan().exec();
  }

  async findOne(id: string): Promise<Company | undefined> {
    return await this.model.get({ id });
  }

  async scan(filter: Record<string, any>): Promise<CompanyContact[] | any> {
    return await this.model.scan(filter).exec();
  }

  async update({ id, ...input }: UpdateCompanyInput) {
    return await this.model.update({ id }, { ...input });
  }

  async remove(id: string) {
    return await this.model.delete({ id });
  }

  // REMOVED
}
