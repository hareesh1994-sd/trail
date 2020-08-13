import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';
import { UserDetails } from '../shared/user.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  profileList: Array<UserDetails> = [];

  constructor(private dataSvc: DataServiceService) {
      this.profileList = this.dataSvc.getUserList();
  }

  ngOnInit(): void {
  }

}
