import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [ItemListComponent]
})
export class ItemListModule { }
