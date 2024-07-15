import {Component} from '@angular/core';
import {
  NzContentComponent,
  NzLayoutComponent,
  NzSiderComponent
} from "ng-zorro-antd/layout";
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTabComponent, NzTabSetComponent} from "ng-zorro-antd/tabs";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NgForOf, NgIf} from "@angular/common";
import {TimelineCardComponent} from "../../ui-components/timeline-card/timeline-card.component";
import {Card} from "../../data/interfaces/Card";
import {NzSegmentedComponent} from "ng-zorro-antd/segmented";
import {NzPopoverDirective} from "ng-zorro-antd/popover";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzDatePickerComponent, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";

import {getISOWeek} from "date-fns";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzSiderComponent,
    LayoutComponent,
    NzContentComponent,
    NzTabSetComponent,
    NzTabComponent,
    NzIconDirective,
    NzButtonComponent,
    NzPaginationComponent,
    NgForOf,
    NgIf,
    TimelineCardComponent,
    NzSegmentedComponent,
    NzPopoverDirective,
    NzWaveDirective,
    NzCheckboxComponent,
    NzDatePickerComponent,
    NzOptionComponent,
    NzRangePickerComponent,
    NzSelectComponent,
    FormsModule,
  ],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {
  selectedValue: { event: string; stage: string; specialization:string; type:string; number:string} = {
    event: '',
    stage: '',
    specialization:'',
    type:'',
    number:'',
  };
  cards: Card[] = [
    {
      startTime: "10:00",
      endTime: "10:30",
      eventType: "КК",
      stageType: "Компьютерное тестирование",
      speciality: "Кардиология",
      status: "Черновик",
      location: "АС 103",
      participants: "1 из 40"
    },
    {
      startTime: "10:00",
      endTime: "11:30",
      eventType: "КК",
      stageType: "Практическое занятие",
      speciality: "Неврология",
      status: "Утверждено",
      location: "АС 104",
      participants: "10 из 20"
    }
  ];

  isCollapsed = false;
  selectedIndex: number = 0;
  shouldDisplayCardComponent: boolean = true;

  optionsSegmented = [
    { label: 'Таблица', value: 0, icon: 'bars' },
    { label: 'Карточки', value: 1, icon: 'appstore' }
  ];

  onSegmentChange(event: number): void {
    this.selectedIndex = event;
    this.shouldDisplayCardComponent = false;
    setTimeout(() => {
      this.shouldDisplayCardComponent = true;
      }, 0);
  }
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
  typeOptions = [
    { label: 'лекционный класс', value: 'лекционный класс' },
    { label: 'компьютерный класс', value: 'компьютерный класс' },
    { label: 'аудитория станция', value: 'аудитория станция' },
  ];
  specializationOptions = [
    { label: 'специальность 1', value: 'специальность 1' },
    { label: 'специальность 2', value: 'специальность 2' },
    { label: 'специальность 3', value: 'специальность 3' },
  ];
  stageOptions = [
    { label: 'этап 1', value: 'этап 1' },
    { label: 'этап 2', value: 'этап 2' },
    { label: 'этап 3', value: 'этап 3' },
  ];
  eventOptions = [
    { label: 'ПА', value: 'ПА' },
    { label: 'ПК', value: 'ПК' },
    { label: 'ДПО', value: 'ДПО' },
  ];
  constructor() {}
  isVisible = true;
  showModal(): void {
    this.isVisible = true;
  }

  date = null;
  checked=true;
  check=false;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
}
