import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mobileSelect from 'mobile-select';
import MobileSelect from "mobile-select";
import { PickViewServices } from './pick-view.service';

@Component({
  selector: 'pick-view',
  templateUrl: './pick-view.component.html',
  styleUrls: ['./pick-view.component.scss']
})
export class PickViewComponent {

  // @ViewChild("nomalRef") nomalRef!: ElementRef<HTMLElement>;//普通数组格式-非联动
  // @ViewChild("noGangedRef") noGangedRef!: ElementRef<HTMLElement>;//json 格式-非联动
  // @ViewChild("gangedRef") gangedRef!: ElementRef<HTMLElement>;//json 格式-联动
  @ViewChild("areaRef") areaRef!: ElementRef<HTMLElement>;//省市区

  // nonmalSelect: any = null;
  // noGangedSelect: any = null;
  // gangedSelect: any = null;
  areaSelect: any = null;

  constructor(private service: PickViewServices) { }
  ngAfterViewInit() {
    // this.nonmalSelect = new MobileSelect({
    //   trigger: this.nomalRef.nativeElement,
    //   wheels: this.service.nonmalData,
    //   onChange: function (data, indexArr) {
    //     console.log(data, indexArr);
    //   }
    // });

    // this.noGangedSelect = new MobileSelect({
    //   trigger: this.noGangedRef.nativeElement,
    //   wheels: this.service.nogangedData,
    //   onChange: function (data, indexArr) {
    //     console.log(data, indexArr);
    //   }
    // });
    // this.gangedSelect = new MobileSelect({
    //   trigger: this.gangedRef.nativeElement,
    //   wheels: this.service.gangedData,
    //   onChange: function (data, indexArr) {
    //     console.log(data, indexArr);
    //   }
    // });
    this.areaSelect = new mobileSelect({
      trigger: this.areaRef.nativeElement,
      wheels: this.service.areaData,
      onChange: function (data, indexArr) {
        console.log(data, indexArr);
      }
    });

    //----------------------------------------------
    // 实例化之后，对实例用功能函数操作 
    /** 设置控件的标题 */
    this.areaSelect.setTitle('省市区选择');
    /** 更新第0个轮子的数据，数据变为英文的星期几 */
    // this.nonmalSelect.updateWheel(0, ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    /** 重新定位第1个轮子的位置，将第1个轮子的第0个数据改为当前选中。*/
    // this.nonmalSelect.locatePosition(1, 0);
  }

  ngOnDestroy() {
    /** 销毁组件 */
    // if (this.nonmalSelect) this.nonmalSelect.destroy();
    // if (this.noGangedSelect) this.noGangedSelect.destroy();
    // if (this.gangedSelect) this.gangedSelect.destroy();
    if (this.areaSelect) this.areaSelect.destroy();
  }

}
