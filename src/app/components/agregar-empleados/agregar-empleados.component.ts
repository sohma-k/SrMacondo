import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router para redirigir
import { employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrl: './agregar-empleados.component.css'
})
export class AgregarEmpleadosComponent implements OnInit {
  form: FormGroup;
  id: number;
  operacion: string;

  constructor(private fb: FormBuilder,
              private _employeeService: EmployeeService,
              private router: Router,
              private aRouter: ActivatedRoute,) { // Inyecta Router
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      lastname2: [''],
      Emp_Telefono: ['', Validators.required],
      Emp_Email: ['', Validators.required],
      Contrasena: ['', Validators.required]
    });
    this.operacion= 'agregar'
    this.id = Number (aRouter.snapshot.paramMap.get('id'));
    console.log(this.id)
  }
  

  ngOnInit(): void {
    if(this.id != 0 ) {
      this.operacion = 'editar';
      this.getEmployeet(this.id);
    };
  }


  getEmployeet(id: number) {
  
    this._employeeService.getEmployee(id).subscribe((data: employee) => {
      console.log(data);
  
      this.form.patchValue({
        name: data.name,
        lastname: data.lastname,
        lastname2: data.lastname2,
        Emp_Telefono: data.Emp_Telefono,
        Emp_Email: data.Emp_Email,
        Contrasena: data.Contrasena
      })
    })
  }
  

  
  addEmployee() {
    const employee: employee = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      lastname2: this.form.value.lastname2 || '',
      Emp_Telefono: this.form.value.Emp_Telefono,
      Emp_Email: this.form.value.Emp_Email,
      Contrasena: this.form.value.Contrasena
    }
    if (this.id !== 0 ) {
      employee.id = this.id;
      this._employeeService.updateEmployee(this.id, employee).subscribe(() => {
      this.router.navigate(['empleados']);
    });

    }
    else {
    this._employeeService.saveEmployee(employee).subscribe(() => {
      this.router.navigate(['empleados'])
    })
    
  
}}
      
}
