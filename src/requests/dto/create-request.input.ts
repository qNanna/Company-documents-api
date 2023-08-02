import {
  InputType, Field, ID, HideField,
} from '@nestjs/graphql';

import { ApproversInput } from './approvers.input';
import { UserRequestInput } from './request-user.input';

@InputType()
export class CreateRequestInput {
  @Field(() => ID)
    companyId: string;

  @Field(() => String, { nullable: true })
    number: string;

  @Field(() => UserRequestInput)
    userData: UserRequestInput;

  @Field(() => [String])
    typeOfRequest: string[];

  @Field(() => [String], { nullable: true })
    toNotify: string[];

  @Field(() => [ApproversInput])
    approvers: ApproversInput[];

  @HideField()
    createdBy: string;
}
