import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/product/products.storeItem';
//import { ProductsService } from '../../services/product/products.service';
//import { Product } from '../../types/products.type';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
 // providers:[ProductsService]
})
export class ProductsComponent {
 
  constructor(public productsStore:ProductsStoreItem){    
  }

}
