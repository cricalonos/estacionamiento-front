import { Respuesta } from "./respuesta.interface";

export interface Consulta extends Respuesta {
    listadoVehiculos: Vehiculo[]
}

export interface Vehiculo {
    placa: string;
    tipo: string;
    fechaIngreso: Date;
}