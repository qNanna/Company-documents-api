import {
  Field, ID, Int, ObjectType,
} from '@nestjs/graphql';

import { CompanyContact } from './company-contact.model';
import { AddressModel } from '../../users/model/user-address.model';

export type CompanyKey = {
  id: string;
};

// export enum RequestType {
//   NonProfit = 'Not-for-Profit / Charity', PublicSector = 'Public Sector', ForProfit = 'For Profit',
// }

@ObjectType()
export class Company {
  @Field(() => ID)
    id: string;

  @Field()
    name: string;

  @Field(() => AddressModel)
    address: AddressModel;

  @Field()
    phoneNumber: string;

  @Field()
    category: string;

  @Field({ nullable: true })
    logo?: string;

  @Field(() => Int, { nullable: true })
    usersCount?: number;

  @Field(() => Int, { nullable: true })
    activeUsers?: number;

  @Field()
    isActive: boolean;

  @Field(() => [CompanyContact], { nullable: 'itemsAndList' })
    contacts: CompanyContact[];
}
