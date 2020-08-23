import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { AboutComponent } from './about/about.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { PriceListComponent } from './price-list/price-list.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from "@angular/forms";
import { LightboxModule } from 'ngx-lightbox';
import {MatTabsModule} from '@angular/material/tabs';

// import {MatTabsModule} from '@angular/material/tabs';
// import {NgLightboxModule} from '@silmar/ng-lightbox';
// import { HammerModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderImageComponent,
    AboutComponent,
    MyWorksComponent,
    PriceListComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule,
    FormsModule,
    LightboxModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
