import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = "http://localhost:8080/api/products?";
  

  getData(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.apiUrl).pipe(
      map(Response => Response._embedded.products));
  }

}

interface GetResponse{
  _embedded: {
    products: Product[];
  }
}
