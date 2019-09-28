import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  logged = false;

  formLogin : FormGroup = this.fb.group ({
    pseudo : ["", Validators.required],
    pass : ["", Validators.required]

  })

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }

  valider = () => {

    this.logged = true;
  }

  //se déconnecter
  logOut = () => {

    this.logged = false;
  }

}
