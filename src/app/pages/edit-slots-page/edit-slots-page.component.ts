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
    LayoutComponent
  ],
  templateUrl: './edit-slots-page.component.html',
  styleUrl: './edit-slots-page.component.scss'
})
export class EditSlotsPageComponent {
  isCollapsed = false;
  calendar="Выберите дату"
  startTime="Начало"
  endTime="Конец"
  title = 'edit-slots';
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
}
