import {Component, OnInit} from '@angular/core';
import {NzContentComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTabComponent, NzTabSetComponent} from "ng-zorro-antd/tabs";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NgForOf, NgIf} from "@angular/common";
import {TimelineCardComponent} from "../../ui-components/timeline-card/timeline-card.component";
import {ICard} from "../../data/interfaces/ICard";
import {NzSegmentedComponent} from "ng-zorro-antd/segmented";
import {NzPopoverDirective} from "ng-zorro-antd/popover";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzDatePickerComponent, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzI18nService, ru_RU} from "ng-zorro-antd/i18n";
import {TableScheduleComponent} from "../../ui-components/table-schedule/table-schedule.component";
import {ServiceFilterSchedulePage} from "../../data/services/service-filter-schedule-page";
import {catchError, debounceTime, filter, of, switchMap} from "rxjs";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzColDirective} from "ng-zorro-antd/grid";
import {EventTypeService} from "../../data/services/eventTypeService";
import {IEventType} from "../../data/interfaces/IEvenType";
import {MedicalSpecialityService} from "../../data/services/medicalSpecialityService";
import {IMedicalSpeciality} from "../../data/interfaces/IMedicalSpeciality";
import {IMedicalWorker} from "../../data/interfaces/IMedicalWorker";
import {IEventStage} from "../../data/interfaces/IEventStage";
import {IRoomType} from "../../data/interfaces/IRoomType";

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
        TableScheduleComponent,
        ReactiveFormsModule,
        NzFormItemComponent,
        NzFormControlComponent,
        NzInputGroupComponent,
        NzFormLabelComponent,
        NzColDirective,
        NzFormDirective,
    ],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss',
  providers: [ServiceFilterSchedulePage],
})
export class SchedulePageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private i18n: NzI18nService,
    private serviceFilterSchedulePage: ServiceFilterSchedulePage,
    private eventTypeService: EventTypeService,
    private medicalSpecialityService: MedicalSpecialityService,
  ) {}

  eventTypeOptions: IEventType[] = [];
  medicalSpecialityOptions: IMedicalSpeciality[] = [];
  eventStageOptions: IEventStage[] = [];
  medicalWorkerOptions: IMedicalWorker[] = [];
  roomTypeOptions: IRoomType[] = [];


  cards: ICard[] = [
    {
      startTime: "10:00",
      endTime: "10:30",
      eventType: "КК",
      stageType: "Компьютерное тестирование",
      speciality: "Кардиология",
      status: "Черновик",
      location: "АС 103",
      participants: "1 из 40"
    }
  ];

  isCollapsed = false;
  selectedIndex: number = 0;
  shouldDisplayCardComponent: boolean = true;

  optionsSegmented = [
    { label: 'Карточки', value: 0, icon: 'appstore' },
    { label: 'Таблица', value: 1, icon: 'bars' }
  ];

  ngOnInit(): void {
    this.i18n.setLocale(ru_RU);
    this.setupSearchControl();
    this.loadEventTypes();
    this.loadMedicalSpecialities();
  }
  loadEventTypes(): void {
    this.eventTypeService.getEventTypes().subscribe(data => {
        this.eventTypeOptions = data;
    });
  }
  loadMedicalSpecialities(): void {
    this.filterForm.get('medicalSpecialities')?.valueChanges.subscribe(value => {
      if (value) {
          this.onMedicalSpecialitySearch(value.name);
      }
    })
  }


  onSegmentChange(event: number): void {
    this.selectedIndex = event;
    this.shouldDisplayCardComponent = false;
    setTimeout(() => {
      this.shouldDisplayCardComponent = true;
    }, 0);
  }
  visible: boolean = false;
  change(value: boolean): void {
    console.log(value);
  }

  searchControl = new FormControl();
  specializationOptions: any[] = [];
  setupSearchControl(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000), // Задержка в 1 секунду
        filter(value => value.trim().length >= 2), // Фильтрация значений, которые короче 2 символов
        switchMap(value => this.serviceFilterSchedulePage.getMedicalSpecialities(value).pipe(
          catchError(error => {
            console.error('Error fetching data:', error);
            return of([]);
          })
        ))
    ).subscribe(data => {
      this.specializationOptions = data.map((speciality: any) => ({
          label: speciality['ns2:name']._text,
          value: speciality['ns2:id']._text
      }));
    });
  }

  onMedicalSpecialitySearch(value: string): void {
      this.medicalSpecialityService.getMedicalSpecialities(value).subscribe(data => {
          this.medicalSpecialityOptions = data;
      });
  }

  onEventStageSearch($event: string) {

  }

  onMedicalWorkerSearch($event: string) {

  }

  onRoomTypeSearch($event: string) {

  }

  filterForm: FormGroup<{
      eventTypes: FormControl<IEventType | null>,
      medicalSpecialities: FormControl<IMedicalSpeciality | null>
  }> = this.fb.group({
      eventTypes: this.fb.control<IEventType | null>(null),
      medicalSpecialities: this.fb.control<IMedicalSpeciality | null>(null)
  });
  checked: boolean = false;


  resetFilterForm(): void {
  }

  submitFilterForm(): void {
  }

  onChange($event: any) {

  }
}
