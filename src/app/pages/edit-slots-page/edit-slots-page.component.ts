import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzModalComponent} from "ng-zorro-antd/modal";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzTimePickerComponent} from "ng-zorro-antd/time-picker";
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NgClass, NgForOf} from "@angular/common";
@Component({
  selector: 'app-edit-slots-page',
  standalone: true,
  imports: [
    FormsModule,
    NzButtonComponent,
    NzColDirective,
    NzDatePickerComponent,
    NzInputDirective,
    NzModalComponent,
    NzOptionComponent,
    NzRowDirective,
    NzSelectComponent,
    NzTimePickerComponent,
    LayoutComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './edit-slots-page.component.html',
  styleUrl: './edit-slots-page.component.scss'
})
export class EditSlotsPageComponent {
  isCollapsed = false;
  calendar="Дата"
  startTime="Начало"
  endTime="Конец"
  date: any;
  selectedValue: { specialist: string[]; type: string; location:string; specialistResources: string[]; number:string;typeResources:string} = {
    specialistResources: [],
    specialist: [],
    type: '',
    location:'',
    number:'',
    typeResources:''
  };
  value: any;
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  specialistResourcesOption = [
    { label: 'Иван Иванов', value: 'Иван Иванов' },
    { label: 'Петр Петров', value: 'Петр Петров' },
    { label: 'Петр Иванов', value: 'Петр Иванов' },
  ];

  specialistOption = [
    { label: 'Иван Иванов', value: 'Иван Иванов' },
    { label: 'Петр Петров', value: 'Петр Петров' },
    { label: 'Петр Иванов', value: 'Петр Иванов' },
  ];

  typeResourcesOption = [
    { label: 'Инженер', value: 'Инженер' },
    { label: 'Сотрудник УМЦ', value: 'Сотрудник УМЦ' },
    { label: 'Экзаменатор', value: 'Экзаменатор' },
  ];

  typeOption = [
    { label: 'Инженер', value: 'Инженер' },
    { label: 'Сотрудник УМЦ', value: 'Сотрудник УМЦ' },
    { label: 'Экзаменатор', value: 'Экзаменатор' },
  ];

  numberOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];
  employees: any[] = [
    { specialistResources: '', typeResources: '' }
  ];
  addEmployee() {
    this.employees.push({ specialistResources: '', typeResources: '' });
  }
  locations: any[] = [
    { number: '', value: '', specialist: [] } // Инициализируем массив с первым блоком
  ];


  addLocation() {
    this.locations.push({ number: '', value: '', specialist: [] });
  }

  addSpecialist(locationIndex: number) {
    // Получаем локацию по индексу
    const currentLocation = this.locations[locationIndex];
    // Добавляем нового специалиста в массив specialist этой локации
    currentLocation.specialist.push({ specialistResources: '', typeResources: '' });
  }
}
