import { Component, OnInit } from '@angular/core';
import { product } from '../../interfaces/product';
import { itemcarrito } from '../../interfaces/itemcarrito'; 
import { ProductService } from '../../services/product.service';
import { CarritoService } from '../../services/carrito.service'; 

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listProducts: product[] = [];
  loading: boolean = false;
  carritoNoVacio: boolean = false; // Variable para verificar si el carrito no está vacío

  constructor(private _productService: ProductService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getProductsByCategory('comun');
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
    
    this.carritoService.agregarCarrito(iCarrito);
    this.checkCarrito(); // Actualizar el estado del carrito
    window.location.reload(); // Recargar la página para reflejar los cambios
  }

  checkCarrito() {
    this.carritoNoVacio = this.carritoService.carritoNoVacio();
  }
}
