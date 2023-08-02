import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ShareSecurelyInput {
  @Field(() => ID)
    companyId: string;

  @Field(() => [String])
    emails: string[];

  @Field(() => [String])
    roles: string[];
}
