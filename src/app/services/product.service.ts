import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/';
   }

   getListProducts(): Observable<product []> {
    return this.http.get<product[]>(`${this.myAppUrl}${this.myApiUrl}`);
   }
   deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  updateProduct(id: number, product: product): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
  saveProduct(product: product): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product)
  }
  getProduct(id: number): Observable<product> {
    return this.http.get<product>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  getProductsByCategory(categoria: string): Observable<product[]> {
    return this.http.get<product[]>(`${this.myAppUrl}api/productos/categoria?categoria=${categoria}`);
  }
  searchProducts(query: string): Observable<any[]> {
    // Corrección: uso correcto de la URL base para el endpoint de búsqueda
    return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}search`, { params: { query } });
  }

}