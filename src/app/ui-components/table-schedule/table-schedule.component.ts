import {Component, OnInit} from '@angular/core';
import {
  NzCellFixedDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzThAddOnComponent,
  NzTheadComponent
} from "ng-zorro-antd/table";
import {ItemTable} from "../../data/interfaces/ItemTable";
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
      compare: false,
      priority: false
    },
    {
      title: 'Тип мероприятия\\nВид этапа',
      priority: 4
    },
    {
      title: 'Специалальность',
      priority: 3
    },
    {
      title: 'Записано / Всего мест',
      priority: 2
    },
    {
      title: 'Статус',
      priority: 1
    }
  ];
  listOfData: ItemTable[] = [
    {
      id:'1',
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
      id:'2',
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
      id:'3',
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
