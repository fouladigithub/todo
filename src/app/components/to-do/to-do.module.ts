import { NgModule } from '@angular/core';
import { ToDoComponent } from './to-do.component';
import { AddTitleComponent } from './add-title/add-title.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoComponent,
    AddTitleComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [ToDoComponent]
})
export class ToDoModule { }
