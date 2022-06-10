import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableroComponent } from './tablero/tablero.component';
import { CuadroComponent } from './cuadro/cuadro.component';
import { AppComponent } from './app.component';
import { PuntosComponent } from './puntos/puntos.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    CuadroComponent,
    PuntosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
