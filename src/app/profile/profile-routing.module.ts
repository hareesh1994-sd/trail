import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent,
    children : [
      {path: '', redirectTo: 'detail', pathMatch: 'full'},
      {path: 'detail', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)},
      {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
      {path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)},
      {path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)},
      {path: '**', redirectTo: 'detail', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
