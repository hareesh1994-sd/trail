import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { NgChatModule } from 'ng-chat';
import { ItemListModule } from '../shared/item-list/item-list.module';


@NgModule({
  declarations: [ProfileComponent, ProfileHeaderComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgChatModule,
    ItemListModule
  ]
})
export class ProfileModule { }
