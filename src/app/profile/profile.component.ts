import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title:string = 'Profile';


  constructor(){ }

  updateTitle(title){

    this.title = title;
    
  };


  ngOnInit(): void {
  }

}
