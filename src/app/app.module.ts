import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CombineAllComponent} from '../components/combine-all/combine-all.component';
import {MaterialModule} from '../external/modules/material.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineAllComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
