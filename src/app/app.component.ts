import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { trackModel } from './models/track.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  audios;
  trackTest : trackModel = this.audios[1]; 

  ngOnInit() {
    this.audios = this.data.albums;

  }
 
constructor(private data: DataService) {}

nextTrack = (track) => {
  let index = this.audios.indexOf(track);
  if (index < this.audios.length - 1) {
    this.trackTest = this.audios[index +1];
    this.data.trackObs.next(this.audios[index +1])
  }
}

previousTrack = (track) => {
 let index = this.audios.indexOf(track);
 if (index > 0) {
   this.trackTest = this.audios[index -1];
   this.data.trackObs.next(this.audios[index -1])
 }

}
