import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { todosUrl, todosUrlwithId } from "src/app/config/apiUrl";

@Injectable({
  providedIn: "root"
})
export class TodosDataService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(todosUrl());
  }

  getTodosWithId(id?: number) {
    return this.http.get(todosUrlwithId(id));
  }
}
