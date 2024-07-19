import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf, NgStyle } from "@angular/common";
import { NzTableComponent, NzTbodyComponent, NzTheadComponent, NzTrDirective } from "ng-zorro-antd/table";
import { ApplicationListService } from "../../data/services/applicationListService";
import {NzSpinComponent} from "ng-zorro-antd/spin";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";

@Component({
  selector: 'app-table-applications',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NzTableComponent,
    NzTbodyComponent,
    NzTheadComponent,
    NgStyle,
    CommonModule,
    NzTrDirective,
    NzSpinComponent,
    NzPaginationComponent
  ],
  templateUrl: './table-applications.component.html',
  styleUrls: ['./table-applications.component.scss']
})
export class TableApplicationsComponent implements OnInit {
  listOfData: any[] = [];
  totalPages = 1;
  totalElements = 0;
  pageSize = 10;
  pageNumber = 0;
  loading = true;

  listOfColumn = [
    { title: 'Статус', priority: false },
    { title: 'Мероприятие', priority: false },
    { title: 'ФИО', priority: false },
    { title: 'Номер телефона', priority: 1 },
    { title: 'Электронная почта', priority: false },
    { title: 'Медицинская организация', priority: false },
    { title: 'Специальность', priority: false },
    { title: 'Должность', priority: false }
  ];

  constructor(private applicationListService: ApplicationListService) { }

  ngOnInit() {
    this.loadApplications(this.pageNumber);
  }

  loadApplications(page: number) {
    this.loading = true;
    this.applicationListService.getApplications(page).subscribe(data => {
      this.listOfData = data.applications;
      this.totalPages = data.totalPages;
      this.totalElements = data.totalElements;
      this.pageSize = data.pageSize;
      this.pageNumber = data.pageNumber;
      this.loading = false;
    });
  }


  onPageChange(page: number) {
    this.loadApplications(page - 1);
  }

  translateStatus(status: string): string {
    switch (status) {
      case 'IN_PROCESSING':
        return 'В обработке';
      case 'APPROVED':
        return 'Одобрено';
      case 'REJECTED':
        return 'Отклонено';
      default:
        return status;
    }
  }

  formatName(fullName: string): string {
    const parts = fullName.split(' ');
    if (parts.length >= 3) {
      return `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`;
    } else if (parts.length === 2) {
      return `${parts[0]} ${parts[1][0]}.`;
    }
    return fullName;
  }
}
