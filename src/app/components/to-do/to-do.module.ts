import { NgModule } from '@angular/core';
import { ToDoComponent } from './to-do.component';
import { AddTitleComponent } from './add-title/add-title.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ToDoComponent,
    AddTitleComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ToDoComponent]
})
export class ToDoModule { }
