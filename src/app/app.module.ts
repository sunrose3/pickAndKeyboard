import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeyboardModule } from 'src/keyboard/keyboard.module';
import { PickViewModule } from 'src/pick-view/pick-view.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsGuideModule } from 'src/steps-guide';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [
    AppComponent, PositionComponent
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
