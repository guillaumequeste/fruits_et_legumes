import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { HomeFruitsComponent } from './components/fruits/home-fruits/home-fruits.component';
import { HomeLegumesComponent } from './components/legumes/home-legumes/home-legumes.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'fruits', component: HomeFruitsComponent },
  { path: 'legumes', component: HomeLegumesComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
