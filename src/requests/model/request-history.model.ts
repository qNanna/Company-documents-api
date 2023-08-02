import {
  Field, ObjectType,
} from '@nestjs/graphql';

@ObjectType('History')
export class RequestHistory {
  @Field()
    date: number;

  @Field()
    action: string;
}
