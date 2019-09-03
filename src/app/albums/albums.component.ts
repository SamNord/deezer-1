import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album;
  @Input() searchValue;
  testedValue;
  searchOk;
  displaySearch = false;
  trackFiltered = [];

  constructor(private data: DataService) { }

  ngOnInit() {

    // Samir : Gestion de la recherche de titres (component Search)
    // --> Il faut mettre en place un observable sur l'input de recherche pour pouvoir faire un subscribe ici afin de déclencher une recherche
    console.log(this.searchValue)

    if (this.searchValue) {

      // Initialisation du tableau contenant la recherche de l'utilisateur
      this.trackFiltered = []

      // Récupération de la requête de l'utilisateur
      let searchString = this.searchValue;

      // On parcourt le service contenant l'ensemble des titres disponibles
      for (let i = 0; i < this.data.albums.length; i++) {
        this.testedValue = this.data.albums[i].title
        this.searchOk = this.testedValue.includes(searchString)

        if (!this.searchOk) {
          this.testedValue = this.data.albums[i].chanteur
          this.searchOk = this.testedValue.includes(searchString)

          if (!this.searchOk) {
            this.testedValue = this.data.albums[i].style
            this.searchOk = this.testedValue.includes(searchString)
          }
        }

        // Si la recherche sur l'entrée 
        if (this.searchOk) {
          this.trackFiltered.push(this.data.albums[i])
          this.displaySearch = true;
        }
      }
    }
    else {
      // Fin Samir

      this.album = this.data.albums;

      // Samir : Gestion de la recherche de titres (component Search)
    }
    // Fin Samir
  }
}
