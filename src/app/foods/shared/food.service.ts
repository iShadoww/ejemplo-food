import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[]=[
    {
      id:1,
      name:'Brochetas de Camarón',
      descripcion:'Asados',
      category: 'food',
      image:'https://www.sortirambnens.com/wp-content/uploads/2019/02/broquetes-de-llagostins.jpg',
      price: 180
    },
    {
      id:2,
      name:'Brochetas de Camarón',
      descripcion:'Asados',
      category: 'food',
      image:'https://www.sortirambnens.com/wp-content/uploads/2019/02/broquetes-de-llagostins.jpg',
      price: 180
    },
    {
      id:3,
      name:'Brochetas de Camarón',
      descripcion:'Asados',
      category: 'food',
      image:'https://www.sortirambnens.com/wp-content/uploads/2019/02/broquetes-de-llagostins.jpg',
      price: 180
    },
    {
      id:4,
      name:'Brochetas de Camarón',
      descripcion:'Asados',
      category: 'food',
      image:'https://www.sortirambnens.com/wp-content/uploads/2019/02/Brochetas de Camarón-de-peperoni.jpg',
      price: 180
    },
    {
      id:5,
      name:'Brochetas de Camarón',
      descripcion:'Asados',
      category: 'food',
      image:'https://www.sortirambnens.com/wp-content/uploads/2019/02/Brochetas de Camarón-de-peperoni.jpg',
      price: 180
    },
    {
      id:6,
      name:'Brochetas de Camarón',
      descripcion:'Asados',
      category: 'food',
      image:'https://www.sortirambnens.com/wp-content/uploads/2019/02/broquetes-de-llagostins.jpg',
      price: 180
    },
    {
      id:7,
      name:'Brochetas de Camarón',
      descripcion:'Asados',
      category: 'food',
      image:'https://www.sortirambnens.com/wp-content/uploads/2019/02/broquetes-de-llagostins.jpg',
      price: 180
    }
  ]

  constructor() { }

  public getAllFoods():Food[]{
    return this.menu;
  };

  //Obtener una comida del arreglo
  public getOne(id:number):Food | undefined{
    return this.menu.find(item=>item.id == id);
  };

  //Añadir nueva comida
  public addFood(food:Food) {
    this.menu.push(food);
  };

  //Actualizar comida
  public updateFood(newFood:Food){
    this.menu.forEach((food, index)=>{
      if(food.id == newFood.id){
        this.menu[index] = newFood;
      }
    });
  };

  //Eliminar comida
  public deleteFood(deleteFood:Food){
    this.menu.forEach((food, index)=>{
      if(food.id == deleteFood.id){
        this.menu.splice(index,1);
      }
    });
  };

}
