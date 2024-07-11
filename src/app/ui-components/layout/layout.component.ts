import {Component, EventEmitter, Output} from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from "ng-zorro-antd/breadcrumb";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {CommonModule} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzBreadCrumbItemComponent,
    NzContentComponent,
    NzSiderComponent,
    NzMenuItemComponent,
    NzIconDirective,
    NzSubMenuComponent,
    NzMenuDirective,
    NzBreadCrumbComponent,
    NzButtonComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  isCollapsed = false;
  @Output() collapse = new EventEmitter<boolean>();
  toggleSider() {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.classList.toggle('collapsed');
      this.isCollapsed = !this.isCollapsed;
      this.collapse.emit(this.isCollapsed);
    }
  }

}
