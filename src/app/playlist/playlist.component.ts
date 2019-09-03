import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  nouveauPlaylist = false;
  playlist;
  added = false;
  novo: boolean;
  tabPlaylist;
  add = 0;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.tabPlaylist = this.data.myPlaylist;
  }

  ajout() {

    this.novo = false;
    this.nouveauPlaylist = true;
    document.querySelector('button').style.display = "none";
    this.ajouter();
    this.add++;
  }

  ajouter() {
    let zone = document.querySelector('section');
    zone.style.display = "none";
     this.added = true;
     this.novo = true;
     document.querySelector('button').style.display = "block";
     this.add++;    
  }




}
