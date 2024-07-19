import {Component, OnInit} from '@angular/core';
import {
  NzCellFixedDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzThAddOnComponent,
  NzTheadComponent
} from "ng-zorro-antd/table";
import {ItemTableSchedule} from "../../data/interfaces/ItemTableSchedule";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-table-schedule',
  standalone: true,
  imports: [
    NzTableComponent,
    NzTheadComponent,
    NzTbodyComponent,
    NzThAddOnComponent,
    NgForOf,
    NzCellFixedDirective,
    NgIf,
    NgStyle,
    RouterLink
  ],
  templateUrl: './table-schedule.component.html',
  styleUrl: './table-schedule.component.scss'
})
export class TableScheduleComponent implements OnInit {
  constructor() { }

  listOfColumn = [
    {
      title: 'Дата\\nВремя',
      compare: (a: ItemTableSchedule, b: ItemTableSchedule) => new Date(a.date.split('.').reverse().join('-')).getTime() - new Date(b.date.split('.').reverse().join('-')).getTime(),
      priority: false
    },
    {
      title: 'Тип мероприятия\\nВид этапа',
      compare: false,
      priority: 4
    },
    {
      title: 'Специалальность',
      compare: false,
      priority: 3
    },
    {
      title: 'Записано / Всего мест',
      compare: false,
      priority: 2
    },
    {
      title: 'Статус',
      compare: false,
      priority: 1
    }
  ];
  listOfData: ItemTableSchedule[] = [
    {
      date: '12.12.2020',
      time: '12:00',
      typeEvent: 'Тип',
      typeStage: 'Этап',
      speciality: 'Специальность',
      recorded: 4,
      totalPlaces: 40,
      status: 'Черновик',
    },
    {
      date: '12.12.2020',
      time: '12:00',
      typeEvent: 'Тип',
      typeStage: 'Этап',
      speciality: 'Специальность',
      recorded: 4,
      totalPlaces: 40,
      status: 'Черновик',
    },
    {
      date: '12.12.2020',
      time: '12:00',
      typeEvent: 'Тип',
      typeStage: 'Этап',
      speciality: 'Специальность',
      recorded: 4,
      totalPlaces: 40,
      status: 'Утверждено',
    }
  ];

  ngOnInit() {

  }

}
