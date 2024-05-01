import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonList, IonLabel, IonTextarea, IonButton, 
  IonIcon, IonContent, IonHeader, IonToolbar, IonTitle, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-gestion-citas-form',
  templateUrl: './gestion-citas-form.component.html',
  styleUrls: ['./gestion-citas-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonText, FormsModule, CommonModule, IonTitle, IonToolbar, IonHeader, 
    IonContent, IonIcon, IonButton, IonTextarea, IonLabel, IonItem, IonList],
})

export class GestionCitasFormComponent {
  @Input() citas: { cuerpo: string, autor: string }[] = [];
  @Input() nuevaCita: any;
  nuevaCitaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.nuevaCitaForm = this.formBuilder.group({
      cuerpo: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  agregarCita() {
    if (this.nuevaCitaForm.valid) {
      const nuevaCita = this.nuevaCitaForm.value;
      this.citas.push(nuevaCita);
      this.nuevaCitaForm.reset();
    }
  }

  eliminarCita(index: number) {
    this.citas.splice(index, 1);
  }
}
