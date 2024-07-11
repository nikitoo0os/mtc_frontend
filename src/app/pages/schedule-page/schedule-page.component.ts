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
    NzSegmentedComponent
  ],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {
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

}
