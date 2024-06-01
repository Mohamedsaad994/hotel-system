import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddeditroomsComponent } from './components/addeditrooms/addeditrooms.component';

const routes: Routes = [
  { path: '', component: RoomsComponent },
  {path: 'add', component: AddeditroomsComponent},
  {path: 'edit/:id', component: AddeditroomsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
