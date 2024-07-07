import { Component } from '@angular/core';
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent
} from "ng-zorro-antd/layout";
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from "ng-zorro-antd/breadcrumb";
import {LayoutComponent} from "../../ui-components/layout/layout.component";
import {NzButtonComponent, NzButtonGroupComponent, NzButtonSize} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzTabComponent, NzTabSetComponent} from "ng-zorro-antd/tabs";
import {NgForOf, NgIf} from "@angular/common";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NzModalComponent, NzModalContentDirective} from "ng-zorro-antd/modal";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzInputNumberComponent} from "ng-zorro-antd/input-number";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzCheckboxGroupComponent} from "ng-zorro-antd/checkbox";



@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzSiderComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzFooterComponent,
    LayoutComponent,
    NzButtonGroupComponent,
    NzButtonComponent,
    NzIconDirective,
    NzRowDirective,
    NzColDirective,
    NzTabSetComponent,
    NzTabComponent,
    NgForOf,
    NgIf,
    NzPaginationComponent,
    NzModalComponent,
    NzSelectComponent,
    NzOptionComponent,
    NzInputNumberComponent,
    NzDatePickerComponent,
    NzCheckboxGroupComponent,
    NzModalContentDirective,

  ],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {
  tabs = [
    {
      name: 'Календарь',
      icon: 'calendar'
    },
    {
      name: 'Таблицы',
      icon: 'menu'
    },
    {
      name: 'Карточки',
      icon: 'appstore'
    }
  ];
  size: NzButtonSize = 'large';
  isCollapsed = false;

  onCollapse() {
    this.isCollapsed = !this.isCollapsed; // Просто меняем состояние isCollapsed
  }
}
