import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list.component';
import { ProfileListRoutingModule } from './profile-list-routing.module';
import { ItemListComponent } from '../shared/item-list/item-list.component';
import { ItemListModule } from '../shared/item-list/item-list.module';


@NgModule({
  declarations: [ProfileListComponent],
  imports: [
    CommonModule,
    ProfileListRoutingModule,
    ItemListModule
  ],
  entryComponents: [ItemListComponent]
})
export class ProfileListModule { }
