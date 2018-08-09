import { Component } from '@angular/core';
import { Consulta } from '../../interfaces/consulta.interface';
import { EstacionamientoService } from '../../services/estacionamiento.service';
import { Salida } from '../../interfaces/salida.interface';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html'
})
export class ListadoVehiculosComponent {

  consulta: Consulta;
  salida: Salida;
  public mostrarAlertSalida: boolean = false;

  constructor(private service: EstacionamientoService) {
    this.service.obtenerVehiculos();
    this.service.consulta$.subscribe((data) => {
      this.consulta = data;
    });
  }

  registrarSalida(placa: string) {
    this.service.registrarSalidaVehiculo(placa).subscribe(
      (salida) => {
        this.salida = salida;
        if (salida.codigo == '07') {
          this.mostrarAlertSalida = false;
          $('#salidaModal').modal('show');
        } else {
          this.mostrarAlertSalida = true;
        }
        this.service.obtenerVehiculos();
      }
    )
  }

  cerrarAlertSalida() {
    this.mostrarAlertSalida = false;
  }

}
