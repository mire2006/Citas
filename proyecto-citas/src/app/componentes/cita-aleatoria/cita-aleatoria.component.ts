import { Component, OnInit } from '@angular/core';
import { IonText, IonCardContent, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-cita-aleatoria',
  templateUrl: './cita-aleatoria.component.html',
  styleUrls: ['./cita-aleatoria.component.scss'],
  standalone: true,
  imports: [IonText, IonCardContent, IonCard],
})
export class CitaAleatoriaComponent implements OnInit {
  citas: any[] = [
    { frase: 'Podemos juzgar el corazón de un hombre por su trato a los animales.', autor: 'Immanuel Kant' },
    { frase: 'Cada lágrima enseña a los mortales una verdad.', autor: 'Platón' },
    { frase: 'Considero más valiente al que conquista sus deseos que al que conquista a sus enemigos, ya que la victoria más dura es la victoria sobre uno mismo.', autor: 'Aristóteles' },
    { frase: 'Los hombres de tristeza profunda se delatan cuando son felices: tienen una manera de aferrar la felicidad como si quisieran estrangularla y ahogarla, por celos, - ¡ay, demasiado bien saben que se les escapa!', autor: 'Friedrich Nietzsche' },
    { frase: 'La oscuridad nos envuelve a todos, pero mientras el sabio tropieza en alguna pared, el ignorante permanece tranquilo en el centro de la estancia.', autor: 'Anatole France' },
    { frase: 'No hay espíritu por necio y grosero que sea incapaz de adquirir las más altas virtudes si se le conduce como es menester.', autor: 'René Descartes' },
    { frase: 'El hombre solitario es una bestia o un dios.', autor: 'Aristóteles' },
  ];

  citaActual: { frase: string, autor: string } = { frase: '', autor: '' };

  constructor() { }

  ngOnInit() {
    this.generarNuevaCita();
  }

  generarNuevaCita() {
    const indiceAleatorio = Math.floor(Math.random() * this.citas.length);
    this.citaActual = this.citas[indiceAleatorio];
  }
}
