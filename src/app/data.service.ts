import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // tableau qui contiendra les likes
  mesLikes: Array<any> = new Array<any>();
  //tableau qui contiendra tous les noms de playlist
  myPlaylist: Array<any> = new Array<any>();
  //observable pour la musique
  trackObs = new Subject<any>();


  albums = [
    {
      id: 1,
      title: "naruto ending: wind",
      chanteur: "Akeboshi",
      image: "assets/images/naruto1.jpg",
      style: "#opening",
      url: "assets/audio/naruto.mp3"
    },
    {
      id: 2,
      title: "naruto: blue bird",
      chanteur: "Ikimono-gakari",
      image: "assets/images/naruto2.jpg",
      style: "#generic",
      url: "assets/audio/naruto_blue_bird.mp3"
    },
    {
      id: 3,
      title: "one piece : we are",
      chanteur: "Kageyama Hironobu",
      image: "assets/images/one_piece.jpg",
      style: "#generic",
      url: "assets/audio/one_piece1.mp3"
    },
    {
      id: 4,
      title: "hunter X hunter : Ohayou",
      chanteur: "Keno",
      image: "assets/images/hunter_x_hunter.jpg",
      style: "#generic",
      url: "assets/audio/hunter_X_hunter.mp3"
    },
    {
      id: 5,
      title: "Aaja Nachle ",
      chanteur: "Sunidhi Chauhan",
      image: "assets/images/album4.jpg",
      style: "#hindi",
      url: "assats/audio/aaja_nachle.mp3"
    }

  ];

  // tableau qui contiendra tous les albums pour chaque playlist
  albumPlaylist = [];

  constructor() { }


}
