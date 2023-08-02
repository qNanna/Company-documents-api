import { Schema } from 'dynamoose';

export const UserRoleSchema = new Schema({
  isBoardMember: Boolean,
  isSigningOfficer: Boolean,
  isDelegateAuthority: Boolean,
  isOfficerOfOrganization: Boolean,
  isAdmin: Boolean,
});
