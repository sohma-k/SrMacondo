import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CarritoService } from '../../services/carrito.service';  // Importar el servicio de carrito
import { debounceTime, Subject } from 'rxjs';
import { itemcarrito } from '../../interfaces/itemcarrito';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string = '';
  products: any[] = [];
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(private productService: ProductService, private carritoService: CarritoService) {}  // Inyectar el servicio de carrito

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(query => {
      if (query.length >= 2) {
        this.searchProducts(query);
      } else {
        this.products = [];
      }
    });
  }

  onSearchChange(query: string): void {
    this.searchSubject.next(query);
  }

  private searchProducts(query: string): void {
    this.productService.searchProducts(query).subscribe(data => {
      this.products = data;
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  agregarProductoAlCarrito(product: any): void {
    const item: itemcarrito = {
      id: product.id,
      name: product.name,
      categoria: product.categoria,
      idsucursal: product.idsucursal,
      price: product.price,
      cantidad: 1
    };

    this.carritoService.agregarCarrito(item);  // Usar el servicio para agregar al carrito
    window.location.reload();
  }
}

