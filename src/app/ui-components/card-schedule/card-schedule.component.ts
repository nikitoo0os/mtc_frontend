import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {ICard} from "../../data/interfaces/ICard";
import {NzIconDirective} from "ng-zorro-antd/icon";
@Component({
  selector: 'app-card-schedule',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgClass, NgIf, NzIconDirective],
  templateUrl: './card-schedule.component.html',
  styleUrls: ['./card-schedule.component.scss']
})
export class CardScheduleComponent {
  @Input() card!: ICard;
  @Input() durationInMinutes!: number;

}
