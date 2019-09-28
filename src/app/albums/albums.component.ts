import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album;
  tabAlbPlaylist; //tableau des music ajoutés dans playlist
  tabMyPlaylist;
  add: number;
  router: Router;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.album = this.data.albums;
    this.tabMyPlaylist = this.data.myPlaylist;
    this.tabAlbPlaylist = this.data.albumPlaylist;

    console.dir(this.tabAlbPlaylist)
  }

  //le clic sur le like déclenche la fonction like qui ajoutera la music favorite au composant likes
  like = (id) => {

    if (id != 0) {
      // On récupère l'élément cliqué dan sle tableau
      let elt = this.album.find((u => u.id == id));
      // On l'ajoute dans le tableau des favoris
      this.data.mesLikes.push(elt);
    }
  }

  ajoutInPlaylist = (id) => {
    //console.log(id)

    //ici, on cherche l'élément(album) sur lequel on a cliqué par son id
    let elt = this.album.find((u => u.id == id));

    // console.log(this.tabAlbPlaylist)

    // si la playlist n'est pas vide alors 
    if (this.tabAlbPlaylist.length > 0) {

      let confirmer = prompt('Dans quelle playlist voulez vous ajouter cet album ?');

      //on parcourt tous les élément dans la playlist pour ajouter notre album
      this.tabAlbPlaylist.forEach((x) => {

        //x = éléments dans la playlist
        //si le nom qu'on a entré correspond au nom de la playlist alor on ajoute notre elt(élément = album cliqué) dans celle-ci avec push
        if (x.title == confirmer) {
          //x.title = le nom de la playlist
          x.albums.push(elt);
          alert('album ajouté');
        } else {
          //si le nom qu'on a entré ne correspond pas à une des playlist existante on affiche ce message
          alert("la playlist indiqué n'existe pas. Cliquez sur la rubrique playlist pour en ajouter une");
        }

      })
      // si la playlist est vide, on demande à l'utilisateur d'en créer une    
    } else {

      alert("la playlist est vide, si voulez vous en créer une, allez sur la rubrique playlist");

    }

  }
}


