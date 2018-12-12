import { IDisease } from './Disease';
import { IPersonalReccomandation } from './PersonalRecommandation';

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: number;
  idOfDisease?: number;
  idOfPersonalReccomandation?: number;
  dateOfBirth?: string;
  gender?: number;
  disease?: IDisease;
  personalReccomandation?: IPersonalReccomandation;
}
