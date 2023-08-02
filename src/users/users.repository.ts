import { Injectable } from '@nestjs/common';
import {
  InjectModel,
  Model,
  Query,
  Document,
  TransactionSupport,
  Scan,
} from 'nestjs-dynamoose';

import { CountUsersInput } from './dto/count-users.input';
import { User, UserKey } from './model/user.model';

type UserQuery = Query<Document<User>, UserKey>;
type UserScan = Scan<Document<User>, UserKey>;

@Injectable()
export class UsersRepository extends TransactionSupport {
  constructor(
    @InjectModel('user')
    private readonly model: Model<User, UserKey>,
  ) {
    super();
  }

  async query(filter: Record<string, any> = {}): Promise<User | any> {
    return await this.model.query(filter).exec();
  }

  async scan(filter: Record<string, any> = {}): Promise<User[] | any> {
    return await this.model.scan(filter).exec();
  }

  async findActiveUsers(companyId: string, isActive: boolean) {
    return await this.model.scan({ companyId, isActive }).exec();
  }

  async findAll(companyId: string, selectOnly?: string[]): Promise<User[]> {
    let query = this.model.query('companyId').eq(companyId);

    if (Array.isArray(selectOnly)) {
      query = query.attributes(selectOnly);
    }

    return await query.exec();
  }

  async findOne(id: string, companyId: string): Promise<User> {
    return await this.model.get({ id, companyId });
  }

  async remove(id: string, companyId: string): Promise<void> {
    await this.model.delete({ id, companyId });
  }

  async removeMany(ids: string[], companyId: string): Promise<void> {
    await this.transaction(
      ids.map((id) => this.model.transaction.delete({ id, companyId })),
    );
  }
}
