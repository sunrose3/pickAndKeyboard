import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZStepsGuideComponent } from './z-steps-guide.component';
import { StepsGuideModule } from 'src/steps-guide';

@NgModule({
  imports: [
    CommonModule, StepsGuideModule
  ],
  declarations: [ZStepsGuideComponent]
})
export class ZStepsGuideModule { }
