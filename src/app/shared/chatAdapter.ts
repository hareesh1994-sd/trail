import {
    ChatAdapter,
    IChatGroupAdapter,
    User, Group, Message,
    ParticipantResponse,
    IChatParticipant
} from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class CustomAdapter extends ChatAdapter implements IChatGroupAdapter {
  public static mockedParticipants: IChatParticipant[];

  constructor(public userList){
    super();
    CustomAdapter.mockedParticipants = userList;
  }

  listFriends(): Observable<ParticipantResponse[]> {
    return of(CustomAdapter.mockedParticipants.map(user => {
      const participantResponse = new ParticipantResponse();

      participantResponse.participant = user;
      participantResponse.metadata = {
        totalUnreadMessages: Math.floor(Math.random() * 10)
      };
      return participantResponse;
    }));
  }

  getMessageHistory(destinataryId: any): Observable<Message[]> {
    let mockedHistory: Array<Message>;

    mockedHistory = [
      {
        fromId: 1,
        toId: 999,
        message: 'Hi there, just type any message bellow to test this Angular module.',
        dateSent: new Date()
      }
    ];

    return of(mockedHistory).pipe(delay(2000));
  }

  sendMessage(message: Message): void {
    setTimeout(() => {
      const replyMessage = new Message();

      replyMessage.dateSent = new Date();

      if (isNaN(message.toId)) {
        const group = CustomAdapter.mockedParticipants.find(x => x.id === message.toId) as Group;

        // Message to a group. Pick up any participant for this
        const randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
        replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;

        replyMessage.toId = message.toId;

        this.onMessageReceived(group, replyMessage);
      }
      else {
        replyMessage.fromId = message.toId;
        replyMessage.toId = message.fromId;

        const user = CustomAdapter.mockedParticipants.find(x => x.id === replyMessage.fromId);

        replyMessage.message = `${user.displayName} says :  ${message.message}`;

        this.onMessageReceived(user, replyMessage);
      }
    }, 1000);
  }

  groupCreated(group: Group): void {
    CustomAdapter.mockedParticipants.push(group);

    CustomAdapter.mockedParticipants = CustomAdapter.mockedParticipants.sort((first, second) =>
      second.displayName > first.displayName ? -1 : 1
    );

    // Trigger update of friends list
    this.listFriends().subscribe(response => {
      this.onFriendsListChanged(response);
    });
  }
}
