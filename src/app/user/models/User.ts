import { IDisease } from './Disease';
import { IPersonalReccomandation } from './PersonalRecommandation';

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role?: number;
  idOfDisease?: number;
  idOfPersonalReccomandation?: number;
  age?: number;
  gender?: number;
  disease?: IDisease;
  personalReccomandation?: IPersonalReccomandation;
}
