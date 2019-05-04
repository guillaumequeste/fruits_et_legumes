import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { HeaderComponent } from './components/header/header.component';
import { FruitsModule } from './components/fruits/fruits.module';
import { LegumesModule } from './components/legumes/legumes.module';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ErreurComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FruitsModule,
    LegumesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
