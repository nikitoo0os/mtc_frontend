import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CardScheduleComponent} from "../card-schedule/card-schedule.component";
import {ICard} from "../../data/interfaces/ICard";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-timeline-card',
  standalone: true,
  imports: [CardScheduleComponent, NgForOf, NgStyle, NgClass, NgIf],
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnChanges {
  @Input() cards: ICard[] = [];

  columns: ICard[][] = [[], [], [], [], [], [], [], []];
  timeSlots: string[] = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cards']) {
      this.organizeCardsIntoColumns();
    }
  }

  organizeCardsIntoColumns() {
    this.columns = [[], [], [], [], [], [], [], []];
    this.cards.forEach(card => {
      for (let colIndex = 0; colIndex < this.columns.length; colIndex++) {
        if (this.canPlaceCardInColumn(card, this.columns[colIndex])) {
          this.columns[colIndex].push(card);
          break;
        }
      }
    });
  }

  canPlaceCardInColumn(card: ICard, column: ICard[]): boolean {
    for (const existingCard of column) {
      if (this.doCardsOverlap(card, existingCard)) {
        return false;
      }
    }
    return true;
  }

  doCardsOverlap(card1: ICard, card2: ICard): boolean {
    const card1Start = new Date(`1970-01-01T${card1.startTime}:00`).getTime();
    const card1End = new Date(`1970-01-01T${card1.endTime}:00`).getTime();
    const card2Start = new Date(`1970-01-01T${card2.startTime}:00`).getTime();
    const card2End = new Date(`1970-01-01T${card2.endTime}:00`).getTime();
    return card1Start < card2End && card1End > card2Start;
  }

  getCardTopPosition(card: ICard): number {
    const startHour = parseInt(card.startTime.split(':')[0], 10);
    const startMinute = parseInt(card.startTime.split(':')[1], 10);
    const startMinutesFromTop = (startHour - 10) * 60 + startMinute;
    return startMinutesFromTop * (300 / 60) + 5; // Добавляем отступ сверху
  }

  getCardHeight(card: ICard): number {
    const startHour = parseInt(card.startTime.split(':')[0], 10);
    const startMinute = parseInt(card.startTime.split(':')[1], 10);
    const endHour = parseInt(card.endTime.split(':')[0], 10);
    const endMinute = parseInt(card.endTime.split(':')[1], 10);
    const durationMinutes = (endHour - startHour) * 60 + (endMinute - startMinute);
    return durationMinutes * (300 / 60) - 10; // Вычитаем общие отступы
  }
}
