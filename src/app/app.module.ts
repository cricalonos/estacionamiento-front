import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { EstacionamientoComponent } from './components/estacionamiento/estacionamiento.component';
import { EstacionamientoService } from './services/estacionamiento.service';
import { RegistroVehiculoComponent } from './components/registro-vehiculo/registro-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoVehiculosComponent } from './components/listado-vehiculos/listado-vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    EstacionamientoComponent,
    RegistroVehiculoComponent,
    ListadoVehiculosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EstacionamientoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
