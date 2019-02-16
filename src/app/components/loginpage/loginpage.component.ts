import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-loginpage",
  templateUrl: "./loginpage.component.html",
  styleUrls: ["./loginpage.component.css"]
})
export class LoginpageComponent implements OnInit {
  angForm: FormGroup;
  isValid = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authServices: AuthService
  ) {
    this.isValid = this.authServices.isValid;
    console.log(this.isValid, this.authServices.isValid);
  }

  ngOnInit() {
    this.createForm();
    if (sessionStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }
  }
  createForm() {
    this.angForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  async handleSubmit(creds: any) {
    if (creds.username === "arif" && creds.password === "123456") {
      await sessionStorage.setItem("currentUser", "Arif Widianto");
      await this.router.navigate([""]);
    }
    return;
  }

  handleEvent(event: any) {
    console.log(event);
  }
}
