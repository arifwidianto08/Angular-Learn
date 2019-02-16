// Import Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Import Components
import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/users/users.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginpageComponent } from "./components/loginpage/loginpage.component";

// Import Services
import { AuthService } from "./services/auth/auth.service";
import { TodosDataService } from "./services/todos/todos-data.service";
import { UsersDataService } from "./services/users/users-data.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, TodosDataService, UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
