import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails, UserResponse } from './user.model';
import { Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  userList: Array<UserDetails> = [];
  selectedUser: UserDetails = null;
  selecteUserObservable = new Subject<UserDetails>();

  constructor(public httpClient: HttpClient) {
      this.httpClient.get('https://panorbit.in/api/users.json').subscribe((userList: UserResponse) => {
        this.userList = userList.users;
      }, (error) => {
          console.log('Failed in loading user list');
      });
  }

  initiateFetchForUsers(): void {
  }

  getUserList(): Array<UserDetails> {
    return this.userList;
  }

  setSelectedUser(id: number): void {
    this.selectedUser = this.userList.filter((user) => user.id === id)[0];
    this.selecteUserObservable.next(this.selectedUser);
  }

  getSelectedUser(): UserDetails {
    return this.selectedUser;
  }
}
