import { Schema } from 'dynamoose';
import { UserAddressSchema } from '../../users/schema/user-address-schema';

export const CompanySchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: String,
  address: UserAddressSchema,
  phoneNumber: String,
  logo: String,
  isActive: Boolean,
  category: String,
  contacts: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          id: String,
          address: UserAddressSchema,
          sex: String,
          name: String,
          role: String,
          company: String,
          phone: String,
          email: String,
        },
      },
    ],
  },
});
