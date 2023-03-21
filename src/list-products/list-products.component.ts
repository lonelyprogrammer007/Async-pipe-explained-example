import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListProductsComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  productSubscription?: Subscription;

  productObserver = {
    next: (data: IProduct[]) => {
      this.products = data;
    },
    error: (error: any) => {
      console.log(error);
    },
    complete: () => {
      console.log('product stream completed ');
    },
  };

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.productSubscription = this.appService.Products$.subscribe(
      this.productObserver
    );
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
