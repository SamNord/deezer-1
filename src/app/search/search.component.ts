import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  
  searchForm : FormGroup = this.fb.group({
    searchText : ['',Validators.required]
  })


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  searchTracks(event) {
    event.preventDefault();
    console.log(this.searchForm.value);
  }
}
