import { Injectable } from '@angular/core';
import { IProduct } from './models';

@Injectable()
export class ProductsService {

  constructor() {}
    getProducts(): IProduct[] {
      return[
        {
          id:1,
          name: 'Pc',
          price: 1999,
        }
      ]
    }
  }

