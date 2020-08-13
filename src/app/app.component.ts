import { Component } from '@angular/core';
import { DataServiceService } from './shared/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tanorbitTask';

  constructor(private dataSvc: DataServiceService) {
    this.dataSvc.initiateFetchForUsers();
  }
}
