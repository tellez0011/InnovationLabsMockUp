import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockupComponent } from './mockup/mockup.component';
import { PersonajeComponent } from './personaje/personaje.component';

const routes: Routes = [
  {
    path:'**',
    redirectTo: 'mockUp'
  },
  {
    path:'mockUp',
    component: MockupComponent
  },
  {
    path:'personaje',
    component: PersonajeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
