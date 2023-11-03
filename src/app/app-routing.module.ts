import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffCampusComponent } from './tabs/off-campus/off-campus.component';
import { AuctionsComponent } from './tabs/auctions/auctions.component';
import { PropertiesComponent } from './tabs/properties/properties.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertyDetailComponent } from './tabs/properties/property-detail/property-detail.component';
import { TestComponent } from './test/test.component';
import { PropertyUploadComponent } from './pages/property/property-upload/property-upload.component';
import { LoginComponent } from './pages/login/login.component';
import { AdsComponent } from './pages/ads/ads.component';

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
  { path: 'property-upload', component: PropertyUploadComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ads', component: AdsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
