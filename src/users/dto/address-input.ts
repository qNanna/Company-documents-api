import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddressInput {
  @Field()
    addressLine: string;

  @Field({ nullable: true })
    secondAddressLine?: string;

  @Field()
    city: string;

  @Field()
    state: string;

  @Field()
    zip: string;

  @Field()
    country: string;
}
