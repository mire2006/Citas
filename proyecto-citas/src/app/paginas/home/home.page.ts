import { Component } from '@angular/core';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonIcon, IonButton, IonText, IonFab, IonFabButton, IonFabList } from "@ionic/angular/standalone";
import { CitaAleatoriaComponent } from 'src/app/componentes/cita-aleatoria/cita-aleatoria.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabList, IonFabButton, IonFab, IonText, IonButton, 
    IonIcon, IonHeader, IonContent, IonToolbar, IonTitle, CitaAleatoriaComponent],
})

export class HomePage {

  constructor(private router: Router) {}

  irAGestionCitas() {
    this.router.navigate(['/gestion-citas']);
  }
}
