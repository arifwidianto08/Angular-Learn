import { Component, OnInit } from "@angular/core";
import { TodosDataService } from "src/app/services/todos/todos-data.service";
import { throwError } from "rxjs";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todosData: any;
  constructor(private todosServices: TodosDataService) {}

  ngOnInit() {
    this.todosServices.getTodos().subscribe(
      data => {
        this.todosData = data;
        console.log(data);
      },
      error => {
        throwError(error);
      }
    );
  }
}
