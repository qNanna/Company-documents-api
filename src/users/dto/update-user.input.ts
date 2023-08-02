import {
  InputType, Field, PartialType, ID,
} from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
    id: string;

  @Field()
  declare companyId: string;

  @Field({ nullable: true })
    onboarding?: boolean;

  @Field({ nullable: true })
    agreement?: boolean;
}
