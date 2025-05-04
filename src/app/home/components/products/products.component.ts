import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/product/products.storeItem';
//import { ProductsService } from '../../services/product/products.service';
import { Product } from '../../types/products.type';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
 // providers:[ProductsService]
})
export class ProductsComponent {
  faShoppingCart=faShoppingCart;
  constructor(public productsStore:ProductsStoreItem,
    private cart:CartStoreItem
  ){    
  }

  addToCart(product:Product){
    this.cart.addProduct(product);
  }

}
