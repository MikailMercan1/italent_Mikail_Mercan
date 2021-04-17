import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BelgiumMapComponent } from './belgium-map/belgium-map.component';
import { HasseltDetailComponent } from './hasselt-detail/hasselt-detail.component';
import { BrusselsDetailComponent } from './brussels-detail/brussels-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { XFactorComponent } from './x-factor/x-factor.component';
import { SintTruidenDetailComponent } from './sint-truiden-detail/sint-truiden-detail.component';
import { EventComponent } from './event/event.component';
import { FinalReflectionComponent } from './final-reflection/final-reflection.component';

@NgModule({
  declarations: [
    AppComponent,
    BelgiumMapComponent,
    HasseltDetailComponent,
    BrusselsDetailComponent,
    NavBarComponent,
    HomeComponent,
    XFactorComponent,
    SintTruidenDetailComponent,
    EventComponent,
    FinalReflectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
