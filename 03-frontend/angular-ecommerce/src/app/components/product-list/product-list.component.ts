import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data: Product[]= [];

  constructor(private productService: ProductService){}

  ngOnInit() : void {
    this.getData();
  }

  getData() {
    this.productService.getData().subscribe((response) => {
      this.data = response;
    });
  }

}
