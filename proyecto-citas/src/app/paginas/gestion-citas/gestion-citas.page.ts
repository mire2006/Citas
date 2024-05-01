import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CitasService } from 'src/app/servicios/citas.service';
import { GestionCitasFormComponent } from 'src/app/componentes/gestion-citas-form/gestion-citas-form.component';
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [GestionCitasFormComponent, IonContent, IonTitle, IonToolbar, IonHeader, CommonModule, FormsModule]
})

export class GestionCitasPage {
  citas: { cuerpo: string, autor: string }[] = [];
  nuevaCita: { cuerpo: string, autor: string } = { cuerpo: '', autor: '' };

  constructor(private citasService: CitasService) {
    this.citas = this.citasService.obtenerCitas();
  }

}
