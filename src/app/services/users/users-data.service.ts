import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { usersUrl } from "../../config/apiUrl";
import { retry, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersDataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(usersUrl()).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.log("Error from backend", error);
    }
    return throwError("Something went wrong , please try again...");
  }
}
