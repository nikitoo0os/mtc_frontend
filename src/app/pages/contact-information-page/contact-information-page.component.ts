import { Component } from '@angular/core';
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NgForOf, NgIf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDatePickerComponent, NzRangePickerComponent} from "ng-zorro-antd/date-picker";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NzPopoverDirective} from "ng-zorro-antd/popover";
import {NzSegmentedComponent} from "ng-zorro-antd/segmented";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact-information-page',
  standalone: true,
  imports: [
    LayoutComponent,
    NgForOf,
    NgIf,
    NzButtonComponent,
    NzDatePickerComponent,
    NzIconDirective,
    NzOptionComponent,
    NzPaginationComponent,
    NzPopoverDirective,
    NzRangePickerComponent,
    NzSegmentedComponent,
    NzSelectComponent,
    NzWaveDirective,
    FormsModule
  ],
  templateUrl: './contact-information-page.component.html',
  styleUrl: './contact-information-page.component.scss'
})
export class ContactInformationPageComponent {
  isCollapsed = false;

  selectedIndex: number = 0;
  shouldDisplayCardComponent: boolean = true;

  optionsSegmented = [
    { label: 'Первичная аккредитация (ПА) ', value: 0, icon: '' },
    { label: 'Повышение квалификации (ПК) ', value: 1, icon: '' },
    { label: 'Дополнительное образование (ДПО) ', value: 2, icon: '' },
  ];

  onSegmentChange(event: number): void {
    this.selectedIndex = event;
    this.shouldDisplayCardComponent = false;
    setTimeout(() => {
      this.shouldDisplayCardComponent = true;
    }, 0);
  }
  selectedValue: { event: string; stage: string; specialization:string; type:string; number:string} = {
    event: '',
    stage: '',
    specialization:'',
    type:'',
    number:'',
  };
  visible: boolean = false;

}
