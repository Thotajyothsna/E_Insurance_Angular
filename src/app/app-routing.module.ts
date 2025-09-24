import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AuthgaurdService } from './Services/authgaurd/authgaurd.service';
import { RegistrationComponent } from './Components/registration/registration.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  // {path:'login',component:LoginComponent,
  // canActivate: [AuthgaurdService ],
  // },
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'register',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
