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
    NgStyle
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
