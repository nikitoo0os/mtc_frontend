import { Component } from '@angular/core';
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NgIf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzSegmentedComponent} from "ng-zorro-antd/segmented";
import {TimelineCardComponent} from "../../ui-components/timeline-card/timeline-card.component";
import {NzModalComponent} from "ng-zorro-antd/modal";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {FormsModule} from "@angular/forms";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";

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
    NzPaginationComponent
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

}
