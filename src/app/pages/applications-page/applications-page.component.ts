import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {DatePipe, NgForOf, NgIf, registerLocaleData} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzSegmentedComponent} from "ng-zorro-antd/segmented";
import {TimelineCardComponent} from "../../ui-components/timeline-card/timeline-card.component";
import {NzModalComponent, NzModalModule} from "ng-zorro-antd/modal";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzDatePickerComponent, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NzPopoverDirective} from 'ng-zorro-antd/popover';
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {NZ_I18N, NzI18nService, ru_RU} from "ng-zorro-antd/i18n";
import ru from '@angular/common/locales/ru';
import {TableApplicationsComponent} from "../../ui-components/table-applications/table-applications.component";
import {IEventType} from "../../data/interfaces/IEvenType";
import {EventTypeService} from "../../data/services/eventTypeService";
import {NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzColDirective} from "ng-zorro-antd/grid";
import {NzInputGroupComponent} from "ng-zorro-antd/input";
import {IMedicalWorker} from "../../data/interfaces/IMedicalWorker";

registerLocaleData(ru);

@Component({
  selector: 'app-applications-page',
  standalone: true,
  imports: [
    LayoutComponent,
    NgIf,
    NzButtonComponent,
    NzIconDirective,
    NzSegmentedComponent,
    TimelineCardComponent,
    NzModalComponent,
    NzSelectComponent,
    NzOptionComponent,
    NzRangePickerComponent,
    FormsModule,
    NzModalModule,
    NzPaginationComponent,
    NzPopoverDirective,
    NgForOf,
    NzDatePickerComponent,
    NzWaveDirective,
    TableApplicationsComponent,
    NzFormDirective,
    ReactiveFormsModule,
    NzFormItemComponent,
    NzColDirective,
    NzFormLabelComponent,
    NzInputGroupComponent
  ],
  templateUrl: './applications-page.component.html',
  styleUrl: './applications-page.component.scss',
  providers: [{ provide: NZ_I18N, useValue: ru_RU }, DatePipe]
})
export class ApplicationsPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private i18n: NzI18nService,
    private eventTypeService: EventTypeService
  ) {}

  isCollapsed = false;

  selectedIndex: number = 0;
  shouldDisplayCardComponent: boolean = true;

  optionsSegmented = [
    { label: 'Все заявки', value: 0, icon: '' },
    { label: 'В обработке', value: 1, icon: '' },
    { label: 'Одобрены', value: 2, icon: '' },
    { label: 'Отклонены', value: 3, icon: '' },
  ];
  eventTypeOptions: IEventType[] = [];
  medicalWorkerOptions: IMedicalWorker[] = [];

  ngOnInit(): void {
    this.i18n.setLocale(ru_RU);
    this.loadEventTypes();
  }

  onSegmentChange(event: number): void {
    this.selectedIndex = event;
    this.shouldDisplayCardComponent = false;
    setTimeout(() => {
      this.shouldDisplayCardComponent = true;
    }, 0);
  }
  visible: boolean = false;

  applyFilter(): void {
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
  loadEventTypes(): void {
    this.eventTypeService.getEventTypes().subscribe(data => {
      this.eventTypeOptions = data;
    });
  }
  date: any;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
  filterForm: FormGroup<{
    eventTypes: FormControl<IEventType | null>
  }> = this.fb.group({
    eventTypes: this.fb.control<IEventType | null>(null)
  });

  resetFilterForm(): void {
  }

  submitFilterForm(): void {
  }
}
