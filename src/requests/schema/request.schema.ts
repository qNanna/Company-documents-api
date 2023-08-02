import { Schema } from 'dynamoose';


const RequestHistory = new Schema({
  date: Number,
  action: String,
});

export const RequestSchema = new Schema({
  id: {
    type: String,
    rangeKey: true,
  },
  companyId: {
    type: String,
    hashKey: true,
  },
  // REMOVED
});
