import { InputType, Field, ID } from '@nestjs/graphql';
import { AddressInput } from '../../users/dto/address-input';

@InputType()
export class CreateCompanyContactInput {
  @Field(() => ID)
    companyId: string;

  @Field(() => AddressInput)
    address: AddressInput;

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
