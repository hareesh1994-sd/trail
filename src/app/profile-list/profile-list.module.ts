import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list.component';
import { ProfileListRoutingModule } from './profile-list-routing.module';


@NgModule({
  declarations: [ProfileListComponent],
  imports: [
    CommonModule,
    ProfileListRoutingModule
  ]
})
export class ProfileListModule { }
