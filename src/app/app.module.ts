import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CombineAllComponent} from '../components/combine-all/combine-all.component';
import {MaterialModule} from '../external/modules/material.module';
import {PostsService} from '../services/posts.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineAllComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
