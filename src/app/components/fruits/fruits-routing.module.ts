import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFruitsComponent } from './home-fruits/home-fruits.component';
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
import { AnanasComponent } from './ananas/ananas.component';
import { BananeComponent } from './banane/banane.component';
import { CitronJauneComponent } from './citron-jaune/citron-jaune.component';
import { CitronVertComponent } from './citron-vert/citron-vert.component';
import { ClementineComponent } from './clementine/clementine.component';
import { KiwiComponent } from './kiwi/kiwi.component';
import { MandarineComponent } from './mandarine/mandarine.component';
import { OrangeComponent } from './orange/orange.component';
import { PamplemousseComponent } from './pamplemousse/pamplemousse.component';
import { PommeComponent } from './pomme/pomme.component';
import { PoireComponent } from './poire/poire.component';
import { FraiseComponent } from './fraise/fraise.component';
import { CeriseComponent } from './cerise/cerise.component';
import { AbricotComponent } from './abricot/abricot.component';
import { FramboiseComponent } from './framboise/framboise.component';
import { GroseilleComponent } from './groseille/groseille.component';
import { MelonComponent } from './melon/melon.component';
import { NectarineComponent } from './nectarine/nectarine.component';
import { PecheComponent } from './peche/peche.component';
import { TomateComponent } from './tomate/tomate.component';
import { CassisComponent } from './cassis/cassis.component';
import { MureComponent } from './mure/mure.component';
import { MyrtilleComponent } from './myrtille/myrtille.component';
import { FigueComponent } from './figue/figue.component';
import { FraiseDesBoisComponent } from './fraise-des-bois/fraise-des-bois.component';
import { MirabelleComponent } from './mirabelle/mirabelle.component';
import { PruneComponent } from './prune/prune.component';
import { RaisinComponent } from './raisin/raisin.component';
import { ChataigneComponent } from './chataigne/chataigne.component';
import { MarronComponent } from './marron/marron.component';
import { OliveComponent } from './olive/olive.component';

const fruitsRoutes: Routes = [
  { path: 'fruits', component: HomeFruitsComponent },
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
  { path: 'fruits/abricot', component: AbricotComponent },
  { path: 'fruits/ananas', component: AnanasComponent },
  { path: 'fruits/banane', component: BananeComponent },
  { path: 'fruits/cassis', component: CassisComponent },
  { path: 'fruits/cerise', component: CeriseComponent },
  { path: 'fruits/chataigne', component: ChataigneComponent },
  { path: 'fruits/citron_jaune', component: CitronJauneComponent },
  { path: 'fruits/citron_vert', component: CitronVertComponent },
  { path: 'fruits/clementine', component: ClementineComponent },
  { path: 'fruits/figue', component: FigueComponent },
  { path: 'fruits/fraise', component: FraiseComponent },
  { path: 'fruits/fraise_des_bois', component: FraiseDesBoisComponent },
  { path: 'fruits/framboise', component: FramboiseComponent },
  { path: 'fruits/groseille', component: GroseilleComponent },
  { path: 'fruits/kiwi', component: KiwiComponent },
  { path: 'fruits/mandarine', component: MandarineComponent },
  { path: 'fruits/marron', component: MarronComponent },
  { path: 'fruits/melon', component: MelonComponent },
  { path: 'fruits/mirabelle', component: MirabelleComponent },
  { path: 'fruits/mure', component: MureComponent },
  { path: 'fruits/myrtille', component: MyrtilleComponent },
  { path: 'fruits/nectarine', component: NectarineComponent },
  { path: 'fruits/olive', component: OliveComponent },
  { path: 'fruits/orange', component: OrangeComponent },
  { path: 'fruits/pamplemousse', component: PamplemousseComponent },
  { path: 'fruits/peche', component: PecheComponent },
  { path: 'fruits/pomme', component: PommeComponent },
  { path: 'fruits/poire', component: PoireComponent },
  { path: 'fruits/prune', component: PruneComponent },
  { path: 'fruits/raisin', component: RaisinComponent },
  { path: 'fruits/tomate', component: TomateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(fruitsRoutes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
