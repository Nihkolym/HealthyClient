import { IRecommandation } from './Recommandation';
export interface IDisease {
  id?: number;
  name: string;
  idOfRecommendation: number;
  recommendation?: IRecommandation;
}
