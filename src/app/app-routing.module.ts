import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaJuegosComponent } from './components/lista-juegos/lista-juegos.component';
import { ListaNovedadesComponent } from './components/lista-novedades/lista-novedades.component';
import { ListaMenuComponent } from './components/lista-menu/lista-menu.component';
import { ModificarEmpleadosComponent } from './components/modificar-empleados/modificar-empleados.component';
import { ModificarProductosComponent } from './components/modificar-productos/modificar-productos.component';
import { PrincipalEmpleadoComponent } from './components/principal-empleado/principal-empleado.component';
import { RentaJuegosComponent } from './components/renta-juegos/renta-juegos.component';
import { VentaProductosComponent } from './components/venta-productos/venta-productos.component';
import { AgregarEmpleadosComponent } from './components/agregar-empleados/agregar-empleados.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';


const routes: Routes = [

    {
      path : "",
      redirectTo:"/principal",
      pathMatch:"full"
    },
    {
      path:"principal",
      component: PrincipalComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"lista-productos",
      component:ListaProductosComponent
    },
    {
      path:"lista-juegos",
      component:ListaJuegosComponent
    },
    {
      path:"lista-novedades",
      component:ListaNovedadesComponent
    },
    {
      path:"lista-menu",
      component:ListaMenuComponent
    },
    {
      path:"inicio",
      component:LoginComponent
    },
    {
      path:"empleados",
      component:ModificarEmpleadosComponent
    },
    {
      path:"productos",
      component:ModificarProductosComponent
    },
    {
      path:"principal-empleado",
      component:PrincipalEmpleadoComponent
    },
    {
      path:"renta-juegos",
      component:RentaJuegosComponent
    },
    {
      path:"venta-productos",
      component:VentaProductosComponent
    },
    {
      path:"add-empleados/:id",
      component:AgregarEmpleadosComponent
    },
    {
      path:"add-productos/:id",
      component:AgregarProductosComponent
    },
    {
      path : "**",
      redirectTo:"/principal",
      pathMatch:"full"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
