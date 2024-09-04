import { Component, OnInit } from '@angular/core';
import { employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-modificar-empleados',
  templateUrl: './modificar-empleados.component.html',
  styleUrls: ['./modificar-empleados.component.css']
})
export class ModificarEmpleadosComponent implements OnInit {
  listEmpleados: employee[] = [];
  loading: boolean = false;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getListEmployee();
  }

  getListEmployee() {
    this.loading = true;
    this._employeeService.getListEmployee().subscribe((data) => {
      this.listEmpleados = data;
      this.loading = false;
    });
  }

  confirmDelete(id: number | undefined): void {
    if (id === undefined) {
      console.warn('ID del empleado no está definido.');
      return;
    }

    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este empleado?');
    if (confirmed) {
      this.deleteEmployee(id);
    }
  }

  deleteEmployee(id: number): void {
    this.loading = true;

    this._employeeService.deleteEmployee(id).subscribe(() => {
      console.log('Empleado eliminado exitosamente');
      // Actualizar la lista de Empleados después de eliminar
      this.getListEmployee();
    });
    this.loading = false;
  }
}
