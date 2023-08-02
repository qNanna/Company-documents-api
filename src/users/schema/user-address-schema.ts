import { Schema } from 'dynamoose';

export const UserAddressSchema = new Schema({
  addressLine: String,
  secondAddressLine: String,
  city: String,
  state: String,
  zip: String,
  country: String,
});
