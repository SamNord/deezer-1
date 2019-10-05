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

  constructor(private data: DataService) {
    this.music = new Audio(); //l'audio on lui attribut le type audio pour dire qu'il contient de l'audio
  }


  ngOnInit() {
        //on souscrit au subject qu'on a définit dans le DataService
        this.data.trackObs.subscribe(t => {
          //élément t correspond à la musique (élément dans tableau musics)
          this.musics = t;
          //fonction load() ????? 
          this.music.load();
          // on appelle la fonction playAudio() définit un peu plus loin pour lancer le play
          this.playAudio();
        })
        // on attribut le chemin de l'audio music indiqué dans le tableau musics dans app.ts
        this.music.src = this.musics.url;
        this.music.ontimeupdate = (e) => {
          this.duration = this.music.duration;
          this.elapsed = this.music.currentTime;
          this.position = (this.elapsed / this.duration) * 100;
        }
  }

    // au clic sa lance l'audio, pour que ça marche ne pas oublier de mettre un test au niveau app.html
    playAudio = () => {
      //l'icone pause apparait à la place
      this.paused = true;
      // ?????? pour load
      this.music.load();
      // fonction play définit par angular
      this.music.play();
    }

    //evenements (next et previous) transmit au parent grâce à l'output 
    next = () => {
      this.nextEmit.emit(this.musics);
      this.music.src = this.musics.url;
      console.log(this.music.src);
      this.music.load();
      this.playAudio();
    }
  
    previous = () => {
      this.previousEmit.emit(this.musics);
      this.music.src = this.musics.url;
      console.log(this.music.src);
      this.music.load;
      this.playAudio();
    }
  



}
