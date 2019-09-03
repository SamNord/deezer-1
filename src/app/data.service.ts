import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  albums = [
    {
      title: "Nssi, Nssi",
      chanteur: "Khaled",
      image:"assets/album1.jpg",
      style: "#RAÏ"
    },
    {
      title: "You're the one i need",
      chanteur: "Barry White",
      image: "assets/album2.jpg",
      style: "#pop"
    },
    {
      title: "I believe i can fly",
      chanteur: "R Kelly",
      image: "assets/album3.jpg",
      style: "#magic song"
    },
    {
      title: "Aaja Nachle ",
      chanteur: "Sunidhi Chauhan",
      image: "assets/album4.jpg",
      style: "#hindi"
    }

  ]

  constructor() { }


}
