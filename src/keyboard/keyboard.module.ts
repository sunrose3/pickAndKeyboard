import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard.component';
import { ZKeyboardModule } from './z-keyboard/z-keyboard.module';

@NgModule({
  imports: [
    CommonModule,
    ZKeyboardModule
  ],
  declarations: [KeyboardComponent],
  exports:[KeyboardComponent]
})
export class KeyboardModule { }
