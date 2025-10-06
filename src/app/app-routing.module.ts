import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AuthgaurdService } from './Services/authgaurd/authgaurd.service';
import { RegistrationComponent } from './Components/registration/registration.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { PolicyCreationComponent } from './Components/policy-creation/policy-creation.component';
import { PolicyViewingComponent } from './Components/policy-viewing/policy-viewing.component';
import { ParentComponent } from './Components/parent/parent.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'create',component:PolicyCreationComponent},
  {path:'policies',component:PolicyViewingComponent},
  {path:'parent',component:ParentComponent},
  // {path:'login',component:LoginComponent,
  // canActivate: [AuthgaurdService ],
  // },
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent,
    canActivate:[AuthgaurdService]
  },
  {path:'register',component:RegistrationComponent,canActivate:[AuthgaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
