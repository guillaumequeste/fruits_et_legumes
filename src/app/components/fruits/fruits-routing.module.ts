import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoisComponent } from './mois/mois.component';
import { FruitsJanvierComponent } from './fruits-janvier/fruits-janvier.component';
import { FruitsFevrierComponent } from './fruits-fevrier/fruits-fevrier.component';
import { FruitsMarsComponent } from './fruits-mars/fruits-mars.component';
import { FruitsAvrilComponent } from './fruits-avril/fruits-avril.component';
import { FruitsMaiComponent } from './fruits-mai/fruits-mai.component';
import { FruitsJuinComponent } from './fruits-juin/fruits-juin.component';
import { FruitsJuilletComponent } from './fruits-juillet/fruits-juillet.component';
import { FruitsAoutComponent } from './fruits-aout/fruits-aout.component';
import { FruitsSeptembreComponent } from './fruits-septembre/fruits-septembre.component';
import { FruitsOctobreComponent } from './fruits-octobre/fruits-octobre.component';
import { FruitsNovembreComponent } from './fruits-novembre/fruits-novembre.component';
import { FruitsDecembreComponent } from './fruits-decembre/fruits-decembre.component';

const fruitsRoutes: Routes = [
  { path: 'fruits', component: MoisComponent },
  { path: 'fruits/janvier', component: FruitsJanvierComponent },
  { path: 'fruits/fevrier', component: FruitsFevrierComponent },
  { path: 'fruits/mars', component: FruitsMarsComponent },
  { path: 'fruits/avril', component: FruitsAvrilComponent },
  { path: 'fruits/mai', component: FruitsMaiComponent },
  { path: 'fruits/juin', component: FruitsJuinComponent },
  { path: 'fruits/juillet', component: FruitsJuilletComponent },
  { path: 'fruits/aout', component: FruitsAoutComponent },
  { path: 'fruits/septembre', component: FruitsSeptembreComponent },
  { path: 'fruits/octobre', component: FruitsOctobreComponent },
  { path: 'fruits/novembre', component: FruitsNovembreComponent },
  { path: 'fruits/decembre', component: FruitsDecembreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(fruitsRoutes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
