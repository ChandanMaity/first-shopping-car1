import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../items/items'
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url : string = "/assets/productData.json";

  constructor(private http : HttpClient) { }
  getProduct()  :Observable<Product[]>{

    return this.http.get<Product[]>(this.url);
  }

}
