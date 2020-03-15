import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleursRoutingModule } from './fleurs-routing.module';
import { MoisComponent } from './mois/mois.component';

import { HomeFleursComponent } from './home-fleurs/home-fleurs.component';
import { FleursJanvierComponent } from './fleurs-janvier/fleurs-janvier.component';
import { FleursFevrierComponent } from './fleurs-fevrier/fleurs-fevrier.component';
import { FleursMarsComponent } from './fleurs-mars/fleurs-mars.component';
import { FleursAvrilComponent } from './fleurs-avril/fleurs-avril.component';
import { FleursMaiComponent } from './fleurs-mai/fleurs-mai.component';
import { FleursJuinComponent } from './fleurs-juin/fleurs-juin.component';
import { FleursJuilletComponent } from './fleurs-juillet/fleurs-juillet.component';
import { FleursAoutComponent } from './fleurs-aout/fleurs-aout.component';
import { FleursSeptembreComponent } from './fleurs-septembre/fleurs-septembre.component';
import { FleursOctobreComponent } from './fleurs-octobre/fleurs-octobre.component';
import { FleursNovembreComponent } from './fleurs-novembre/fleurs-novembre.component';
import { FleursDecembreComponent } from './fleurs-decembre/fleurs-decembre.component';
import { JasminComponent } from './jasmin/jasmin.component';
import { MimosaComponent } from './mimosa/mimosa.component';
import { CameliaComponent } from './camelia/camelia.component';


@NgModule({
    declarations: [
        MoisComponent,
        HomeFleursComponent,
        FleursJanvierComponent,
        FleursFevrierComponent,
        FleursMarsComponent,
        FleursAvrilComponent,
        FleursMaiComponent,
        FleursJuinComponent,
        FleursJuilletComponent,
        FleursAoutComponent,
        FleursSeptembreComponent,
        FleursOctobreComponent,
        FleursNovembreComponent,
        FleursDecembreComponent,
        JasminComponent,
        MimosaComponent,
        CameliaComponent
    ],
  imports: [
    CommonModule,
    FleursRoutingModule
  ],
  providers: []
})
export class FleursModule {}
