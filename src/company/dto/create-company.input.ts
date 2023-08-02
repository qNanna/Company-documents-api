import { InputType, Field } from '@nestjs/graphql';
import { AddressInput } from '../../users/dto/address-input';

@InputType()
export class CreateCompanyInput {
  @Field()
    name: string;

  @Field(() => AddressInput)
    address: AddressInput;

  @Field()
    phoneNumber: string;

  @Field()
    category: string;

  @Field({ nullable: true })
    logo?: string;
}
