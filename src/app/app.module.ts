import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { AboutComponent } from './about/about.component';
import { AboutChildComponent } from './about-child/about-child.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AboutComponent,
    AboutChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
