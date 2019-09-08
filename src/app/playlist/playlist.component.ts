import { Component, OnInit, Input } from '@angular/core';
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
  @Input() tabPlaylist: Array<any> = new Array<any>(); // tableau des noms playlist
  add = 0;
  tabAlbumPlaylist;// Array<any> = new Array<any>();  tableau de tous les album par playlist
  clicPlaylist = false;
  isAffich = true;
  albums = [];


  constructor(private data: DataService) { }

  ngOnInit() {
    this.tabPlaylist = this.data.myPlaylist;
    this.tabAlbumPlaylist = this.data.albumPlaylist;
  }

  ajout() {

    this.novo = false;
    this.nouveauPlaylist = true;
    this.add++;
  }

  ajouter() {

    this.added = true;
    this.isAffich = false;
    this.novo = true;
    this.data.albumPlaylist.push({ title: this.playlist, albums: [] });
    this.tabAlbumPlaylist = this.data.albumPlaylist;
    this.add++;
    this.nouveauPlaylist = false;
    this.isAffich = true;

  }

  maPlaylist(albums) {
    console.dir(albums)
    this.albums = albums;
    this.clicPlaylist = true;

  }

  afficher() {
    this.added = true;
    console.dir(this.data.albumPlaylist);
    this.data.myPlaylist;
    this.tabAlbumPlaylist = this.data.albumPlaylist;

  }

  delete(u) {

    let index = this.albums.indexOf(u);

    if (index < this.albums.length) {

      this.albums.splice(index, 1);
    }
  }

  deletePlaylist(x) {
    let index = this.tabAlbumPlaylist.indexOf(x);

    if (index < this.tabAlbumPlaylist.length) {

      this.tabAlbumPlaylist.splice(index, 1);
      this.clicPlaylist = false;
      this.novo = false;

    }

  }
}
