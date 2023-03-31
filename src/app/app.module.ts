import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeyboardModule } from 'src/keyboard/keyboard.module';
import { PickViewModule } from 'src/pick-view/pick-view.module';
import { StepsGuideModule } from 'ng-devui/steps-guide';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickViewModule,
    KeyboardModule,
    StepsGuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
