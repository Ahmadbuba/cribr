import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffCampusComponent } from './off-campus/off-campus.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { PropertiesComponent } from './properties/properties.component';
import { HomeComponent } from './home/home.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: OffCampusComponent },
      { path: 'auctions', component: AuctionsComponent },
      { path: 'properties', component: PropertiesComponent },
    ],
  },
  { path: 'property-detail', component: PropertyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
