import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component ({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
album;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.album = this.data.albums;
  }

}
