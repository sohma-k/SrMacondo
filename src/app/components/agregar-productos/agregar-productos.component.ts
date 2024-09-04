import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router para redirigir
import { product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
  form: FormGroup;
  id: number;
  operacion: string;

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router: Router,
              private aRouter: ActivatedRoute,) { // Inyecta Router
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      categoria: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      idsucursal: ['', Validators.required]
    });
    this.operacion= 'agregar'
    this.id = Number (aRouter.snapshot.paramMap.get('id'));
    console.log(this.id)
  }
  

  ngOnInit(): void {
    if(this.id != 0 ) {
      this.operacion = 'editar';
      this.getProduct(this.id);
    };
  }


  getProduct(id: number) {
  
    this._productService.getProduct(id).subscribe((data: product) => {
      console.log(data);
  
      this.form.patchValue({
        name: data.name,
        description: data.description,
        categoria: data.categoria,
        price: data.price,
        stock: data.stock,
        idsucursal: data.idsucursal
      })
    })
  }
  

  
  addProduct() {
    const product: product = {
      name: this.form.value.name,
      description: this.form.value.description,
      categoria: this.form.value.categoria,
      price: this.form.value.price,
      stock: this.form.value.stock,
      idsucursal: this.form.value.idsucursal
    }
    if (this.id !== 0 ) {
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
      this.router.navigate(['productos']);
    });

    }
    else {
    this._productService.saveProduct(product).subscribe(() => {
      this.router.navigate(['productos'])
    })
    
  
}}
      
}
