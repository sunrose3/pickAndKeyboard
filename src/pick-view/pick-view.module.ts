import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickViewComponent } from './pick-view.component';
import { PickViewServices } from './pick-view.service';
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [PickViewServices],
  declarations: [PickViewComponent],
  exports:[PickViewComponent]
})
export class PickViewModule { }
