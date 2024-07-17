import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScheduleComponent } from './table-schedule.component';

describe('TableScheduleComponent', () => {
  let component: TableScheduleComponent;
  let fixture: ComponentFixture<TableScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
