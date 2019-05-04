import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsRoutingModule } from './fruits-routing.module';
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

@NgModule({
    declarations: [
        MoisComponent,
        FruitsJanvierComponent,
        FruitsFevrierComponent,
        FruitsMarsComponent,
        FruitsAvrilComponent,
        FruitsMaiComponent,
        FruitsJuinComponent,
        FruitsJuilletComponent,
        FruitsAoutComponent,
        FruitsSeptembreComponent,
        FruitsOctobreComponent,
        FruitsNovembreComponent,
        FruitsDecembreComponent,
    ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ],
  providers: []
})
export class FruitsModule {}
