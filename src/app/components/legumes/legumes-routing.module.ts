import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLegumesComponent } from './home-legumes/home-legumes.component';
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

const legumesRoutes: Routes = [
  { path: 'legumes', component: HomeLegumesComponent },
  { path: 'legumes/janvier', component: LegumesJanvierComponent },
  { path: 'legumes/fevrier', component: LegumesFevrierComponent },
  { path: 'legumes/mars', component: LegumesMarsComponent },
  { path: 'legumes/avril', component: LegumesAvrilComponent },
  { path: 'legumes/mai', component: LegumesMaiComponent },
  { path: 'legumes/juin', component: LegumesJuinComponent },
  { path: 'legumes/juillet', component: LegumesJuilletComponent },
  { path: 'legumes/aout', component: LegumesAoutComponent },
  { path: 'legumes/septembre', component: LegumesSeptembreComponent },
  { path: 'legumes/octobre', component: LegumesOctobreComponent },
  { path: 'legumes/novembre', component: LegumesNovembreComponent },
  { path: 'legumes/decembre', component: LegumesDecembreComponent },
  { path: 'legumes/ail', component: AilComponent },
  { path: 'legumes/capre', component: CapreComponent },
  { path: 'legumes/carotte', component: CarotteComponent },
  { path: 'legumes/celeri', component: CeleriComponent },
  { path: 'legumes/champignon_de_paris', component: ChampignonDeParisComponent },
  { path: 'legumes/chou', component: ChouComponent },
  { path: 'legumes/chou-fleur', component: ChouFleurComponent },
  { path: 'legumes/echalote', component: EchaloteComponent },
  { path: 'legumes/endive', component: EndiveComponent },
  { path: 'legumes/epinard', component: EpinardComponent },
  { path: 'legumes/mache', component: MacheComponent },
  { path: 'legumes/oignon', component: OignonComponent },
  { path: 'legumes/poireau', component: PoireauComponent },
  { path: 'legumes/pomme_de_terre', component: PommeDeTerreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(legumesRoutes)],
  exports: [RouterModule]
})
export class LegumesRoutingModule { }
