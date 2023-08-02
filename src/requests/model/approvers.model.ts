import {
  Field, ID, ObjectType,
} from '@nestjs/graphql';

@ObjectType('Approver')
export class Approver {
  @Field(() => ID)
    id: string;

  @Field(() => Boolean, { nullable: true })
    approved?: boolean;

  @Field(() => Number, { nullable: true })
    approvedAt?: number;
}
