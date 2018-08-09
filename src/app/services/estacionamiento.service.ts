import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from '../interfaces/consulta.interface';
import { Observable, Subject } from 'rxjs';
import { Salida } from '../interfaces/salida.interface';
import { RegistroIngreso } from '../models/registro-ingreso.model';
import { Respuesta } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  basePath: string = "//localhost:8080";
  consultarPath: string = "/consultarVehiculos";
  registrarIngresoPath: string = "/registrarIngreso";
  registrarSalidaPath: string = "/registrarSalida/";

  private consulta = new Subject<Consulta>();
  consulta$ = this.consulta.asObservable();

  constructor(private http: HttpClient) {
  }

  obtenerVehiculos(): void {
    this.http.get<Consulta>(this.basePath + this.consultarPath).subscribe((data) => {
      this.consulta.next(data);
    });
  }

  registrarIngresoVehiculo(vehiculo: RegistroIngreso): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.basePath + this.registrarIngresoPath, vehiculo);
  }

  registrarSalidaVehiculo(placa: string): Observable<Salida> {
    return this.http.get<Salida>(this.basePath + this.registrarSalidaPath + placa);
  }

}
