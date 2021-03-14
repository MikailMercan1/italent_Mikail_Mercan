import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelgiumMapComponent } from './belgium-map/belgium-map.component';
import { BrusselsDetailComponent } from './brussels-detail/brussels-detail.component';
import { HasseltDetailComponent } from './hasselt-detail/hasselt-detail.component';
import { SintTruidenDetailComponent } from './sint-truiden-detail/sint-truiden-detail.component'
import { HomeComponent } from './home/home.component';
import { XFactorComponent } from './x-factor/x-factor.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'map', component: BelgiumMapComponent},
  {path: 'map/Hasselt', component: HasseltDetailComponent},
  {path: 'map/Brussels', component: BrusselsDetailComponent},
  {path: 'map/Sint-Truiden', component: SintTruidenDetailComponent},
  {path: 'x-factor', component: XFactorComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'event', component: EventComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
