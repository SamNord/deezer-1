import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { trackModel } from '../models/track.models';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  duration = 0; //pour definir la durée de la musique
  elapsed = 0; //pour définir la durée qui s'écoule en temps réel de la musique
  position = 0; //pour définir la barre et rond de progression de la musique
  //pour transmettre le clic de l'enfant player, on émet un évenement et on l'envoi grâce à Output
  @Output() nextEmit = new EventEmitter<any>();// ici pour l'événement passer à la musique suivante
  @Output() previousEmit = new EventEmitter<any>();// pour passer à la musique précédente
  @Input() musics: trackModel; //importé de l'interface trackModel et du tableau de app.ts
  paused = false; // booléen pour passer de l'icone play à celui de pause et vice versa : définit dans les fonctions
  music; //l'audio en question


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  



}
