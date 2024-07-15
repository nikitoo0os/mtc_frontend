import { Component } from '@angular/core';
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NgForOf, NgIf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzSegmentedComponent} from "ng-zorro-antd/segmented";
import {TimelineCardComponent} from "../../ui-components/timeline-card/timeline-card.component";
import {NzModalComponent, NzModalModule} from "ng-zorro-antd/modal";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzDatePickerComponent, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {FormsModule} from "@angular/forms";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";

import {NzPopoverDirective} from 'ng-zorro-antd/popover';

import {NzWaveDirective} from "ng-zorro-antd/core/wave";
@Component({
  selector: 'app-applications-page',
  standalone: true,
  imports: [
    LayoutComponent,
    NgIf,
    NzButtonComponent,
    NzIconDirective,
    NzSegmentedComponent,
    TimelineCardComponent,
    NzModalComponent,
    NzSelectComponent,
    NzOptionComponent,
    NzRangePickerComponent,
    FormsModule,
    NzModalModule,
    NzPaginationComponent,
    NzPopoverDirective,
    NgForOf,
    NzDatePickerComponent,

    NzWaveDirective
  ],
  templateUrl: './applications-page.component.html',
  styleUrl: './applications-page.component.scss'
})
export class ApplicationsPageComponent {
  isCollapsed = false;

  selectedIndex: number = 0;
  shouldDisplayCardComponent: boolean = true;

  optionsSegmented = [
    { label: 'Все заявки', value: 0, icon: '' },
    { label: 'В обработке', value: 1, icon: '' },
    { label: 'Одобрены', value: 2, icon: '' },
    { label: 'Отклонены', value: 3, icon: '' },
  ];

  onSegmentChange(event: number): void {
    this.selectedIndex = event;
    this.shouldDisplayCardComponent = false;
    setTimeout(() => {
      this.shouldDisplayCardComponent = true;
    }, 0);
  }
  selectedValue: { event: string; stage: string; specialization:string; type:string; number:string} = {
    event: '',
    stage: '',
    specialization:'',
    type:'',
    number:'',
  };
  visible: boolean = false;
  clickMe(): void {
    this.visible = false;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.visible = false;
  }
  change(value: boolean): void {
    console.log(value);
  }
  numberOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];
  eventOptions = [
    { label: 'ПА', value: 'ПА' },
    { label: 'ПК', value: 'ПК' },
    { label: 'ДПО', value: 'ДПО' },
  ];
  date: any;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

}
