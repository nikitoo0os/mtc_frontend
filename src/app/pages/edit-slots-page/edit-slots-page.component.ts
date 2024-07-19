import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzModalComponent} from "ng-zorro-antd/modal";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzTimePickerComponent} from "ng-zorro-antd/time-picker";
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {DatePipe, NgClass, NgForOf, registerLocaleData} from "@angular/common";
import {NZ_I18N, NzI18nService, ru_RU} from "ng-zorro-antd/i18n";
import ru from '@angular/common/locales/ru';
import {ActivatedRoute} from "@angular/router";
import {ItemTable} from "../../data/interfaces/ItemTable";

registerLocaleData(ru);

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
  styleUrl: './edit-slots-page.component.scss',
  providers: [{ provide: NZ_I18N, useValue: ru_RU }, DatePipe]
})
export class EditSlotsPageComponent implements OnInit {
  constructor(
    private i18n: NzI18nService,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {}

  isCollapsed = false;
  calendar="Дата"
  startTime="Начало"
  endTime="Конец"
  date: any;
  disabledHours(): number[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23];
  }
  selectedValue: { specialist: string[]; type: string; location:string; specialistResources: string[]; number:string;typeResources:string} = {
    specialistResources: [],
    specialist: [],
    type: '',
    location:'',
    number:'',
    typeResources:''
  };


  ngOnInit() {
    this.i18n.setLocale(ru_RU);
  }
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
