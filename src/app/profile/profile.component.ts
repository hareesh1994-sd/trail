import { Component, OnInit } from '@angular/core';
import { ChatAdapter, ChatParticipantType, ChatParticipantStatus } from 'ng-chat';
import { CustomAdapter } from '../shared/chatAdapter';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId = 0;
  title = 'Profile';
  adapter: ChatAdapter;

  constructor(private actRoute: ActivatedRoute, private dataSvc: DataServiceService){
    this.actRoute.params.subscribe((routParams) => {
      this.userId = +routParams.profileId;
      this.dataSvc.setSelectedUser(this.userId);
    });
    const chatUser = [];
    this.dataSvc.getUserList().forEach((user) => {
      if (user.id !== this.userId) {
        chatUser.push({
          participantType : ChatParticipantType.User,
          id: user.id,
          displayName: user.name,
          avatar: user.profilepicture,
          status: ChatParticipantStatus.Online
        });
      }
    });
    this.adapter = new CustomAdapter(chatUser);
   }

  ngOnInit(): void {
  }

  updateTitle(title): void {
    this.title = title;
  }

}
