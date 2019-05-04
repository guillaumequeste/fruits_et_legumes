import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegumesRoutingModule } from './legumes-routing.module';
import { MoisComponent } from './mois/mois.component';
import { LegumesJanvierComponent } from './legumes-janvier/legumes-janvier.component';
import { LegumesFevrierComponent } from './legumes-fevrier/legumes-fevrier.component';
import { LegumesMarsComponent } from './legumes-mars/legumes-mars.component';
import { LegumesAvrilComponent } from './legumes-avril/legumes-avril.component';
import { LegumesMaiComponent } from './legumes-mai/legumes-mai.component';
import { LegumesJuinComponent } from './legumes-juin/legumes-juin.component';
import { LegumesJuilletComponent } from './legumes-juillet/legumes-juillet.component';
import { LegumesAoutComponent } from './legumes-aout/legumes-aout.component';
import { LegumesSeptembreComponent } from './legumes-septembre/legumes-septembre.component';
import { LegumesOctobreComponent } from './legumes-octobre/legumes-octobre.component';
import { LegumesNovembreComponent } from './legumes-novembre/legumes-novembre.component';
import { LegumesDecembreComponent } from './legumes-decembre/legumes-decembre.component';
import { HomeLegumesComponent } from './home-legumes/home-legumes.component';

@NgModule({
    declarations: [
        MoisComponent,
        LegumesJanvierComponent,
        LegumesFevrierComponent,
        LegumesMarsComponent,
        LegumesAvrilComponent,
        LegumesMaiComponent,
        LegumesJuinComponent,
        LegumesJuilletComponent,
        LegumesAoutComponent,
        LegumesSeptembreComponent,
        LegumesOctobreComponent,
        LegumesNovembreComponent,
        LegumesDecembreComponent,
        HomeLegumesComponent,
    ],
  imports: [
    CommonModule,
    LegumesRoutingModule
  ],
  providers: []
})
export class LegumesModule {}
