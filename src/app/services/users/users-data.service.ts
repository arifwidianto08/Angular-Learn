import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { apiUrl } from "../../config/apiUrl";

@Injectable({
  providedIn: "root"
})
export class UsersDataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(apiUrl());
  }
}
