import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { UsersDataService } from "../../services/users/users-data.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  usersData?: any;
  constructor(
    private authService: AuthService,
    private userService: UsersDataService
  ) {}

  ngOnInit() {
    this.userService.getData().subscribe(
      data => {
        console.log(data);
        return (this.usersData = data);
      },
      error => {
        console.log(error);
      }
    );
  }

  logOut() {
    this.authService.logOut();
  }
}
