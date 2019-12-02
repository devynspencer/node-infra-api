import * as mongoose from 'mongoose';

export const ServerSchema = new mongoose.Schema({
  hostname: String,
  role: String
});
