import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AddProductComponent, ListProductsComponent],
  template: `
  <app-add-product></app-add-product>
  <hr/>
  <app-list-products></app-list-products>
  `,
})
export class App {
  name = 'Angular';

  constructor() {}
}

bootstrapApplication(App);
