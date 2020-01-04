import { Component, OnInit } from '@angular/core';
import { ToDoInteractionService } from 'src/app/shared/services/to-do-interaction.service';
import { faCircle, faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { ToDo } from 'src/app/core/data/models/to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDoList:ToDo[] = [];
  circle = faCircle;
  checkCircle = faCheckCircle;
  trash = faTrashAlt;
  private deleteIds = [];

  constructor(private toDoService: ToDoInteractionService) { }

  ngOnInit() {
    this.toDoService.getToDo().subscribe(toDos => {
      if(toDos){
        this.toDoList.push(toDos);
      }
    });
  }

  checkItem(e, id: string){
    if(e.target.checked){
      this.deleteIds.push(id);
    }
    else{
      let index = this.deleteIds.indexOf(id);
      this.deleteIds.splice(index, 1);
    }
  }

  deleteItems(){
    if(this.deleteIds.length < 1){
      alert('جهت حذف آیتم تیک مربوط به آن را فعال نمایید!');
    }

    this.deleteIds.forEach( (item) => {
      this.toDoList = this.toDoList.filter( todoItem => todoItem.id !== item);
    })

    this.deleteIds = [];
  }

}
