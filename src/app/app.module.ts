import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { ListaMenuComponent } from './components/lista-menu/lista-menu.component';
import { ListaJuegosComponent } from './components/lista-juegos/lista-juegos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaNovedadesComponent } from './components/lista-novedades/lista-novedades.component';
import { PrincipalEmpleadoComponent } from './components/principal-empleado/principal-empleado.component';
import { VentaProductosComponent } from './components/venta-productos/venta-productos.component';
import { RentaJuegosComponent } from './components/renta-juegos/renta-juegos.component';
import { ModificarEmpleadosComponent } from './components/modificar-empleados/modificar-empleados.component';
import { ModificarProductosComponent } from './components/modificar-productos/modificar-productos.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import { AgregarEmpleadosComponent } from './components/agregar-empleados/agregar-empleados.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { SearchComponent } from './components/search/search.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PrincipalComponent,
    LoginComponent,
    ListaMenuComponent,
    ListaJuegosComponent,
    FooterComponent,
    NavegadorComponent,
    ListaProductosComponent,
    ListaNovedadesComponent,
    PrincipalEmpleadoComponent,
    VentaProductosComponent,
    RentaJuegosComponent,
    ModificarEmpleadosComponent,
    ModificarProductosComponent,
    AgregarProductosComponent,
    AgregarEmpleadosComponent,
    ProgressBarComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
