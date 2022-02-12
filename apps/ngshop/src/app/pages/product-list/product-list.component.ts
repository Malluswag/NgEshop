import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'winsoft-products-list',
  templateUrl: './products-list.component.html',

})
export class ProductsListComponent implements OnInit {
  products = [];
  constructor() { }

  ngOnInit(): void {
  }

}

