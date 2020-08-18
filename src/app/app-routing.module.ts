import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScullyComponent } from './scully.component';


const routes: Routes = [{
  path: '',
  component: ScullyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
