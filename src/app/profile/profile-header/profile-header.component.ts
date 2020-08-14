import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../shared/data-service.service';
import { UserDetails } from '../../shared/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() title: string;
  profileDetails: UserDetails = null;

  profileList: Array<UserDetails> = [];

  constructor( private dataSvc: DataServiceService, private router: Router) {
    this.profileDetails = this.dataSvc.getSelectedUser();
    this.profileList = this.dataSvc.getUserList();
  }

  ngOnInit(): void {
    this.dataSvc.selecteUserObservable.subscribe((res) => {
      this.profileDetails = res;
    });
  }

  redirect(): any {
    this.router.navigateByUrl('/list');
  }
}

