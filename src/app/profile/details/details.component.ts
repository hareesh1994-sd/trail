import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../shared/data-service.service';
import { UserDetails } from '../../shared/user.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  profileDetails: UserDetails = null;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
  };

  constructor(private dataSvc: DataServiceService) {
    this.profileDetails = this.dataSvc.getSelectedUser();
    // this.center = {
    //   lat: +this.profileDetails.address.geo.lat,
    //   lng: +this.profileDetails.address.geo.lng
    // };

    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  ngOnInit(): void {
  }

}
