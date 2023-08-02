import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FileInput {
  @Field({ nullable: true })
    path?: string;

  @Field()
    companyId: string;

  @Field()
    filename: string;
}
