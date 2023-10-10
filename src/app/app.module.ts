import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OffCampusComponent } from './tabs/off-campus/off-campus.component';
import { RouterModule } from '@angular/router';
import { CenterComponent } from './components/header/center/center.component';
import { NavigationComponent } from './components/header/center/navigation/navigation.component';
import { SearchComponent } from './components/header/center/search/search.component';
import { NavComponent } from './components/nav/nav.component';
import { IconsComponent } from './components/nav/icons/icons.component';
import { IconComponent } from './components/nav/icons/icon/icon.component';
import { WrapperComponent } from './shared/UI/wrapper/wrapper.component';
import { CarouselComponent } from './shared/UI/carousel/carousel.component';
import { AuctionsComponent } from './tabs/auctions/auctions.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertiesComponent } from './tabs/properties/properties.component';
import { CardComponent } from './shared/UI/card/card.component';
import { BackdropComponent } from './shared/UI/backdrop/backdrop.component';
import { ModalComponent } from './shared/UI/modal/modal.component';
import { PropertiesFilterComponent } from './tabs/properties/properties-filter/properties-filter.component';
import { OffCampusFilterComponent } from './tabs/off-campus/off-campus-filter/off-campus-filter.component';
import { PropertyDetailComponent } from './tabs/properties/property-detail/property-detail.component';
import { PropertyImageWrapperComponent } from './shared/UI/property-image-wrapper/property-image-wrapper.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { DetailImageGridComponent } from './shared/UI/details/detail-image-grid/detail-image-grid.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailImageSlideComponent } from './shared/UI/details/detail-image-slide/detail-image-slide.component';
import { SwiperDirective } from './directives/swiper-directive';
import { HeadingComponent } from './shared/UI/details/detail-heading/detail-heading.component';
import { TestComponent } from './test/test.component';
import { DetailDescription1Component } from './shared/UI/details/detail-description1/detail-description1.component';

register();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffCampusComponent,
    CenterComponent,
    NavigationComponent,
    SearchComponent,
    NavComponent,
    IconsComponent,
    IconComponent,
    WrapperComponent,
    CarouselComponent,
    AuctionsComponent,
    PropertiesComponent,
    CardComponent,
    BackdropComponent,
    ModalComponent,
    PropertiesFilterComponent,
    OffCampusFilterComponent,
    PropertyDetailComponent,
    PropertyImageWrapperComponent,
    DetailImageGridComponent,
    DetailImageSlideComponent,
    HomeComponent,
    SwiperDirective,
    HeadingComponent,
    TestComponent,
    DetailDescription1Component,
  ],
  imports: [BrowserModule, RouterModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
