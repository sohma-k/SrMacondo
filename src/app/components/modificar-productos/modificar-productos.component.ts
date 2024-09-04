import { Component, OnInit } from '@angular/core';
import { product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.component.html',
  styleUrls: ['./modificar-productos.component.css']
})
export class ModificarProductosComponent implements OnInit {
  listProducts: product[] = [];
  loading: boolean = false;
  selectedDropdownValue: number | null = null; // Variable para almacenar el valor seleccionado

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;
    this._productService.getListProducts().subscribe((data) => {
      this.listProducts = data;
      this.loading = false;
    });
  }

  setDropdownValue(value: number): void {
    this.selectedDropdownValue = value;
    console.log('Dropdown Value:', this.selectedDropdownValue); // Aquí puedes manejar la lógica según el valor
  }

  confirmDelete(id: number): void {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirmed) {
      this.deleteProduct(id);
    }
  }

  deleteProduct(id: number): void {
    this.loading = true;

    this._productService.deleteProduct(id).subscribe(() => {
      console.log('Producto eliminado exitosamente');
      // Actualizar la lista de productos después de eliminar
      this.getListProducts();
    }, error => {
      console.error('Error al eliminar el producto:', error);
    });
    this.loading = false;
  }

  getProduct() {
    // Aquí puedes implementar la lógica para obtener un producto si es necesario
  }
}
