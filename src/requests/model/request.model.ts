import {
  Field, ID, ObjectType,
} from '@nestjs/graphql';

import { Approver } from './approvers.model';
import { RequestHistory } from './request-history.model';
import { RequestUser } from './request-user.model';

export type RequestKey = {
  id: string;
  companyId: string;
};

export enum RequestType { Delete = 'remove', Update = 'modify', Create = 'add' }

@ObjectType()
export class Request {
  @Field(() => ID)
    id: string;

  @Field(() => ID)
    companyId: string;

  @Field(() => String, { nullable: true })
    type: string;

  @Field(() => Number, { nullable: true })
    number: number;

  @Field()
    createdBy: string;

  @Field(() => RequestUser, { nullable: true })
    userData?: RequestUser;

  @Field(() => [String])
    toNotify: string[];

  @Field(() => [Approver])
    approvers: Approver[];

  @Field(() => [String])
    status: string[];

  @Field(() => [String])
    typeOfRequest: string[];

  @Field(() => [RequestHistory])
    history: RequestHistory[];

  @Field(() => String)
    file: string;

  @Field(() => Boolean, { nullable: true })
    completed?: boolean;

  @Field()
    createdAt: number;

  @Field()
    updatedAt: number;
}
