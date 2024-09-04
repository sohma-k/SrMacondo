import { Component } from '@angular/core';
import { itemcarrito } from '../../interfaces/itemcarrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  listaItemsCarrito: itemcarrito[] | undefined;

ngOnInit(): void {
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito;
}
vaciarCarrito() {
  localStorage.clear();
  this.listaItemsCarrito = [];
}
}
