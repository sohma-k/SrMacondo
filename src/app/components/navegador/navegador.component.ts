import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { debounceTime, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { itemcarrito } from '../../interfaces/itemcarrito';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  query: string = '';
  products: any[] = [];
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(private productService: ProductService, private router: Router) {}

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

  shouldShowSearch(): boolean {
    const routesWithoutSearch = ['/principal', '/lista-productos', '/lista-juegos', '/lista-menu', '/lista-novedades'];
    return routesWithoutSearch.includes(this.router.url); 
  }

  agregarProductoAlCarrito(product: any): void {
    let iCarrito: itemcarrito = {
      id: product.id,
      name: product.name,
      categoria: product.categoria,
      idsucursal: product.idsucursal,
      price: product.price,
      cantidad: 1
    };

    if (localStorage.getItem("carrito") === null) {
      let carrito: itemcarrito[] = [];
      carrito.push(iCarrito);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      let carritoStorage = localStorage.getItem("carrito") as string;
      let carrito = JSON.parse(carritoStorage);
      let index = -1;
      
      for (let i = 0; i < carrito.length; i++) {
        let itemC: itemcarrito = carrito[i];
        if (iCarrito.id === itemC.id) {
          index = i;
          break;
        }
      }
      
      if (index === -1) {
        carrito.push(iCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      } else {
        let itemCarrito: itemcarrito = carrito[index];
        itemCarrito.cantidad++;
        carrito[index] = itemCarrito;
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
    }

    // Redirigir solo si se encuentra en la ruta "/principal"
    if (this.router.url === '/principal') {
      switch (product.categoria) {
        case 'comida':
          this.router.navigate(['/lista-menu']).then(() => window.location.reload());
          break;
        case 'juego':
          this.router.navigate(['/lista-juegos']).then(() => window.location.reload());
          break;
        case 'comun':
          this.router.navigate(['/lista-productos']).then(() => window.location.reload());
          break;
        default:
          console.warn('Categoría desconocida, no se realizó la redirección.');
          break;
      }
    } else {
      // Si no estamos en "/principal", solo recargar la página
      window.location.reload();
    }
  }
}
