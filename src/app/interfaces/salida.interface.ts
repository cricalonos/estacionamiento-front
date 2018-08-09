import { Respuesta } from "./respuesta.interface";

export interface Salida extends Respuesta {
    placa: string;
    costoTotal: number;
}