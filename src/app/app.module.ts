import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// non preimpostato
import { NgChartsModule } from 'ng2-charts';
// import { ChartModule } from 'chart.js';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    // ChartsModule,
    // ChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
