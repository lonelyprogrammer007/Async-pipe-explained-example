import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-list-product-async-pipe',
  templateUrl: './list-product-async-pipe.component.html',
  styleUrls: ['./list-product-async-pipe.component.css'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductAsyncPipeComponent implements OnInit {
  products?: Observable<IProduct[]>;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.products = this.appService.Products$;
  }
}
