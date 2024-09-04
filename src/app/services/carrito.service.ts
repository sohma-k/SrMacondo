import { Injectable } from '@angular/core';
import { itemcarrito } from '../interfaces/itemcarrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  agregarCarrito(item: itemcarrito): void {
    let carrito: itemcarrito[] = JSON.parse(localStorage.getItem("carrito") || '[]');
    let index = carrito.findIndex(itemC => itemC.id === item.id);

    if (index === -1) {
      carrito.push(item);
    } else {
      carrito[index].cantidad++;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  getCarrito(): itemcarrito[] {
    return JSON.parse(localStorage.getItem("carrito") || '[]');
  }

  carritoNoVacio(): boolean {
    return this.getCarrito().length > 0;
  }
}
