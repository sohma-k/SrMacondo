import { Component, OnInit } from '@angular/core';
import { product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { itemcarrito } from '../../interfaces/itemcarrito';

@Component({
  selector: 'app-lista-novedades',
  templateUrl: './lista-novedades.component.html',
  styleUrls: ['./lista-novedades.component.css']
})
export class ListaNovedadesComponent implements OnInit {
  listProducts: product[] = [];
  loading: boolean = false;
  carritoNoVacio: boolean = false; // Variable para verificar si el carrito no está vacío

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts();
    this.checkCarrito(); // Verificar el estado inicial del carrito
  }

  getListProducts() {
    this.loading = true;
    this._productService.getListProducts().subscribe(
      (data) => {
        this.listProducts = data;
        console.log(this.listProducts);
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
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
