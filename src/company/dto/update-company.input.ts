import {
  InputType, Field, ID, PartialType,
} from '@nestjs/graphql';
import { CreateCompanyInput } from './create-company.input';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field(() => ID)
    id: string;

  @Field({ nullable: true })
    isActive: boolean;
}
