import { IUser } from './../user/models/User';

export interface IPost {
  id?: number;
  title: string;
  status?: number;
  description: string;
  ownerId?: number;
  user?: IUser;
}
