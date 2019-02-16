import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { LoginpageComponent } from "./components/loginpage/loginpage.component";
import { AuthService } from "./services/auth/auth.service";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthService] },
  { path: "users", component: UsersComponent, canActivate: [AuthService] },
  { path: "login", component: LoginpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
