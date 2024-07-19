import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {
  NzCellFixedDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzThAddOnComponent,
  NzTheadComponent
} from "ng-zorro-antd/table";
import {ItemTable} from "../../data/interfaces/ItemTable";

@Component({
  selector: 'app-table-applications',
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
  templateUrl: './table-applications.component.html',
  styleUrl: './table-applications.component.scss'
})
export class TableApplicationsComponent {
  constructor() { }
  pageIndex = 1;
  listOfColumn = [
    {
      title: 'Статус',
      priority: 8
    },
    {
      title: 'Мероприятие',
      priority: 7
    },
    {
      title: 'ФИО',
      priority: 6
    },
    {
      title: 'Номер телефона',
      priority: 5
    },
    {
      title: 'Электронная почта',
      priority: 4
    },
    {
      title: 'Медицинское учреждение',
      priority: 3
    },
    {
      title: 'Специальность',
      priority: 2
    },
    {
      title: 'Должность',
      priority: 1
    }
  ];


  onPageIndexChange($event: number) {

  }
}
