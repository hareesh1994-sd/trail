import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from '../user.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() profileList: Array<UserDetails> = [];
  @Input() profileSubMenu = false;


  constructor() { }

  ngOnInit(): void {
  }

}
