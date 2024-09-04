import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../interfaces/product';
import { itemcarrito } from '../../interfaces/itemcarrito';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {
  listProducts: product[] = [];
  loading: boolean = false;
  carritoNoVacio: boolean = false; // Variable para verificar si el carrito no está vacío

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsByCategory('juego');
    this.checkCarrito(); // Verificar el estado inicial del carrito
  }

  getProductsByCategory(categoria: string): void {
    this.loading = true;
    this._productService.getProductsByCategory(categoria).subscribe(
      (data) => {
        this.listProducts = data;
        console.log(this.listProducts);
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener productos por categoría:', error);
        this.loading = false;
      }
    );
  }
  
  agregarCarrito(item: product) {
    let iCarrito: itemcarrito = {
      id: item.id,
      name: item.name,
      categoria: item.categoria,
      idsucursal: item.idsucursal,
      price: item.price,
      cantidad: 1
    };

    let carrito: itemcarrito[] = JSON.parse(localStorage.getItem("carrito") || '[]');
    let index = carrito.findIndex(itemC => itemC.id === iCarrito.id);

    if (index === -1) {
      carrito.push(iCarrito);
    } else {
      carrito[index].cantidad++;
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    this.checkCarrito(); // Actualizar el estado del carrito
    window.location.reload(); // Recargar la página para reflejar los cambios
  }

  checkCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito") || '[]');
    this.carritoNoVacio = carrito.length > 0;
  }
}
