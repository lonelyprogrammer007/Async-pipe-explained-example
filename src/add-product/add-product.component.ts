import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.productForm = this.fb.group({
      Id: ['', Validators.required],
      Title: ['', Validators.required],
      Price: [],
      inStock: [],
    });
  }

  ngOnInit() {}

  addProduct() {
    if (this.productForm.valid) {
      this.appService.AddProduct(this.productForm.value);
    }
  }
}
