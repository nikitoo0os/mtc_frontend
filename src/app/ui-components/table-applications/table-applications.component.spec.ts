import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApplicationsComponent } from './table-applications.component';

describe('TableApplicationsComponent', () => {
  let component: TableApplicationsComponent;
  let fixture: ComponentFixture<TableApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableApplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
