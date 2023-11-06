import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockupComponent } from './mockup/mockup.component';
import { PersonajeComponent } from './personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    MockupComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
