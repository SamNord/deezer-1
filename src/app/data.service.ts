import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // tableau qui contiendra les likes
  mesLikes: Array<any> = new Array<any>();
  //tableau qui contiendra tous les noms de playlist
  myPlaylist: Array<any> = new Array<any>();

  albums = [
    {
      id: 1,
      title: "Nssi, Nssi",
      chanteur: "Khaled",
      image: "assets/album1.jpg",
      style: "#RAÏ"
    },
    {
      id: 2,
      title: "You're the one i need",
      chanteur: "Barry White",
      image: "assets/album2.jpg",
      style: "#pop"
    },
    {
      id: 3,
      title: "I believe i can fly",
      chanteur: "R Kelly",
      image: "assets/album3.jpg",
      style: "#magic song"
    },
    {
      id: 4,
      title: "Aaja Nachle ",
      chanteur: "Sunidhi Chauhan",
      image: "assets/album4.jpg",
      style: "#hindi"
    }

  ];

  // tableau qui contiendra tous les albums pour chaque playlist
  albumPlaylist = [

  ];

  constructor() { }


}
