import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'adminregister', component: AdminRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
