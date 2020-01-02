import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from 'src/app/core/data/models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoInteractionService {
  private toDoSubject = new BehaviorSubject<ToDo>(null);

  constructor() { }

  getToDo() {
    return this.toDoSubject.asObservable();
  }

  setToDoTitle(id: string, title: string) {
    const toDo = new ToDo(id, title);
    this.toDoSubject.next(toDo);
  }
}
