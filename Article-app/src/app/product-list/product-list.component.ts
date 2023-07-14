import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../inventory-app/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
@Input() productList!:Product[];
@Output () onProductSelected!: EventEmitter<Product>
}
