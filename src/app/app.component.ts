import { Component } from '@angular/core';
import { StepsGuideService } from 'src/steps-guide';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  link = 'https://github.com/sunrose3/pickAndKeyboard';
  title = 'pickView';
  currentStep: any;
  currentStepOutPut: any;
  steps = [
    {
      title: '新功能介绍：搜索框',
    content: `
      <p>1、过滤功能迁移至搜索框中啦</p>
      <p>2、在搜索框中，您可输入关键词或添加筛选条件查询所需要的工作项</p>
    `,
    },
    {
      title: 'Step 2',
      content: 'Guide Content',
    },
    {
      title: 'Step 3',
      content: 'Guide Content',
    },
  ];

  config = {
    hidePreStep: false,
    hideStepNav: false,
  };

  constructor(private stepService: StepsGuideService) { }

  ngOnInit() {
    this.stepService.currentIndex.subscribe((index) => { this.currentStep = index; });
    /* 由于整个demo是在一个页面内显示多个操作指引序列，因此需要在初始化时重置显示状态 */
    localStorage.setItem('devui_guide_step-position-demo', '0'); /* 设置第三个序列为不显示状态 */
    localStorage.setItem('devui_guide_step-custom-demo', '0'); /* 设置第二个序列为不显示状态 */
    this.stepService.setSteps(this.steps); /* 将步骤数据设置为第一个序列的内容 */
    this.stepService.setCurrentIndex(0); /* 设置当前序列显示步骤为第一个步骤 */
    this.stepService.showGuide(true); /* 显示当前序列 */
  }

  close() {
    this.stepService.showGuide(false);
  }

  // beforeChange = (currentIndex: number, targetIndex: number) => {
  //   /* 当前步骤为第三步，切换至第二步时，阻止步骤显示，显示第一步 */
  //   if (currentIndex === 2 && targetIndex === 1) {
  //     this.stepService.setCurrentIndex(0);
  //     return false;
  //   }
  // };

  operateChange(response:any) {
    this.currentStepOutPut = response;
    if (response.clickType === 'close' && response.currentIndex === 2) {
      localStorage.removeItem('devui_guide_step-position-demo');
      // this.stepService.setSteps(positionData);
      this.stepService.setCurrentIndex(0);
    }
  }

  
}
