import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockupComponent } from './mockup/mockup.component';
import { PersonajeComponent } from './personaje/personaje.component';

const routes: Routes = [
  {
    path: 'personaje',
    component: PersonajeComponent
  },
  {
    path: 'mockUp',
    component: MockupComponent
  },
  {
    path: '**',
    redirectTo: 'mockUp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
