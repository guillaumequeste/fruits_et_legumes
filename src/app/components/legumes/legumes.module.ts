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
import { AilComponent } from './ail/ail.component';
import { CapreComponent } from './capre/capre.component';
import { CarotteComponent } from './carotte/carotte.component';
import { CeleriComponent } from './celeri/celeri.component';
import { ChampignonDeParisComponent } from './champignon-de-paris/champignon-de-paris.component';
import { ChouComponent } from './chou/chou.component';
import { ChouFleurComponent } from './chou-fleur/chou-fleur.component';
import { EchaloteComponent } from './echalote/echalote.component';
import { EndiveComponent } from './endive/endive.component';
import { EpinardComponent } from './epinard/epinard.component';
import { MacheComponent } from './mache/mache.component';
import { OignonComponent } from './oignon/oignon.component';
import { PoireauComponent } from './poireau/poireau.component';
import { PommeDeTerreComponent } from './pomme-de-terre/pomme-de-terre.component';

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
        AilComponent,
        CapreComponent,
        CarotteComponent,
        CeleriComponent,
        ChampignonDeParisComponent,
        ChouComponent,
        ChouFleurComponent,
        EchaloteComponent,
        EndiveComponent,
        EpinardComponent,
        MacheComponent,
        OignonComponent,
        PoireauComponent,
        PommeDeTerreComponent,
    ],
  imports: [
    CommonModule,
    LegumesRoutingModule
  ],
  providers: []
})
export class LegumesModule {}
