import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroIngreso } from '../../models/registro-ingreso.model';
import { EstacionamientoService } from '../../services/estacionamiento.service';
import { Respuesta } from '../../interfaces/respuesta.interface';

@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html'
})
export class RegistroVehiculoComponent {


  public formularioRegistro: FormGroup;
  public respuesta: Respuesta;
  public mostrarAlertRegistro: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: EstacionamientoService) {
    this.formularioRegistro = this.formBuilder.group({
      placa: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6)
      ])],
      tipoVehiculo: ['', Validators.required],
      cilindraje: ['']
    });
  }

  registrarVehiculo() {
    let registro = new RegistroIngreso(this.formularioRegistro.value.placa,
      this.formularioRegistro.value.tipoVehiculo,
      this.formularioRegistro.value.cilindraje);
    this.service.registrarIngresoVehiculo(registro).subscribe(
      respuesta => {
        this.service.obtenerVehiculos();
        this.formularioRegistro.reset();
        this.respuesta = respuesta;
        $('#modalRegistro').modal('hide');
        this.mostrarAlertRegistro = true;
      }
    )
  }

  cerrarAlertRegistro() {
    this.mostrarAlertRegistro = false;
  }
}
