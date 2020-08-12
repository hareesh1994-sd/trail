import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', loadChildren: () => import('./profile-list/profile-list.module').then(m => m.ProfileListModule)},
  {path: 'profile/:profileId', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: '**', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
