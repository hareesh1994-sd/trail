import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  profileDetails =  {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      profilepicture: 'https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg',
      address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
              lat: '-37.3159',
              lng: '81.1496'
          }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-serverneural',
          bs: 'harness real-time e-markets'
      }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
