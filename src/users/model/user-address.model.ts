import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType('Address')
export class AddressModel {
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
