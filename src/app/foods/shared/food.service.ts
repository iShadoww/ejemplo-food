import {Injectable} from '@angular/core';
import {Food} from './food.model';
import {CategoryEnum} from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[] = [
    {
      id: 1,
      name: 'Pollo Empanizado',
      description: 'Relleno de jamón y queso ',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/10/empanado.jpg?width=1200&aspect_ratio=16:9',
      price: 145,
    },
    {
      id: 2,
      name: 'Pollo Empanizado',
      description: 'Relleno de jamón y queso ',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/10/empanado.jpg?width=1200&aspect_ratio=16:9',
      price: 145,
    },
    {
      id: 3,
      name: 'Pollo Empanizado',
      description: 'Relleno de jamón y queso ',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/10/empanado.jpg?width=1200&aspect_ratio=16:9',
      price: 145,
    },
    {
      id: 4,
      name: 'Pollo Empanizado',
      description: 'Relleno de jamón y queso ',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/10/empanado.jpg?width=1200&aspect_ratio=16:9',
      price: 145,
    },
    {
      id: 5,
      name: 'Pollo Empanizado',
      description: 'Relleno de jamón y queso ',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/10/empanado.jpg?width=1200&aspect_ratio=16:9',
      price: 145,
    },
    {
      id: 6,
      name: 'Pollo Empanizado',
      description: 'Relleno de jamón y queso ',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/10/empanado.jpg?width=1200&aspect_ratio=16:9',
      price: 145,
    },
  ];

  constructor() {
  }

  public getAllFood(): Food[] {
    return this.menu;
  }
}
