import { Schema } from 'dynamoose';

import { UserRoleSchema } from './user-role-schema';
import { UserAddressSchema } from './user-address-schema';

export const UserSchema = new Schema({
  id: {
    type: String,
    rangeKey: true,
  },
  companyId: {
    type: String,
    hashKey: true,
  },
  fullName: String,
  jobTitle: String,
  phoneNumber: String,
  email: String,
  address: UserAddressSchema,
  sex: String,
  signature: String,
  limit: String,
  occupation: String,
  requestId: String,
  isActive: Boolean,
  activationKey: String,
  role: UserRoleSchema,
  onboarding: Boolean,
  agreement: Boolean,
});
