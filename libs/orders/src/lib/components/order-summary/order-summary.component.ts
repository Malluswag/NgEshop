import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'orders-order-summary',
  templateUrl: './order-summary.component.html',
  styles: [
  ]
})
export class OrderSummaryComponent implements OnInit {
  totalPrice: number;
  isCheckout = false;

  constructor(private router: Router,
    private cartService: CartService,
    private ordersService: OrdersService)
     {
      this.router.url.includes('checkout') ? (this. isCheckout = true) : (this. isCheckout = false);
    }

  ngOnInit(): void {
    this._getOrderSummary();
  }


  _getOrderSummary() {
    this.cartService.cart$.pipe().subscribe((cart) => {
      this.totalPrice = 0;
      if (cart) {
        cart.items.map((item) => {
          this.ordersService.getProduct(item.productId).subscribe((product) => {
              this.totalPrice += product.price * item.quantity;
        });
      });
    }
  });
}


  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
