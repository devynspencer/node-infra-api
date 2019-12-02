import { Document } from 'mongoose';

export interface Server extends Document {
  hostname: string;
  role: string;
}
