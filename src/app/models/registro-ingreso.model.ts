export class RegistroIngreso {
    placa: string;
    tipo: string;
    cilindraje: number;

    constructor(placa: string, tipo: string, cilindraje?: number) {
        this.placa = placa;
        this.tipo = tipo;
        this.cilindraje = cilindraje;
    }
}