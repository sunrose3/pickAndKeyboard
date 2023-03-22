import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PickViewModule } from 'src/pick-view/pick-view.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
