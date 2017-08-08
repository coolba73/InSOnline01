import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from "./app.routing";

import { CorpValueComponent } from "./CoporationValuation/corpvalue.component";
import { RealEstateValutionComponent } from "./RealEstateValuation/rev.component";
import { MyJobComponent } from "./MyJob/myjob.component";

@NgModule({
  declarations: [
    AppComponent,
    CorpValueComponent,
    RealEstateValutionComponent,
    MyJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
