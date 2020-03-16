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
        CameliaComponent,
        TulipeComponent,
        FreesiaComponent,
        OrchideeComponent,
        AnemoneComponent,
        JacintheComponent,
        RenonculeComponent,
        ForsythiaComponent,
        MagnoliaComponent,
        NarcisseComponent,
        PenseeComponent,
        PaqueretteComponent,
        AsterComponent,
        AzaleeComponent,
        LilasComponent,
        MuguetComponent,
        VeroniqueComponent,
        RoseComponent,
        PivoineComponent
    ],
  imports: [
    CommonModule,
    FleursRoutingModule
  ],
  providers: []
})
export class FleursModule {}
