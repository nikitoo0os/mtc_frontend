import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {Card} from "../../data/interfaces/Card";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {RouterLink} from "@angular/router";
import {ItemTable} from "../../data/interfaces/ItemTable";
@Component({
  selector: 'app-card-schedule',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgClass, NgIf, NzIconDirective, RouterLink],
  templateUrl: './card-schedule.component.html',
  styleUrls: ['./card-schedule.component.scss']
})
export class CardScheduleComponent {
  @Input() card!: Card;
  @Input() durationInMinutes!: number;

}
