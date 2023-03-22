import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeyboardComponent],
  exports:[KeyboardComponent]
})
export class KeyboardModule { }
