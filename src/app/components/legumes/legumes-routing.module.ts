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
];

@NgModule({
  imports: [RouterModule.forRoot(legumesRoutes)],
  exports: [RouterModule]
})
export class LegumesRoutingModule { }
