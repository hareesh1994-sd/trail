import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../shared/data-service.service';
import { UserDetails } from '../../shared/user.model';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() title: string;
  profileDetails: UserDetails = null;
  
  constructor( private dataSvc: DataServiceService) { 
    this.profileDetails = this.dataSvc.getSelectedUser();

    
  }

  ngOnInit(): void {
  }

}

