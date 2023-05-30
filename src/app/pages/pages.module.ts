import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { HttpClientModule } from '@angular/common/http';
import { SosmedPageComponent } from './sosmed-page/sosmed-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotfoundPagesComponent } from './notfound-pages/notfound-pages.component';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    HomePageComponent,
    EventPageComponent,
    SosmedPageComponent,
    AboutPageComponent,
    NotfoundPagesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    FullCalendarModule,
    AdminModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ]
})
export class PagesModule { }
