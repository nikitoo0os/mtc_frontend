import {Component, OnInit} from '@angular/core';
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {RouterOutlet} from "@angular/router";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {NzCalendarComponent} from "ng-zorro-antd/calendar";
import {DatePipe, NgForOf, NgStyle} from "@angular/common";
import {NzDatePickerComponent, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import {NZ_I18N, NzI18nService, ru_RU} from 'ng-zorro-antd/i18n';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {CardScheduleComponent} from "../../ui-components/card-schedule/card-schedule.component";
import {TimelineCardComponent} from "../../ui-components/timeline-card/timeline-card.component";


registerLocaleData(ru);


@Component({
  selector: 'app-create-event-page',
  standalone: true,
    imports: [
        LayoutComponent,
        RouterOutlet,
        NzSelectComponent,
        NzOptionComponent,
        FormsModule,
        NzCalendarComponent,
        NgStyle,
        NzRangePickerComponent,
        NzDatePickerComponent,
        NzButtonComponent,
        CardScheduleComponent,
        NgForOf,
        TimelineCardComponent
    ],
  templateUrl: './create-event-page.component.html',
  styleUrl: './create-event-page.component.scss',
  providers: [{ provide: NZ_I18N, useValue: ru_RU }, DatePipe]
})
export class CreateEventPageComponent implements OnInit{
  constructor(
    private i18n: NzI18nService,
    private datePipe: DatePipe
  ) {}

  typeEventSelectedValue = '';
  specialitySelectedValue = '';
  dateRange: string[] = [];
  dateFormat = 'dd.MM.yyyy';

  ngOnInit(): void {
    this.i18n.setLocale(ru_RU);
  }

  transformDate(date: Date | string): string | null {
    return this.datePipe.transform(date, 'dd.MM.yyyy');
  }

  onDateRangeChange(result: Date[]): void {
  if (result && result.length === 2) {
    const formattedStartDate = this.transformDate(result[0]);
    const formattedEndDate = this.transformDate(result[1]);

    if (!formattedStartDate || !formattedEndDate) {
      console.error('Ошибка при преобразовании даты');
    } else {
      this.dateRange = [formattedStartDate, formattedEndDate];
    }
  }
}

  reset() {
    this.typeEventSelectedValue = '';
    this.specialitySelectedValue = '';
    this.dateRange = [];
  }

  createEvent() {
    console.log('typeEventSelectedValue', this.typeEventSelectedValue);
    console.log('specialitySelectedValue', this.specialitySelectedValue);
    console.log('dateRange', this.dateRange);
  }
}
