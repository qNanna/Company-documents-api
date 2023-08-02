import {
  Field, ID, ObjectType,
} from '@nestjs/graphql';

import { AddressModel } from '../../users/model/user-address.model';

// @InputType()
@ObjectType('Contact')
export class CompanyContact {
  @Field(() => ID)
    id: string;

  @Field(() => AddressModel)
    address: AddressModel;

  @Field()
    name: string;

  @Field()
    role: string;

  @Field()
    company: string;

  @Field()
    phone: string;

  @Field()
    email: string;

  @Field()
    sex: string;
}
