import { InputType, Field, ID } from '@nestjs/graphql';

import { UserRole } from '../model/user-role.model';
import { AddressInput } from './address-input';

@InputType()
export class CreateUserInput {
  @Field(() => ID)
    companyId: string;

  @Field()
    fullName: string;

  @Field()
    jobTitle: string;

  @Field()
    phoneNumber: string;

  @Field()
    email: string;

  @Field(() => AddressInput)
    address: AddressInput;

  @Field()
    sex: string;

  @Field({ nullable: true })
    signature?: string;

  @Field({ nullable: true })
    limit?: string;

  @Field({ nullable: true })
    occupation?: string;

  @Field({ nullable: true })
    requestId?: string;

  @Field(() => UserRole)
    role: UserRole;
}
