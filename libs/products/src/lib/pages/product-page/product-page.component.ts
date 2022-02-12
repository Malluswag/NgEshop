import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem, CartService } from '@winsoft/orders';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styles: [
  ]
})
export class ProductPageComponent implements OnInit {
  val3: number = 7;
  product: Product;
  quantity = 1;
  constructor(private productService: ProductsService,
     private route: ActivatedRoute,
     private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.productid) {
        this._getProduct(params.productid);
      }
    })
  }

  addProductToCart() {
    const cartItem : CartItem = {
      productId : this.product.id,
      quantity: this.quantity
    };

    this.cartService.setCartItem(cartItem);

  }




  private _getProduct(id: string) {
    this.productService.getProduct(id).subscribe(resProduct => {
      this.product = resProduct;
    });
  }
}
