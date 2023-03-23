import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard.component';
import { NgNumericKeyboardModule } from '@xmagic/ng-numeric-keyboard';

@NgModule({
  imports: [
    CommonModule,
    NgNumericKeyboardModule
  ],
  declarations: [KeyboardComponent],
  exports:[KeyboardComponent]
})
export class KeyboardModule { }
