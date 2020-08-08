import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { AboutComponent } from './about/about.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { PriceListComponent } from './price-list/price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderImageComponent,
    AboutComponent,
    MyWorksComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
