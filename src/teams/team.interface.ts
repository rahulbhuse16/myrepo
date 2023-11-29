// team.interface.ts
import { Document } from 'mongoose';

export interface Team extends Document {
  name: string;
  members: string[];
}
