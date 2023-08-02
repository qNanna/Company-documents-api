/* eslint-disable max-len */
import {
  Field, ID, ObjectType, OmitType,
} from '@nestjs/graphql';

import { User } from '../../users/model/user.model';

@ObjectType()
export class RequestUser extends OmitType(User, ['id', 'isActive', 'activationKey', 'onboarding', 'agreement']) {
  @Field(() => ID, { nullable: true })
    id?: string;
}
