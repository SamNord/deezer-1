import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  nouveauPlaylist = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  ajout() {

    this.nouveauPlaylist = true;
    document.querySelector('button').style.display = "none";
  }

 


}
