import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { HomeFruitsComponent } from './components/fruits/home-fruits/home-fruits.component';
import { HomeLegumesComponent } from './components/legumes/home-legumes/home-legumes.component';
import { ListeComponent } from './components/liste/liste.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'fruits', component: HomeFruitsComponent },
  { path: 'legumes', component: HomeLegumesComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notfound', component: ErreurComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
