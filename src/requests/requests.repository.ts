import { Injectable } from '@nestjs/common';

import {
  InjectModel, Model, Query, Scan, Document, /* TransactionSupport */
} from 'nestjs-dynamoose';
import { Request, RequestKey } from './model/request.model';
import { CountRequestsInput } from './dto/count-requests.input';

type RequestQuery = Query<Document<Request>, RequestKey>;
type RequestScan = Scan<Document<Request>, RequestKey>;

@Injectable()
export class RequestsRepository /* extends TransactionSupport */ {
  constructor(
    @InjectModel('request')
    private readonly model: Model<Request, RequestKey>,
  ) { }

  async create(request: Request): Promise<Request> {
    return await this.model.create(request);
  }

  async findOne(filter: any): Promise<Request> {
    return await this.model.get(filter);
  }

  async find(filter: Record<string, any> = {}): Promise<Request[]> {
    const result = await this.model.scan(filter).exec();
    return result.reverse();
  }

  async query(filter: Record<string, unknown>) {
    return await this.model.query(filter).exec();
  }

  async deleteOne(id: string, companyId: string): Promise<Request | void> {
    return await this.model.delete({ id, companyId });
  }

  async updateOne(filter: Request | RequestKey, input: any): Promise<Request> {
    return await this.model.update(filter, input);
  }

  // REMOVED
}

// DynamoDb classic query example
// const filter = {
//   FilterExpression: '#companyId = :companyId and #userData.#email = :value',
//   ExpressionAttributeNames: {
//     '#companyId': 'companyId',
//     '#userData': 'userData',
//     '#email': 'email',
//   },
//   ExpressionAttributeValues: {
//     ':companyId': companyId,
//     ':value': userData.email,
//   },
// };
