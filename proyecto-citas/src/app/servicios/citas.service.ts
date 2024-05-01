import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CitasService {
  citas: { cuerpo: string, autor: string }[] = [];

  constructor() { }

  agregarCita(cita: { cuerpo: string, autor: string }) {
    this.citas.push(cita);
  }

  eliminarCita(index: number) {
    this.citas.splice(index, 1);
  }

  obtenerCitas() {
    return this.citas;
  }
}
