import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { TulipeComponent } from './tulipe/tulipe.component';
import { FreesiaComponent } from './freesia/freesia.component';
import { OrchideeComponent } from './orchidee/orchidee.component';
import { AnemoneComponent } from './anemone/anemone.component';
import { JacintheComponent } from './jacinthe/jacinthe.component';
import { RenonculeComponent } from './renoncule/renoncule.component';



const fleursRoutes: Routes = [
  { path: 'fleurs', component: HomeFleursComponent },
  { path: 'fleurs/janvier', component: FleursJanvierComponent },
  { path: 'fleurs/fevrier', component: FleursFevrierComponent },
  { path: 'fleurs/mars', component: FleursMarsComponent },
  { path: 'fleurs/avril', component: FleursAvrilComponent },
  { path: 'fleurs/mai', component: FleursMaiComponent },
  { path: 'fleurs/juin', component: FleursJuinComponent },
  { path: 'fleurs/juillet', component: FleursJuilletComponent },
  { path: 'fleurs/aout', component: FleursAoutComponent },
  { path: 'fleurs/septembre', component: FleursSeptembreComponent },
  { path: 'fleurs/octobre', component: FleursOctobreComponent },
  { path: 'fleurs/novembre', component: FleursNovembreComponent },
  { path: 'fleurs/decembre', component: FleursDecembreComponent },
  { path: 'fleurs/anemone', component: AnemoneComponent },
  { path: 'fleurs/camelia', component: CameliaComponent },
  { path: 'fleurs/freesia', component: FreesiaComponent },
  { path: 'fleurs/jacinthe', component: JacintheComponent },
  { path: 'fleurs/jasmin', component: JasminComponent },
  { path: 'fleurs/mimosa', component: MimosaComponent },
  { path: 'fleurs/orchidee', component: OrchideeComponent },
  { path: 'fleurs/renoncule', component: RenonculeComponent },
  { path: 'fleurs/tulipe', component: TulipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(fleursRoutes)],
  exports: [RouterModule]
})
export class FleursRoutingModule { }
