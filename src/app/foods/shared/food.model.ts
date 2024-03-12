import {CategoryEnum} from './category.enum';

export interface Food {
  id: number;
  name: string;
  description: string;
  image: string;
  category: CategoryEnum;
  price: number;
}
