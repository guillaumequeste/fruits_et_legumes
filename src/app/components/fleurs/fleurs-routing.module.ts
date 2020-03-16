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
import { ForsythiaComponent } from './forsythia/forsythia.component';
import { MagnoliaComponent } from './magnolia/magnolia.component';
import { NarcisseComponent } from './narcisse/narcisse.component';
import { PenseeComponent } from './pensee/pensee.component';
import { PaqueretteComponent } from './paquerette/paquerette.component';
import { AsterComponent } from './aster/aster.component';
import { AzaleeComponent } from './azalee/azalee.component';
import { LilasComponent } from './lilas/lilas.component';
import { MuguetComponent } from './muguet/muguet.component';
import { VeroniqueComponent } from './veronique/veronique.component';
import { RoseComponent } from './rose/rose.component';
import { PivoineComponent } from './pivoine/pivoine.component';
import { ArumComponent } from './arum/arum.component';
import { BougainvillierComponent } from './bougainvillier/bougainvillier.component';
import { BleuetComponent } from './bleuet/bleuet.component';
import { CapucineComponent } from './capucine/capucine.component';
import { CoquelicotComponent } from './coquelicot/coquelicot.component';
import { ChevrefeuilleComponent } from './chevrefeuille/chevrefeuille.component';
import { GenetComponent } from './genet/genet.component';
import { OeilletComponent } from './oeillet/oeillet.component';
import { ChardonComponent } from './chardon/chardon.component';
import { ChrysanthemeComponent } from './chrysantheme/chrysantheme.component';
import { CosmosComponent } from './cosmos/cosmos.component';
import { CraspediaComponent } from './craspedia/craspedia.component';
import { AnethComponent } from './aneth/aneth.component';
import { HortensiaComponent } from './hortensia/hortensia.component';
import { EglantierComponent } from './eglantier/eglantier.component';
import { GerberaComponent } from './gerbera/gerbera.component';
import { LavandeComponent } from './lavande/lavande.component';
import { LysComponent } from './lys/lys.component';
import { MargueriteComponent } from './marguerite/marguerite.component';
import { DahliaComponent } from './dahlia/dahlia.component';
import { GlaieulComponent } from './glaieul/glaieul.component';



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
  { path: 'fleurs/aneth', component: AnethComponent },
  { path: 'fleurs/arum', component: ArumComponent },
  { path: 'fleurs/aster', component: AsterComponent },
  { path: 'fleurs/azalee', component: AzaleeComponent },
  { path: 'fleurs/bleuet', component: BleuetComponent },
  { path: 'fleurs/bougainvillier', component: BougainvillierComponent },
  { path: 'fleurs/camelia', component: CameliaComponent },
  { path: 'fleurs/capucine', component: CapucineComponent },
  { path: 'fleurs/chardon', component: ChardonComponent },
  { path: 'fleurs/chevrefeuille', component: ChevrefeuilleComponent },
  { path: 'fleurs/chrysantheme', component: ChrysanthemeComponent },
  { path: 'fleurs/coquelicot', component: CoquelicotComponent },
  { path: 'fleurs/cosmos', component: CosmosComponent },
  { path: 'fleurs/craspedia', component: CraspediaComponent },
  { path: 'fleurs/dahlia', component: DahliaComponent },
  { path: 'fleurs/eglantier', component: EglantierComponent },
  { path: 'fleurs/forsythia', component: ForsythiaComponent },
  { path: 'fleurs/freesia', component: FreesiaComponent },
  { path: 'fleurs/genet', component: GenetComponent },
  { path: 'fleurs/gerbera', component: GerberaComponent },
  { path: 'fleurs/glaieul', component: GlaieulComponent },
  { path: 'fleurs/hortensia', component: HortensiaComponent },
  { path: 'fleurs/jacinthe', component: JacintheComponent },
  { path: 'fleurs/jasmin', component: JasminComponent },
  { path: 'fleurs/lavande', component: LavandeComponent },
  { path: 'fleurs/lilas', component: LilasComponent },
  { path: 'fleurs/lys', component: LysComponent },
  { path: 'fleurs/magnolia', component: MagnoliaComponent },
  { path: 'fleurs/marguerite', component: MargueriteComponent },
  { path: 'fleurs/mimosa', component: MimosaComponent },
  { path: 'fleurs/muguet', component: MuguetComponent },
  { path: 'fleurs/narcisse', component: NarcisseComponent },
  { path: 'fleurs/oeillet', component: OeilletComponent },
  { path: 'fleurs/orchidee', component: OrchideeComponent },
  { path: 'fleurs/paquerette', component: PaqueretteComponent },
  { path: 'fleurs/pensee', component: PenseeComponent },
  { path: 'fleurs/pivoine', component: PivoineComponent },
  { path: 'fleurs/renoncule', component: RenonculeComponent },
  { path: 'fleurs/rose', component: RoseComponent },
  { path: 'fleurs/tulipe', component: TulipeComponent },
  { path: 'fleurs/veronique', component: VeroniqueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(fleursRoutes)],
  exports: [RouterModule]
})
export class FleursRoutingModule { }
