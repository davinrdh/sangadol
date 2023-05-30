import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SosmedPageComponent } from './pages/sosmed-page/sosmed-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotfoundPagesComponent } from './pages/notfound-pages/notfound-pages.component';
import { EventPageComponent } from './pages/event-page/event-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  // {path: 'event', component: EventPageComponent},
  {path: 'socialmedia', component: SosmedPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'event', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: NotfoundPagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
